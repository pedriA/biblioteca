/*function validacion(){
    let name = document.getElementById('nombre').value;
    let age = document.getElementById('edad').value;
    let email = document.getElementById('email').value;
    let datex = document.getElementById('fecha').value;
    let list = document.getElementById('lista').selectedIndex;
    let multiple = document.getElementById('chk');
    let unique = document.getElementsByName('rdb');
    let bandera = false; 

    //Validación del campo nombre
    if(name === '' || name === null || name.lenght === 0 || /^\s+$/.test(name)){
        Swal.fire({
        icon: 'error',
        title: 'Erron en Campo',
        text: 'El campo nombre no puede estar vacio o lleno de espacios en blanco!',
        footer: 'Revisa por favor'
        })
        return false; 
    }  

    //Validación del campo edad 
    if(age === '' || age === null || age.lenght === 0 ||isNaN(age)){
        Swal.fire({
        icon: 'error',
        title: 'Erron en Campo',
        text: 'El campo Edad no puede estar vacio o debe ser un número!',
        footer: 'Revisa por favor'
        })
        return false; 
    } 
    
    //Validación del campo email 
    if(!(/^\S+@\S+\.\S+/.test(email)) || email === '' || email === null || email.lenght === 0 ){
        Swal.fire({
        icon: 'error',
        title: 'Erron en Campo',
        text: 'El campo Email esta incorrecto o vacio!  ',
        footer: 'Revisa por favor'
        })
        return false; 
    }

    //Validación del campo fecha 
    if(!isNaN(datex)){
        Swal.fire({
            icon: 'error',
            title: 'Erron en Campo',
            text: 'El campo fecha esta incorrecto o vacio!  ',
            footer: 'Revisa por favor'
            })
            return false; 
    }
    
    //Validación del checkbox
    if(list === null || list === 0 || list === ''){
        Swal.fire({
            icon: 'error',
            title: 'Erron en Campo',
            text: 'El campo Lista esta vacio!  ',
            footer: 'Revisa por favor'
            })
            return false; 
    }

    //Validación Opción multiple

    if(!multiple.checked){
        Swal.fire({
            icon: 'error',
            title: 'Erron en Campo',
            text: 'No seleccionó la opción!  ',
            footer: 'Revisa por favor'
            })
            return false;
    }

    //Validación radio buttom
    if(!document.querySelector('input[name = "rdb"]:checked')){
        Swal.fire({
            icon: 'error',
            title: 'Erron en Campo',
            text: 'No seleccionó la opción!  ',
            footer: 'Revisa por favor'
            })
            return false;
    }
    Swal.fire('Formualario Enviando con Éxito!')
    return true;    
}*/
//VALIDACION NOMBRE
$('#frmRegistro').submit(function (){
    if($('#nombre').val().length<1){
        swal.fire('NO PUEDE TENER VACIO EL CAMPO NOMBRE')
        return false;
    }else if($('#edad').val().length<1 || isNaN ($('#edad').val()) || $('#edad')===0){
        swal.fire('CAMPO EDAD NO PUEDE ESTAR VACIO')
        return false;
    }else if($('#email').val().length<1){
        swal.fire('NO PUEDE TENER VACIO EL CAMPO EMAIL')
        return false;
    }else if(!isNaN($('#fecha').val())){
        swal.fire('NO PUEDE TENER VACIO EL CAMPO FECHA')
    }
    return false;
})