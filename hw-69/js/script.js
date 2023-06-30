const player1 = { id: 1, name: 'Иван', level: 8 };

 (function (){
      function addPlayerToLevelSet(playerData){
          const levelSet = new WeakSet
          if (playerData.level>=10) {
              levelSet.add(playerData)
          }

        return levelSet
      }
     console.log(addPlayerToLevelSet(player1));
 }) ()

