import fs from 'fs'
import { Module, Lesson } from '../interfaces/types'

const modules = load(process.env.NEXT_MODULE_PATH!)

export const allModules = () => {
    return modules
}

export const findModule = (path: string) => {
    return modules.find(module => module.path == path)
}

// ----------------------------------------------- //

function load(basePath: string) {

    const modules: Module[] = []
    const dirs = fs.readdirSync(basePath)

    for(let dir of dirs) {
        const path = `${basePath}/${dir}`
        const infoPath = `${path}/module.json`

        if (fs.existsSync(infoPath)) {

            const info = loadJson(infoPath)

            modules.push({
                name: info.name,
                code: info.code,
                description: info.description,
                extraName: info.extraName,
                icon: info.icon,
                path,
                lessons: loadLessions(path)
            })
        }
    }
    return modules
}

function loadLessions(path: string): Lesson[] {
    const lessons: Lesson[] = []

    const dirs = fs.readdirSync(path)

    for(let dir of dirs) {
        const lessonPath = `${path}/${dir}`
        const infoPath = `${lessonPath}/lesson.json`
        const materialPath = `${lessonPath}/readme.md`

        if (fs.existsSync(infoPath)) {

            const info = loadJson(infoPath)
            
            const filesList = loadFiles(`${lessonPath}/files`)

            lessons.push({
                number: info.number,
                theme: info.theme,
                date: info.date,
                description: info.description,
                tags: info.tags,
                materials: materialPath,
                path: lessonPath,
                files: filesList
            })
        }
    }

    return lessons.sort((a, b) => a.number - b.number)
}

function loadJson(path: string) {
    const fileContent = fs.readFileSync(path).toString() 
    const info = JSON.parse(fileContent)
    return info
}


function loadFiles(path: string) {
    console.log(path + " : " + fs.existsSync(path));
    
    if (fs.existsSync(path)) {
        console.log(path + " : " + fs.readdirSync(path));
        return fs.readdirSync(path)
    }
    return []
}