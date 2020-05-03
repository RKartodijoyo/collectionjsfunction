function beer(){
countbeer=99
 while(countbeer>=0){
     var bottleWord ="bottle";
     if(countbeer===1){
         bottleWord ="bottles";
     }
     if(countbeer===0){ 
     console.log("none bottles of beer on the wall");
console.log("none bottles of beer ,");
console.log("Go to the store and buy some more, 99 bottles of beer on the wal");
} else{

console.log(countbeer +" "+bottleWord +" of beer on the wall");
console.log(countbeer +" "+bottleWord +" of beer ,");
console.log("Take one down, pass it around,");
countbeer--;
console.log(countbeer +" "+bottleWord +" of beer on the wall\n");
}
}}
