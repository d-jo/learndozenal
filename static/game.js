b12 = function(num){
	return (num).toString(12).replace(/a/g, "X").replace(/b/g, "E");
}

b10 = function(num) {
	return (parseInt(num.replace(/X/g, "a").replace(/E/g, "b"), 12));
}

urlParam = function(name){
	    var results = new RegExp('[\?&]' + name + '=([^]*)').exec(window.location.href);
	    if (results == null){
		    return null;
	    } else {
		    return results[1] || 0;
	    }
}

validate = function(settings){
	
	if (settings['a_min'] == null) {
		settings['a_min'] = 0;
	}

	if (settings['a_max'] == null) {
		settings['a_max'] = 42;
	}

	if (settings['b_min'] == null) {
		settings['b_min'] = 0;
	}

	if (settings['b_max'] == null) {
		settings['b_max'] = 42;
	}

	if (settings['operators'] == null) {
		settings['operators'] = ['+', '-'];
	}

	if (settings['time'] == null) {
		settings['time'] = 10;
	}
}


$(document).ready(function() {
	try {
		var load = '' + atob(urlParam('load'));
		var settings = JSON.parse(load);
	}
	catch(err){

	}
	if (settings == null) {
		settings = {}
	}
	validate(settings);
	document.getElementById("submission").onkeyup = function(e){
		if(e.keyCode == 13){
			check();
		}
	}

	

});
