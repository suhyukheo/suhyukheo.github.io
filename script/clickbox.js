let random=[] //랜덤숫자 저장용
let game_arr=[]//랜덤숫자를 위해 존재하는 클릭박스 수 만큼 만들어두기위한 배열
let player=[]//플레이어의 클릭을 저장할 용도
let usercont=0//
let sistemcont=0

//박스 색깔 넣고빼는 함수 모아둔 그룹
function click_box(i,click_color){
  $('.clickbox').eq(i).addClass(click_color)
  setTimeout(()=>{
    $('.clickbox').eq(i).removeClass(click_color)
  },1000)
}
function removeall(){
  for(i=0;i<9;i++){
    $('.clickbox').eq(i).removeClass('click_color')
  }
}
function add_remove_sistem(i){
  sistemcont++
  click_box(i,'click_color')
}
function add_remove_fail(i){
  click_box(i,'fail_color')
}
function add_remove_sucsses(i){
  click_box(i,'sucsses_color')
}
//




//원하는 숫자만큼 다 눌렀을때 
function check(){
  usercont=0
  for (let i=0;i<player.length;i++){
    if(player[i]===random[i]){
      usercont++
    }
 }
 if(usercont===3){
   for(let i=0;i<9;i++){
     add_remove_sucsses(i)
   }
 }
 else{
  for(let i=0;i<9;i++){
    add_remove_fail(i)
  }
 }
 removeall()
}
// 

function start_group(){
  for(let i=0;i<9;i++){
    game_arr.push(i)
  }
  for (let i=0;i<3;i++){
    var num=parseInt(Math.random()*game_arr.length)//Math.random() 0~1미만 1포함 XX
    random.push(game_arr[num])
    game_arr.splice(num,1)
  }
  
  for(let i=1;i<random.length+1;i++){
    setTimeout(()=>{
      add_remove_sistem(random[i-1]);
    },1000*i)
  }
}



//박스 누르면 발생할 클릭이벤트를 포문을 통해생성하는 코드

//게임시작시 실행할 친구들
for(let i=0;i<9;i++){
  $('.clickbox').eq(i).on('click',function(){//클릭을 하면 아래 코드를 실행해 주세요.
    $('.clickbox').eq(i).addClass('click_color')//document.querySelector('.clickbox')[i].toggleClass('blue')
    player.push(i)//배열에 몇번째 친구 클릭했는지 넣어주기
    if (sistemcont<3){
      for(let i=0;i<9;i++){
        add_remove_fail(i)
      }
    }
    else if(player.length===3){
      check()
    }
})
}
$('.start').on('click',()=>{
  removeall()
  random=[]
  game_arr=[]
  player=[]
  usercont=0
  sistemcont=0
  start_group()
})