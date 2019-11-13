# module

## path

- relative import , start with `/, ./ or ../`
- non-relative import

## module resolution strategies

two different strategies : Classic and Node , You can use the --moduleResolution flag to specify the module resolution strategy. If not specified, the default is Classic for --module AMD | System | ES2015 or Node otherwise

### classic

- relative
  A relative import will be resolved relative to the importing file
- non-relative
    <!-- 逐级向上查找，最后找到根目录位置 -->
  A non-relative import to moduleB such as import { b } from "moduleB
  - /root/src/folder/moduleB.ts
  - /root/src/folder/moduleB.d.ts
  - /root/src/moduleB.ts
  - /root/src/moduleB.d.ts
  - /root/moduleB.ts
  - /root/moduleB.d.ts
  - /moduleB.ts
  - /moduleB.d.ts

### node

var x = require("./moduleB")

a file located at /root/src/moduleA.js, which contains the import var x = require("./moduleB");

**following order**

> 先判断他是否是一个文件，然后判断它是否是一个文件夹，然后去找文件夹里面的 package.json 文件寻找入口，如果未指定一个入口，查找文件夹里面的 index.js 文件

1.  Ask the file named /root/src/moduleB.js
2.  Ask the folder /root/src/moduleB if it contains a file named package.json that specifies a "main" module. In our example, if Node.js found the file /root/src/moduleB/package.json containing { "main": "lib/mainModule.js" }, then Node.js will refer to /root/src/moduleB/lib/mainModule.js.
3.  Ask the folder /root/src/moduleB if it contains a file named index.js. That file is implicitly considered that folder’s “main” module.

resolution for a non-relative module name

node will look for your modules in special folders named node_modules

<!-- 同样也会逐级向上查找，只不过查找的目录是在node_nodules，并且遵守一点查找相对路径的规则 -->

- /root/src/node_modules/moduleB.js
- /root/src/node_modules/moduleB/package.json (if it specifies a "main" property)
- /root/src/node_modules/moduleB/index.js

- /root/node_modules/moduleB.js
- /root/node_modules/moduleB/package.json (if it specifies a "main" property)
- /root/node_modules/moduleB/index.js

- /node_modules/moduleB.js
- /node_modules/moduleB/package.json (if it specifies a "main" property)
- /node_modules/moduleB/index.js

## Typescript resolve modules

typescript 查找的可能多一点，它需要查找 ts 文件 ， tsx 文件，d.ts 文件

import { b } from "./moduleB" in /root/src/moduleA.ts

- /root/src/moduleB.ts
- /root/src/moduleB.tsx
- /root/src/moduleB.d.ts
- /root/src/moduleB/package.json (if it specifies a "types" property)
- /root/src/moduleB/index.ts
- /root/src/moduleB/index.tsx
- /root/src/moduleB/index.d.ts

import { b } from "moduleB"

感觉和 node 的模块解析类似，都是查找的 node_modules

## Additional module resolution flags

### Base URL

<!-- 防止你的模块放在其他文件里面 -->

Using a baseUrl is a common practice in applications using AMD module loaders where modules are “deployed” to a single folder at run-time. The sources of these modules can live in different directories, but a build script will put them all together.

### Path mapping
