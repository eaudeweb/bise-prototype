
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
     
    $target.delay( 100 ).scrollTo(150, 200);

    });
  });




 $body = $("body");

 $backdrop = $('#backdrop');
$navmenuopen=$("#navmenu-open");
$navmenuclose=$("#navmenu-close");
$navmenubody=$(".navmenu-body");


$navmenuopen.click(function(){
  // alert('merge');
$navmenuopen.addClass('close');
$navmenuclose.removeClass('close');
// $navmenubody.addClass('tablet');
});



$navmenuclose.click(function(){
  // alert('merge2');
$navmenuclose.addClass('close');
$navmenuopen.removeClass('close');
// $navmenubody.removeClass('tablet');
});









  $navmenuclose.click(function () {
          // $navmenuclose.addClass('close');
// $navmenuopen.removeClass('close');
$body.addClass('sidebaropen');
$navmenubody.addClass('tablet');
        });


         $navmenuopen.click(function () {
          // $navmenuclose.addClass('close');
// $navmenuopen.removeClass('close');
$body.addClass('sidebaropen');
$navmenubody.addClass('tablet');

        });

        $backdrop.on('click', function () {
            console.log('closing sidebar');
            // $filters.removeClass('open');
           $navmenubody.removeClass('tablet');
           $body.removeClass('sidebaropen');
           $navmenuclose.addClass('close');
$navmenuopen.removeClass('close');
        });
  
  }());




  // alert('merge');
document.getElementById('input-search').addEventListener('focus', function() {
  console.log(this.parentElement);
  this.parentElement.parentElement.classList.add('search-open');
}, false);

document.getElementById('input-search').addEventListener('blur', function() {
  this.parentElement.parentElement.classList.remove('search-open');
}, false);


  });








  //scrollto

  /**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.0
 */
;(function(l){'use strict';l(['jquery'],function($){var k=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};k.defaults={axis:'xy',duration:0,limit:true};function isWin(a){return!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!==-1}$.fn.scrollTo=function(f,g,h){if(typeof g==='object'){h=g;g=0}if(typeof h==='function'){h={onAfter:h}}if(f==='max'){f=9e9}h=$.extend({},k.defaults,h);g=g||h.duration;var j=h.queue&&h.axis.length>1;if(j){g/=2}h.offset=both(h.offset);h.over=both(h.over);return this.each(function(){if(f===null)return;var d=isWin(this),elem=d?this.contentWindow||window:this,$elem=$(elem),targ=f,attr={},toff;switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=d?$(targ):$(targ,elem);if(!targ.length)return;case'object':if(targ.is||targ.style){toff=(targ=$(targ)).offset()}}var e=$.isFunction(h.offset)&&h.offset(elem,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a==='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,prev=$elem[key](),max=k.max(elem,a);if(toff){attr[key]=toff[pos]+(d?0:prev-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b),10)||0;attr[key]-=parseInt(targ.css('border'+b+'Width'),10)||0}attr[key]+=e[pos]||0;if(h.over[pos]){attr[key]+=targ[a==='x'?'width':'height']()*h.over[pos]}}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)==='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key])){attr[key]=attr[key]<=0?0:Math.min(attr[key],max)}if(!i&&h.axis.length>1){if(prev===attr[key]){attr={}}else if(j){animate(h.onAfterFirst);attr={}}}});animate(h.onAfter);function animate(a){var b=$.extend({},h,{queue:true,duration:g,complete:a&&function(){a.call(elem,targ,h)}});$elem.animate(attr,b)}})};k.max=function(a,b){var c=b==='x'?'Width':'Height',scroll='scroll'+c;if(!isWin(a))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,doc=a.ownerDocument||a.document,html=doc.documentElement,body=doc.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(t){return $(t.elem)[t.prop]()},set:function(t){var a=this.get(t);if(t.options.interrupt&&t._last&&t._last!==a){return $(t.elem).stop()}var b=Math.round(t.now);if(a!==b){$(t.elem)[t.prop](b);t._last=this.get(t)}}};return k})}(typeof define==='function'&&define.amd?define:function(a,b){'use strict';if(typeof module!=='undefined'&&module.exports){module.exports=b(require('jquery'))}else{b(jQuery)}}));