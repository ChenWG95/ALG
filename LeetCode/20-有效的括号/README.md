# 有效的括号

[LeetCode链接](https://leetcode-cn.com/problems/valid-parentheses/)

## 思路

遍历字符串，通过栈的方式进行比对

1. 当栈顶为空或栈顶元素与当前元素不匹配时，入栈（此时入栈有两种情况：开头字符入栈`[、{、(`，这种可以被清空。或者结尾字符入栈`]、}、)`，这种永远不会被清空）
2. 当栈顶不为空元素且匹配时，出栈
3. 最终根据栈是否为空判断是否是一个有效的括号

## 代码实现

````js
var isValid = function(s) {
  var rules = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'] 
  ])
  var stack = []

  for (let i = 0; i < s.length; i++) {
          if (rules.has(stack[0]) && rules.get(stack[stack.length - 1]) === s[i]) {
              stack.pop()
          } else {
              stack.push(s[i])
          }
  }

  return !stack.length
};

console.log(isValid("{[]}"))
````
