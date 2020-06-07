
$('.gridImage').click(function(event) {

    var highlightImageDiv = $('#highlightImage');
    var highlightImage = highlightImageDiv.find('img');
    highlightImageDiv.toggleClass("showing");
    highlightImage.attr('src', $(this).attr('src'));
});

$('.closeImage').click(function(event) {

    var imageParentId = $(this).attr('target');
    $("#" + imageParentId).toggleClass("showing");

});