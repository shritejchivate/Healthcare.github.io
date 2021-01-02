
$({counter: 0}).animate({counter: 5001}, {
  duration: 10000,
  easing:'linear',
  step: function() {    
    $('.total').text(Math.ceil(this.counter))
  },
  complete: function() {
 }
});
// ---------------------------------//
$({counter: 0}).animate({counter: 350}, {
  duration: 3000,
  easing:'linear',
  step: function() {    
    $('.total1').text(Math.ceil(this.counter))
  },
  complete: function() {
 }
});
//--------------------------------//
$({counter: 0}).animate({counter: 10}, {
  duration: 2000,
  easing:'linear',
  step: function() {    
    $('.total2').text(Math.ceil(this.counter))
  },
  complete: function() {
 }
});