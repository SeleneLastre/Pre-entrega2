
let arreglo_producto = new Array ();


let gen_id = 1 ;

alert("Bienvenidos al Bazar de tu hogar!");

let flag = true ;

while (flag){

    let mensaje = "Indique lo que desea hacer: ";
    mensaje +=    "\n1) Cargar nuevo producto ";
    mensaje +=    "\n2) Eliminar producto ";
    mensaje +=    "\n3) Mostrar todos los productos en stock " ;
    mensaje +=    "\n4) Aplicar descuento " ;
    mensaje +=    "\n5) Salir " ;



    let resp = prompt(mensaje) ;

    switch (resp){

        case "1" : 
                ingresar_nuevo_producto();
                break;
        case "2" :          
                eliminar_producto();
                break;
        case "3" :
                mostrar_productos();
                break;
        case "4"  : 
                aplicar_descuento();
                break;
        case "5" : 
                alert("Muchas gracias por utilizar nuestra tienda online! ");
                flag=false;
                break;        
        case null : 
                alert("Muchas gracias por utilizar nuestra tienda online!");
                flag=false;
                break;
        default : 
                alert ("No ingreso una opcion valida") ;                     


    }

}


function ingresar_nuevo_producto(){

    let producto = solicitar_datos_producto ();

    if (producto) {


        producto.set_id(gen_id);
        gen_id ++ ;

        arreglo_producto.push(producto);



    }


}


function solicitar_datos_producto(){

    let check = true ;

    while (check){


        let msj = "" ;

        let marca = prompt("Ingrese marca").trim();
        let modelo = prompt ("ingrese modelo").trim();
        let precio = parseFloat(prompt ("Ingrese precio")); 


        if (!marca){

            msj += "\nDebe ingresar marca";

        }

        if (!modelo){

            msj += "\nDebe ingresar modelo" ;
        }

        if (isNaN(precio)){

            msj += "\nDebe ingresar un valor numerico en precio";

        }


        if (msj != ""){

            alert(msj);
            check = confirm ("¿Desea cargar de nuevo los datos?");


        }else {


            return new producto (marca,modelo,precio);




        }




    }


    return false ;

}



function eliminar_producto (){


    if (existen_productos()){


        mostrar_productos();

        let id_ingresado = prompt("Ingrese el id del producto a eliminar");

        if (id_ingresado){


            let producto_encontrado = arreglo_producto.find((a)=> a.id == id_ingresado);

            if (producto_encontrado){


                let resp = confirm ("¿Esta seguro de que desea eliminar el producto? "+producto_encontrado.mostrar_descripcion() + " ?");
                if (resp) {


                    arreglo_producto =arreglo_producto.filter ((a) => a.id != id_ingresado) ;
                    alert("Producto eliminado con exito");

                }

            }



        }



    }



}


function existen_productos(){

    if (arreglo_producto.length == 0) {

        alert("No hay productos en stock");

        return false ;
    }


    return true ;

}

function mostrar_productos(){

    if (existen_productos()) {

        let resp = prompt("La informacion se mostrara ordenada por precio.\n ¿Desea verla en forma Ascendente (A) o Desendente (D)?").toUpperCase() ;
        if (resp == "A") {

            arreglo_producto.sort((a,b) =>{
                
                if (a.precio > b.precio) {
                    return 1;
                }
                if (a.precio < b.precio) {
                    return -1;
                }
                
                return 0;
            })
        }

        if (resp == "D"){

            arreglo_productos.sort((a,b) =>{
                
                if (a.precio > b.precio) {
                    return -1;
                }
                if (a.precio < b.precio) {
                    return 1;
                }
                
                return 0;
            })
        }

        mostrar_arreglo();
    
    }

}


