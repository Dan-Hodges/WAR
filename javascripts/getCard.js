define(function(require) {
  var $ = require("jquery");
  var Q = require("q");

  return function(argument) {
    var deferred = Q.defer();
    $.ajax({
      url: "http://deckofcardsapi.com/api/deck/"+ argument + "/draw/?count=1"
    })
    .done(function(data) {
      deferred.resolve(data);
    });
    return deferred.promise;
  };
});  