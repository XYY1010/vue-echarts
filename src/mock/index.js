import Mock from 'mockjs';
import {financial} from './financial.js';
import {fixinvestment} from './fix_investment.js'

//mock数据，测试时默认开启时
let data=[].concat(
    financial,
    fixinvestment
);

data.forEach((res)=>{
    Mock.mock(res.path,res.type,res.data);
});
