import lookup from './lookup.js'
import parseArray from './parseArray.js'
/*
    函数的功能让tokens数组变为dom字符串
*/
export default function renderTemplate(tokens, data) {
    var resultStr = '';
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];

        // 看类型
        if (token[0] == "text") {
            resultStr += token[1]
        } else if (token[0] == "name") {
            // 如果是name类型，那么直接使用它的值，当然要用lookup
            // 因为防止这里是“a.b.c”由点符号的形式
            resultStr += lookup(data, token[1])
        } else if (token[0] == "#") {
            resultStr += parseArray(token, data)
        }
    }
    return resultStr;
}