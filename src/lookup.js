/*
    功能是可以再dataObj对象中，寻找连续点符号的keyName属性
    比如：dataObj是
    {
        a: {
            b: {
                c: 100
            }
        }
    }
    那么lookup(dataObj, 'a.b.c’)结果就是100
    这个函数是某个大厂的面试题
*/
export default function lookup(dataObj, keyName) {
    // 查看keyName中是否有点符号，但不能是 . 本身
    if (keyName.indexOf('.') != -1 && keyName != '.') {
        // 如果有符号，那么久拆开
        var keys = keyName.split('.');
        // sheh
        var temp = dataObj;
        for(let i = 0 ; i < keys.length; i++){
            temp = temp[keys[i]]
        }
        return temp;
    }
    // 如果没有点符号
    return dataObj[keyName]
}