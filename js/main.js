(function() {
   var btn = document.getElementById("flip-btn"),
   pic = document.getElementById("coin"),
   randomValue,
   flipDefault = "Head or Tails?",
   flipResults,
   textAnswer = document.getElementById("text-answer");

   btn.addEventListener("click", function() {
      textAnswer.innerHTML = flipDefault;
      pic.src = "images/coin-flipping.gif";
      setTimeout(calcRandom, 2500);
   });

   function calcRandom() {
   	randomValue = Math.round(Math.random());

      if (randomValue === 0) {
         flipResults = "Heads\!";
         pic.src = "images/coin-heads.jpg";

      } else {
         flipResults = "Tails\!";
         pic.src = "images/coin-tails.jpg";
      }
      textAnswer.innerHTML = flipResults;
   }
})();
