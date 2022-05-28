/**
 * 节流
 * 节流有一个开关变量，如果在单位时间内无论何时执行函数将会不会有变化
 * 如果为false将会停止函数执行，内部有一个判断，如果是false函数停止执行
 * true才会继续执行执行过后清空定时器
 * 
 */

function throttle(fn, delay = 1000) {
    let flag = true
    return function () {
        if (!flag) {
            return
        }
        flag = false
        timer = setTimeout(function () {
            fn.call(this)
            flag = true
            clearTimeout(timer)

        }, delay)
    }

}