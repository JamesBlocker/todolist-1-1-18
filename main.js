var $inputTodo = $('#todo');
var $submit = $('#btn');

//Form Submit
var $todoVal = "";

$('.form').submit(function(event) {
    $todoVal = $('#todo').val();
    console.log($todoVal);
    var $list = $('.list');
    var $newListItem = $('<p>');
    $newListItem.html('<input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + $todoVal +'</span><i class="glyphicon glyphicon-remove"></i>');
    $list.prepend($newListItem);
    $('#todo').val('');
    event.preventDefault();
});


var $inputCheck = $('input');
$($inputCheck).on('click', strikeThrough);

function strikeThrough() {
    var spanTarget = $(this).siblings("span");
    if (spanTarget.css("text-decoration") === "line-through solid rgb(71, 62, 57)") {
        spanTarget.css("text-decoration", "none solid rgb(71, 62, 57)");    
    } else {
    spanTarget.css("text-decoration", "line-through");
    }
};


var $star = $('.glyphicon-star');
$star.on('click', activate);

function activate() {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
        console.log(this)
    }
}

	
// $( "p" ).addClass( "myClass yourClass" );