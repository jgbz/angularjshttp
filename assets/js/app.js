var app = angular.module('Projeto1', []);
app.controller('PrimeiroController', function($scope){
    $scope.mensagem = "Olá, esse é o meu primeiro projeto em AngularJs";
    $scope.user = {};

    $scope.cres = 0;
    $scope.cres2 = 0;
    //$scope.result = 0;

    $scope.soma = function(){
        $scope.cres++;
        $scope.result();
    }

    $scope.sub = function(){
        $scope.cres--;
        $scope.result();
    }

    $scope.result = function(){
        console.log($scope.cres);
        if($scope.cres <= 0){
            $scope.cres = 0;
        }
        if($scope.cres >= 10){
            $scope.cres = 10;
            alert('Estoque indisponivel')
        }
    }
    /*$scope.soma = function(){
        $scope.result = ($scope.cres + $scope.cres2);
    }*/

    //$scope.soma();
})