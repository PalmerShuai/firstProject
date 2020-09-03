$(function() {



    var bannerArr = ["../img/flash312.jpg", "../img/flash313.jpg", "../img/flash314.jpg"];

    var i = 0;
    var timer = setInterval(function() {

        if (i == 3) {
            i = 0;
        }

        $("#banImg").attr("src", bannerArr[i]);
        for (let a = 0; a < 3; a++) {
            $("#banRun ul").children().eq(a).attr("class", "")
        };
        $("#banRun ul").children().eq(i).attr("class", "banRug");
        for (let a = 0; a < 3; a++) {
            $("#changCoal").children().eq(a).children().eq(0).attr("class", "left");
            $("#changCoal").children().eq(a).children().eq(1).attr("class", "right")
        };
        $("#changCoal").children().eq(i).children().eq(0).attr("class", "left boreCol");
        $("#changCoal").children().eq(i).children().eq(1).attr("class", "right wordCol")


        i++;


    }, 1000);

    $("#banner").mousemove(function() {
        clearInterval(timer);
        for (let b = 0; b < 3; b++) {
            $("#changCoal").children().eq(b).click(function() {
                for (let a = 0; a < 3; a++) {
                    $("#changCoal").children().eq(a).children().eq(0).attr("class", "left");
                    $("#changCoal").children().eq(a).children().eq(1).attr("class", "right")
                };
                $("#changCoal").children().eq(b).children().eq(0).attr("class", "left boreCol");
                $("#changCoal").children().eq(b).children().eq(1).attr("class", "right wordCol");
                $("#banImg").attr("src", bannerArr[b]);
            });

        };



    }).mouseout(function() {
        timer = setInterval(function() {

            if (i == 3) {
                i = 0;
            }

            $("#banImg").attr("src", bannerArr[i]);
            for (let a = 0; a < 3; a++) {
                $("#banRun ul").children().eq(a).attr("class", "")
            };
            $("#banRun ul").children().eq(i).attr("class", "banRug");
            for (let a = 0; a < 3; a++) {
                $("#changCoal").children().eq(a).children().eq(0).attr("class", "left");
                $("#changCoal").children().eq(a).children().eq(1).attr("class", "right")
            };
            $("#changCoal").children().eq(i).children().eq(0).attr("class", "left boreCol");
            $("#changCoal").children().eq(i).children().eq(1).attr("class", "right wordCol")


            i++;


        }, 1000);
    });
    $("#qieLeft").click(function() {

        var qieNum = $("#banRun ul li").index(document.getElementsByClassName("banRug")[0]) - 1;
        if (qieNum == -1) {
            qieNum = 2;
        }
        for (let a = 0; a < 3; a++) {
            $("#banRun ul").children().eq(a).attr("class", "")
        };
        $("#banRun ul").children().eq(qieNum).attr("class", "banRug");
        console.log("aaa")
    });
    $("#qieRight").click(function() {

        var qieNum = $("#banRun ul li").index(document.getElementsByClassName("banRug")[0]) + 1;
        if (qieNum == 3) {
            qieNum = 0;
        }
        for (let a = 0; a < 3; a++) {
            $("#banRun ul").children().eq(a).attr("class", "")
        };
        $("#banRun ul").children().eq(qieNum).attr("class", "banRug");
        console.log("aaa")
    });
    // var popularList1 = document.getElementsByClassName("popularList1");
    // console.log(popularList1.length);
    // for(let i = 0;i<popularList1.length;i++){

    // }
    // var popNum = $("#popular>div").index(document.getElementsByClassName("popularXian")[0]);

    var username = location.search.split("=")[1];
    var userId = JSON.parse(localStorage.getItem(username));
    localStorage.setItem("userNam", JSON.stringify(username));
    // $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
    //     pimg: "../img/da1/(/1).jpg",
    //     pname: "地下城与勇士 国风象棋馆",
    //     pprice: 188,
    //     pdesc: 17,
    //     uid: userId
    // }, function(data) {
    //     console.log(data)

    // });
    $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {

        uid: userId
    }, function(data) {
        console.log(data)

    });
    // $.get("http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php", {
    //     pid: 286114,
    //     uid: userId,
    //     token: "1e73268058cd17b27bdc62503712e606"
    // }, function(data) {
    //     console.log(data)

    // })
    $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {

        uid: userId
    }, function(data) {
        console.log(data)
        var opopular = document.getElementById("popular");
        opopular.innerHTML = `
        <div class="popularList1 popularXian" id="box1">
        <div class="popularLift">
            <div class="listFeatures">
                <h3>-HOT DERIVATIVE</h3>
                <h4>热门周边</h4>
                <h5>一</h5>
                <div class="switch">
                    <div class="left"></div>
                    <div class="right"></div>
                </div>
            </div>
            <div class="list">
                <a href="cartDelite.html?pid=${data.data[0].pid}" class="listImg">
                    <img src="${data.data[0].pimg}" alt="">

                </a>
                <a href="cartDelite.html?pid=${data.data[0].pid}" class="listName">${data.data[0].pname}</a>
                <div class="listPrice">
                    <span>${data.data[0].pprice}元</span>g
                </div>
            </div>
            <div class="list">
                <a href="cartDelite.html?pid=${data.data[1].pid}" class="listImg">
                    <img src="${data.data[1].pimg}" alt="">

                </a>
                <a href="cartDelite.html?pid=${data.data[1].pid}" class="listName">${data.data[1].pname}</a>
                <div class="listPrice">
                    <span>${data.data[1].pprice}</span>
                </div>
            </div>
            <div class="list">
                <a href="cartDelite.html?pid=${data.data[2].pid}" class="listImg">
                    <img src="${data.data[2].pimg}" alt="">

                </a>
                <a href="cartDelite.html?pid=${data.data[2].pid}" class="listName">${data.data[2].pname}</a>
                <div class="listPrice">
                    <span>${data.data[2].pprice}元</span>
                </div>
            </div>
        </div>
        <div class="popularRight">
            <div class="list">
                <a href="cartDelite.html?pid=${data.data[3].pid}" class="listImg">
                    <img src="${data.data[3].pimg}" alt="">

                </a>
                <a href="cartDelite.html?pid=${data.data[3].pid}" class="listName">${data.data[3].pname}</a>
                <div class="listPrice">
                    <span>${data.data[3].pprice}元</span>
                </div>
            </div>
            <div class="list">
                <a href="cartDelite.html?pid=${data.data[4].pid}" class="listImg">
                    <img src="${data.data[4].pimg}" alt="">

                </a>
                <a href="cartDelite.html?pid=${data.data[4].pid}" class="listName">${data.data[4].pname}</a>
                <div class="listPrice">
                    <span>${data.data[4].pprice}元</span>
                </div>
            </div>
            <div class="list">
                <a href="cartDelite.html?pid=${data.data[5].pid}" class="listImg">
                    <img src="${data.data[5].pimg}" alt="">

                </a>
                <a href="cartDelite.html?pid=${data.data[5].pid}" class="listName">${data.data[5].pname}</a>
                <div class="listPrice">
                    <span>${data.data[5].pprice}元</span>
                </div>
            </div>
            <div class="list">
                <a href="cartDelite.html?pid=${data.data[9].pid}" class="listImg">
                    <img src="${data.data[9].pimg}" alt="">

                </a>
                <a href="cartDelite.html?pid=${data.data[9].pid}" class="listName">${data.data[9].pname}</a>
                <div class="listPrice">
                    <span>${data.data[9].pprice}元</span>
                </div>
            </div>
        </div>
    </div>
    <div class="popularList1" id="box2">
        <div class="popularLift">
            <div class="listFeatures">
                <h3>-HOT DERIVATIVE</h3>
                <h4>热门周边</h4>
                <h5>一</h5>
                <div class="switch">
                    <div class="left"></div>
                    <div class="right"></div>
                </div>
            </div>
            <div class="list">
                <a href="cartDelite.html?pid=${data.data[7].pid}" class="listImg">
                    <img src="${data.data[7].pimg}" alt="">

                </a>
                <a href="cartDelite.html?pid=${data.data[7].pid}" class="listName">${data.data[7].pname}</a>
                <div class="listPrice">
                    <span>${data.data[7].pprice}元</span>
                </div>
            </div>
            <div class="list">
                <a href="cartDelite.html?pid=${data.data[8].pid}" class="listImg">
                    <img src="${data.data[8].pimg}" alt="">

                </a>
                <a href="cartDelite.html?pid=${data.data[8].pid}" class="listName">${data.data[8].pname}</a>
                <div class="listPrice">
                    <span>${data.data[8].pprice}元</span>
                </div>
            </div>
            <div class="list">
                <a href="cartDelite.html?pid=${data.data[9].pid}" class="listImg">
                    <img src="${data.data[9].pimg}" alt="">

                </a>
                <a href="cartDelite.html?pid=${data.data[9].pid}" class="listName">${data.data[9].pname}</a>
                <div class="listPrice">
                    <span>${data.data[9].pprice}元</span>
                </div>
            </div>
        </div>
        <div class="popularRight">
            <div class="list">
                <a href="cartDelite.html?pid=${data.data[10].pid}" class="listImg">
                    <img src="${data.data[10].pimg}"" alt="">

                </a>
                <a href="cartDelite.html?pid=${data.data[10].pid}" class="listName">${data.data[10].pname}</a>
                <div class="listPrice">
                    <span>${data.data[10].pprice}元</span>
                </div>
            </div>
            <div class="list">
                <a href="cartDelite.html?pid=${data.data[10].pid}" class="listImg">
                    <img src="${data.data[10].pimg}" alt="">

                </a>
                <a href="cartDelite.html?pid=${data.data[10].pid}" class="listName">${data.data[10].pname}</a>
                <div class="listPrice">
                    <span>${data.data[10].pprice}元</span>
                </div>
            </div>
            <div class="list">
                <a href="cartDelite.html?pid=${data.data[18].pid}" class="listImg">
                    <img src="${data.data[18].pimg}" alt="">

                </a>
                <a href="cartDelite.html?pid=${data.data[18].pid}" class="listName">${data.data[1].pname}</a>
                <div class="listPrice">
                    <span>${data.data[18].pprice}元</span>
                </div>
            </div>
            <div class="list">
                <a href="cartDelite.html?pid=${data.data[17].pid}" class="listImg">
                    <img src="${data.data[17].pimg}" alt="">

                </a>
                <a href="cartDelite.html?pid=${data.data[17].pid}" class="listName">${data.data[17].pname}</a>
                <div class="listPrice">
                    <span>${data.data[17].pprice}元</span>
                </div>
            </div>
        </div>
    </div>
    <div class="popularList1" id="box3">
        <div class="popularLift">
            <div class="listFeatures">
                <h3>-HOT DERIVATIVE</h3>
                <h4>热门周边</h4>
                <h5>一</h5>
                <div class="switch">
                    <div class="left"></div>
                    <div class="right"></div>
                </div>
            </div>
            <div class="list">
                <a href="cartDelite.html?pid=${data.data[5].pid}" class="listImg">
                    <img src="${data.data[5].pimg}" alt="">

                </a>
                <a href="cartDelite.html?pid=${data.data[5].pid}" class="listName">${data.data[5].pname}</a>
                <div class="listPrice">
                    <span>${data.data[5].pprice}元</span>
                </div>
            </div>
            <div class="list">
                <a href="cartDelite.html?pid=${data.data[8].pid}" class="listImg">
                    <img src="${data.data[8].pimg}" alt="">

                </a>
                <a href="cartDelite.html?pid=${data.data[8].pid}" class="listName">${data.data[8].pname}</a>
                <div class="listPrice">
                    <span>${data.data[8].pprice}元</span>
                </div>
            </div>
            <div class="list">
                <a href="cartDelite.html?pid=${data.data[1].pid}" class="listImg">
                    <img src="${data.data[1].pimg}" alt="">

                </a>
                <a href="cartDelite.html?pid=${data.data[1].pid}" class="listName">${data.data[1].pname}</a>
                <div class="listPrice">
                    <span>${data.data[1].pprice}元</span>
                </div>
            </div>
        </div>
        <div class="popularRight">
            <div class="bigImg">
                <a href="cartDelite.html?pid=${data.data[7].pid}" class="listImg ">
                    <img src="${data.data[7].pimg}" alt="">

                </a>
                <a href="cartDelite.html?pid=${data.data[7].pid}" class="listName">${data.data[7].pname}</a>
                <div class="listPrice">
                    <span>${data.data[7].pprice}元</span>
                </div>
            </div>


        </div>
    </div>
    <ul class="chang">
        <li></li>
        <li></li>
        <li></li>
    </ul> 
        `;

        for (let b = 0; b < 3; b++) {
            $(".switch").eq(b).children().eq(0).click(function() {
                console.log("aaa")
                let popularNum = $("#popular>div").index(document.getElementsByClassName("popularXian")[0]);
                for (let a = 0; a < 3; a++) {
                    $("#popular>div").eq(a).attr("class", "popularList1")
                };
                let popularNumJain = popularNum - 1;
                if (popularNumJain == -1) {
                    popularNumJain = 2
                };
                console.log(popularNumJain);
                $("#popular>div").eq(popularNumJain).attr("class", "popularList1 popularXian");

            });
            $(".switch").eq(b).children().eq(1).click(function() {

                let popularNum = $("#popular>div").index(document.getElementsByClassName("popularXian")[0]);
                for (let a = 0; a < 3; a++) {
                    $("#popular>div").eq(a).attr("class", "popularList1")
                };
                let popularNumJain = popularNum + 1;
                if (popularNumJain == 3) {
                    popularNumJain = 0
                };

                $("#popular>div").eq(popularNumJain).attr("class", "popularList1 popularXian");

            })

        };
    });

    var oLibao = document.getElementById("libao");

    function tiaofen(y) {
        var arr = [];
        var arr2 = [];
        console.log("aaa");
        $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {

            uid: userId
        }, function(data) {
            console.log(data)
            for (let i = 0; i < data.data.length; i++) {

                arr.push(data.data[i].pdesc);
            }
            console.log(arr)
            var arr1 = arr.sort(function(a, b) {
                return a - b;
            })
            console.log(arr1);
            for (let a = 0; a < arr1.length; a++) {
                var index = arr.indexOf(arr1[a]);
                arr2.push(index);

            }
            console.log(arr2);
            console.log(arr2.length);
            var shopLi = document.getElementById("shopLi");
            shopLi.innerHTML = "";
            for (let i = y; i < y + 8; y++) {
                // var strr = Math.floor(Math.random() * arr2.length);

                shopLi.innerHTML += `
            <li>
            <a href="" class="imgWarp">
                <img src="${data.data[arr2[i]].pimg}" alt="">
            </a>
            <a href="" class="imgName">${data.data[arr2[i]].pname}</a>
            <div class="imgPri">
                <span>现价： ￥${data.data[arr2[i]].pprice}</span>
            </div>
        </li>
            `
            }
        });
    }
    oLibao.onclick = function() {
        tiaofen(0)
    }

})