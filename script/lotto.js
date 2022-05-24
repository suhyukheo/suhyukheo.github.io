var result=[]
var lotto
let today=new Date()
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let day = today.getDay();
console.log(year)
//로또 번호1~45번를 6개
function make(){
  lotto=[]
  for(let i=1;i<46;i++){
    lotto.push(i)}
  for(let i=0;i<6;i++){ 
    var num=parseInt(Math.random()*45)
    var lotto=lotto.filter(function(item){return item !== num})
    $('.lotto').append(`<div class="col-1 lotto-box sort"><p>${num}</p></div>`)}
}

$('.make1').click((e)=>{
  $('.lotto').append(`<div class="col-2 sort lotto-box"></div>`);
  make()
})
console.log(result)