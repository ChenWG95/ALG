# 插入排序

## 思路

从第二位开始依次取出数组中的项，依次和前面对比直到找到`比自己小的`或`0`，否则就一直把遍历的项往后移

## 代码实现

````js
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i]

    let j = i
    while(j > 0 && arr[j] > temp) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
}
````
