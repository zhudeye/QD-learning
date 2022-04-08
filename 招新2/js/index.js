//about
var aboutTittle = document.getElementById("about-tittle");
var aboutText = document.getElementsByName("about-text");
var aboutPhoto = document.getElementsByName("about-photo");
var st = document.body.scrollTop || document.documentElement.scrollTop;
// console.log(st);

//预览
 //点击
 var footCode=document.getElementById("foot-code");
 //照片
 var member=document.getElementById("about-member-img");
 var code=document.getElementById("foot-code-img");
 var outer=document.getElementById("fdouter");
 var outerImg=document.getElementById("bigimg");

 var img = document.getElementById("litle-img");
 var guid = document.querySelector(".guid");
 let guidBtn = document.querySelectorAll(".guid-btn");
 let is = 0;

 aboutPhoto[0].onclick=function(){
        outerImg.src = member.src;
        outerImg.style.height = "655px";
        outer.style.width = "100%";
        outer.style.height = "100%";
        outer.style.backgroundColor = "rgb(0, 0, 0,0.7)";
        outer.style.zIndex = "1";
        guid.style.height = "48px";
        guidBtn[2].style.opacity = "0.5";
 }
 footCode.onclick=function(){
        outerImg.src = code.src;
        outerImg.style.height = "655px";
        outer.style.width = "100%";
        outer.style.height = "100%";
        outer.style.backgroundColor = "rgb(0, 0, 0,0.7)";
        outer.style.zIndex = "1";
        guid.style.height = "48px";
        guidBtn[2].style.opacity = "0.5";
 }
 outer.onclick=function(){
        outerImg.src = "none";
        outer.style.width = "";
        outer.style.height = "";
        outer.style.backgroundColor = "";
        outer.style.zIndex = "-1";
        guid.style.height = "0";
        outer.style.transform = "rotate(0)";
        outerImg.style.transform = "scale(1)";
        i = 0;
     }

     outer.onwheel=(event)=>{
      event.preventDefault();
      if(event.wheelDelta>0){
        outerImg.style.transform += "scale(2)";
      guidBtn[2].style.opacity="1";
      is++;
      }else{
        if(event.wheelDelta<0){
          if(is==1){
            guidBtn[2].style.opacity="0.5";
        }
      if (is >=1) {
        outerImg.style.transform += "scale(0.5)";
        is--;
      }
        }
      }
    }

     guid.onclick=function (event) {
      event.cancelBubble = true;
    };
    outerImg.onclick=(event) => {
      event.cancelBubble = true;
    };
    guidBtn[0].onclick=() => {
      outerImg.style.transform += "rotate(-90deg)";
    };
    guidBtn[1].onclick=() => {
      outerImg.style.transform += "rotate(+90deg)";
    };    
    guidBtn[2].onclick=() => {
      if (is == 1) {
        guidBtn[2].style.opacity = "0.5";
      }
      if (is >= 1) {
        outerImg.style.transform += "scale(0.5)";
        is--;
      }
    };
    guidBtn[3].onclick=() => {
      outerImg.style.transform += "scale(2)";
      guidBtn[2].style.opacity = "1";
      is++;
    };
    guidBtn[4].onclick=() => {
      outerImg.src = "none";
      outer.style.width = "";
      outer.style.height = "";
      outer.style.backgroundColor = "";
      outer.style.zIndex = "-1";
      guid.style.height = "0";
      outer.style.transform = "rotate(0)";
      outerImg.style.transform = "scale(1)";
      i = 0;
    };
//yulan



// alert(st);
var aboutUs = document.getElementsByName("about-us");
if (st < 325) {
  aboutTittle.style.animation = "none";
  aboutText[0].style.animation = "none";
  aboutText[1].style.animation = "none";
}
if (st < 450) {
  aboutPhoto[0].style.animation = "none";
}
if (st < 660) {
  for (var i = 0; i < aboutUs.length; i++) {
    aboutUs[i].style.animation = "none";
  }
}

//product
// alert(st);
var productLeft = document.getElementById("product-left");
var productTop = document.getElementById("product-right-top");
var productDown = document.getElementById("product-right-down");
if (st < 1600) {
  productLeft.style.animation = "none";
  productTop.style.animation = "none";
  productDown.style.animation = "none";
}

//member
var memberLeft = document.getElementsByName("member-left");
var memberRight = document.getElementsByName("member-right");
if (st < 2530) {
  for (var i = 0; i < memberLeft.length; i++) {
    memberLeft[i].style.animation = "none";
  }
  for (var i = 0; i < memberRight.length; i++) {
    memberRight[i].style.animation = "none";
  }
}

//hang
var hang = document.getElementById("hang");
var right = parseInt(getStyle(hang, "right"));

//滚轮函数
window.onscroll = function () {
  var st1 = document.scrollTop || document.body.scrollTop || document.documentElement.scrollTop;
  // alert(st1);
  //about
  if (st1 > 325) {
    // alert("hi");
    aboutTittle.style.animation = "about-text 1s linear forwards";
    aboutText[0].style.animation = "about-text 1.8s linear forwards";
    aboutText[1].style.animation = "about-text 1.8s linear forwards";
  }
  if (st1 > 560) {
    aboutPhoto[0].style.animation = "members 1.38s forwards";
  }
  if (st1 > 660) {
    aboutUs[0].style.animation =
      "us-move 1.84s linear infinite, cx 0.85s linear forwards";
    aboutUs[1].style.animation =
      "us-move 1.38s linear infinite, hk 0.85s linear forwards";
    aboutUs[2].style.animation =
      "us-move 1.54s linear infinite, nq 0.85s linear forwards";
    aboutUs[3].style.animation =
      "us-move 1.51s linear infinite, bm 0.85s linear forwards";
    aboutUs[4].style.animation =
      "us-move 1.61s linear infinite, zh 0.85s linear forwards";
    aboutUs[5].style.animation =
      "us-move 1.214s linear infinite, rc 0.85s linear forwards";
    aboutUs[6].style.animation =
      "us-move 1.71s linear infinite, fx 0.85s linear forwards";
    aboutUs[7].style.animation =
      "us-move 1.41s linear infinite, js 0.85s linear forwards";
  }

  //product
  if (st1 >= 1825) {
    productLeft.style.animation = "pro-left-move 1s forwards";
    productTop.style.animation = "pro-right-top-move 1s forwards";
    productDown.style.animation = "pro-right-down-move 1s forwards";
  }

  //member
  if (st1 >= 2530) {
    memberRight[0].style.animation = "member-member-right 13s linear infinite";
    memberRight[1].style.animation = "member-member-right 10s linear infinite";
    memberRight[2].style.animation = "member-member-right 19s linear infinite";
    memberRight[3].style.animation = "member-member-right 12.5s linear infinite";
    memberRight[4].style.animation = "member-member-right 18s linear infinite";
    memberRight[5].style.animation = "member-member-right 15s linear infinite";
    memberRight[6].style.animation = "member-member-right 17s linear infinite";
    memberRight[7].style.animation = "member-member-right 11s linear infinite";
    memberRight[8].style.animation = "member-member-right 14.5s linear infinite";
    memberRight[9].style.animation ="member-member-right 18.5s linear infinite";
    memberRight[10].style.animation = "member-member-right 15.5s linear infinite";
    memberRight[11].style.animation = "member-member-right 21s linear infinite";
    memberRight[12].style.animation = "member-member-right 10s linear infinite";
    memberRight[13].style.animation = "member-member-right 18s linear infinite";
    memberRight[14].style.animation = "member-member-right 15s linear infinite";
    memberRight[15].style.animation ="member-member-right 11.5s linear infinite";
    memberRight[16].style.animation = "member-member-right 14s linear infinite";
    memberRight[17].style.animation = "member-member-right 17s linear infinite";
    memberRight[18].style.animation ="member-member-right 12.5s linear infinite";
    memberRight[19].style.animation ="member-member-right 16.5s linear infinite";
    memberRight[20].style.animation = "member-member-right 19s linear infinite";
    memberRight[21].style.animation = "member-member-right 13.5s linear infinite";
    memberRight[22].style.animation = "member-member-right 15.5s linear infinite";

    memberLeft[0].style.animation = "member-member-left 10s linear infinite";
    memberLeft[1].style.animation = "member-member-left 19s linear infinite";
    memberLeft[2].style.animation = "member-member-left 9s linear infinite";
    memberLeft[3].style.animation = "member-member-left 15s linear infinite";
    memberLeft[4].style.animation = "member-member-left 13s linear infinite";
    memberLeft[5].style.animation = "member-member-left 21s linear infinite";
    memberLeft[6].style.animation = "member-member-left 11.5s linear infinite";
    memberLeft[7].style.animation = "member-member-left 15s linear infinite";
    memberLeft[8].style.animation = "member-member-left 10s linear infinite";
    memberLeft[9].style.animation = "member-member-left 19s linear infinite";
    memberLeft[10].style.animation = "member-member-left 17s linear infinite";
    memberLeft[11].style.animation = "member-member-left 13.4s linear infinite";
    memberLeft[12].style.animation = "member-member-left 8s linear infinite";
    memberLeft[13].style.animation = "member-member-left 20s linear infinite";
    memberLeft[14].style.animation = "member-member-left 15.8s linear infinite";
    memberLeft[15].style.animation = "member-member-left 17s linear infinite";
    memberLeft[16].style.animation = "member-member-left 10s linear infinite";
    memberLeft[17].style.animation = "member-member-left 16s linear infinite";
    memberLeft[18].style.animation = "member-member-left 13s linear infinite";
    memberLeft[19].style.animation = "member-member-left 15s linear infinite";
    memberLeft[20].style.animation = "member-member-left 19.5s linear infinite";
    memberLeft[21].style.animation = "member-member-left 13s linear infinite";
    memberLeft[22].style.animation = "member-member-left 10s linear infinite";
    // memberLeft[23].style.animation = "member-member-left 18s linear infinite";
  }

  //hang
  if (st1 <= 968) {
    hang.style.right = "-100px";
  } else {
    hang.style.right = "25px";
  }
};

hang.addEventListener('click',()=>{
  let st2=document.body.scrollTop || document.documentElement.scrollTop;
  let timer1=setInterval(()=>{
    if(document.documentElement.scrollTop>=500){
      document.documentElement.scrollTop-=document.documentElement.scrollTop/10;
    }else{
      document.documentElement.scrollTop=0;
      clearInterval(timer1);
    }
  },20)
})
