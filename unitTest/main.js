function initialSettig(){
    /*below should be get from backend*/
    const myTags = [
        'GREGORY MCINTYRE', 'JOHNNY MORENO', 'VIRGINIA GRANT',
        'JAYSON STEPHENS', 'CALI DUNCAN', 'DARIUS SMALL',
        'ELYSE VARGAS', 'TROY ROBLES', 'CONRAD HUFFMAN',
        'IRENE CASTANEDA', 'BLAIR OWENS', 'ZANDER GREER',
        'MADELEINE CASTANEDA', 'STANLEY MATHEWS', 'IAN GORDON',
        'JAYSON 0000', 'CALI 0001', 'DARIUS 0002',
        '1111 STEPHENS', '2222 DUNCAN', '3333 SMALL',
        'ELYSE5555', 'TROY6666', 'CONRAD7777',
        'IRENE8888', 'BLAIR9999', 'ZANDER1010',
        'GREGORY MCINTYRE', 'JOHNNY MORENO', 'VIRGINIA GRANT',
        'JAYSON STEPHENS', 'CALI DUNCAN', 'DARIUS SMALL',
        'ELYSE VARGAS', 'TROY ROBLES', 'CONRAD HUFFMAN',
        'IRENE CASTANEDA', 'BLAIR OWENS', 'ZANDER GREER',
        'MADELEINE CASTANEDA', 'STANLEY MATHEWS', 'IAN GORDON',
        'JAYSON 0000', 'CALI 0001', 'DARIUS 0002',
        '1111 STEPHENS', '2222 DUNCAN', '3333 SMALL',
        'ELYSE5555', 'TROY6666', 'CONRAD7777',
        'IRENE8888', 'BLAIR9999', 'ZANDER1010',
        'GREGORY MCINTYRE', 'JOHNNY MORENO', 'VIRGINIA GRANT',
        'JAYSON STEPHENS', 'CALI DUNCAN', 'DARIUS SMALL',
        'ELYSE VARGAS', 'TROY ROBLES', 'CONRAD HUFFMAN',
        'IRENE CASTANEDA', 'BLAIR OWENS', 'ZANDER GREER',
        'MADELEINE CASTANEDA', 'STANLEY MATHEWS', 'IAN GORDON',
        'JAYSON 0000', 'CALI 0001', 'DARIUS 0002',
        '1111 STEPHENS', '2222 DUNCAN', '3333 SMALL',
        'ELYSE5555', 'TROY6666', 'CONRAD7777',
        'IRENE8888', 'BLAIR9999', 'ZANDER1010'
    ];

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

$(document).ready(function () {
    initialSettig();
});