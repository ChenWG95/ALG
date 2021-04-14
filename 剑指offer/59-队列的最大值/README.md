# 队列的最大值

[LeetCode链接](https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/)

## 思路

本题最难的是理解题意，大致就是需要实现一个队列，队列有

- max_value：求最大值
- push_back：队尾插入
- pop_front：队首弹出

主要要求是操作的时间复杂度是`O(1)`，这就意味着我们不能通过`O[n]`的方式去遍历数组获取最大值。

所以我们可以通过两个队列来完成

1. queue存储正常的队列
2. queueMax存储最大值的降序队列

由于队列永远是`LIFO（后进先出）`的，所以我们是可以通过queueMax存储最大值，当遇到新的值时，将queueMax中比新值小的弹出，然后插入，就像是这样：

````js
[1, 2, 3, 4, 5] // 5最大，存入队列，这样在5之前的pop_shift出之后并不会影响max_value的取值

// 此时的maxQueue: [5]

[5, 4, 3, 2, 1] // 同样的，由于是存入队列，当5被弹出后，我们还有4，3，2，1最大值

// 此时的maxQueue: [5, 4, 3, 2, 1]
````

## 代码实现

````js
var MaxQueue = function() {
  this.queue1 = [];
  this.queue2 = [];
};

/**
* @return {number}
*/
MaxQueue.prototype.max_value = function() {
  if (this.queue2.length) {
      return this.queue2[0];
  }
  return -1;
};

/** 
* @param {number} value
* @return {void}
*/
MaxQueue.prototype.push_back = function(value) {
  this.queue1.push(value);

  // 最后一位比value小，就pop？
  while (this.queue2.length && this.queue2[this.queue2.length - 1] < value) {
      this.queue2.pop();
  }
  this.queue2.push(value);
};

/**
* @return {number}
*/
MaxQueue.prototype.pop_front = function() {
  if (!this.queue1.length) {
      return -1;
  }
  const value = this.queue1.shift();
  if (value === this.queue2[0]) {
      this.queue2.shift();
  }
  return value;
};
````
