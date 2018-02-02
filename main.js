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
    spanTarget.css("text-decoration", "line-through");

};


