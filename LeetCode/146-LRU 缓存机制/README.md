# LRU 缓存机制

[LeetCode链接](https://leetcode-cn.com/problems/lru-cache/)

## 思路

通过Map结构创建当前缓存池的内容

put插入：

- 插入已有的key，把原来的key删除，然后再重新set一个相同的key（必须删除，否则原key的位置不会变化）
- 插入未有的key
  - 如当前内容已达上限：删除插入的第一个key(`this.map.keys().next().value`)获取，然后插入
  - 直接插入

## 代码实现

````js
/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.size = capacity
  this.map = new Map()
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (this.map.has(key)) {
      const temp = this.map.get(key)
      this.map.delete(key)
      this.map.set(key, temp)
      return this.map.get(key)
  }

  return -1
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
      this.map.delete(key)
  }

  if (this.map.size >= this.size) {
      this.map.delete(this.map.keys().next().value)
  }
  this.map.set(key, value)
};
````
