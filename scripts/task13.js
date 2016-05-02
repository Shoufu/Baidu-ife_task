/**
 *
 * @authors Shoufu (gyming@outlook.com)
 * @date    2016-05-02
 * @version $Id$
 */

/*
在注释下方写下代码
给按钮button绑定一个点击事件
在事件处理函数中
获取aqi-input输入的值，并显示在aqi-display中
*/
var button = document.getElementById("button");
var input = document.getElementById("aqi-input");
var display = document.getElementById("aqi-display");

button.onclick = function() {
    if (input) {
        display.innerHTML = input.value;
    }
}

/*
(function() {
    function $(id) {
        return document.getElementById(id);
    }

    var handler = function() {
        var num = parseInt($("aqi-input").value);
        if((!isNaN(num)) && (num>=0) && (num<1000)) {
            $("aqi-display").innerHTML = num;
        } else {
            alert($("aqi-input").value + "不是有效的AQI数值，请重新输入0-1000的有效整数！");
        }
    }

    $("button").onclick = function() {
        handler();
    }
    $("aqi-input").onkeyup = function (event) {
        if (event.keyCode === 13) {
            handler();
        }
    }
})();
*/
