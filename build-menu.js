// 遍历生成文件目录
// 1级文件夹
// 遍历文件夹 打印输出

/**
 * {
 *  a: {
 *    a1: {
 *    }
 *  }
 * }
 */
const fs = require('fs')
const result = {}

async function run(path, parent) {
  const files = await fs.readdirSync(path)

  for (let i = 0; i < files.length; i++) {
    const dir = files[i]
    const isConfig = /^\./.test(dir) || ['node_modules'].find(dir)

    if (isConfig) {
      continue
    }

    const stat = await fs.statSync(`${path}/${dir}`)
    if (stat.isDirectory()) {
      parent[dir] = await run(`${path}/${dir}`, {})
    }
  }

  return parent
}

async function main() {
  const obj = await run(__dirname, result)
  
  let str = '# ALG\n\n'
  for (key in obj) {
    str += `## ${key}\n\n`

    let subObj = obj[key]
    if (Object.keys(subObj).length) {
      for (k in subObj) {
        str += `- ${k}\n`
      }
      str += '\n'
    }
  }
  const buffer = new Uint8Array(Buffer.from(str))

  fs.writeFileSync('README.md', buffer)
}

main()

// 遍历N层结构

// 打印层级对象
