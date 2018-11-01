angular.module('fotosgaleria').controller('NewFotoController', function($scope, $http, $routeParams){

    $scope.foto = {};
    $scope.mensagem = '';

    if($routeParams.idFoto){
        $http.get('v1/fotos/' + $routeParams.idFoto)
        .success(function(foto){
            $scope.foto = foto;
        })
        .error(function(errr){
            $scope.mensagem = 'Erro ao obter a foto ' + $routeParams.idFoto;
        })
    }

    $scope.enviarcadastro = function(){
        if($scope.formulario.$valid){
            if($scope.foto._id){
                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                .success(function(){
                    $scope.foto = {};
                    $scope.mensagem = 'Cadastro alterado com sucesso!!!' ;
                })
                .error(function(error){
                    $scope.mensagem = 'Erro ao alterar: ' + error;
                });
            }else{
                $http.post('v1/fotos', $scope.foto)
                .success(function(){
                    $scope.foto = {};
                    $scope.mensagem = 'Cadastro feito com sucesso!!!' ;
                })
                .error(function(error){
                    $scope.mensagem = 'Erro ao cadastrar: ' + error;
                });
            }
        }
    };
})
