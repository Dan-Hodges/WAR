define(function(require) {
  var $ = require("jquery");
  var getDeck = require("getDeck");

  var deckId1 = "";
  var deckId2 = "";

  (function() {
    console.log("click");
    getDeck().then(function(data) {
      console.log(data);
      deckId1 = data.deck_id;
    });
    getDeck().then(function(data) {
      console.log(data);
      deckId2 = data.deck_id;
    });
  })();

  return {
    getDeckOne: function() {
      return deckId1;
    },
    getDeckTwo: function() {
      return deckId2;
    }
  };
});