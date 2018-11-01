angular.module('fotosgaleria').controller('FotosController', function($scope, $http){

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    $http.get('v1/fotos')
    .success(function(fotos){
        $scope.fotos = fotos;
    })
    .error(function(error){
        console.log(error);
    });

    $scope.remover = function(foto){
        $http.delete('v1/fotos/' + foto._id)
        .success(function(){
            var pegaIndice = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(pegaIndice, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' excluida com sucesso!!';
        })
        .error(function(error){
            $scope.mensagem = 'Erro ao excluir foto ' + error;
        })
    };
});
