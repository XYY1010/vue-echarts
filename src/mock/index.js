import Mock from 'mockjs';
import {financial} from './financial.js';
import {fixinvestment} from './fix_investment.js';
import {energy} from './energy.js';

//mock数据，测试时默认开启时
let data=[].concat(
    financial,
    fixinvestment,
    energy
);

data.forEach((res)=>{
    Mock.mock(res.path,res.type,res.data);
});
