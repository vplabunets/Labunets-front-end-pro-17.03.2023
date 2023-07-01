import {indexOf,lastIndexOf,includes,some} from "../js/script.js"

 const array = [1,2,3,"a","b","c",-99,-98,-97,"x","y","z",1,2,3,"x"]

describe("indexOf method tests",()=>{
    test("indexOf should return -1 when element is not included in array",()=>{
        expect(indexOf(array,44)).toBe(-1)
    })
    test("indexOf should return element index",()=>{
        expect(indexOf(array,1)).toBe(0)
    })
    test("indexOf should return element index",()=>{
        expect(indexOf(array,"x")).toBe((9))

    })
})
describe("lastIndexOf method tests",()=>{
    test("lastIndexOf should return -1 when element is not included in array",()=>{
        expect(lastIndexOf(array,44)).toBe(-1)
    })
    test("lastIndexOf should return last element index",()=>{
        expect(lastIndexOf(array,1)).toBe(12)
    })
    test("lastIndexOf should return last element index",()=>{
        expect(lastIndexOf(array,"x")).toBe((array.length-1))

    })
})


describe("includes method tests",()=>{
    test("includes should return true when element is included in array",()=>{
        expect(includes(array,1)).toBe(true)
    })
    test("includes should return false when element is included in array",()=>{
        expect(includes(array,"test")).toBe(false)
    })
    test("includes should return true when element is included in array",()=>{
        expect(includes(array,"x")).toBe(true)

    })
})
describe("some method tests",()=>{
    test("some should return true whether at least whether at least one element in the array passes the test implemented by the provided function",()=>{
        expect(some(array,(element, index, array) => element >= 1)).toBe(true)
    })
    test("some should return false when not one element in the array passes the test implemented by the provided function ",()=>{
        expect(some(array,(element, index, array) => element < -100)).toBe(false)
    })
    test("some should return true whether at least whether at least one element in the array passes the test implemented by the provided function",()=>{
        expect(some(array,(element, index, array) => element === "x")).toBe(true)

    })
})