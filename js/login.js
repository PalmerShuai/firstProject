$(function() {
    $("#btn").click(function() {
        $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
            username: $("#userName").val(),
            password: $("#passWar").val()
        }, function(data) {

            if (!JSON.parse(localStorage.getItem($("#userName").val()))) {
                localStorage.setItem($("#userName").val(), JSON.stringify(data.data.id))
            }

            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/shop200\ \(1\).jpg",
            //     pname: "DNF 纯净T恤",
            //     pprice: 39,
            //     pdesc: 1,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });
            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/shop200\ \(2\).jpg",
            //     pname: "地下城与勇士 三件套",
            //     pprice: 329,
            //     pdesc: 7,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });
            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/shop200\ \(3\).jpg",
            //     pname: "女神枪 软胶挂件",
            //     pprice: 19,
            //     pdesc: 9,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });
            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/shop200\ \(4\).jpg",
            //     pname: "剑羽 男戒",
            //     pprice: 49,
            //     pdesc: 11,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });
            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/shop200\ \(5\).jpg",
            //     pname: "地下城短数据线-苹果",
            //     pprice: 55,
            //     pdesc: 16,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });
            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/shop200\ \(6\).jpg",
            //     pname: "DNF 团扇",
            //     pprice: 69,
            //     pdesc: 111,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });
            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/shop200\ \(7\).jpg",
            //     pname: "防风打火机（男士珍藏）",
            //     pprice: 129,
            //     pdesc: 81,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });
            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/shop200\ \(8\).jpg",
            //     pname: "珍藏纪念币",
            //     pprice: 989,
            //     pdesc: 174,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });
            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/1226.jpg",
            //     pname: "男神枪 Q版",
            //     pprice: 329,
            //     pdesc: 1,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });
            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/1256.jpg",
            //     pname: "大刀勇士 Q版",
            //     pprice: 139,
            //     pdesc: 121,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });
            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/1257.jpg",
            //     pname: "战斗萝莉 Q版",
            //     pprice: 129,
            //     pdesc: 61,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });
            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/1468.jpg",
            //     pname: "奇异博士 Q版",
            //     pprice: 529,
            //     pdesc: 211,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });
            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/1492.jpg",
            //     pname: "御姐 女战神版",
            //     pprice: 319,
            //     pdesc: 19,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });
            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/1644.jpg",
            //     pname: "魔法扫帚 女孩",
            //     pprice: 339,
            //     pdesc: 14,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });
            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/1667.jpg",
            //     pname: "法牌女孩 ",
            //     pprice: 129,
            //     pdesc: 13,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });
            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/1713.jpg",
            //     pname: "男战神 战斗",
            //     pprice: 69,
            //     pdesc: 18,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });
            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/1799.jpg",
            //     pname: "花木兰 智斗",
            //     pprice: 169,
            //     pdesc: 114,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });
            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/1840.jpg",
            //     pname: "赛丽亚赏月.珍馐礼盒",
            //     pprice: 329,
            //     pdesc: 1,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });
            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/shop200\ \(1\).jpg",
            //     pname: "DNF 纯净T恤",
            //     pprice: 39,
            //     pdesc: 1,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });
            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/1667.jpg",
            //     pname: "法牌女孩 ",
            //     pprice: 129,
            //     pdesc: 13,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });

            // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            //     pimg: "../img/1713.jpg",
            //     pname: "男战神 战斗",
            //     pprice: 69,
            //     pdesc: 18,
            //     uid: data.data.id
            // }, function(data) {
            //     console.log(data)

            // });

            window.location.href = "http://localhost:8080/html/index.html?username=" + $("#userName").val();


        });

    })








})