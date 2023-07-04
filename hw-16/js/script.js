
 (function (){
     const inputNumber = prompt("Please enter number")
     const inputPow = +prompt("Please enter number")

      function toPowerNumber(number, pow=1 ) {
          if (isNaN(number) || number === null || number === "") {
              alert("Number is not correct")
              return "Function was terminated due to not correct "
          }
          if (isNaN(pow) || pow === null || pow == "") {
              alert("Pow is not correct")
              return
          }
          const production = Number(number) ** Number(pow)
          return production
      }

 console.log(toPowerNumber(inputNumber,inputPow))

 }) ()

