
'use strict';

/* Controllers */

var app = angular.module('listado', []);

app.controller('productoController', function($scope) {






// cargamos los productos manualmente temporal

  $scope.productos =
  	[ 	
  		{
			id : '001',
			nombre : "Producto 1",
			peso : "0.900 Kg",
			tamano : "1 x 1 m",
			precio : "500",
			garantia : "1 año",
			tipo : ["electronica", "computacion"],
			url: "http://nacc-healthcare.org/wp-content/uploads/2013/07/no-photo-available.jpg",
			cabecera:"fabricada aca a la vuelta, funcion joya ..."

		},
		{
			id : '002',
			nombre : "Producto 2",
			peso : "1.900 Kg",
			tamano : "1 x 1 m",
			precio : "500",
			garantia : "1 año",
			tipo : ["electronica", "computacion"],
			url: "http://nacc-healthcare.org/wp-content/uploads/2013/07/no-photo-available.jpg",
			cabecera:"soy una cabecera ..."

		},
		{
			id : '003',
			nombre : "Producto 3",
			peso : "5.900 Kg",
			tamano : "1 x 1 m",
			precio : "500",
			garantia : "1 año",
			tipo : ["electronica", "computacion"],
			url: "http://nacc-healthcare.org/wp-content/uploads/2013/07/no-photo-available.jpg",
			cabecera:"soy un texto corto ..."

		},
		{
			id : '004',
			nombre : "Producto 4",
			peso : "100.900 Kg",
			tamano : "1 x 1 m",
			precio : "500",
			garantia : "1 año",
			tipo : ["electronica", "computacion"],
			url: "http://nacc-healthcare.org/wp-content/uploads/2013/07/no-photo-available.jpg",
			cabecera:"soy una cabecera 12345321 ..."

		},
		{
			id : '011',
			nombre : "Producto 11",
			peso : "0.900 Kg",
			tamano : "1 x 1 m",
			precio : "500",
			garantia : "1 año",
			tipo : ["electronica", "computacion"],
			url: "http://nacc-healthcare.org/wp-content/uploads/2013/07/no-photo-available.jpg",
			cabecera:"fabricada aca a la vuelta, funcion joya ..."

		},
		{
			id : '012',
			nombre : "Producto 12",
			peso : "1.900 Kg",
			tamano : "1 x 1 m",
			precio : "500",
			garantia : "1 año",
			tipo : ["electronica", "computacion"],
			url: "http://nacc-healthcare.org/wp-content/uploads/2013/07/no-photo-available.jpg",
			cabecera:"soy una cabecera ..."

		},
		{
			id : '013',
			nombre : "Producto 13",
			peso : "5.900 Kg",
			tamano : "1 x 1 m",
			precio : "500",
			garantia : "1 año",
			tipo : ["electronica", "computacion"],
			url: "http://nacc-healthcare.org/wp-content/uploads/2013/07/no-photo-available.jpg",
			cabecera:"soy un texto corto ..."

		},
		{
			id : '014',
			nombre : "Producto 14",
			peso : "100.900 Kg",
			tamano : "1 x 1 m",
			precio : "500",
			garantia : "1 año",
			tipo : ["electronica", "computacion"],
			url: "http://nacc-healthcare.org/wp-content/uploads/2013/07/no-photo-available.jpg",
			cabecera:"soy una cabecera 12345321 ..."

		},
		{
			id : '021',
			nombre : "Producto 21",
			peso : "0.900 Kg",
			tamano : "1 x 1 m",
			precio : "500",
			garantia : "1 año",
			tipo : ["electronica", "computacion"],
			url: "http://nacc-healthcare.org/wp-content/uploads/2013/07/no-photo-available.jpg",
			cabecera:"fabricada aca a la vuelta, funcion joya ..."

		},
		{
			id : '022',
			nombre : "Producto 22",
			peso : "1.900 Kg",
			tamano : "1 x 1 m",
			precio : "500",
			garantia : "1 año",
			tipo : ["electronica", "computacion"],
			url: "http://nacc-healthcare.org/wp-content/uploads/2013/07/no-photo-available.jpg",
			cabecera:"soy una cabecera ..."

		},
		{
			id : '023',
			nombre : "Producto 23",
			peso : "5.900 Kg",
			tamano : "1 x 1 m",
			precio : "500",
			garantia : "1 año",
			tipo : ["electronica", "computacion"],
			url: "http://nacc-healthcare.org/wp-content/uploads/2013/07/no-photo-available.jpg",
			cabecera:"soy un texto corto ..."

		},
		{
			id : '024',
			nombre : "Producto 24",
			peso : "100.900 Kg",
			tamano : "1 x 1 m",
			precio : "500",
			garantia : "1 año",
			tipo : ["electronica", "computacion"],
			url: "http://nacc-healthcare.org/wp-content/uploads/2013/07/no-photo-available.jpg",
			cabecera:"soy una cabecera 12345321 ..."

		},
	];
});