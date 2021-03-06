(function (define) {
    'use strict';
    define([
            'jquery',
            'utility',
            'underscore',
            'underscore.string',
            'backbone',
            'js/student_account/models/LoginModel',
            'js/student_account/models/PasswordResetModel',
            'js/student_account/models/RegisterModel',
            'js/student_account/views/LoginView',
            'js/student_account/views/PasswordResetView',
            'js/student_account/views/RegisterView',
            'js/student_account/views/InstitutionLoginView',
            'js/student_account/views/HintedLoginView',
            'js/vendor/history'
        ],
        function ($, utility, _, _s, Backbone, LoginModel, PasswordResetModel, RegisterModel, LoginView,
                  PasswordResetView, RegisterView, InstitutionLoginView, HintedLoginView) {
            return Backbone.View.extend({
                tpl: '#access-tpl',
                events: {
                    'click .form-toggle': 'toggleForm',
                    'click .find-email': 'findEmailSend',
                    'click .find-email-by-nice': 'doNiceCheck',
                    'click .find-email-by-subemail': 'showSubEmailForm',
                    'click .find-email-by-kakaocert': 'showKaKaoCertForm',
                    'click #all_agree': 'all_agree',
                    'click #kakao_form_submit': 'kakao_form_submit',
                    'click #kakao_confirm_submit': 'kakao_confirm_submit',
                    'click .kakao_close': 'kakao_close',
                    'click .agree_text': 'agree_text',
                    'click .kakao_pop_close': 'kakao_pop_close',
                },
                subview: {
                    login: {},
                    register: {},
                    passwordHelp: {},
                    institutionLogin: {},
                    hintedLogin: {}
                },
                nextUrl: '/dashboard',
                // The form currently loaded
                activeForm: '',

                initialize: function (options) {
                    /* Mix non-conflicting functions from underscore.string
                     * (all but include, contains, and reverse) into the
                     * Underscore namespace
                     */

                    _.mixin(_s.exports());

                    this.tpl = $(this.tpl).html();

                    this.activeForm = options.initial_mode || 'login';

                    this.thirdPartyAuth = options.third_party_auth || {
                        currentProvider: null,
                        providers: []
                    };

                    this.thirdPartyAuthHint = options.third_party_auth_hint || null;

                    // Account activation messages
                    this.accountActivationMessages = options.account_activation_messages || [];

                    if (options.login_redirect_url) {
                        // Ensure that the next URL is internal for security reasons
                        if (!window.isExternal(options.login_redirect_url)) {
                            this.nextUrl = options.login_redirect_url;
                        }
                    }

                    this.formDescriptions = {
                        login: options.login_form_desc,
                        register: options.registration_form_desc,
                        reset: options.password_reset_form_desc,
                        institution_login: null,
                        hinted_login: null
                    };

                    this.platformName = options.platform_name;
                    this.supportURL = options.support_link;
                    this.passwordResetSupportUrl = options.password_reset_support_link;
                    this.createAccountOption = options.account_creation_allowed;
                    this.hideAuthWarnings = options.hide_auth_warnings || false;
                    this.pipelineUserDetails = options.third_party_auth.pipeline_user_details;
                    this.enterpriseName = options.enterprise_name || '';

                    // The login view listens for 'sync' events from the reset model
                    this.resetModel = new PasswordResetModel({}, {
                        method: 'GET',
                        url: '#'
                    });

                    this.render();

                    // Once the third party error message has been shown once,
                    // there is no need to show it again, if the user changes mode:
                    this.thirdPartyAuth.errorMessage = null;

                    // Once the account activation messages have been shown once,
                    // there is no need to show it again, if the user changes mode:
                    this.accountActivationMessages = [];

                    // $("#login-email").val(options.email);
                    if (options.email) {

                        //console.log(options);

                        let emails = '';
                        $.each(options.email, function (index, item) {
                            emails += item + '\n';
                        });


                        if (emails) {
                            swal({
                                title: gettext("This is the list of emails being verified."),
                                text: emails,
                                button: gettext("OK"),
                                type: "info"
                            });
                        }

                    }

                    if (options.message) {
                        swal({
                            text: gettext(options.message),
                            button: gettext("OK"),
                            type: "info"
                        });
                    }
                },

                render: function () {
                    $(this.el).html(_.template(this.tpl)({
                        mode: this.activeForm
                    }));

                    this.postRender();

                    return this;
                },

                postRender: function () {
                    // get & check current url hash part & load form accordingly
                    if (Backbone.history.getHash() === 'forgot-password-modal') {
                        this.resetPassword();
                    }
                    this.loadForm(this.activeForm);
                },

                loadForm: function (type) {
                    var loadFunc = _.bind(this.load[type], this);
                    loadFunc(this.formDescriptions[type]);
                },

                load: {
                    login: function (data) {
                        var model = new LoginModel({}, {
                            method: data.method,
                            url: data.submit_url
                        });

                        this.subview.login = new LoginView({
                            fields: data.fields,
                            model: model,
                            resetModel: this.resetModel,
                            thirdPartyAuth: this.thirdPartyAuth,
                            accountActivationMessages: this.accountActivationMessages,
                            platformName: this.platformName,
                            supportURL: this.supportURL,
                            passwordResetSupportUrl: this.passwordResetSupportUrl,
                            createAccountOption: this.createAccountOption,
                            hideAuthWarnings: this.hideAuthWarnings,
                            pipelineUserDetails: this.pipelineUserDetails,
                            enterpriseName: this.enterpriseName
                        });

                        // Listen for 'email-help' event to toggle sub-views
                        this.listenTo(this.subview.login, 'find-email', this.findEmail);

                        // Listen for 'password-help' event to toggle sub-views
                        this.listenTo(this.subview.login, 'password-help', this.resetPassword);

                        // Listen for 'auth-complete' event so we can enroll/redirect the user appropriately.
                        this.listenTo(this.subview.login, 'auth-complete', this.authComplete);
                    },

                    reset: function (data) {
                        this.resetModel.ajaxType = data.method;
                        this.resetModel.urlRoot = data.submit_url;

                        this.subview.passwordHelp = new PasswordResetView({
                            fields: data.fields,
                            model: this.resetModel
                        });

                        // Listen for 'password-email-sent' event to toggle sub-views
                        this.listenTo(this.subview.passwordHelp, 'password-email-sent', this.passwordEmailSent);

                        // Focus on the form
                        $('.password-reset-form').focus();
                    },

                    register: function (data) {
                        var model = new RegisterModel({}, {
                            method: data.method,
                            url: data.submit_url
                        });

                        this.subview.register = new RegisterView({
                            fields: data.fields,
                            model: model,
                            thirdPartyAuth: this.thirdPartyAuth,
                            platformName: this.platformName,
                            hideAuthWarnings: this.hideAuthWarnings
                        });

                        // Listen for 'auth-complete' event so we can enroll/redirect the user appropriately.
                        this.listenTo(this.subview.register, 'auth-complete', this.authComplete);
                    },

                    institution_login: function (unused) {
                        this.subview.institutionLogin = new InstitutionLoginView({
                            thirdPartyAuth: this.thirdPartyAuth,
                            platformName: this.platformName,
                            mode: this.activeForm
                        });

                        this.subview.institutionLogin.render();
                    },

                    hinted_login: function (unused) {
                        this.subview.hintedLogin = new HintedLoginView({
                            thirdPartyAuth: this.thirdPartyAuth,
                            hintedProvider: this.thirdPartyAuthHint,
                            platformName: this.platformName
                        });

                        this.subview.hintedLogin.render();
                    }
                },

                passwordEmailSent: function () {
                    var $loginAnchorElement = $('#login-anchor');
                    this.element.hide($(this.el).find('#password-reset-anchor'));
                    this.element.show($loginAnchorElement);
                    this.element.scrollTop($loginAnchorElement);
                },

                findEmail: function () {
                    window.analytics.track('edx.bi.email_reset_form.viewed', {
                        category: 'user-engagement'
                    });

                    this.element.hide($(this.el).find('#login-anchor'));

                    $(this.el).html(_.template($('#email_find-tpl').html())({}));
                    // this.postRender();
                },

                findEmailSend: function () {
                    let sub_email = $("#sub-email").val();

                    if (!sub_email) {
                        swal({
                                text: gettext("Email address was not entered."),
                                button: gettext("OK"),
                                type: "info"
                            });
                        return;
                    }

                    $.post("/find_email/", {
                        'sub-email': sub_email
                    }, function (data) {

                        console.log(data);

                        if (data.result) {
                            // data.result 의 값으로 보조이메일이 존재하는경우 해시코드를 해당 메일로 전송
                            swal({
                                text: gettext("Sent the mail to the entered address. Please check the mail."),
                                button: gettext("OK"),
                                type: "success"
                            });

                            document.location = "/login";

                        } else {
                            // 입력된 보조 이메일이 없는경우
                            swal({
                                text: gettext("Not exists secondary email."),
                                button: gettext("OK"),
                                type: "warning"
                            });

                        }

                        // 입력된 보조이메일을 조회하고 해시코드를 발송하여 이메일 찾기를 할 수 있도록 함.
                        //
                    })

                },

                resetPassword: function () {
                    window.analytics.track('edx.bi.password_reset_form.viewed', {
                        category: 'user-engagement'
                    });

                    this.element.hide($(this.el).find('#login-anchor'));
                    this.loadForm('reset');
                    this.element.scrollTop($('#password-reset-anchor'));
                },

                toggleForm: function (e) {

                    var type = $(e.currentTarget).data('type'),
                        $form = $('#' + type + '-form'),
                        scrollX = window.scrollX,
                        scrollY = window.scrollY,
                        queryParams = url('?'),
                        queryStr = queryParams.length > 0 ? '?' + queryParams : '';

                    e.preventDefault();

                    window.analytics.track('edx.bi.' + type + '_form.toggled', {
                        category: 'user-engagement'
                    });

                    // Load the form. Institution login is always refreshed since it changes based on the previous form.
                    if (!this.form.isLoaded($form) || type == 'institution_login') {
                        this.loadForm(type);
                    }
                    this.activeForm = type;

                    this.element.hide($(this.el).find('.submission-success'));
                    this.element.hide($(this.el).find('.form-wrapper'));
                    this.element.show($form);

                    // Update url without reloading page
                    if (type != 'institution_login') {
                        History.pushState(null, document.title, '/' + type + queryStr);
                    }
                    analytics.page('login_and_registration', type);

                    // Focus on the form
                    $('#' + type).focus();

                    // Maintain original scroll position
                    window.scrollTo(scrollX, scrollY);
                },

                /**
                 * Once authentication has completed successfully:
                 *
                 * If we're in a third party auth pipeline, we must complete the pipeline.
                 * Otherwise, redirect to the specified next step.
                 *
                 */
                authComplete: function () {
                    if (this.thirdPartyAuth && this.thirdPartyAuth.finishAuthUrl) {
                        this.redirect(this.thirdPartyAuth.finishAuthUrl);
                        // Note: the third party auth URL likely contains another redirect URL embedded inside
                    } else {
                        this.redirect(this.nextUrl);
                    }
                },
                doNiceCheck: function () {
                    $.post("/nice_enc_data", {
                        return_url: 'find_email_by_ci'
                    }, function (data) {
                        $("#form2 input[name='EncodeData']").val(data.enc_data);

                        window.open('', 'popupNICE', 'width=450, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no');
                        document.form2.target = "popupNICE";
                        document.form2.submit();
                    });


                },

                showSubEmailForm: function () {
                    $(".choose-find-email-type").hide();
                    $("#email-find").show();
                },

                showKaKaoCertForm: function(){

                    $("#kakao_form").show();

                },

                kakao_form_submit: function () {

                    var year = $.trim($(".kakao_year_text").val()).replace(/\s+/g, '')
                    var gender = $.trim($(".kakao_gender_text").val()).replace(/\s+/g, '')
                    var phone = $.trim($(".kakao_phone_text").val()).replace(/\s+/g, '')
                    var name = $.trim($(".kakao_name_text").val()).replace(/\s+/g, '')

                    if(name == ""){
                        alert("이름을 입력해주세요.");
                        $(".kakao_name_text").focus();
                        return;
                    } else if(year == ""){
                        alert("생년월일을 입력해주세요.");
                        $(".kakao_year_text").focus();
                        return;
                    } else if(gender == ""){
                        alert("성별을 입력해주세요.");
                        $(".kakao_gender_text").focus();
                        return;
                    } else if(phone == ""){
                        alert("핸드폰번호을 입력해주세요.");
                        $(".kakao_phone_text").focus();
                        return;
                    }

                    // 숫자인지 체크
                    if(isNaN(year) == true){
                        alert("올바른 생년월일을 입력해주세요.");
                        return;
                    }else if(isNaN(gender) == true){
                        alert("올바른 성별을 입력해주세요.");
                        return;
                    }else if(isNaN(phone) == true){
                        alert("올바른 핸드폰 번호를 입력해주세요.");
                        return;
                    }

                    if(year.length != 8){
                        alert("올바른 생년월일을 입력해주세요.");
                        return;
                    }else if(phone.length != 11){
                        alert("올바른 핸드폰 번호를 입력해주세요.");
                        return;
                    }

                    var message = [];

                    $("input:checkbox[name='kakao_agree']:not(:checked)").each(function () {
                        message.push($(this).parent().find("label").text());
                    })

                    if(message[0]){
                        alert(message[0] + "에 동의해 주십시오.");
                        return;
                    }

                    $("#kakao_form").hide();
                    $("#kakao_confirm").show();

                    $.ajax({
                        'type': "GET",
                        'url': "/api/kakao/form",
                        'data': {
                            'name': name,
                            'year': year,
                            'gender': gender,
                            'phone': phone
                        },
                    }).done(function (data) {
                        console.log(data);

                        if (data.success) {
                            $("#kakao_receiptId").val(data.receiptId);
                            $("#kakao_name").val(name);
                            $("#kakao_year").val(year);
                            $("#kakao_gender").val(gender);
                            $("#kakao_phone").val(phone);
                        } else {
                            swal("인증실패", "사용자 정보가 올바르지 않습니다.\n 확인 후 재시도 해주세요. \n 카카오톡 지갑에 가입하지 않으셨다면 \n 가입 후 이용 바랍니다.", "info");
                            $("#kakao_confirm").hide();
                        }
                    });
                },

                kakao_confirm_submit: function () {

                    $.ajax({
                        'type': "GET",
                        'url': "/api/kakao/confirm",
                        'data': {
                            'receiptId': $("#kakao_receiptId").val()
                        }
                    }).done(function (data) {
                        if (data) {
                            if (data.state == 1) {

                                var name = $("#kakao_name").val();
                                var gender = $("#kakao_gender").val();
                                var year = $("#kakao_year").val();

                                $.ajax({
                                    'type': "GET",
                                    'url': "/api/kakao/cert",
                                    'data': {
                                        'receiptId': $("#kakao_receiptId").val(),
                                        'name': name,
                                        'gender': gender,
                                        'year': year,
                                        'phone': $("#kakao_phone").val()
                                    }
                                }).done(function (data) {

                                    if (data.success) {

                                        $.ajax({
                                            'type': "GET",
                                            'url': "/find_email_by_kakao"
                                        }).done(function (data) {
                                            location.href = '/login?code='+ data.code + '';
                                        })

                                    }else{
                                        swal("인증오류", "앱에서 인증을 완료해주세요 \n 앱에서 알림이 오지 않았다면 \n 인증창 종료 후 다시 진행해 주시기 바랍니다.", "info");
                                    }

                                })

                            } else if (data.state == 2) {
                                swal("시간만료", "요청시간내에 인증처리가 되지 않았습니다. \n 다시 진행해 주시기 바랍니다.", "info");
                                return;
                            } else {
                                swal("인증오류", "앱에서 인증을 완료해주세요 \n 앱에서 알림이 오지 않았다면 \n 인증창 종료 후 다시 진행해 주시기 바랍니다.", "info");
                                return;
                            }
                        }
                    });
                },

                kakao_close: function () {

                    if ($("#kakao_form").css('display') == 'block') {
                        $("#kakao_form").hide();
                    } else {
                        $("#kakao_confirm").hide();
                    }

                    $("#kakao_name").val('');
                    $("#kakao_year").val('');
                    $("#kakao_gender").val('');
                    $("#kakao_phone").val('');

                    $(".kakao_year_text").val('');
                    $(".kakao_gender_text").val('');
                    $(".kakao_phone_text").val('');
                    $(".kakao_name_text").val('');

                },

                agree_text:function(event){

                    console.log(event.currentTarget.id)

                    if(event.currentTarget.id == 'privacy_text_button'){
                        $(".black_bg").show();
                        $("#privacy_text_area").show();
                    }else if(event.currentTarget.id == 'third_party_text_button'){
                        $(".black_bg").show();
                        $("#third_party_area").show();
                    }
                },

                all_agree: function () {

                    if ($("input:checkbox[name='kakao_agree']:checked").length > 0) {
                        $("input:checkbox[name='kakao_agree']").prop("checked", false);
                    } else {
                        $("input:checkbox[name='kakao_agree']").prop("checked", true);
                    }

                },

                kakao_pop_close: function (event) {

                    var current_id = event.target.parentElement.parentElement.parentElement.id;

                    $("#"+current_id).hide();
                    $(".black_bg").hide();
                },

                /**
                 * Redirect to a URL.  Mainly useful for mocking out in tests.
                 * @param  {string} url The URL to redirect to.
                 */
                redirect: function (url) {
                    window.location.replace(url);
                },

                form: {
                    isLoaded: function ($form) {
                        return $form.html().length > 0;
                    }
                },

                /* Helper method to toggle display
                 * including accessibility considerations
                 */
                element: {
                    hide: function ($el) {
                        $el.addClass('hidden');
                    },

                    scrollTop: function ($el) {
                        // Scroll to top of selected element
                        $('html,body').animate({
                            scrollTop: $el.offset().top
                        }, 'slow');
                    },

                    show: function ($el) {
                        $el.removeClass('hidden');
                    }
                }
            });
        });
}).call(this, define || RequireJS.define);
