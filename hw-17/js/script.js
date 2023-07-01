
 (function (){
      function padString(string, finalStringLength, symbol,right=true) {
          if (!string ||typeof string !=="string") return "Input string is missing or not correct"
          if (!finalStringLength || typeof finalStringLength !=="number") return "Final string length is missing or not correct"
          if ( !symbol || typeof symbol !=="string") return "Symbol is missing or not correct"
          if (typeof right !=="boolean") return "Right is not boolean"

          if(string.length>finalStringLength) return string.substring(0, finalStringLength)
          for (let i=string.length;i<=finalStringLength;i+=1){
                  right? string = string+symbol : string = symbol + string
          }
          return string
       }
     console.log(padString("word",12,"q", true));
 }) ()

