// const cos = require('@huohua/ilc-oss/cos');
import {cos} from '@huohua/ilc-oss'
const { upload } = cos({appName:'dida',userToken:'1'});

const props = {
  type: 'file',
  
  async onChange(info) {
    const file = info.target.files[0];
    console.error('file:', file);
    const result = await upload({file,pathPrefix:'test'});
    console.error('result:', result);
  },
};

const App = () => (
  <input {...props}/>
);

export default App;