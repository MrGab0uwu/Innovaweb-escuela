var Registration = function () {

    return {
        
        //Registration Form
        initRegistration: function () {
	        // Validation       
	        $("#sky-form4").validate({                   
	            // Rules for form validation
	            rules:
	            {
	                firstname:
	                {
	                    required: true
	                },
	                email:
	                {
	                    required: true,
	                    email: true
	                },
	                phone:
	                {
	                    required: true,
	                    digits: true,
	                    min: 1000000000,
	                    max: 9999999999
	                },
	                institucion:
	                {
	                    required: true
	                },
	                /*asunto:
	                {
	                    required: true
	                },*/
	            },
	            
	            // Messages for form validation
	            messages:
	            {
	                
	                email:
	                {
	                    required: 'Por favor ingrese su correo electrónico',
	                    email: 'Por favor ingrese un correo electrónico valido'
	                },
	                firstname:
	                {
	                    required: 'Por favor ingrese su nombre'
	                },
	                phone:
	                {
	                    required: 'Por favor ingrese su teléfono',
	                    digits: 'Por favor ingrese un teléfono valido (10 digitos)',
	                    min: 'Por favor ingrese un teléfono valido (10 digitos)',
	                    max: 'Por favor ingrese un teléfono valido (10 digitos)'
	                },
	                institucion:
	                {
	                    required: 'Por favor ingrese el nombre de la institución',
	                },
	                /*asunto:
	                {
	                    required: 'Por favor ingrese su asunto',
	                },*/
	            },                  
	            
	            // Ajax form submition                  
	            submitHandler: function(form)
	            {
	                $(form).ajaxSubmit(
	                {
	                    beforeSend: function()
	                    {
	                        var response = grecaptcha.getResponse();
	                        if(response.length == 0)
	                        {
	                         	$(".g-recaptcha").addClass('state-error');
	                         	$("#captcha").css('display','block');
	                        	return false;
	                        }
	                        else
	                        {
	                        	$('#sky-form4 button[type="submit"]').attr('disabled', "true");
	                        }
	                    },
	                    success: function()
	                    {
	                        $("#sky-form4").addClass('submited');
	                        $("#alert-men").show();
	                    }
	                });
	            },

	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            }
	        });
        }

    };
}();

$('#alert-men').on('closed.bs.alert', function () {
	location.reload();
})

function validCaptcha(){
	$("#captcha").css('display','none');
}