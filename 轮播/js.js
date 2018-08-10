var oWrap = document.getElementsByClassName("wrap")[0];
var aLi = oWrap.getElementsByTagName("li");
var oTab = document.getElementsByClassName("tab")[0];
var aSpan = oTab.getElementsByTagName("span");
var num = 0;
aLi[0].style.opacity = 1;
aSpan[0].className= "on";
for(var i=0;i < aSpan.length; i++){
  aSpan[i].index = i;
  aSpan[i].onclick = function(){
    num = this.index;
    for(var j=0; j < aSpan.length-1; j++)
    {
      aSpan[j].className= "";
      aLi[j].style.opacity = 0;
    }
    this.className= "on";
    aLi[num].style.opacity = 1;
  }
}
/*自动轮播代码*/
setInterval(function(){
  num++;
  num %= aLi.length;
  for(var j=0; j < aSpan.length-1; j++){
    aSpan[j].className= "";
    aLi[j].style.opacity = 0;
  }
  aSpan[num].className= "on";
  aLi[num].style.opacity = 1;
},1000);
