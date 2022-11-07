//const:  一般使用在識別值(identifier)不會被重新指定值。
//let: 一般使用在變數(variable)可能會被重新指定值
//var" 使用在變數可能或不會被重新賦予值
var myTags = [];

//query
function getData() {
    console.log("getData()");
    
    $.ajax({
        url: "/getAll",
        type: "GET",
        dataType: "json",
        success: function (data) {
            if(data.hasOwnProperty("codeName")){
                myTags = data.codeName;

                var tagCloud = TagCloud('.cloudContent', myTags,{
                    // radius in px
                    radius: 500,
                
                    // animation speed
                    // slow, normal, fast
                    maxSpeed: 'slow',
                    initSpeed: 'slow',
                
                    // 0 = top
                    // 90 = left
                    // 135 = right-bottom
                    direction: 135,
                
                    // interact with cursor move on mouse out
                    keep: true,
                });

            }else{
                console.log('error');
            }
        }
    })
}

//update | 修改
function putData() {
    console.log("put data");
}

// 隨機抽取一名user
$(function (){
    $('#getBtn').click(function(){
        //get index
        var s = $("#sfs").val();

        console.log("should call back-end sample data");
        console.log(s);

        $.ajax({
            url: "/getOne",
            type: "GET",
            dataType: "json",
            success: function (data) {
                if(data.hasOwnProperty("code")){
                    console.log("if get data, show modal");
                    $("#code").text(data.code);
                    $("#name").text(data.name);
                    $('#myModal').modal('show');
                }else{
                    console.log('error');
                }
            }
        })
    })
})

$(document).ready(function () {
    getData();
})