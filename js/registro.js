dif1 = null;
dif2 = null;
dif3 = null;
dif4 = null;

$(document).ready(function() {



  $('#submit-registration').click(function(e) {
        e.preventDefault();
    });

  $('#registration-form').validate();




});

function validate(){
	var pregunta1 = '';
	var pregunta2 = '';
	var pregunta3 = '';
	var pregunta4 = ''; 
	var complete = true;

	//Get User inputs
	pregunta1 = $('#pregunta1In').val();
	pregunta2 = $('#pregunta2In').val();
	pregunta3 = $('#pregunta3In').val();
	pregunta4 = $('#pregunta4In').val();



	if (pregunta1 == ''){
		complete = false;
		$('#pregunta1').addClass('has-error has-feedback');
	}

	if (pregunta2 == ''){
		complete = false;
		$('#pregunta2').addClass('has-error has-feedback');
	}

	if (pregunta3 == ''){
		complete = false;
		$('#pregunta3').addClass('has-error has-feedback');
	}

	if (pregunta4 == ''){
		complete = false;
		$('#pregunta4').addClass('has-error has-feedback');
	}


	if(!complete){
		alert("Por favor llena los campos requeridos");
	}else{
    
	    var Registro = Parse.Object.extend("Registro");
	    var usuario = new Registro();
	    usuario.set("pregunta1", pregunta1);
	    usuario.set("pregunta2", pregunta2);
	    usuario.set("pregunta3", pregunta3);
	    usuario.set("pregunta4", pregunta4);

	    usuario.save(null, {
		  success: function() {
		    alert('¡Gracias!');
		    window.location = 'amazon2.html';
		  },
		  error: function(gameScore, error) {
		    alert('Error al registrar los datos, inténtalo de nuevo.');
		  }
		});
	}

}