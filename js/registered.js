$(function() {
    $("#userName").blur(function() {
        if ($(this).val() == "") {
            $(this).next().css({ display: "block" });
            $(this).css({
                border: "1px solid red"
            })
        }
    }).next().next().blur(function() {
        if ($(this).val() == "") {
            $(this).next().next().css({ display: "block" });
            $(this).css({
                border: "1px solid red"
            })
        }
        $(this).next().css({
            display: "none"
        })
    });
    $("#userName").focus(function() {

        $(this).next().css({ display: "none" });
        $(this).css({
            border: "1px solid #cecece"
        })

    }).next().next().focus(function() {

        $(this).next().next().css({ display: "none" });
        $(this).css({
            border: "1px solid #cecece"
        });
        $(this).next().css({ display: "block" });

    });
    $("#passWard").keyup(function() {

        var str = $(this).val();
        var ret1 = /^[^ ]+$/;
        var ret2 = /^.{8,16}$/;
        var ret3 = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]/;
        if (ret1.test(str)) {
            $(this).next().children().eq(0).css({
                background: "url(../img/green.png)no-repeat 3px 1px",
                color: "#333333"
            })
        } else {
            $(this).next().children().eq(0).css({
                background: "url(../img/info.png)no-repeat 3px 1px",
                color: "#333333"
            })
        };
        if (ret2.test(str)) {
            $(this).next().children().eq(1).css({
                background: "url(../img/green.png)no-repeat 3px 1px",
                color: "#333333"
            })
        } else {
            $(this).next().children().eq(1).css({
                background: "url(../img/info.png)no-repeat 3px 1px",
                color: "#333333"
            })
        };
        if (ret3.test(str)) {
            $(this).next().children().eq(2).css({
                background: "url(../img/green.png)no-repeat 3px 1px",
                color: "#333333"
            })
        } else {
            $(this).next().children().eq(2).css({
                background: "url(../img/info.png)no-repeat 3px 1px",
                color: "#333333"
            })
        };

    });
    $("#tel").toggle(function() {
        $(this).children().eq(1).css({
            background: "url(../img/up.png) 2px 22px no-repeat"
        });
        $(this).next().next().css({
            display: "block"

        })
    }, function() {
        $(this).children().eq(1).css({
            background: "url(../img/down.png) 2px 22px no-repeat"
        })
    }).children().eq(1).click(function() {
        $(this).parent().next().next().toggle();
    }).parent().next().next().children().click(function() {
        console.log($(this).children().eq(0))
        $("#telTit").val($(this).children().eq(0).html());
        $(this).parent().css({
            display: "none"
        })
    });
    $("#telNum").focus(function() {
        $("#smsTit").css({
            display: 'block'
        })
    });
    $("#smsSent").click(function() {
        var str = $("#telNum").val();
        var ret1 = /^1[345678]\d{9}$/;
        if (!ret1.test(str)) {
            $("#telStyle").html("手机格式不正确").css({
                color: "red"
            });
            $("#telNum").css({
                border: "1px solid red"
            });
        };
        if (str == "") {
            $("#telStyle").html("手机号有误").css({
                color: "red"
            });
            $("#telNum").css({
                border: "1px solid red"
            });
        }
        var num = "";
        for (let i = 0; i < 4; i++) {
            num += Math.floor(Math.random() * 10);
        }
        $("#smsInf").val(num);
    });
    $("#telNum").focus(function() {
        $("#telStyle").html("可通过该手机号找回密码").css({
            color: "#cecece"
        });
        $("#telNum").css({
            border: "1px solid #cecece"
        });
    });
    $("#ruleStyle").toggle(function() {
        console.log("aaa")
        $(this).css({
            background: "url(../img/up.png) 2px 11px no-repeat"
        });
        console.log($(this).next())
        $(this).parent().next().css({
            display: "block"

        })
    }, function() {
        $(this).css({
            background: "url(../img/down.png) 2px 11px no-repeat"
        });
        $(this).parent().next().css({
            display: "'none',"

        });
    });
    var oCheck = document.getElementById("check");
    $("#sub").click(function() {
        if ($("#userName").val() == "") {

            $("#userName").next().css({ display: "block" });
            $("#userName").css({
                border: "1px solid red"
            })

        } else if (!(/^[^ ]+$/.test($("#passWard").val()))) {
            $("#passWard").next().css({ display: "block" });
            $("#passWard").css({
                border: "1px solid red"
            });
            $("#passWard").next().children().eq(0).css({
                color: "red"
            })
        } else if (!(/^.{8,16}$/.test($("#passWard").val()))) {
            $("#passWard").next().css({ display: "block" });
            $("#passWard").css({
                border: "1px solid red"
            });
            $("#passWard").next().children().eq(1).css({
                color: "red"
            })
        } else if (!(/(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]/.test($("#passWard").val()))) {
            $("#passWard").next().css({ display: "block" });
            $("#passWard").css({
                border: "1px solid red"
            });
            $("#passWard").next().children().eq(1).css({
                color: "red"
            })
        } else if ($("#telNum").val() == "") {
            $("#telNum").css({
                border: "1px solid red"
            });
            $("#telStyle").html("手机号有误").css({
                color: "red"
            });
        } else if (oCheck.checked != true) {
            alert("请阅读注册规则");
        } else {
            $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
                username: $("#userName").val(),
                password: $("#passWard").val()
            }, function(data) {
                console.log(data)
                alert(data.msg);
                window.location.href = "http://localhost:8080/html/login.html";
            })

        }
    })
})