$(document).ready( () => {
    
    // Selector de ID
    let nombre = $('#nombre')
    console.log(nombre)
    
    let apellido = $('#apellido').css('background-color','red')
                                .css('color','white')

    let edad = $('#edad').css('background-color','green')
                        .css('color','white')

    // Selector de clase
    let grande = $('.grande')
    grande.css('font-size','25px')


    // Acceder a índice de los elementos seleccionados.
    let primerGrande = $('.grande')[1]
    console.log(primerGrande)

    // Evento click
    $('#ciudad').click( () => {
        console.log( $(this) )
    })

    // Selector etiqueta
    let parrafos = $('p')
    parrafos.click(function(){
        if($(this).hasClass('textoAzul')){
            $(this).removeClass('textoAzul')
        }
        else{
            $(this).addClass('textoAzul')
        }
    })

    // Selector atributo
    $('[title="google"]').css('color','pink')


    // Selector múltiple
    $('p,a').addClass('margenSuperior') /* Selecciono <p> y <a> */
    
})