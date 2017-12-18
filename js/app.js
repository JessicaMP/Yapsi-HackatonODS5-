//Profesora
//Ocultar modal Cuestionario Profesora
$('#btn-1').click( function () {
  //$('#modal1').attr({'display': 'none'});
  $('#modal1').fadeOut();
})


// Botón Estudiantes
$('#myStudent').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
//Ocultar modal Cuestionario Niña
$('#btn-2').click( function () {
  //$('#modal1').attr({'display': 'none'});
  $('#next').fadeOut();
})


// Botón Enviar
$('#enviar').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
//Ocultar modal Cuestionario Niño
$('#btn-3').click( function () {
  //$('#modal1').attr({'display': 'none'});
  $('#next2').fadeOut();
})


// Botón siguiente del 1er modal
$('#next').on('shown.bs.modal', function () {
  $('#myInput').focus()
})


// Botón siguiente del 2er modal Niña
$('#next2').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

// Final
$('#end').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
