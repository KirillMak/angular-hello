let app = angular.module('myApp', []);

app.directive('container', function () {
  return {
    restrict: 'EA',
    controllerAs: 'container',
    controller: helloAlert,
  }
});

app.directive('btn', function () {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    templateUrl: 'btn.html',
  }
});

function helloAlert() {
  this.btnHello = function () {
    alert('hello-world!');
  };
}