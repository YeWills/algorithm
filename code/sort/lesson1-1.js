export default (arr) => {
  // 冒泡排序
  for (let i = arr.length - 1, tmp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let c = arr[j];
        arr[j] = arr[j + 1]
        arr[j + 1] = c;
      }
    }
  }
  return arr
}
