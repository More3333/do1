let rand = document. getElementById('rand')
let out2= document. getElementById('out2')

function fr(){
    let r =Math.floor(Math.random()*10)+1
    out2.innerHTML = r
}
rand.onclick = fr

function aaa(a,b){
    var arr = [];
    for (i=0; i<=(b-a); i++){
        arr[i]=a+i
    }
    return arr
}




//for (let r = 0; r <= 100; r++){
   // let numRandom = r + (Math.random()* in2);
   // let numRandomRound = Math.round(numRandom)

//}