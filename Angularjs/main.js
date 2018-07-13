"use babel";
let app = angular.module('app', []);

app.controller('ctrlMain', function($scope, rest){
	$scope.saluda = "Hola mundo";
	$scope.myFuncion = function(){
		console.log("this");
		rest.absData().then(function(res){
			$scope.informacion = res;
		})
	}

var dg = this;
dg.resultado =0;
dg.calcular = function(num1, num2){
dg.resultado = num1 * num2;

}

multiplicar(numero);

function tmultiplicar(dato1){
	dg.resultado_tabla[]
	var rango = 10;
	for (var i = 0; i < rango; i++) {
		dg.resultado_tabla.push({a:i; b:dato1, dato1 * i});
		push(i)
		}



})

.service('rest', function($http){
	var obj = {};

	obj.absData = function(){
        return $http.post('https://casacolombiana.com/api/v1/getMyApi').then(function(res){ return res.data})
    }

    return obj;

});