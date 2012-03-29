$(function() {
  window.keydown = {};
  
  function keyName(event) {
    return jQuery.hotkeys.specialKeys[event.which] ||
      String.fromCharCode(event.which).toLowerCase();
  }
  
  $(document).bind("keydown", function(event) {
	keydown[keyName(event)] = true;
	if(keyName(event)!="down") {
		setTimeout(function() {
		keydown[keyName(event)] = false;
		}, 1000/FPS);
	}
	});
  
  $(document).bind("keyup", function(event) {
	if(keyName(event)=="down") {
		keydown[keyName(event)] = false;	
	}
  });
  
});