/**
 *
 * @authors Shoufu (gyming@outlook.com)
 * @date    2016-05-02
 * @version $Id$
 */

/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city = document.getElementById("aqi-city-input").value;
    var value = document.getElementById("aqi-value-input").value;

    aqiData[city] = value;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var table = document.getElementById("aqi-table");
    table.innerHTML = "<tr><td>城市</td><td>空气质量</td><td操 td></tr>";

    for (var key in aqiData) {
        var tr = document.createElement("tr");
        var tCity = document.createElement("td");
        var tValue = document.createElement("td");
        var bDelete = document.createElement("button");
        // 设置 dataset 属性，方便删除操作
        bDelete.setAttribute("data-city", key);

        var city = document.createTextNode(key);
        var value = document.createTextNode(aqiData[key]);
        var del = document.createTextNode("Delete");

        tCity.appendChild(city);
        tValue.appendChild(value);
        bDelete.appendChild(del);

        tr.appendChild(tCity);
        tr.appendChild(tValue);
        tr.appendChild(bDelete);

        table.appendChild(tr);
    }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
    // do sth.
    delete aqiData[city];
    renderAqiList();
}

function init() {
    var btn = document.getElementById("add-btn");
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    btn.onclick = function() {
        addBtnHandle();
    };
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    var table = document.getElementById("aqi-table");
    table.addEventListener("click", function(event){
        if (event.target.nodeName.toLowerCase() === "button") {
            delBtnHandle.call(null, event.target.dataset.city);
        }
    });
}

window.onload = function() {
    init();
}
