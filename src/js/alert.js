
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
  }());



  });