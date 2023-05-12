function decremento(num) {
   for (let i = num; i >= 0; i--) {
      if(i % 2 == 0) {
         console.log("Número Par:" + i);
      }
   }
};

decremento(10);
decremento(24);
decremento(25);

