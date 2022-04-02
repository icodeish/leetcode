
//阿拉伯数字转中文数字

var str = '98765'
function transForm(str) {
    let s1 = '123456789'
    let s2 = '一二三四五六七八九'
    for (let i = 0; i < 10; i++) {
        if (str === s1[i]) return s2[i]
    }
}
function arabTochinese(str) {
    return transForm(str[0]) + '万' + transForm(str[1]) + '千' + transForm(str[2]) + '百' + transForm(str[3]) + '十' + transForm(str[4])
}
console.log(arabTochinese(str))