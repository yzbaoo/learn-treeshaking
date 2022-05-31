// export { default as E } from './component/E'
// export { default as F } from './component/F'

import E from './component/E'
import F from './component/F'

const newE = () => {
  console.error('newE');
  E();
}
const newF = () => {
  console.error('newF');
  F();
}

export {newE, newF}


// tips：写法一和二其实一样，写法一相当于
// import { default as F } from './component/F'
// export {F}
// import F from './component/F'  是import { default as F } from './component/F'的简写