const arr = [1, 6, 42, 34, 30, 26, 32, 15];

function smallNumber(arr, count) {
  let index = count;
  for (let i = count; i < arr.length; i++) {
    if (arr[index] > arr[i]) {
      index = i;
    }
  }
  return index;
}

function selectionSort(arr) {
  let count = 0;
  while (count < arr.length - 1) {
    let tempIndex = smallNumber(arr, count);
    let temp = arr[count];
    arr[count] = arr[tempIndex];
    arr[tempIndex] = temp;
    count++;
  }
  return arr;
}

document.body.innerHTML = selectionSort(arr);
