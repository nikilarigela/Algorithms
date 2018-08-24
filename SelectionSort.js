const arr = [26,2444,35,8,89];

function selectionSort(array) {
    let i=0;
    while(i < array.length-1){
      let small = findSmall(i,arr.length,array);
      console.log(small);
      swap(small,i,array)
      i++;
    }
}


function swap(small,i,arr){ 
  let temp = arr[small];
  arr[small] = arr[i];
  arr[i] = temp;
}

function findSmall(i,length,ar) {
  let small = ar[i];
  let index = i;
  for(let k = i;k < length;k++){
    if(small > ar[k]){
      small = ar[k];
      index = k;
    }
  }
  return index;
}

selectionSort(arr);
console.log(arr);

