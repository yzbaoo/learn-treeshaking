// 测试lodash按需加载

// import { trimStart, trimEnd } from 'lodash'
import { trimStart, trimEnd } from 'lodash-es'

export const C = () => {
  console.log(trimStart('  a b c  '));
}

export const D = () => {
  console.log(trimEnd('  b c d  '));
}