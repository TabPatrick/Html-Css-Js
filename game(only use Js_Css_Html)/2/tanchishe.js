window.onload=function(){
  var ul=document.querySelector('ul');
  var lis=document.getElementsByTagName('li');
  // var btn=document.getElementsByTagName('section')[0];
  var btn1=document.getElementById('1');
  var btn2=document.getElementById('2');
  var timer;
  //蛇头的top与left值
  var top=lis[0].offsetTop;
  var left=lis[0].offsetLeft;
  var flag=true;
  //存储蛇头的每一节的位置
  var snakePosi=[{x:lis[1].offsetLeft,y:lis[1].offsetTop},{x:lis[0].offsetLeft,y:lis[0].offsetTop}];
  //声明速度
  var speedX=10;
  var speedY=10;
  var contrStarPau=false;
  function keyContrMove(flag){
      clearInterval(timer);
      timer=setInterval(function(){
          if (!contrStarPau) {
              return;
          }
          if (flag) {
              top+=speedY;
              lis[0].style.top=top+'px';
          }else {
              left+=speedX;
              lis[0].style.left=left+'px';
          }
          //将蛇头的位置存入数组，目的是把它的位置赋给它的下一节
          snakePosi.push({x:left,y:top});
          if (snakePosi.length>lis.length) {
              snakePosi.shift();
          }
          for (var i =1; i<snakePosi.length; i++) {
              lis[i].style.top=snakePosi[snakePosi.length-1-i].y+'px';
              lis[i].style.left=snakePosi[snakePosi.length-1-i].x+'px';
          }
          if ((Math.abs(lis[0].offsetTop-div.offsetTop)<lis[0].offsetHeight && lis[0].offsetLeft==div.offsetLeft) || (Math.abs(lis[0].offsetLeft-div.offsetLeft)<lis[0].offsetWidth && lis[0].offsetTop==div.offsetTop)) {
              div.style.top=randomNum()+'px';
              div.style.left=randomNum()+'px';
              createLi();
          }
          if (lis[2].offsetTop<0 || lis[2].offsetTop>(ul.offsetHeight-lis[2].offsetHeight) || lis[2].offsetLeft<0 || lis[2].offsetLeft>(ul.offsetWidth-lis[2].offsetWidth)) {
              clearInterval(timer)
              alert('游戏结束！');
          }

      },33)
  }
  keyContrMove(true);
  document.onkeypress=function(event){
      event=event||window.event;
      if (event.keyCode==119 && flag==false) {
          if (speedY>0) {
              speedY=-speedY;
          }
          flag=true;
          keyContrMove(true);
      }
      if (event.keyCode==115 && flag==false) {
          if (speedY<0) {
              speedY=-speedY;
          }
          flag=true;
          keyContrMove(true);
      }
      if (event.keyCode==97 && flag==true) {
          if (speedX>0) {
              speedX=-speedX;
          }
          flag=false;
          keyContrMove(false);
      }
      if (event.keyCode==100 && flag==true) {
          if (speedX<0) {
              speedX=-speedX;
          }
          flag=false;
          keyContrMove(false);
      }
  }
  function randomNum(){
      var a=parseInt(Math.random()*(700-10)+10)
      return a=a-a%10;
  }
  function createLi(){
      var li=document.createElement('li');
      ul.appendChild(li);
  }
  function createDiv(){
      var div=document.createElement('div');
      div.style.top=randomNum()+'px';
      div.style.left=randomNum()+'px';
      ul.appendChild(div);
  }
  createDiv();
  var div=document.getElementsByTagName('div')[0];
  // btn.onclick=function(){
  //     contrStarPau=!contrStarPau;
  //     console.log(contrStarPau);
  // }
  btn1.onclick=function(){
    contrStarPau=true;
    console.log(contrStarPau);
}
btn2.onclick=function(){
  contrStarPau=false;
  console.log(contrStarPau);
}

}
/* 控件事件 */
function closeFunction() {
  if (!confirm("是否退出游戏？")) {
        self.location.href("../index.html");

  } else {
     history.back();
  }
}