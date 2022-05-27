# ts基本数据类型

```typescript
1 数值 number

2 字符串 string

3 布尔值 boolean

4 未初始化的值 undefined 

5 空对象-不存在的值 null

6 数组-- type[]  --- Array<type>(泛型写法) 

7 对象 object/{}/{x:xx}... ,

8 tuple(元组) 限定数组类型和个数的数组
let tupleArr:[type1,type2]=[....]

9 枚举 enum xx{xxx=x,...}
数值枚举 -- 字串枚举 - 异构枚举 -- 常量枚举(用const定义)

10 any 不希望某个特定的值导致类型检查错误，使用会关闭ts类型检查

11 void
void表示没有返回值的函数的返回值

12 object

13 unknown

14 never 永远不会被观察到的值 

15 Function


```

## 函数

```js
具名函数
function xx(变量:type){
  
}


```

## 联合类型

```ja
联合类型由两个或多个类型组成的类型，联合类型又成为union类型，用管道符隔开

```

## 断言

```js
类型断言
变量 as type 
<type> 变量
类型断言转化为不太具体或更具体的

非空断言 x! 将从 x 值域中排除 null 和 undefined 

确定赋值断言:即在实例属性或变量声明后加一个！，表示告诉ts编译器会该属性或变量会被明确赋值

```



# 文字类型

```js
1 类型是一个字符串，值也能是该字符串
2 文字联合类型
3 数字文字类型
4 布尔文字型 -有两种，分别是true，false

5 类型推断 
--1 在任意位置推断为文字类型 as 某文字类型
--2 变为const   as const

```

