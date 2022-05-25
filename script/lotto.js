let result
let lotto
let cont=0
let price=0
let week=['일','월','화','수','목','금','토']
let today=new Date()
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let day = today.getDay();
let hour = today.getHours();
let minutes =today.getMinutes();
let Seconds =today.getSeconds()
let time=today.toLocaleTimeString()
//로또 번호1~45번를 6개
function newtime(){
  today = new Date()
  year = today.getFullYear(); // 년도
  month = today.getMonth() + 1;  // 월
  date = today.getDate();  // 날짜
  day = today.getDay();
  hour = today.getHours();
  minutes =today.getMinutes()
  Seconds =today.getSeconds()
  time=today.toLocaleTimeString()
}

function make(){
  lotto=[]
  result=[]
  for(let i=1;i<46;i++){lotto.push(i)}//로또 입력하기 
  for(let i=0;i<6;i++){ 
    var num=parseInt(Math.random()*(lotto.length-1)+1)
    result.push(lotto[num-1])
    lotto.splice(num-1,1);
  }
  result.sort((a,b)=>{return a-b})
  return result
}

function pb_ex(){
  $('.pub').html('')
  newtime()
  $('.pub').append(`<p>발행일:&nbsp${year}/&nbsp${month}/&nbsp${date}&nbsp----&nbsp(${week[day]})&nbsp&nbsp${hour}:${minutes}:${Seconds}</p>`)
  $('.exp').html('')
  $('.exp').append(`<p>지급기한:&nbsp${year+1}/&nbsp${month}/&nbsp${date}&nbsp----&nbsp(${week[day]})&nbsp&nbsp${hour}:${minutes}:${Seconds+1}</p>`)

}

function rand(A){
  var l_content=$(`.lotto-content`)
  var list=make();
  l_content.append(`<div class="col-2 sort lotto-box sort"><p>${String.fromCharCode(65+A)}자동: </p></div>`)
  l_content.append(`<div class="col-7 lotto-box sort row">
  <div class="col-2 lotto-box sort"><p>${list[0]}</p></div>
  <div class="col-2 lotto-box sort"><p>${list[1]}</p></div>
  <div class="col-2 lotto-box sort"><p>${list[2]}</p></div>
  <div class="col-2 lotto-box sort"><p>${list[3]}</p></div>
  <div class="col-2 lotto-box sort"><p>${list[4]}</p></div>
  <div class="col-2 lotto-box sort"><p>${list[5]}</p></div>
  </div>`)
  l_content.append(`<div class="col-3 sort lotto-box sort"></div>`)
}

function recall(price){  
 $('.price').html('')
 $('.price').append(`
 <div class="col-2">금액:</div>
 <div class="col-8"></div>
 <div class="col-2 final-price sort">${price}</div>`)
}
function mkclick(){
  price+=1000
  rand(cont)
  recall(price)
  pb_ex();
  cont++
}


$('.publisheddate').append(`<div class="col-8 pub"><p>발행일:&nbsp</p></div>
<div class="col-2"></div><div class="col-2"></div>`)
$('.expirydate').append(`<div class="col-8 exp"><p>지급기한:</p></div>
<div class="col-2"></div><div class="col-2prt"></div>`)

$('.make1').click((e)=>{
  mkclick();
})
$('.make5').click((e)=>{
  for(i=0;i<5;i++){
    mkclick();
  }
})
$('.make10').click((e)=>{
  for(i=0;i<10;i++){
    mkclick();
  }
})