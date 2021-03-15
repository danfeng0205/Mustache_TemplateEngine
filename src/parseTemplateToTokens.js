import Scanner from './Scanner.js';
import nestTokens from './nestTokens.js'
/*
    将模板字符串变为tokens数组
*/
export default function parseTemplateToTokens(templateStr) {
    var tokens = [];
    // 创建扫描器
    var scanner = new Scanner(templateStr);
    let words;
    // 让扫描器工作
    while (!scanner.eso()) {
        // 收集开始标记之前的文字
        words = scanner.scanUtil('{{');
        if (words != '') {
            // 存起来,去掉空格
            // 尝试写一下空格，智能判断是普通文字的空格（去掉），还是标签中的空格
            let isInJJH = false;
            for (let i = 0; i < words.length; i++) {
                if (isInJJH && words[i] == ' ') {
                    
                }
            }
            tokens.push(['text', words]);
        }
        // 过双大括号
        scanner.scan('{{');
        // 收集开始标记之前的文字
        words = scanner.scanUtil('}}');
        if (words != '')
            // 这个words就是{{}}中间的东西，判断一下首字符
            if (words[0] == '#') {
                // 存起来
                tokens.push(['#', words.substring(1)]);
            } else if (words[0] == '/')
                tokens.push(['/', words.substring(1)]);
            else
                tokens.push(['name', words]);
        // 过双大括号
        scanner.scan("}}")
    }
    // console.log(tokens)
    return nestTokens(tokens)

}