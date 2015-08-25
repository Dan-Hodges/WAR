define(function(require) {
  var $ = require('jquery');
  var Q = require("q");

  return function() {
    var deferred = Q.defer();
    $.ajax({
      url: "http://deckofcardsapi.com/api/deck/new/shuffle/"
    })
    .done(function(data) {
      deferred.resolve(data);
      console.log("data getDeck :", data);
    })    
    return deferred.promise;
  };
});