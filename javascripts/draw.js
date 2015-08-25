define(function(require) {
  var $ = require("jquery");
  var getDeck = require("getDeck");
  var start = require("start");
  var getCard = require("getCard");

  var card1;
  var card2;
  var score1 = 0;
  var score2 = 0;  

  $("#draw").on('click', function() {
    pickACard();
  }); 

  $('#draw').keypress(function(e) { 
    if (e.which == 13) { 
      e.preventDefault();
      pickACard(); 
    } 
  }); 

  function pickACard() {
    var deckId1 = start.getDeckOne();
    var deckId2 = start.getDeckTwo();


    getCard(deckId1).then(function(data) {
      console.log(data);
      card1 = data.cards[0].value;
      var cardImage1 = data.cards[0].image;
      $("#cardOne").attr("src", cardImage1);
      if (card1 === "ACE") {
        card1 = 14;
      }
      if (card1 === "KING") {
        card1 = 13;
      }
      if (card1 === "QUEEN") {
        card1 = 12;
      }
      if (card1 === "JACK") {
        card1 = 11;
      }
      if (card1 == 0) {
        card1 = 10;
      }

      getCard(deckId2).then(function(data2) {
        console.log(data2);
        card2 = data2.cards[0].value;
        var cardImage2 = data2.cards[0].image;
        console.log(cardImage2);
        $("#cardTwo").attr("src", cardImage2);
        if (card2 === "Ace") {
          card2 = 14;
        }
        if (card2 === "KING") {
          card2 = 13;
        }
        if (card2 === "QUEEN") {
          card2 = 12;
        }
        if (card2 === "JACK") {
          card2 = 11;
        }
        if (card2 == 0) {
          card2 = 10;
        }
        if (card1 > card2) {
          score1 += 1;
        }
        if (card2 > card1) {
          score2 += 1;
        }
        if (data.remaining < 2) {
          $("#winner").html(" Winner");
        }

        console.log("score1 :", score1);
        console.log("score2 :", score2);
        $("#scoreOne").html(score1);
        $("#scoreTwo").html(score2);
      });
    });
  };
});