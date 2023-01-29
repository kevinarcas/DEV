$(document).ready( () => {
    
    // mouseover
    var caja1 = $('#caja1')
    caja1.mouseover(function(){
        $(this).css('background-color','red')
    })

    // mouseout
    caja1.mouseout(function(){
        $(this).css('background-color','green')
    })

    // hover
    var caja2 = $('#caja2')
    function dentro(){$(this).css('background-color','red')}
    function fuera(){ $(this).css('background-color','green') }
    caja2.hover(dentro, fuera)

    // click y dobleclick
    $('#caja3').click( function(){
        $(this).css('background-color','red')
    })

    $('#caja3').dblclick( function(){
        $(this).css('background-color','blue')
    })

    // mousedown y mouseup
    $('#caja4').mousedown( function(){
        $(this).css('background-color','red')
    })

    $('#caja4').mouseup( function(){
        $(this).css('background-color','#aaa')
    })

    // mousemove
    $(document).mousemove(function(e){
        $('#coordenadas').html(`Coordenadas ratón. 
            Eje X: ${e.clientX}
            Eje Y: ${e.clientY}`
        )
    })

    // focus y blur
    $('#nombre').focus( function(){
        $(this).css('background-color','red')
    })

    $('#nombre').blur( function(){
        $(this).css('background-color','#aaa')
    })

})