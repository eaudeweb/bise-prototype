
$( document ).ready(function() {
    console.log( "ready!" );






(function(){

  // data-toggle="dropdown"

  // data-target
  
  // data-toggle='navmenu';
  
console.log('merge');

  $triggers=$("[data-toggle='navmenu']");
  $triggers.each(function() {
    var $trigger = $(this),
        target = $trigger.data('target'),
        $target = $(target);
    $trigger.click(function() {
      $target.toggleClass('open');
    });
  });







$navmenuopen=$("#navmenu-open");
$navmenuclose=$("#navmenu-close");


$navmenuopen.click(function(){
  // alert('merge');
$navmenuopen.addClass('close');
$navmenuclose.removeClass('close');
});



$navmenuclose.click(function(){
  // alert('merge2');
$navmenuclose.addClass('close');
$navmenuopen.removeClass('close');
});


  
  }());



  });