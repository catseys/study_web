# 接口 interface

```js
接口使用中结构类型，定义对象类型的一种方式

```

```js
1 可选属性 propname?:数据类型
2 只读属性 readonly
3 继承  interface a extends b,c,d{}  等于把两个接口合成一个,也可以多继承，使用逗号隔开

4 额外属性检查 
--1 使用类型断言 
--2 利用索引签名 
--3 利用类型兼容性，将它赋给一个值

5 定义函数接口 
interface xx{
    (变量:类型):类型
}
let a:xx=(变量)=>{
    return xx
}

6 实现类
class 类名 implements 接口名
```

## 接口的扩展 交叉类型

```js
处理冲突
定义多个同名接口会进行类型合并
定义同名类型别名会报错，避免类型c
```



# type 类型别名

```js
type typename = 对象类型或其他联合类型
```

# type&interface 异同

```js
--1 接口的扩展  extends
interface a extends b{}
--2 类型别名的扩展  使用交叉扩展的方式
type a = 类型b & {....}

--3 向现有的接口添加新字段
再定义一次同名接口的方式
--4 向现有的类型别名添加t
```

