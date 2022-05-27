/**
 * bounce 
 * 1 效果 在延迟时间内只执行最后一次 防抖
 * 原理 理由延迟定时器，如果延迟时间内执行该函数将会被清空，只执行最后一次
 */

function bounce(fn, delayt = 1000) {
    let timer;
    return function () {
        if (timer) {
            clearInterval(timer)
            timer = null
        }
        timer = setTimeout(function () {
            fn.call(this)
            clearTimeout()
            timer = null
        }, delayt)
    }
}
/**
 * 节流 
 * 在规范的时间内只执行一次，执行过后再执行下一次
 * 
 */
function jl(fn, delay = 1000) {
    let flag = true
    return function () {
        if (!flag) {
            return
        }
        flag = false
        let timer = setTimeout(function () {
            fn.call(this)
            flag = true
            clearTimeout(timer)
        }, delay)
    }
}
/**
 * 事件循环机制 
 * 限制性同步代码 再执行微任务 最后执行宏任务
 * 
 */

/**
 * dispaly:flex
 * flex-direction:设置主轴方向
 * justify-content: 元素在主轴上分配空间
 * align-items: 在辅轴上的分配空间，正对单列
 * align-content: 针对多列
 * flex-warp: 溢出后，是否换行
 * 
 * flex-grow
 * flex-skhiew
 * flex-basis
 * order
 */