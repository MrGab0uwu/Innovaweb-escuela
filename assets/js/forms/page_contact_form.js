var PageContactForm = function () {

    return {
        
        //Contact Form
        initPageContactForm: function () {
	        // Validation
	        $("#sky-form3").validate({
	            // Rules for form validation
	            rules:
	            {
	                name:
	                {
	                    required: true
	                },
	                phone:
	                {
	                    required: true,
	                    phone: true
	                },
	                mensaje:
	                {
	                    required: true
	                },
	                estado:
	                {
	                    required: true
	                },
	                asunto:
	                {
	                    required: true
	                },
	                captcha:
	                {
	                    required: true,
	                    remote: 'assets/plugins/sky-forms/version-2.0.1/captcha/process.php'
	                }
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                name:
	                {
	                    required: 'Por favor ingrese su nombre.',
	                },
	                phone:
	                {
	                    required: 'Por favor ingrese su número telefonico',
	                    phone: 'Por favor ingrese un número valido a 10 digitos'
	                },
	                mensaje:
	                {
	                    required: 'Por favor ingrese su mensaje'
	                },
	                estado:
	                {
	                    required: 'Por favor ingrese su estado'
	                },
	                asunto:
	                {
	                    required: 'Por favor ingrese su asunto' 
	                },
	                captcha:
	                {
	                    required: 'Please enter characters',
	                    remote: 'Correct captcha is required'
	                }
	            },
	                                
	            // Ajax form submition                  
	            submitHandler: function(form)
	            {
	                $(form).ajaxSubmit(
	                {
	                    beforeSend: function()
	                    {
	                        $('#sky-form3 button[type="submit"]').attr('disabled', true);
	                    },
	                    success: function()
	                    {
	                        $("#sky-form3").addClass('submited');
	                    }
	                });
	            },
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	                $('.footer-v4 .footer h2').css('padding-bottom', '230px');
	            }
	        });
        }

    };
    
}();