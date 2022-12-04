import * as data from './data.json'
import * as fs from 'fs'
import { SchemaType } from './client/src/features/data'

type ExtendedSchemaType = SchemaType & {
    minAC: number
    maxAC: number
    minFT: number
    maxFT: number
}

const newData: (ExtendedSchemaType | SchemaType)[] = (data.default as []).map((i: SchemaType) => {
    let newObj: ExtendedSchemaType | SchemaType = {...i}
    if(i.alcoholContent) {
        if(typeof i.alcoholContent === 'string') {
            const result = i.alcoholContent.match(/[\d\.]+/g)
            const numRes = result?.map(i => Number(i))
            if(numRes) newObj = {...i, minAC: Math.min(...(numRes as number[])), maxAC: Math.max(...(numRes as number[]))}
        }
        else newObj = {...i, minAC: i.alcoholContent, maxAC: i.alcoholContent}
    }
    if(i.fermentationTime) {
        const result = i.fermentationTime.match(/[\d\.]+/g)
        let numArr = result?.map(i => Number(i))
        if(numArr) {
            const str = i.fermentationTime.toLocaleLowerCase()
            if(str.includes("day")) numArr = numArr.map(i => i * 24)
            if(str.includes("week")) numArr = numArr.map(i => i * 24 * 7)
            if(str.includes("month")) numArr = numArr.map(i => i * 24 * 30)
            if(str.includes("year")) numArr = numArr.map(i => i * 24 * 365)
            newObj = { ...newObj, minFT: Math.min(...numArr), maxFT: Math.max(...numArr)}
        }
    }
    return newObj
})

fs.writeFile(__dirname + '/newData.json', JSON.stringify(newData), (err) => { if(err) console.log(err)})
