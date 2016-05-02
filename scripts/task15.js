/**
 *
 * @authors Shoufu (gyming@outlook.com)
 * @date    2016-05-02
 * @version $Id$
 */

/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
    /*
    coding here
    */
    var data = [];
    var uList = document.getElementById("source");
    var list = uList.getElementsByTagName("li");
    var scoreArray = uList.getElementsByTagName("b");
    for (var i=0; i<list.length; i++) {
        city = list[i].childNodes[0].nodeValue.replace("空气质量：", "");
        score = scoreArray[i].childNodes[0].nodeValue;
        data[i] = [city, score];
    }
    return data;
}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
    return data.sort(function(value1, value2) {
        return value2[1] - value1[1];
    });
}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
    var array = ["一", "二", "三", "四", "五", "六", "七"];
    var resort = document.getElementById("resort");
    for (var i=0; i<data.length; i++) {
        if ( i>0 && (data[i][1] === data[i-1][1])) {
          array[i] = array[i-1];
        }
        resort.innerHTML += "<li>第" + array[i] + "名：" + data[i][0] + "空气质量：<b>" + data[i][1] + "</b></li>";
    }
    return resort;
}

function btnHandle() {
    var aqiData = getData();
    aqiData = sortAqiData(aqiData);
    render(aqiData);
}

function init() {
    var sortBtn = document.getElementById("sort-btn");
    // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
    sortBtn.onclick = function() {
        btnHandle();
        sortBtn.disabled = true;
    };
}

init();
