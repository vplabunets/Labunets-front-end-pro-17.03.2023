const string = "abracadabra";

(function (){
      function findUniqueElementsQuantity(string){
        const elementsArray = new Set(string.split("") )
        return elementsArray.size
      }

      console.log(`String contains ${findUniqueElementsQuantity(string)} unique elements`);
})()

