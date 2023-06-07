// 1. Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.
const arr1 = ["a", "b", "c", "d"]
const result1 = `${arr1[0]}+${arr1[1]}, ${arr1[2]}+${arr1[3]}`
console.log(result1);
/* 2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной */
const arr2 = [2, 5, 3, 9]
const result2 = arr2[0]*arr2[1]+arr2[2]*arr2[3]
console.log(result2)
/* 3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива. */
const arr3 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]
const result3 = arr3[1][0]
console.log(result3)
/* 4. Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'. */
const obj4 = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}
const result4 = obj4.js[0]
console.log(result4)
/* 5. Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее. */
const arr5= []
let el5 = "x"
const arrElementsQuantity5 = 3
for (let i = 0;i<arrElementsQuantity5;i+=1){
    arr5.push(el5)
    el5+="x"
}
console.log(arr5)
/* 6. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее. */
const arr6= []
let el6=''
const arrElementsQuantity6 = 8
for (let i = 1;i<=arrElementsQuantity6;i+=1){
    for (let j=1;j<=i;j+=1){
        el6+=i
    }
    arr6.push(el6)
    el6=''
}
console.log(arr6)
/* 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']. */
function arrayFill(element,length){

    const arr = []
    for (let i=0;i<length;i+=1){
        arr[i]=element
    }
    return arr
}
console.log(arrayFill("x",12))
/* 8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. */
const arr8 = [2, 5, 13, 9]
function elQuantityForTargetSum(arr,targetSum){
    let sum = 0
    for (let i=0;i<arr.length;i+=1){
        sum+=arr[i]
        if(sum>=targetSum){
            return i+1
        }
    }
    return `Value of array elements is not enough to reach ${targetSum}`
}
console.log(elQuantityForTargetSum(arr8,29))

/* 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке. */
const arr9 = [1, 2, 3, 4]
const reversedArray9 = arr9.sort((a,b)=>b-a)
console.log(reversedArray9)
/* 10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. */
const arr10 =  [[1, 2, 3], [4, 5], [6]]
const sum10 = arr10.flatMap(el=>el).reduce((sum,el)=>sum+el,0)
console.log(sum10)
/* 11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.  */
const arr11 =   [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
const sum11 = arr11.flatMap(el=>el.flatMap(insideEl=>insideEl)).reduce((sum,el)=>sum+el,0)
console.log(sum11)