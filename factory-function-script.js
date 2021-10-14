function CostBill(){

     let theSmallTotal = 0;
     let theMediumTotal = 0;
     let theLargeTotal = 0;


     function theSmallOrder() {
          theSmallTotal += 49;
     }

      function smallTotal() {
          return theSmallOrder;
     } 

     function theMediumOrder() {
          theMediumTotal += 79;
     }

     function mediumTotal() {
          return theMediumOrder;
     }

     function theLargeOrder() {
          theLargeTotal += 99;
     }

     function largeTotal() {
          return theLargeOrder;
     }

     function totalCost() {
           return theSmallTotal + theMediumTotal + theLargeTotal;
     }

     return {

          theSmallOrder, smallTotal, theMediumOrder, mediumTotal, theLargeOrder, largeTotal, totalCost
     }
}


