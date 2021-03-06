/**
 *
 * @authors Shoufu (gyming@outlook.com)
 * @date    2016-05-02
 * @version $Id$
 */


var aqiData = [
    ["北京", 90],
    ["上海", 50],
    ["福州", 10],
    ["广州", 50],
    ["成都", 90],
    ["西安", 100]
];

aqiData.sort(function(value1, value2){
    return value2[1] - value1[1];
});

(function () {
    /*
    在注释下方编写代码
    遍历读取aqiData中各个城市的数据
    将空气质量指数大于60的城市显示到aqi-list的列表中
    */
    var ranking = ["一", "二", "三", "四", "五", "六"];
    var ul = document.getElementById("aqi-list");
    for (var i=0; i<aqiData.length; i++) {
      if (aqiData[i][1] >= 60) {
          var li = document.createElement("li");
          li.innerHTML = "第" + ranking[i] + "名：" + aqiData[i][0] + "，" +aqiData[i][1];
          ul.appendChild(li);
      }
    }
})();

/*
(function () {
    var sortCount = aqiData.filter(function(item){
      return (item[1] > 60);
    });
    var aqiList = document.getElementById("aqi-list");
    for (var i=0; i<sortCount.length; i++) {
      aqiList.innerHTML += '<li>第' + (i + 1) + '名：' + sortCount[i][0] + '(样例) , ' + sortCount[i][1] + '</li>';
    }
})();
*/
