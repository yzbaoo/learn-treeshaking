export const A = () => {
  console.log('你好我是A');
}

export const B = () => {
  console.log('你好我是B');
}

// 1.函数B因未被使用，标记为/* unused harmony export B */。生产环境会被Uglify删掉
// 2.若被引用，但是未被使用，压根不会被打包