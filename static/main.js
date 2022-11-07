//const:  一般使用在識別值(identifier)不會被重新指定值。
//let: 一般使用在變數(variable)可能會被重新指定值
//var" 使用在變數可能或不會被重新賦予值
var myTags = [];

function mainUI(myTags){
    TagCloud('.cloudContent', myTags,{
        // radius in px
        radius: 500,
    
        // animation speed
        // slow, normal, fast
        maxSpeed: 'fast',
        initSpeed: 'fast',
    
        // 0 = top
        // 90 = left
        // 135 = right-bottom
        direction: 135,
    
        // interact with cursor move on mouse out
        keep: true,
    });
}

//update => put| 修改
$(function (){
    $('#confirmBtn').click(function(){
        //get index
        var s = $("#sfs").val();
        console.log("Put data => index" + s);

        $.ajax({
            url: "/putOne",
            type: "PUT",
            dataType: "json",
            async: false,
            data: {'state': s},
            success: function (data) {
                console.log(data.msg);
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert(textStatus);
            }
        })
        
        $('#myModal').modal('hide');

        location.reload();
    })
})

// 隨機抽取一名user
$(function (){
    $('#getBtn').click(function(){

        $.ajax({
            url: "/getOne",
            type: "GET",
            dataType: "json",
            success: function (data) {
                if(data.hasOwnProperty("code")){
                    $("#code").text(data.code);
                    $("#name").text(data.name);
                    $('#myModal').modal('show');
                }else{
                    console.log('error');
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert(textStatus);
            }
        })
    })
})

// output
$(function (){
    $('#outBtn').click(function(){

        $.ajax({
            url: "/out",
            type: "GET",
            dataType: "json",
            success: function (data) {
                console.log(data.msg);
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert(textStatus);
            }
        })
    })
})

$(document).ready(function () {

    $.ajax({
        url: "/getAll",
        type: "GET",
        dataType: "json",
        success: function (data) {
            if(data.hasOwnProperty("codeName")){
                myTags = data.codeName;
                console.log("Num of member: " + myTags.length);
                mainUI(myTags);
            }else{
                console.log('error');
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            //alert(jqXHR.responseText); //服务器返回的文本信息
            //alert(jqXHR.status); //返回的HTTP状态码，比如常见的404,500等错误代码。
            //alert(jqXHR.readyState); //readyState :当前状态,0-未初始化，1-正在载入，2-已经载入，3-数据进行交互，4-完成。
            //alert(jqXHR.statusText); //对应状态码的错误信息，比如404错误信息是not found,500是Internal Server Error
            
            alert(textStatus); //"timeout"（超时）, "error"（错误）, "abort"(中止), "parsererror"（解析错误）
            //alert(errorThrown);
        }
    })

})