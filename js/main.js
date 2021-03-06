(function() {
   var btn = document.getElementById("flip-btn"),
   pic = document.getElementById("coin"),
   randomValue,
   flipDefault = "Heads or Tails?",
   flipResults,
   textAnswer = document.getElementById("text-answer");

   btn.addEventListener("click", function() {
      textAnswer.className -= " push-center";
      textAnswer.className += " push-left";
      textAnswer.innerHTML = flipDefault;
      pic.src = "images/coin-flipping.gif";
      setTimeout(calcRandom, 2500);
   });

   function calcRandom() {
   	randomValue = Math.round(Math.random());

      if (randomValue === 0) {
         pic.src = "images/coin-heads.jpg";
         flipResults = "Heads\!";

      } else {
         
         pic.src = "images/coin-tails.jpg";
         flipResults = "Tails\!";
      }
      textAnswer.className -= " push-left";
      textAnswer.className += " push-center";
      textAnswer.innerHTML = flipResults;
   }
})();
