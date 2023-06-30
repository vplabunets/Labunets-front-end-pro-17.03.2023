const string = "abracadabra";

(function (){
      function findUniqueElement(string){
        const elementsArray = new Set(string.split("") )
        return elementsArray.size
      }

      console.log(`String contains ${findUniqueElement(string)} unique elements`);
})()

