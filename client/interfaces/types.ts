export type ModuleType = {
    icon: string
    name: string
    extraName: string
    description: string
    code: string
    path: string
}

export type Module = {
    icon: string
    name: string
    extraName: string
    description: string
    code: string
    path: string
    lessons: Lesson[]
}

export type Lesson = {
    number: number
    theme: string
    description: string
    date: string
    tags: string[]
    materials: string
    path: string
    files: string[]
}