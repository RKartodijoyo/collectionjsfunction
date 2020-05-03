var n;
function fibonanciku(n){
var fibo=[];
if(n===1){fibo=[0];}
else if(n===2){fibo=[0,1];}
else{
    fibo =[0,1];
    for(var i=2;i<n;i++){
        fibo.push(fibo[fibo.length-1]+fibo[fibo.length-2]);


    }
    console.log(fibo);
}
}
