window.addEventListener("load", function() {

var A=[];
var informacion=localStorage.getItem('local');
A=JSON.parse(informacion);
var historial = document.getElementById("Buyinglist")
for (var x = 0; x < historial.length; x++) {
    try {
        fila.innerHTML += '<tr> <td>' + A.datos[x].Producto + '</td><td>' + A.datos[x].Precio + '</td><td>' + A.datos[x].Subtotal + '</td></tr>';
    } catch {

    }
}

const procesarCompraBtn = document.getElementById('buying');
    procesarCompraBtn.addEventListener('click', procesarCompra());
    const cancelarCompraBtn = document.getElementById('cancel_buy');
    cancelarCompraBtn.addEventListener('click', cancelarCompra());
    const cliente = document.getElementById('cliente');
    const correo = document.getElementById('correo');
   
    function procesarCompra() {
        if (cliente.value == '' || correo.value === '') {
            alert("Debe llenar los campos");
        } else {
            alert("Venta Realizada");
            localStorage.clear();
        }

    }



});