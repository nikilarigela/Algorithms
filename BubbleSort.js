const arr = [7,3,0,6,2,5];
len = arr.length
const pass = len - 1; 
let count = 0;

function bubbleSort(array) {
  count = 0;
  for(let i= 0;i< len-1;i++){
    if(arr[i] > arr[i+1]){
      swap(i,i+1,array)
    }else count++;
  }    
}


function swap(i,j,arr){ 
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

while(count <= 4)
bubbleSort(arr);
console.log(arr);
