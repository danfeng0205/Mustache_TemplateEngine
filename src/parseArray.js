import lookup from './lookup.js'
import renderTemplate from './renderTemplate.js';
/*
    处理函数，结合renderTemplate实现递归
    注意：这个函数接收的参数是token！而不是tokens！
    token是什么，就是一个简单的['#','students',[]]

    这个函数要递归调用renderTemplate函数，调用多少次？？？
    千万别蒙圈！由data决定

*/

export default function parseArray(token, data) {
    // 得到整体数据data中这个数组要使用的部分
    var v = lookup(data, token[1]);
    // 结果字符串
    var resultStr = '';
    // 遍历v数组，v一定是数组
    // 全场最难循环
    // 遍历数组而非tokens。数组中的数据有几条，就要遍历几条
    for (let i = 0; i < v.length; i++) {
        // 这里要补一个 “.” 属性
        resultStr += renderTemplate(token[2], {
            ...v[i],
            '.': v[i]
        })
    }
    return resultStr
};