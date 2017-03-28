angular.module('quotebookApp').controller("qbControl", function ($scope, quoteService) {


  $scope.getQuotes = function () {
    $scope.quotes = quoteService.getQuotes();
  }
  $scope.getQuotes();

  $scope.addQuote = quoteService.addQuote;
  $scope.removeQuotes = quoteService.removeQuotes;

});
