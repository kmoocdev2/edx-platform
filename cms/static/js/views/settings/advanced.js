define(["js/views/validation",
        "jquery",
        "underscore",
        "gettext",
        "codemirror",
        "js/views/modals/validation_error_modal",
        'edx-ui-toolkit/js/utils/html-utils'],
    function(ValidatingView, $, _, gettext, CodeMirror, ValidationErrorModal, HtmlUtils) {

var AdvancedView = ValidatingView.extend({
    error_saving : "error_saving",
    successful_changes: "successful_changes",
    render_deprecated: false,

    // Model class is CMS.Models.Settings.Advanced
    events : {
        'focus :input' : "focusInput",
        'blur :input' : "blurInput",
        'change :input' : "selectInput"
        // TODO enable/disable save based on validation (currently enabled whenever there are changes)
    },
    initialize : function() {
        this.template = HtmlUtils.template(
            $("#advanced_entry-tpl").text()
        );
        this.listenTo(this.model, 'invalid', this.handleValidationError);
        this.render();
    },
    render: function() {
        // catch potential outside call before template loaded
        if (!this.template) return this;

        var listEle$ = this.$el.find('.course-advanced-policy-list');
        listEle$.empty();

        // b/c we've deleted all old fields, clear the map and repopulate
        this.fieldToSelectorMap = {};
        this.selectorToField = {};

        // iterate through model and produce key : value editor        // some disabled column for each property in model.get
        var self = this;

        var v_source = [];
        var v_result = [];
    	var v_compare = ["classfy", "middle_classfy", "classfysub", "middle_classfysub"];

    	v_result = _.sortBy(_.keys(this.model.attributes), function(key) { return self.model.get(key).display_name; });
        v_source = _.sortBy(_.keys(this.model.attributes));

        for (var v in v_compare) {
            //console.log("data0 : "+ v_compare[v]);
            v_source.splice(v_source.indexOf(v_compare[v]),1);
        }

        // 우선순위 항목 삽입
        for (var v = 0; v < v_compare.length; v++) {
            v_source.splice(v, 0, v_compare[v]);
        }

        _.each(v_source,
            function(key) {

                if(key == 'need_lock')
                    return true;

                console.log(key + ":" + self.renderTemplate(key, self.model.get(key)));

                if (self.render_deprecated || !self.model.get(key).deprecated) {
                    HtmlUtils.append(listEle$, self.renderTemplate(key, self.model.get(key)));
                }
            });

        if(self.model.get('need_lock') == 1){
            // some disabled column
        }


        var policyValues1= listEle$.find('.json');
        //console.log("policyValues1:" + policyValues1.length + ":" + policyValues1 );
        _.each(policyValues1, this.attachJSONEditor, this);

        var policyValues2 = listEle$.find('.select');
        //console.log("policyValues2:" + policyValues2.length + ":" + policyValues2 );
        _.each(policyValues2, this.attachJSONInput, this);

        // textarea display none
        //var pdiv1 = document.getElementById("selectdiv");
        //var pdiv6 = pdiv1.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
        // console.log("------------->"+pdiv6.className);
        //pdiv6.style.display = "none";
        //pdiv6.text("good job");    // Very important line. why action?

        return this;
    },

    attachJSONInput : function (input) {
        //console.log('attachJSONInput : '+input);
        var self = this;
        var oldValue = $(input).val();
        //console.log('attachJSONInput changed : '+oldValue);
        var cm = $("#selectfixid")

        cm.on('change', function (instance, changeobj) {
            //console.log('attachJSONInput changed');
            var index = $("#selectfixid").val();

            $("#txtfixid").text(index);
            $(".cm-string").eq(4).text(index);  // difficult_degree

            var newValue = $("#txtfixid").val();
            // save process
            if (newValue !== oldValue) {
                    //console.log("attachJSONInput newValue : " + newValue + " : " + oldValue);
                    var message = gettext("Your changes will not take effect until you save your progress. Take care with key and value formatting, as validation is not implemented.");
                    self.showNotificationBar(message,
                                             _.bind(self.saveView, self),
                                             _.bind(self.revertView, self));
                }

        });
    },

    attachJSONEditor : function (textarea) {
        // Since we are allowing duplicate keys at the moment, it is possible that we will try to attach
        // JSON Editor to a value that already has one. Therefore only attach if no CodeMirror peer exists.
        if ( $(textarea).siblings().hasClass('CodeMirror')) {
            return;
        }

        var self = this;
        var oldValue = $(textarea).val();
        var cm = CodeMirror.fromTextArea(textarea, {
            mode: "application/json",
            lineNumbers: false,
            lineWrapping: false});
        cm.on('change', function(instance, changeobj) {


                instance.save();
                // this event's being called even when there's no change :-(
                if (instance.getValue() !== oldValue) {
                    var message = gettext("Your changes will not take effect until you save your progress. Take care with key and value formatting, as validation is not implemented.");
                    self.showNotificationBar(message,
                                             _.bind(self.saveView, self),
                                             _.bind(self.revertView, self));
                }
            });
        cm.on('focus', function(mirror) {
              $(textarea).parent().children('label').addClass("is-focused");
            });
        cm.on('blur', function (mirror) {
                $(textarea).parent().children('label').removeClass("is-focused");
                var key = $(mirror.getWrapperElement()).closest('.field-group').children('.key').attr('id');
                var stringValue = $.trim(mirror.getValue());
                // update CodeMirror to show the trimmed value.
                mirror.setValue(stringValue);
                var JSONValue = undefined;
                try {
                    JSONValue = JSON.parse(stringValue);
                } catch (e) {
                    // If it didn't parse, try converting non-arrays/non-objects to a String.
                    // But don't convert single-quote strings, which are most likely errors.
                    var firstNonWhite = stringValue.substring(0, 1);
                    if (firstNonWhite !== "{" && firstNonWhite !== "[" && firstNonWhite !== "'") {
                        try {
                            //stringValue = '"'+stringValue +'"';
                            JSONValue = JSON.parse(stringValue);
                            mirror.setValue(stringValue);
                        } catch(quotedE) {
                            // TODO: validation error
                            // console.log("Error with JSON, even after converting to String.");
                            // console.log(quotedE);
                            JSONValue = undefined;
                        }
                    }
                }
                if (JSONValue !== undefined) {
                    var modelVal = self.model.get(key);
                    modelVal.value = JSONValue;
                    self.model.set(key, modelVal);
                }
            });
    },
    saveView : function() {
        // TODO one last verification scan:
        //    call validateKey on each to ensure proper format
        //    check for dupes
        var self = this;
        this.model.save({}, {
            success : function() {
                self.render();
                var title = gettext("Your policy changes have been saved.");
                var message = gettext("No validation is performed on policy keys or value pairs. If you are having difficulties, check your formatting.");  // jshint ignore:line
                self.showSavedBar(title, message);
                analytics.track('Saved Advanced Settings', {
                    'course': course_location_analytics
                });
            },
            silent: true,
            error: function(model, response, options) {
                var json_response, reset_callback, err_modal;

                /* Check that the server came back with a bad request error*/
                if (response.status === 400) {
                    json_response = $.parseJSON(response.responseText);
                    reset_callback = function() {
                        self.revertView();
                    };

                    /* initialize and show validation error modal */
                    err_modal = new ValidationErrorModal();
                    err_modal.setContent(json_response);
                    err_modal.setResetCallback(reset_callback);
                    err_modal.show();
                }
            }
        });
    },
    revertView: function() {
        var self = this;
        this.model.fetch({
            success: function() { self.render(); },
            reset: true
        });
    },
    renderTemplate: function (key, model) {
        //console.log(key + " : "  + model.display_name);

        var newKeyId = _.uniqueId('policy_key_'),
        lock = this.model.get('need_lock'),
        newEle = this.template(
            {
                key: key,
                display_name : model.display_name,
                help: model.help,
                value : JSON.stringify(model.value, null, 4),
                deprecated: model.deprecated,
                keyUniqueId: newKeyId, valueUniqueId: _.uniqueId('policy_value_'),
                need_lock: lock
            }
        );

        this.fieldToSelectorMap[key] = newKeyId;
        this.selectorToField[newKeyId] = key;
        return newEle;
    },
    focusInput : function(event) {
        $(event.target).prev().addClass("is-focused");
    },
    blurInput : function(event) {
        $(event.target).prev().removeClass("is-focused");
    }
});

return AdvancedView;
});
