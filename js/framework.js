var js = {

    // funções de acesso ao servidor
    // ----------------------------------------------------
    request : function(action, data, responseHandler) {
        var params = {
            action : action,
            dataset : JSON.stringify(data)
        };
        js.callService(params, responseHandler);
    },

    callService : function(params, responseHandler) {
        $.ajax({
            type: "POST",
            url: 'php/server.php',
            data: params,
            timeout : 15000,
            success: function(response) {
                responseHandler(response);
            },
            error: function(objAJAXRequest, strError) {
                alert(strError + 'Não foi possivel fazer conexão.');
            }
        });
    },
    // ----------------------------------------------------

    testeAjax : function() {
        var data = '';
        js.request('teste', data, function(response) {
            alert(response.data);
        });
    },
}