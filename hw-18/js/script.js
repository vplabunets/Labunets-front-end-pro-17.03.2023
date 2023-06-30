
const arr = [1,2,3,-1,-2];

 (function (){
      function getPositiveElArray(array, callback) {
          if (array.length===0) throw Error("input data is not correct: empty array")
          const positiveElArray = []
          for (let i=0; i<array.length;i+=1){
              if (!callback(array[i])) throw Error(`input data is not correct: ${i+1} element of array is NaN`)
              if (array[i]>0) positiveElArray.push(array[i])
          }
          if (positiveElArray.length>0) return positiveElArray
          return null
      }
     function checkNumbers(element){
         return (typeof element === "number") ? element : null
     }

     console.log(getPositiveElArray(arr,checkNumbers));
 }) ()

