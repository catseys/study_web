//条件类型与泛型相结合
interface IdLabel {
    id: number
}
interface NameLabel {
    name: string
}

type IdOrName<t extends number | string> = t extends number ? IdLabel : NameLabel

// function foo<k extends string|number>(a:)