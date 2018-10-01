(function(){
"use strict";

var pa_1=document.getElementById("pa_1");
var pa_2=document.getElementById("pa_2");
var pa_3=document.getElementById("pa_3");
var pa_4=document.getElementById("pa_4");
var pa_5=document.getElementById("pa_5");
var pa_6=document.getElementById("pa_6");
var pa_7=document.getElementById("pa_7");
var pa_8=document.getElementById("pa_8");
var pa_9=document.getElementById("pa_9");
var pa_10=document.getElementById("pa_10");
var pa_11=document.getElementById("pa_11");
var pa_12=document.getElementById("pa_12");
var pa_13=document.getElementById("pa_13");
var pa_14=document.getElementById("pa_14");
var pa_15=document.getElementById("pa_15");
var pa_16=document.getElementById("pa_16");
var start=document.getElementById("start");
var panels=document.getElementById("panels");
var main=document.getElementById("main");
var result=document.getElementById("result");
var restart=document.getElementById("restart");

function gameover(element) {
  return element === "inactive";
}

function chkpn(){if(start.className==="ongame"&&[pa_1.className,pa_2.className,pa_3.className,pa_4.className,pa_5.className,pa_6.className,pa_7.className,pa_8.className,pa_9.className,pa_10.className,pa_11.className,pa_12.className,pa_13.className,pa_14.className,pa_15.className,pa_16.className].every(gameover)===true
){
   main.className="conHidden";
   result.className="gameclear";
 }}//クリア条件定義

 function pRev(t){
  if(t.className==="inactive"){
    t.className="active";}
  else if(t.className==="active"){
    t.className="inactive";
    chkpn();
}}//パネル反転関数


pa_1.addEventListener("click",function(){
   pRev(pa_1); pRev(pa_2);pRev(pa_5);})
pa_2.addEventListener("click",function(){
  pRev(pa_1); pRev(pa_2);pRev(pa_3);pRev(pa_6);})
pa_3.addEventListener("click",function(){
  pRev(pa_3); pRev(pa_2);pRev(pa_4);pRev(pa_7);})
pa_4.addEventListener("click",function(){
  pRev(pa_3); pRev(pa_4);pRev(pa_8);})
pa_5.addEventListener("click",function(){
  pRev(pa_1); pRev(pa_5);pRev(pa_6);pRev(pa_9);})
pa_6.addEventListener("click",function(){
  pRev(pa_2); pRev(pa_5);pRev(pa_6);pRev(pa_7);pRev(pa_10);})
pa_7.addEventListener("click",function(){
  pRev(pa_3); pRev(pa_6);pRev(pa_7);pRev(pa_8);pRev(pa_11);})
pa_8.addEventListener("click",function(){
  pRev(pa_4); pRev(pa_7);pRev(pa_8);pRev(pa_12);})
pa_9.addEventListener("click",function(){
  pRev(pa_5); pRev(pa_9);pRev(pa_10);pRev(pa_13);})
pa_10.addEventListener("click",function(){
  pRev(pa_6); pRev(pa_9);pRev(pa_10);pRev(pa_11);pRev(pa_14);})
pa_11.addEventListener("click",function(){
  pRev(pa_7); pRev(pa_10);pRev(pa_11);pRev(pa_12);pRev(pa_15);})
pa_12.addEventListener("click",function(){
  pRev(pa_8); pRev(pa_11);pRev(pa_12);pRev(pa_16);})
pa_13.addEventListener("click",function(){
  pRev(pa_9); pRev(pa_13);pRev(pa_14);})
pa_14.addEventListener("click",function(){
  pRev(pa_10); pRev(pa_13);pRev(pa_14);pRev(pa_15);})
pa_15.addEventListener("click",function(){
  pRev(pa_11); pRev(pa_14);pRev(pa_15);pRev(pa_16);})
pa_16.addEventListener("click",function(){
  pRev(pa_12); pRev(pa_15);pRev(pa_16);})
//全パネル反転定義

var allpa=["pa_1","pa_2","pa_3","pa_4","pa_5","pa_6","pa_7","pa_8","pa_9","pa_10","pa_11","pa_12","pa_13","pa_14","pa_15","pa_16"]//スタート時のランダムタッチ用

var rNum=allpa[Math.floor(Math.random()*16)]

start.addEventListener("click",function(){
  if(start.className==="ongame"){return;}
panels.className="gstarted";
for (var i = 0; i < 15;i++) {
document.getElementById(allpa[Math.floor(Math.random()*16)]).click();
};
start.className="ongame";
})//スタートを押すとランダムで15回タッチ

restart.addEventListener("click",function(){
  result.className="conHidden";
  main.className="container";
  panels.className="bega";
  start.className="bs";
})//クリア後のリスタート

})();
