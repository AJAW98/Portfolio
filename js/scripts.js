
$('.gridImage').click(function(event) {
    alert($(this).attr('src'));

    $('#highlightImage').attr('src', $(this).attr('src'));
  });