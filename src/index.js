const path = require('path')
const fs = require("fs");
const hbs = require('handlebars');


const template = (strings, pages) => {
  const list = pages.map(page => {
    return `
      <li>
        <a href='./demo/${page.file}'>${page.title}</a>
      </li>
    `
  })

  return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>demo</title>
    </head>

    <body>
      <div id="list">
        <ul>
          ${list}
        </ul>
      </div>
    </body>

    </html>
  `
}
const getFiles = function (dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, "utf-8", (err, files) => {
      if (err) {
        reject(err)
      }
      resolve(files)
    })
  })
};

const getHtmlTitle = (filename, dir) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(dir, filename), "utf-8", (err, content) => {
      if (err) {
        reject(err)
      }
      content.replace(/\<title\>(.+)\<\/title\>/i, (x, title) => {
        resolve(title)
      })
    })
  })
}


const genIndexPage = (pages) => {
  return new Promise((resolve, reject) => {
    const content = template`<div id='root'>${pages}</div>`
    fs.writeFile(path.join(__dirname, '../index.html'), content, (err) => {
      if (err) {
        reject(err)
      }
      resolve(true)
    })
  })
}

const main = async () => {
  const dir = path.resolve(__dirname, '../demo')
  const files = await getFiles(dir)
  const pages = []
  for (let file of files) {
    const title = await getHtmlTitle(file, dir)
    pages.push({ file, title })
  }
  await genIndexPage(pages)
}
main()
console.log("READ FILE SYNC END");
