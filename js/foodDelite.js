$(function() {
    var username = JSON.parse(localStorage.getItem("userNam"));
    console.log(username);
    var userId = JSON.parse(localStorage.getItem(username));
    console.log(userId);
    //   // $.get("http://jx.xuzhixiang.top/ap/api/allproductlist.php?pagesize=6&pagenum=2", {
    //     //     pagesize:6,
    //             pagenum :
    //     // }, function(data) {
    //     //     console.log(data)

    //     // });
    $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {

        uid: userId
    }, function(data) {
        console.log(data);
        var alldata = data.data.length;
        var pageNum = Math.ceil(alldata / 5);
        var opageNu = document.getElementById("pageNu");
        var topLeft = document.getElementById("topLeft");
        var topRight = document.getElementById("topRight");
        var bottLeft = document.getElementById("bottLeft");
        var bottRight = document.getElementById("bottRight");
        for (let a = 0; a < pageNum; a++) {
            let c = a + 1;
            opageNu.innerHTML += `
            <li>${c}</li>
            `;
        };
        var articleList = document.getElementById("articleList");
        for (let x = 0; x < 5; x++) {
            articleList.innerHTML += `
            <li>
                        <a href="cartDelite.html?pid=${data.data[x].pid}" class="articleImg">
                            <img src="${data.data[x].pimg}" alt=""  id="pagTit">
                        </a>
                        <a href="" class="articleName">
                            
                        ${data.data[x].pname}
                        
                        </a>
                        <p>
                            <span>${data.data[x].pprice}元</span>
                            <i>${data.data[x].pdesc}人点评</i>
                        </p>
                    </li>
            `
        }


        pageTop.innerHTML = `
        共${alldata}个商品1 /${pageNum }页
        `;
        for (let d = 0; d < pageNum; d++) {
            var m = d + 1;

            $("#pageNu").children().eq(d).click(function() {
                pageTop.innerHTML = `
                共${alldata}个商品${m} /${pageNum }页
                `
                articleList.innerHTML = "";

                for (let y = d * 5; y < (d + 1) * 5; y++) {
                    articleList.innerHTML += `
                    <li>
                                <a href="" class="articleImg">it
                                    <img src="${data.data[y].pimg}" alt="" id="pagTit">
                                </a>
                                <a href="" class="articleName">
                                    
                                ${data.data[y].pname}
                                
                                </a>
                                <p>
                                    <span>${data.data[y].pprice}元</span>
                                    <i>${data.data[y].pdesc}人点评</i>
                                </p>
                            </li>
                    `

                }

            })
        }

        $("#bottLeft").click(function() {
            pageTop.innerHTML = `
        共${alldata}个商品1 /${pageNum }页`;
            articleList.innerHTML = "";

            for (let y = 0; y < 5; y++) {
                articleList.innerHTML += `
                <li>
                            <a href="" class="articleImg">it
                                <img src="${data.data[y].pimg}" alt="" id="pagTit">
                            </a>
                            <a href="" class="articleName">
                                
                            ${data.data[y].pname}
                            
                            </a>
                            <p>
                                <span>${data.data[y].pprice}元</span>
                                <i>${data.data[y].pdesc}人点评</i>
                            </p>
                        </li>
                `

            }
        });
        $("#bottRight").click(function() {
            pageTop.innerHTML = `
            共${alldata}个商品${pageNum }/${pageNum }页`;

            articleList.innerHTML = "";

            for (let y = (pageNum - 1) * 5; y < alldata; y++) {
                articleList.innerHTML += `
                <li>
                            <a href="" class="articleImg">it
                                <img src="${data.data[y].pimg}" alt="" id="pagTit">
                            </a>
                            <a href="" class="articleName">
                                
                            ${data.data[y].pname}
                            
                            </a>
                            <p>
                                <span>${data.data[y].pprice}元</span>
                                <i>${data.data[y].pdesc}人点评</i>
                            </p>
                        </li>
                `

            }
        })
    })

})