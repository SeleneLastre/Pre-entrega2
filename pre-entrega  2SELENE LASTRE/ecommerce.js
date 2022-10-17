

const user = "cliente";
const pass_cliente = "cliente2022";


function  solicitarDatos(){

    let usuario = prompt("Por favor, ingrese su nombre de usuario:");
    let pass = prompt ("Por favor, ingrese su clave:");


    if (validarDatos (usuario,pass)){

        iniciarCarrito();


    }else{


        alert("El usuario/contraseña ingresados son incorrecots,por favor intente otra vez");



    }




}



function validarDatos(usuario,pass){


    if (usuario ===  user && pass === pass_cliente ){


        return true ;

    }else {


        return false ;

    }





}


function iniciarCarrito(){


    let lista = "" ;

    let finalizar_carrito = false ;


    while (!finalizar_carrito){


        let cod = prompt("ingrese codigo del producto buscado:");
        let producto = obtenerProducto(cod);


        if (producto){

            console.log("el producto se agrego con exito :"+producto);
            lista += "\n"+producto;


        }else{

            if (cod === null){

                finalizar_carrito = true ;


            }else {


                alert("Por favor, ingrese un codigo valido.");
            
            }

        }

    }

    if (lista != ""){

        let resp = confirm ("Esta seguro que desea finalizar la compra de :"+lista);
        if (resp){

            alert("Que tenga un buen dia!");


        }


    }








}




function obtenerProducto(cod){ 


    let producto  ;
    switch(cod){

        case "1" : 
                    producto = "taza ceramica";
                    break;
        case "2" : 
                    producto = "botella termica";
                    break;
        case "3" : 
                    producto = "termo de acero inoxidable" ;
                    break;
        case "4" : 
                    producto = "vaso termico"
                    break;       
        case "5" : 
                    producto = "mug de cafe" ;
                    break;

         default :
                    producto = false;           

    }


   return producto ;  



}


document.addEventListener('DOMContentLoaded', function() {
    solicitarDatos();

});



/**pre-entrega 2 */

class Productos {

        constructor (modelo,marca,precio){
    
            this.modelo = modelo ;
            this.marca = marca ;
            this.precio = precio;
            this.id = -1;
        }
    
  
        mostrar_descripcion(){
    
            return (this.id + " - " +this.modelo + " - " + this.marca + " - $" + this.precio) ;
    
    
    
        }
    
      
        set_id(nuevo_id){
    
    
            this.id = nuevo_id ;
        }
    
    
    }