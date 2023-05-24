 //获取画布对象
 var canvas = document.getElementById("canvas");
 //设置画布为2D方式
 var context = canvas.getContext("2d");
 //获取浏览器窗口的宽度和高度
 var w = window.innerWidth;
 var h = window.innerHeight;
 //设置画布的宽度和高度
 canvas.width = w;
 canvas.height = h;
 //设置雪片数量
 var num = 500;
 //定义雪花数组
 var snows = [];
 for (var i = 0; i < num; i++) {
     //向数组填充元素，元素属性有坐标及半径，均为随机生成，其中半径上限为7
     snows.push({
         x: Math.random() * w,
         y: Math.random() * h,
         r: Math.random() * 7,
     });
 };
 //绘制图片
 function draw() {
     context.clearRect(0, 0, w, h); //清空画布
     context.beginPath(); //画笔开始
     for (var i = 0; i < num; i++) {
         var snow = snows[i];
         context.fillStyle = "rgba(255,255,255,0.5)"; //设定填充方式为白色半透明
         context.moveTo(snow.x, snow.y); //画笔移动到指定坐标处
         context.arc(snow.x, snow.y, snow.r, 0, Math.PI * 2); //根据属性绘制圆形
     }
     context.fill(); //填充路径
     //雪片落下
      move();
 };
 function move() {
     for (var i = 0; i < num; i++) {
         var snow = snows[i];
         snow.y += (8 - snow.r) / 10; //根据雪片大小调整落下速度
         if(snow.y > h){ //如果雪片超出画布范围，则在顶端重绘
             snows[i]={x:Math.random() * w,y:0,r:snow.r}
         }
     }
 };
 //执行和调用函数
 draw();
 setInterval(draw, 1); //每隔一毫秒重绘一次
 
 
 (function(window,document,undefined){
         var aaa;
         var hearts = [];
         window.requestAnimationFrame = (function(){
             return window.requestAnimationFrame ||
             window.webkitRequestAnimationFrame ||
             window.mozRequestAnimationFrame ||
             window.oRequestAnimationFrame ||
             window.msRequestAnimationFrame ||
             function (callback){
                 setTimeout(callback,1000/60);
             }
         })();
         init();
         function init(){
             css(".heart{width: 1px;height: 1px;position: fixed;");
             attachEvent();
              
             gameloop();
         }
         function gameloop(){
             for(var i=0;i<hearts.length;i++){
                 if(hearts[i].alpha <= 0){
                     document.body.removeChild(hearts[i].el);
                     hearts.splice(i,1);
                     continue;
                 }
                 hearts[i].y++;
                 hearts[i].x+=hearts[i].xx;
                 hearts[i].scale -= 0.01;
                 hearts[i].alpha -= 0.008;
                 hearts[i].el.style.cssText = "left:"+hearts[i].x+"px;top:"+hearts[i].y+"px;opacity:"+hearts[i].alpha+";transform:scale("+hearts[i].scale+","+hearts[i].scale+") rotate(5deg);color:"+hearts[i].color;
             }
             requestAnimationFrame(gameloop);
              
         }
         function attachEvent(){
             var old = typeof window.onmousemove==="function" && window.onmousemove;
             window.onmousemove = function(event){
                 old && old();
                 createHeart(event);
             }
         }
         function createHeart(event){
             var d = document.createElement("samp");
             d.className = "heart";
             d.innerHTML = "♪";//设置跟随鼠标移动的图案
             hearts.push({
                 el : d,
                 x : event.clientX - -25,//设置图案跟随鼠标的偏移量
                 y : event.clientY - -25,
                 xx : Math.pow(-1,(Math.round(Math.random()))) * Math.random(),
                 scale : 3,//设置跟随的图案大小
                 alpha : 2,
                 color : randomColor()
             });
             document.body.appendChild(d);
         }
         function css(css){
             var style = document.createElement("style");
             style.type="text/css";
             try{
                 style.appendChild(document.createTextNode(css));
             }catch(ex){
                 style.styleSheet.cssText = css;
             }
             document.getElementsByTagName('head')[0].appendChild(style);
         }
         function randomColor(){
             /* return "rgb("+(~~(Math.random()*255))+","+(~~(Math.random()*255))+","+(~~(Math.random()*255))+")"; */ //设置图案颜色随机
             return "rgba("+(~~(255))+","+(~~(255))+","+(~~(255))+","+(~~(5))+")";
         }
 })(window,document);