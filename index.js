let jogador = [
   ["André", 91, 82],
   ["Alex", 85, 68],
   ["Cibele", 75, 55],
   ["Paty", 97, 43],
   ["Amanda", 99, 15],
   ["Lucas", 100, 7],
   ["Mel", 120, 16],
]

for (let i = 0; i < jogador.length; i++){
   let nome = jogador[i][0];
   let vitoria = jogador[i][1];
   let derrota = jogador[i][2];
   let nivel = "";
       
   function avaliarJogador(vitoria,derrota){
     let saldo = 0;     
     return saldo = vitoria - derrota;
   }
   
   let saldoRankeadas = avaliarJogador(vitoria,derrota);
  
   if (saldoRankeadas <  10 ){
      nivel = "Ferro";
   } else if ( saldoRankeadas < 20){
      nivel = "Bronze";
   } else if ( saldoRankeadas < 50){
      nivel = "Prata";
   } else if ( saldoRankeadas < 80){
      nivel = "Ouro";
   } else if ( saldoRankeadas < 90){
      nivel = "Diamante";
   } else if ( saldoRankeadas < 100){
      nivel = "Lendário";
   } else {
      nivel = "Imortal";
   }   
         
   console.log(`Jogador(a) ${nome} ficou com ${saldoRankeadas} vitórias, portanto seu nivel é ${nivel}.`);
   
}
