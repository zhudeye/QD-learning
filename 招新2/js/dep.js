var imgList = document.getElementById("imgList");
var imgArr = document.getElementsByName("dep-i");
imgList.style.width = 1100 * imgArr.length + "px";
var navDiv = document.getElementById("navDiv");
var outer = document.getElementById("outer");
navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth) / 2 + "px";
var index = 0;
var allA = document.getElementsByName("dep-a");
allA[index].style.backgroundColor = "black";
allA[index].style.opacity = "0.75";
for (var i = 0; i < allA.length; i++) {
  allA[i].num = i;
  allA[i].onclick = function () {
    clearInterval(timer);
    index = this.num;
    imgList.style.left = index * -1100 + "px";
    // imgList.style.transition="all 0.5s";
    // move(imgList,"left",index * -1100,20);
    setA();
    move(imgList, "left", -1100 * index, 20, function () {
      auotChange();
    });
  };
}
auotChange();
function setA() {
  if (index >= imgArr.length - 1) {
    index = 0;
    setTimeout(function () {
      move(imgList, "left", 0, 8800);
    }, 150);
  }
  for (var i = 0; i < allA.length; i++) {
    allA[i].style.backgroundColor = "";
    allA[i].style.opacity = "";
    allA[i].style.width = "";
  }
  allA[index].style.backgroundColor = "black";
  allA[index].style.opacity = "0.75";
  allA[index].style.width = "40px";
}
var timer;
function auotChange() {
  timer = setInterval(function () {
    index++;
    move(imgList, "left", -1100 * index, 95, function () {
      setA();
    });
  }, 10000);
}
