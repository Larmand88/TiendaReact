
var BDTienda = require('./datos/bdtienda.js'),
	Operaciones = require('./datos/usuariosCRUD.js');
	OpArticulos = require('./datos/articulosCRUD.js');

Operaciones.eliminarUsuario((error, result) => {
	if(error) console.log(error);
	else{
		console.log(result);
		Operaciones.insertarUsuario((error, result) => {
			if(error) console.log(error);
			console.log(result);
		});
	}
});


OpArticulos.eliminarAllArticulos((error, result) => {
	if(error) console.log(error);
	else {
		console.log(result);
		var articulos = [
			{nombre: "Aguacate", img: "aguacate.jpg", precio: "500", stock: "46"},
			{nombre: "Ajo", img: "ajo.jpg", precio: "200", stock: "50"},
			{nombre: "Almendras", img: "almendras.jpg", precio: "600", stock: "8"},
			{nombre: "Arándanos", img: "arandanos.jpg", precio: "1100", stock: "80"},
			{nombre: "Brócoli", img: "brocoli.png", precio: "300", stock: "45"},
			{nombre: "Calabaza", img: "calabaza.jpg", precio: "600", stock: "45"},
			{nombre: "Canela", img: "canela.jpg", precio: "200", stock: "20"},
			{nombre: "Cebolla", img: "cebolla.jpg", precio: "400", stock: "30"},
			{nombre: "Fresa", img: "fresa.jpg", precio: "200", stock: "50"},
			{nombre: "Kiwi", img: "kiwi.jpg", precio: "300", stock: "36"},
			{nombre: "Limón", img: "limon.jpg", precio: "15", stock: "200"},
			{nombre: "Lychee", img: "lychee.jpg", precio: "500", stock: "80"},
			{nombre: "Maiz", img: "maiz.jpg", precio: "250", stock: "40"},
			{nombre: "Manzana", img: "manzana.jpg", precio: "340", stock: "39"},
			{nombre: "Naranja", img: "naranja.jpg", precio: "300", stock: "60"},
			{nombre: "Papa", img: "papa.jpg", precio: "350", stock: "60"},
			{nombre: "Pasta", img: "pasta.jpg", precio: "250", stock: "47"},
			{nombre: "Pimienta", img: "pimienta.jpg", precio: "380", stock: "70"},
			{nombre: "Repollo", img: "repollo.jpg", precio: "450", stock: "67"},
			{nombre: "Tomate", img: "tomate.jpg", precio: "280", stock: "78"},
			{nombre: "Zanahoria", img: "zanahoria.jpg", precio: "180", stock: "58"}
		]
		for (var i = 0; i < articulos.length ; i++) {
			var articulo = articulos[i];
			OpArticulos.insertarArticulo(articulo, (error, result) => {
				if(error) console.log(error);
				console.log(result);
			});
		}
	}
});
