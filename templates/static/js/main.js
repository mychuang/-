//const:  一般使用在識別值(identifier)不會被重新指定值。
//let: 一般使用在變數(variable)可能會被重新指定值
//var" 使用在變數可能或不會被重新賦予值

//query
function getData() {
    console.log("get data");
    /*below should be get from backend*/
    let myTags = [
        'GREGORY MCINTYRE', 'JOHNNY MORENO', 'VIRGINIA GRANT',
        'JAYSON STEPHENS', 'CALI DUNCAN', 'DARIUS SMALL'
    ];

    return myTags;
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

function uiSetting(myTags){
    console.log("Setting UI");
    /*the animation for word cloud*/
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
}

function initialSettig(){
    myTags = getData();
    uiSetting(myTags);
}

$(document).ready(function () {
    initialSettig();
})