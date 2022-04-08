//点击
var aboutPhoto=document.getElementById("about-photo")
var footCode=document.getElementById("foot-code");
//照片
var member=document.getElementById("about-img");
var code=document.getElementById("foot-code-img");
var outer=document.getElementById("fdouter");
var outerImg=document.getElementById("bigimg");
aboutPhoto.onclick=function(){
      outerImg.src=member.src;
        outer.style.width="100%";
        outer.style.height="100%";
        outer.style.backgroundColor="rgb(0, 0, 0,0.7)"
        outer.style.zIndex="10";
}
footCode.onclick=function(){
        outerImg.src=code.src;
        outer.style.width="100%";
        outer.style.height="100%";
        outer.style.backgroundColor="rgb(0, 0, 0,0.7)"
        outer.style.zIndex="10";
}
outer.onclick=function(){
        outerImg.src="none";
        outer.style.width="";
        outer.style.height="";
        outer.style.backgroundColor="";
        outer.style.zIndex="-1";
    }