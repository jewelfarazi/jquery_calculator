$(document).ready(function() {

	var val = $("#calcBox");
	var addition = false;
	var subtract = false;
	var multiply = false;
	var division = false;
	var v1 = "";
	var v2 = "";
	var v3 = "";

	function numValue(val, newVal) {
		
		if(val.val() == "0") {
			
			return (newVal == ".") ? val.val("0"+newVal) : val.val(newVal);
			
		} else if(val.val()) {

			var v = val.val();
			return (val.val() == "0.") ? val.val("0."+newVal) : val.val(v+newVal);	
			
		} else {
			return val.val(newVal);
		}
	}

	function resultCalc(calv1, calv2) {
		v1 = val.val();
		val.val(0);
		v3 = calv1;
		$("#theValues").html(v1+calv2);
		return v1, v3;
	}

	
	$("#clearLast").click(function() {
		
		if(!val.val()) {
			val.val(0);
		} else if(val.val() != 0) {
			var clr = val.val().substr(0, val.val().length-1);		
				val.val(clr);
			
		}
		
	});

	$("#clearAll").click(function() {
		val.val(0);
		$("#theValues").empty();
	});

	$("#addition").click(function() {
		resultCalc("addition", " + ");					
	});

	$("#subtract").click(function() {
		resultCalc("subtract", " - ");
	});

	$("#multiply").click(function() {
		resultCalc("multiply", " * ");
	});

	$("#division").click(function() {
		resultCalc("division", " / ");
	});

	

	$("#equal").click(function() {
		v2 = val.val();
		
		switch(v3) {
			case "addition":
				var add = parseFloat(v1) + parseFloat(v2);
				val.val(add);
				$("#theValues").html(v1+" + "+v2);
				break;
			case "subtract":
				var sub = parseFloat(v1) - parseFloat(v2);
				val.val(sub);
				$("#theValues").html(v1+" - "+v2);
				break;
			case "multiply":
				var mul = parseFloat(v1) * parseFloat(v2);
				val.val(mul);
				$("#theValues").html(v1+" * "+v2);
				break;
			case "division":
				var div = parseFloat(v1) / parseFloat(v2);
				val.val(div);
				$("#theValues").html(v1+" / "+v2);
				break;
			default:
				alert("Nothing to calculate!");
				break;
		}	
	});

	$("#one").click(function() {
		numValue(val, 1);
	});

	$("#two").click(function() {
		numValue(val, 2);
	});
	
	$("#three").click(function() {
		numValue(val, 3);
	});
	$("#four").click(function() {
		numValue(val, 4);
	});
	$("#five").click(function() {
		numValue(val, 5);
	});
	$("#six").click(function() {
		numValue(val, 6);
	});
	$("#seven").click(function() {
		numValue(val, 7);
	});
	$("#eight").click(function() {
		numValue(val, 8);
	});
	$("#nine").click(function() {
		numValue(val, 9);
	});
	$("#zero").click(function() {
		numValue(val, 0);
	});
	$("#dot").click(function() {
		if(val.val().match(/[.]/)) {
			numValue(val, "");
		} else {
			numValue(val, ".");
		}			
	});	
});