/**
 * 防抖 
 * 防抖函数是一个高阶函数
 * 防抖就是通过一个定时器，总提感觉就是生硬，在延迟时间内执行防抖函数，将会重新开始⏲
 */

function bouncde(fn, delay = 1000) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        setTimeout(function () {
            fn.call(this)
            clearTimeout(timer)
            timer = null
        }, delay)
    }
}