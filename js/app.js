(function(){
	var app = angular.module('listado',[] );

	app.controller('productoController', function (){
		this.producto = {
			id : '001',
			nombre : "Producto 1",
			peso : "0.900 Kg",
			tamano : "1 x 1 m",
			precio : "500",
			garantia : "1 año",
			tipo : ["electronica", "computacion"]

		};
	});
});