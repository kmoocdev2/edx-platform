$(document).ready(function(){
    var value_list;
    var board_id = $('#board_id').text();
    var html = "";
    $.ajax({
        url : '/comm_k_news_view/'+board_id,
            data : {
                method : 'view'
            }
    }).done(function(data){
        //console.log(data);
        $('#title').html(data[0]);
        $('#context').html(data[1].replace(/\&\^\&/g, ','));
        $('#reg_date').html('수정 날짜 : '+data[2]);
        if(data[3] != '' && data[3] != null){
            value_list = data[3].toString().split(',');
            for(var i=0; i<value_list.length; i++){
                html += "<li><a href='#' id='download' >"+value_list[i]+"</a></li>";
            }
        }
        $('#file').html(html);
    });
});

$(document).on('click', '#list', function(){
    location.href='/comm_k_news'
});

$(document).on('click', '#file > li > a', function(){
    var file_name = $(this).text();
    var board_id = $('#board_id').text();

    $.ajax({
        url : '/comm_k_news_view/'+board_id,
            data : {
                method : 'file_download',
                file_name : file_name
            }
    }).done(function(data){
        $("#download").prop("href", data);
        location.href=$("#download").attr('href');
    });
});


