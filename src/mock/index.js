import Mock from 'mockjs';
import {financial} from './financial.js';

//mock数据，测试时默认开启时
let data=[].concat(
    financial
);

data.forEach((res)=>{
    Mock.mock(res.path,res.type,res.data);
});
