var js = {

    arrayProdutos : {
        '001' : {'codProduto' : '001', 'nmProduto' : 'Coca Cola Lata'},
        '002' : {'codProduto' : '002', 'nmProduto' : 'Fanta Laranja Lata'}
    },

    pedido : [],
    adicionaProduto : function(codProduto) {
        //nmProduto = js.arrayProdutos[codProduto]['nmProduto'];
        js.pedido.push(codProduto);
        $('#pedido').html(js.pedido.length + ' produto(s)');
    },

    removeProduto : function(codProduto) {

    },

    loadPage : function(page) {
        $.mobile.changePage(page);
    },

    buildPedido : function() {
        /*
        ar pedido = '<div data-role="collapsible"><h3>Coca Cola Lata</h3>Descrição do produto ... <br> ... <div id="001" class ="add" onclick="js.removeProduto(this.id);">Remover do pedido</div></div>';
        $('#listaProdutos').html(pedido);
        */
    },

    bindPageChangeEvents : function() {
        $(document).bind('pagechange', function (e, args) {
            var pageId = args.toPage.attr('id');

            if (pageId == 'pedido') {
                js.buildPedido();
            }
        });
    },

    mudaBandeira : function(id) {
        $('.img-bandeiras').removeClass('selected');
        $('#' + id).addClass('selected');

        js.traduz(id);
    },

    traduz : function(lingua) {

    }
}