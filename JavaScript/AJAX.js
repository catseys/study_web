/**
 * XHLHttpRequest 发送请求
 * 1 创建xhr对象
 *  let xhr=new XMLHttpRequest()
 * 2 与服务其建立连接
 *   使用open方法与远程服务器建立链接，反别有三个参数，第三个可选，
 *   xhr.open(method,url,async)
 *  -- method:post | get
 *  -- url:远程服务器地址
 *  -- 同步或异步，默认异步
 * 3 发送请求 
 * -- 有两种情况 
 * --- 1 发送get 
 *     直接 xhr.send()
 * --- 2 发送post 需要添加请求头 
 *     xhr.setRequestHeader("Content-type","application/json")
 *     xhr.send(JSON.Stringify(data))
 *      第二种
 *      xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
 *      xhr.send(查询字符串传递)
 * 
 * 4 监听
 *  xhr.onreadystatechange=function(){
 *     if(xhr.status==200&&xhr.state==4){}
 *  }
 */


