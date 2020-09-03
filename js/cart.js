$(function() {
    var userNam = JSON.parse(localStorage.getItem("userNam"));
    console.log(userNam);
    var uid = JSON.parse(localStorage.getItem(userNam));
    console.log(uid);
    var cartListJ = document.getElementById("cartListJ");


    $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {

        id: uid
    }, function(data) {
        console.log(data.data);

        for (let i = 0; i < data.data.length; i++) {

            cartListJ.innerHTML += `
            <ul class="foodList" >
                <li>
                    <input type="checkbox" class="ck">
                </li>
                <li>
                    <a href="">
                        <img src="${data.data[i].pimg}" alt="">
                    </a>
                    <div>
                        <a href="">${data.data[i].pname}</a>
                        <span>颜色： 彩</span>
                        <span>尺寸： 均码</span>
                    </div>
                </li>
                <li>￥
                    <span class="danjia"> ${data.data[i].pprice}</span>
                </li>
                <li>
                    <div>
                        <span class="less ">
                            <img src="../img/buy_jian.jpg" alt="">
                        </span>
                        <input type="text" value="${data.data[i].pnum}" class="genum">
                        <span class="plus ">
                            <img src="../img/buy_jia.jpg" alt="">
                        </span>
                    </div>
                </li>
                <li>￥
                    <span class="product">${data.data[i].pnum * data.data[i].pprice} </span>
                </li>
                <li>
                    <a href="">移入收藏夹</a>
                    <a href="" class="deleseUl">删除</a>
                </li>
            </ul>
            `;
        }
        var deleseUl = document.querySelectorAll(".deleseUl");
        var less = document.querySelectorAll(".less");
        var plus = document.querySelectorAll(".plus");
        var genum = document.querySelectorAll(".genum");
        var danjia = document.querySelectorAll(".danjia");
        var product = document.querySelectorAll(".product");
        var foodList = document.querySelectorAll(".foodList");
        var allNmma = document.getElementById("allNmma");
        var allNma = document.getElementById("allNma");
        var okeop = document.querySelectorAll(".keop");
        var deleteChAll = document.querySelectorAll(".deleteChAll");
        var ofreeCho = document.getElementById("freeCho");

        console.log(ofreeCho);

        function zongjia() {
            let allNm = 0;
            let allNmm = 0;
            for (let a = 0; a < ck.length; a++) {
                if (ck[a].checked) {


                    allNm += +product[a].innerText;
                    allNmm += +genum[a].value;
                }
            }
            console.log(allNm);
            console.log(allNmm)
            allNma.innerText = allNmm;
            allNmma.innerText = allNm;
        }
        for (let i = 0; i < data.data.length; i++) {


            less[i].onclick = function() {
                // console.log(genum[i])
                // console.log("aaa");
                genum[i].value--;
                if (genum[i].value <= 1) {
                    genum[i].value = 1;
                }
                if (genum[i].value >= 1) {
                    console.log("aaa")
                    product[i].innerHTML = danjia[i].innerText * genum[i].value;
                    zongjia();
                    $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {
                        uid: uid,
                        pid: data.data[i].pid,
                        pnum: genum[i].value
                    }, function(data) {
                        console.log(data)

                    })
                }
            }
            plus[i].onclick = function() {
                console.log(genum[i])
                console.log("aaa");
                genum[i].value++;
                product[i].innerHTML = danjia[i].innerText * genum[i].value;
                zongjia();
                $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {
                    uid: uid,
                    pid: data.data[i].pid,
                    pnum: genum[i].value
                }, function(data) {
                    console.log(data)

                })
            }
            deleseUl[i].onclick = function() {
                cartListJ.removeChild(foodList[i]);
                $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php", {
                    uid: uid,
                    pid: data.data[i].pid,
                }, function(data) {
                    console.log(data)

                })
            };
            deleteChAll[0].onclick = function() {
                for (let i = 0; i < ck.length; i++) {
                    if (ck[i].checked) {
                        cartListJ.removeChild(foodList[i]);
                        $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php", {
                            uid: uid,
                            pid: data.data[i].pid,
                        }, function(data) {
                            console.log(data)

                        })
                    }
                }
            }

        }



        var checkAll = document.getElementById("checkAll");
        var ck = document.querySelectorAll(".ck");
        checkAll.onclick = () => {
            for (let i = 0; i < ck.length; i++) {
                ck[i].checked = checkAll.checked
            }
            let allNm = 0;
            let allNmm = 0;
            for (let a = 0; a < ck.length; a++) {
                if (ck[a].checked) {


                    allNm += +product[a].innerText;
                    allNmm += +genum[a].value;
                }
            }
            console.log(allNm);
            console.log(allNmm)
            allNma.innerText = allNmm;
            allNmma.innerText = allNm;
            if (allNmma.innerHTML >= 200) {
                ofreeCho.checked = true;
            } else {
                ofreeCho.checked = false;
            }

        };
        for (let i = 0; i < ck.length; i++) {
            ck[i].onclick = () => {
                let count = 0;
                for (let j = 0; j < ck.length; j++) {
                    if (ck[j].checked) {
                        count++;
                    }
                }
                if (count == ck.length) {
                    checkAll.checked = true;
                } else {
                    checkAll.checked = false;
                }
                let allNm = 0;
                let allNmm = 0;
                for (let a = 0; a < ck.length; a++) {
                    if (ck[a].checked) {
                        allNm += +product[a].innerText;
                        allNmm += +genum[a].value;
                    }
                }
                allNma.innerText = allNmm;
                allNmma.innerText = allNm;
                if (allNmma.innerHTML >= 200) {
                    ofreeCho.checked = true;
                } else {
                    ofreeCho.checked = false;
                }
            }

        };

        $(".keop").click(function() {
            window.location.href = "http://localhost:8080/html/index.html?username=" + userNam;
        })
    })
})