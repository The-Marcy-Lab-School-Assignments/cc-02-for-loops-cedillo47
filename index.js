//1
let countToTen = () => {
    for (let i = 1; i < 11; i++){
        console.log(i);
         
    }
  
};

//2
function countFromOne(num){
  for (let i = 1; i <= num; i++){
      console.log(i)
  }
}

//3
function countEveryEven(num){
  for (let i = 1; i<=num;i++){
      if (i % 2 === 0){
          console.log(i)
      }
  }
};

//4
function countEveryOdd(num){
  for (let i = 1; i<=num;i++){
      if (i % 2 !== 0){
          console.log(i)
      }
  }
};

//5 
function countEvens(num){
    let arr = [];
    for (let i = 0; i <= num.length;i++){
      if (i % 2 === 0){
          arr.push(num[i])
      }
  }
  return arr.length
};
    

console.log(countEvens([2,3,4,5,6,7,]))