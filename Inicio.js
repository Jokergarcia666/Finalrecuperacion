var total=0;
window.addEventListener("load",function(){
var articulo ={};
var producto=new Array();
var precios = new Array();
var subtotales = new Array();
var i =0;

var articulos=document.querySelector(".boton_compras");
console.log(articulos);
document.addEventListener("click",function(e){
if(e.target.getAttribute("class")=="boton_compras"){
    var union ="";
    var descripcion =e.target.getAttribute("id");
    var venta=document.querySelector("."+e.target.getAttribute("id")).textContent;
    for (x = 2; x < venta.length; x++) {
        union += venta[x];
    }
    total += parseInt(union);

    productos[i] = descripcion;
    precios[i] = venta;
    subtotal = venta;
    subtotales[i] = subtotal;
    var datos = [];
    for (d = 0; d < productos.length; d++) {
        datos.push({
            "Producto": productos[d],
            "Precio": precios[d],
            "Subtotal": subtotales[d]
        });
    }
    i++;
    articulo.datos = datos;
    console.log(JSON.stringify(articulo));
    localStorage.setItem('local', JSON.stringify((articulo)));


}
 



});

var car = document.getElementById("Comprar");
car.addEventListener("click", function() {
    if (localStorage.length > 0) {
        window.location = "Compra.html";
    }
})


});