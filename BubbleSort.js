const arr = [1, 6, 15, 34, 30, 26, 32, 42];

function bubbleSort(arr, swap) {
  let count = 0;
  while (count < arr.length) {
    let swap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap = true;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    if (swap === false) break;
    count++;
  }
  return arr;
}

document.body.innerHTML = bubbleSort(arr);
