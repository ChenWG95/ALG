const fs = require('fs')
const result = {}

/** 遍历目录生成对应结构对象 */
async function createMenuObj(path, parent) {
  const files = await fs.readdirSync(path)

  for (let i = 0; i < files.length; i++) {
    const dir = files[i]
    const isConfig = /^\./.test(dir) || ['node_modules'].find((item) => item === dir)

    if (isConfig) {
      continue
    }

    const stat = await fs.statSync(`${path}${dir}`)
    if (stat.isDirectory()) {
      parent[dir] = {}

      const subDirs = await fs.readdirSync(`${path}/${dir}`)

      for (let i = 0; i < subDirs.length; i++) {
        const subPath = `${path}${dir}/${subDirs[i]}`
        const stat = await fs.statSync(subPath)

        if (stat.isDirectory()) {
          parent[dir][subDirs[i]] = subPath
        }
      }
    }
  }
  return parent
}

/** 写入目录 */
async function writeMenu(obj) {
  let str = '# ALG\n\n'
  for (key in obj) {
    str += `## ${key}\n\n`

    let subObj = obj[key]
    if (Object.keys(subObj).length) {
      for (k in subObj) {
        str += `- [${k}](${subObj[k]})\n`
      }
      str += '\n'
    }
  }
  const buffer = new Uint8Array(Buffer.from(str))

  fs.writeFileSync('README.md', buffer)
}

async function main() {
  const obj = await createMenuObj('./', result)
  writeMenu(obj)
}

main()
