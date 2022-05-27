//索引访问类型

type t1 = {
    name: string,
    age: number
}

type l1 = t1["age"]

let data: l1 = 123

type l2 = t1["name" | "age"] //此时l2就就有string number两种联合类型


type i1 = t1[keyof t1] //此时i1 具有string和number组成的联合类型

//使用提前定义好的类型,获取到的也是一个联合类型
type i3 = "name" | "age"
type i2 = t1[i3]


//使用number来获取一个数组元素的类型，与typeof结合来获取数组元素的类型

const arr1 = [{ name: "lisa", age: 12 }, { name: "bob", age: 11 }]
//获取到的是数组某个元素的类型
type arrType = typeof arr1[number]

let arrTest: arrType = { name: " tset", age: 12 }

//使用索引类型获取某个元素的某个属性的类型,可以是单个也可以是多个
type arr1Type = typeof arr1[number]["name" | "age"]

 //只能在索引的时候使用类型，不能使用const来定义变量的引用只能使用类型


