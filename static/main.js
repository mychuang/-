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

$(function (){
    $('#getBtn').click(function(){
        //get index
        var s = $("#sfs").val();

        console.log("should call back-end sample data");
        console.log(s);

        console.log("if get data, show modal");
        $('#myModal').modal('show');

        //$.ajax({
        //    url: "/setRequest",
        //    type: "POST",
        //    dataType: "json",
        //    data: {'num': '10'},
        //    success: function (data) {
        //        console.log(data.msg);
        //    }
        //})
    })
})

$(document).ready(function () {
    getData();
})