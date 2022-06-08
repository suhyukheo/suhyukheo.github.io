let result
let lotto
let cont=0
let price=0
let clean=[]
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
  clean=document.querySelector('.clean').value.split(',').map(Number)
  for(let i=1;i<46;i++){lotto.push(i)}//로또 입력하기 
  lotto=lotto.filter((data)=>{return !clean.includes(data)})
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
function reset(){
  $('.publisheddate').html('')
  $('.publisheddate').append(`<div class="col-8 pub"><p>발행일:&nbsp</p></div>
   <div class="col-2"></div><div class="col-2"></div>`)
  $('.expirydate').html('')
  $('.expirydate').append(`<div class="col-8 exp"><p>지급기한:</p></div>
  <div class="col-2"></div><div class="col-2prt"></div>`)
  $('.lotto-content').html('')
  $('.price').html('')
  price=0
  cont=0
}

function rand(A){
  var l_content=$(`.lotto-content`)
  var list=make();
  l_content.append(`<div class="col-3 sort lotto-box sort"><p>${String.fromCharCode(65+A)}자동: </p></div>`)
  l_content.append(`<div class="col-7 lotto-box sort row">
  <div class="col-2 lotto-box sort"><p>${list[0]}</p></div>
  <div class="col-2 lotto-box sort"><p>${list[1]}</p></div>
  <div class="col-2 lotto-box sort"><p>${list[2]}</p></div>
  <div class="col-2 lotto-box sort"><p>${list[3]}</p></div>
  <div class="col-2 lotto-box sort"><p>${list[4]}</p></div>
  <div class="col-2 lotto-box sort"><p>${list[5]}</p></div>
  </div>`)
  l_content.append(`<div class="col-2 sort lotto-box sort"></div>`)
}

function recall(price){  
 $('.price').html('')
 $('.price').append(`
 <div class="col-3">금액:</div>
 <div class="col-6"></div>
 <div class="col-3 final-price sort">${price}</div>`)
}
function mkclick(){
  price+=1000
  rand(cont)
  recall(price)
  pb_ex();
  cont++
}
function crm(){
  setTimeout(function(){
    $('#main-c').removeClass('shake')
    console.log('1')
  },1000)

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
$('.re').click((e)=>{
  reset()
})
$('.shakebtn').click((e)=>{
  $('#main-c').addClass('shake')
  crm()
  var shcont=price/1000
  cont=0
  $('.lotto-content').html('')
  for (i=0;i<shcont;i++){
    rand(cont)
    cont++
  }
})

//여기는 아버지의 
$('.clean').on('change',((e)=>{
  clean=e.target.value.split(',').map(Number)
  for(i=0;i<clean.length;i++){if(clean[i]>=46){clean.splice(i,1)}}
  console.log(clean)
  console.log(e.target)
  console.log(document.querySelector('.clean').value)
}))

function cleaninput(){
  
}
