interface test {
    name: string,
    age: number,
    only: symbol
}

type tesr1 = test["name" | "age" | "only"]

type test2 = test[keyof test]

type test3 = "name" | "age" | "only"

type test4 = test[test3]
// keyof 对象 可以返回该对象的所有键，返回值是一个
const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38, say: "je;;p" },
];

type test5 = typeof MyArray[number]
/**
 * 条件类型
 * someType extends otherType ?trueType:falseType 
 * 
 */

interface a {
    name: string
}
interface b extends a {
    age: number
}

type c = b extends a ? string : boolean
let c: c = "nice"

//条件类型与泛型结合
type test6<t extends number | string> = t extends number ? 123 : "s1dd"
