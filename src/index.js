import Scanner from './Scanner.js';
import parseTemplateToTokens from './parseTemplateToTokens.js';
import renderTemplate from './renderTemplate.js';
import lookup from './lookup.js'
window.YDF_TemplateEngine = {
    render(templateStr, data) {
        // 实例化一个扫描器，构造时候提供一个参数，这个参数就是模板字符串
        // 也就是说这个扫描器就是针对这个模板字符串工作的
        // var scanner = new Scanner(templateStr);
        // 测试scanUtil
        // var words = scanner.scanUtil("{{");
        // console.log(scanner.pos)
        // console.log(words)
        // scanner.scan("{{")
        // console.log(scanner.pos)
        // var words;
        // 当scanner没有到头
        // while(!scanner.eso()){
        //     // scanner.scanUtil('{{');
        //     words = scanner.scanUtil("{{");
        //     console.log(words);
        //     scanner.scan('{{');
        //     words =scanner.scanUtil("}}");
        //     console.log(words);
        //     scanner.scan('}}');
        // }

        // 调用parseTemplateToTokens函数，让模板字符串能够变为tokens数组
        var tokens = parseTemplateToTokens(templateStr);

        // 调用renderTemplate函数，让tokens数组变为dom字符串
        var domStr = renderTemplate(tokens, data);

        // 测试lookup函数
        // lookup({
        //     m: {
        //         n:{
        //             p:123
        //         }
        //     }
        // }, 'm.n.p')
        return domStr
    }
};