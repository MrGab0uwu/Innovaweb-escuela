jQuery('.menu-we').on('click', function() {
    $(".menu-we").each(function(index) 
    {
            $(this).removeClass('active');
        /*console.log(index + ": " + $(this).text());*/
    });
    jQuery(this).addClass('active');
});


var menues = $(".nav li a"); 
menues.click(function() 
{
	var op_activo='';
	$('.nav li.active').each(function(index) 
    {
    	var opcion = this.firstElementChild.href; 
    	var name_op = opcion.split('#');
    	op_activo = name_op[1];
    	if(op_activo === undefined)
    	{
    		$("#d_home").css('display','none');
    	} 
    	else
    	{
    		$("#d_"+op_activo).css('display','none');
    	}
    });
	
	if(op_activo != '')
	{
		var menus = this.href;
	 	var menu_act = menus.split('#');
	 	var activo_new = menu_act[1];

	 	$("#d_"+activo_new).css('display','block');
	}
});

function show_data(id, elemento){ 
	var firtElemento = elemento.firstElementChild;
	$('.illustration-v1').removeClass('active');
	jQuery(firtElemento.firstElementChild).addClass('active');
	if(id == 1)
	{
		$("#financiero").css('display','block');
		$("#servicios_academicos").css('display','none');
		$("#alumnos_y_padres").css('display','none');
		$("#servicios_escolares").css('display','none');
		$("#marketing").css('display','none');
                $("#servicios_integrados").css('display','none');
                $("#portal_soluciones").css('display','none');
	}
	else if(id == 2)
	{
		$("#servicios_academicos").css('display','block');
		$("#financiero").css('display','none');
		$("#alumnos_y_padres").css('display','none');
		$("#servicios_escolares").css('display','none');
		$("#marketing").css('display','none');
                $("#servicios_integrados").css('display','none');
                $("#portal_soluciones").css('display','none');
	}
	else if(id == 3)
	{
		$("#alumnos_y_padres").css('display','block');
		$("#financiero").css('display','none');
		$("#servicios_academicos").css('display','none');
		$("#servicios_escolares").css('display','none');
		$("#marketing").css('display','none');
                $("#servicios_integrados").css('display','none');
                $("#portal_soluciones").css('display','none');
	}
	else if(id == 4)
	{
		$("#servicios_escolares").css('display','block');
		$("#financiero").css('display','none');
		$("#servicios_academicos").css('display','none');
		$("#alumnos_y_padres").css('display','none');
		$("#marketing").css('display','none');
                $("#servicios_integrados").css('display','none');
                $("#portal_soluciones").css('display','none');
	}
	else if(id == 5)
	{
		$("#servicios_escolares").css('display','none');
		$("#financiero").css('display','none');
		$("#servicios_academicos").css('display','none');
		$("#alumnos_y_padres").css('display','none');
		$("#marketing").css('display','block');
                $("#servicios_integrados").css('display','none');
                $("#portal_soluciones").css('display','none');
	}
        else if(id == 6)
	{
            $("#servicios_escolares").css('display','none');
            $("#financiero").css('display','none');
            $("#servicios_academicos").css('display','none');
            $("#alumnos_y_padres").css('display','none');
            $("#marketing").css('display','none');
            $("#servicios_integrados").css('display','block');
            $("#portal_soluciones").css('display','none');
	}
        else if(id == 7)
	{
            $("#servicios_escolares").css('display','none');
            $("#financiero").css('display','none');
            $("#servicios_academicos").css('display','none');
            $("#alumnos_y_padres").css('display','none');
            $("#marketing").css('display','none');
            $("#servicios_integrados").css('display','none');
            $("#portal_soluciones").css('display','block');
	}
}

function show_data_ini(id)
{
	if(id == 1)
	{
		window.location.href = "info.html#1";
	}
	else if(id == 2)
	{
		window.location.href = "info.html#2";
	}
	else if(id == 3)
	{
		window.location.href = "info.html#3";
	}
	else if(id == 4)
	{
		window.location.href = "info.html#4";
	}
	else if(id == 5)
	{
		window.location.href = "info.html#5";
	}
        else if(id == 6)
	{
		window.location.href = "info.html#6";
	}
	else if(id == 7)
	{
		window.location.href = "info.html#7";
	}
} 

$( document ).ready(function() {
    var url_actual = window.location;
    var my_url = url_actual.toString();
    var modulo = my_url.split("#"); 
	
	if(modulo[1])
	{
		if(modulo[1] == '1') 
		{
			var elemento = document.getElementById('btn-fin');
			show_data(1,elemento);
		}
		else if(modulo[1] == '2')
		{
			var elemento = document.getElementById('btn-aca');
			show_data(2,elemento);
		}
		else if(modulo[1] == '3')
		{
			var elemento = document.getElementById('btn-alu-pad');
			show_data(3,elemento);
		}
		else if(modulo[1] == '4')
		{
			var elemento = document.getElementById('btn-ser');
			show_data(4,elemento);
		}
		else if(modulo[1] == '5')
		{
			var elemento = document.getElementById('btn-mar');
			show_data(5,elemento);
		}
                else if(modulo[1] == '6')
		{
			var elemento = document.getElementById('btn-ser-int');
			show_data(6,elemento);
		}
                else if(modulo[1] == '7')
		{
			var elemento = document.getElementById('btn-por-sol');
			show_data(7,elemento);
		}
	}
});