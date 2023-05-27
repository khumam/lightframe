$(document).ready(function () {

  setFilter($("#color").val(), $("#blur").val());
  $(".filter").css("display", $(this).is(":checked") ? "block" : "none");

  function setFilter(color, blur, invert) {
    $('.filter').css('filter', `invert(${invert}%) blur(${blur}px) hue-rotate(${color}deg)`);
  }
  
  $('#color').on('input', function () {
    setFilter($(this).val(), $("#blur").val(), $("#invert").val());
  });
  
  $('#blur').on('input', function () {
    setFilter($('#color').val(), $(this).val(), $('#invert').val());
  });
  
  $('#invert').on('input', function () {
    setFilter($('#color').val(), $('#blur').val(), $(this).val());
  });

  $("#light").on('change', function () {
    $('.filter').css('display', $(this).is(':checked') ? 'block' : 'none');
  });

})
