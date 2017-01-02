var duracionAnimacion = 500;

function cambiarDePagina(_url){
    $.ajax({
        url: _url,
        method: "post",
        cache:false,
        success:function(data){
            $('#contenedor').animate({opacity: 0},{ duration: duracionAnimacion, queue: false});
            $('#contenedor').html('');
            $('#contenedor').html(data);
            $('.menu-principal').animate({opacity: 1},{ duration: duracionAnimacion, queue: false});
            $('#contenedor').animate({opacity: 1},{ duration: duracionAnimacion, queue: false});
        }
    });
}
function ajaxPost(urlDest, dataDest, type,page){
    $.ajax({
        method: "post",
        cache:false,
        //timeout:8000,
        url: urlDest,
        data: dataDest,
        dataType: type,
        success:function(data){
            return manipularData(data,page);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            ponerMensajeError(jqXHR.readyState,jqXHR.statusText,jqXHR.responseText);
        }
    });
}
function manipularData(data,page){
    switch (page) {
        case '':
            break;

        case 'signUp':

            break;

        case 'login':

            break;

        case 'resetPassword':

            break;
    }
}

setTimeout(function(){
    cambiarDePagina('View/PanelControl.html');
}, 300);
