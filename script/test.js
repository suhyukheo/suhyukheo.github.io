var lotto=[]
var result=[]
for (i=0;i<5;i++){
  var lotto=[]
  var result=[]
  for(let i=1;i<46;i++){lotto.push(i)}//로또 입력하기 
  for(let i=0;i<6;i++){ 
    var num=parseInt(Math.random()*(lotto.length-1)+1)
    result.push(lotto[num-1])
    lotto.splice(num-1,1);
  }
}

