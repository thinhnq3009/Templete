
const app = angular.module('app', [])

app.controller('test', ($scope) => {
    $scope.firstButton = "Hello"
})

$('#test').text("World")