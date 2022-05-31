import './App.css';
import {A} from './1.项目内代码shaking';
import {C,D} from './2.第三方代码shaking';
import {newE, newF} from './4.验证export{}'
import Upload from './3.ilc-oss使用示例';
function App() {
  A();
  C();
  D();
  newE();
  newF();
  return <Upload></Upload> 
}

export default App;
