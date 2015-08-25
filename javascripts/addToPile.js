define(function(require) {
  var $ = require("jquery");
  var Q = require("q");

  return function(argument, argument2, argument3) {
    var deferred = Q.defer();
    $.ajax({
      url: "http://deckofcardsapi.com/api/deck/"+ argument + "/pile/" + argument2 + "/add/?cards=" + argument3
    })
    .done(function(data) {
      deferred.resolve(data);
    });
    return deferred.promise;
  };
});  