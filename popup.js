let timer = null, hours = 0, minutes = 0, seconds = 0

// 画时钟数字
function drawNumber() {
  const pointX = 190, pointY = 190, r = 160;
  const myClock = document.getElementById("clock"); // 时钟
  let deg = (Math.PI * 2) / 12;
  for (let i = 1; i <= 12; i++) {
    //计算每格的角度
    let angle = deg * i;
    //计算圆上的坐标
    let x = pointX + r * Math.cos(angle);
    let y = pointY + r * Math.sin(angle);
    //创建p,写入数字
    let number = document.createElement("div");
    number.className = "number";
    number.innerHTML = i;
    //减去自身的一半, 让p的中心点在圆弧上
    number.style.left = x - 10 + "px";
    number.style.top = y - 10 + "px";
    //添加到页面
    myClock.appendChild(number);
  }
};
// 画时钟间隔线
function drawLine() {
  const ul = document.getElementsByTagName("ul")[0]; // 时钟
  for (let i = 1; i <= 60; i++) {
    let degle = 6 * i; // 旋转角度
    //创建p,写入数字
    let li = document.createElement("li");
    li.className = i % 5 == 0 ? 'bg-line' : "sm-line";
    li.style.transform = `rotate(${degle}deg)`;
    //添加到页面
    ul.appendChild(li);
  }
};
function clock() {
  const hourEl = document.getElementById("hour"); // 时针
  const minuteEl = document.getElementById("minute"); // 分针
  const secondEl = document.getElementById("second"); // 秒针
  const date = new Date(); //获取当前时间
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  //时(0-23) 分(0-59)秒(0-59)
  //计算转动角度
  const hourDeg = hours * 360 / 12;
  const minuteDeg = minutes * 360 / 60;
  const secondDeg = seconds * 360 / 60;
  //设置指针
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
};
drawNumber();
drawLine();
clock();
window.onload = function () {
  timer = setInterval(clock, 1000);
};
window.onbeforeunload = function () {
  timer = null;
  clearInterval(timer);
};
chrome.browserAction.setIcon({
  path : "icon.jpeg"
});