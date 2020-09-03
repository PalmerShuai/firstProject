$(function() {
    var pid = location.search.split("=")[1];
    var userNam = JSON.parse(localStorage.getItem("userNam"));
    console.log(userNam);
    var uid = JSON.parse(localStorage.getItem(userNam));
    console.log(uid);
    $.get("http://jx.xuzhixiang.top/ap/api/detail.php", {

        id: pid
    }, function(data) {
        console.log(data);
        var cartDelWa = document.getElementById("cartDelWa");
        console.log(cartDelWa);
        console.log(data.data.pimg);

        $(".cartDel .leftImg").children().attr("src", data.data.pimg);
        $(".imgList>li").children().attr("src", data.data.pimg);
        $(".foodName").children().html(data.data.pname);
        $(".coupon").children().children().eq(2).html(data.data.pprice);
        $(".salesList>li").eq(1).children().eq(0).html(data.data.pdesc);
        $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
            id: uid
        }, function(data) {
            console.log(data)

        })

        $(".less").children().click(function() {
            console.log("aaa");
            let num = $("#number").val();
            num--;
            if (num <= 1) {
                num = 1;
            };
            $("#number").val(num)

        });
        $(".plus").children().click(function() {
            console.log("aaa");
            let num = $("#number").val();
            num++;
            $("#number").val(num)
        });
    });
    $(".buy").children().eq(1).click(function() {
        $.get("http://jx.xuzhixiang.top/ap/api/add-product.php", {
            uid: uid,
            pid: pid,
            pnum: $("#number").val()
        }, function(data) {
            console.log(data)

        })
    });
    $(".buy").children().eq(0).click(function() {
        window.location.href = "http://localhost:8080/html/cartl.html"
    })

})