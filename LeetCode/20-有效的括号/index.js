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