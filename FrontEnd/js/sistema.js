var tabela = [{"data":"18/07/2018","demanda":86,"capacidade":58,"atendimento_planejado":29,"atendimento_realizado":43,"desvio":true},
{"data":"22/09/2018","demanda":100,"capacidade":68,"atendimento_planejado":92,"atendimento_realizado":56,"desvio":true},
{"data":"24/01/2018","demanda":44,"capacidade":102,"atendimento_planejado":80,"atendimento_realizado":52,"desvio":true},
{"data":"09/01/2018","demanda":84,"capacidade":279,"atendimento_planejado":44,"atendimento_realizado":15,"desvio":false},
{"data":"10/09/2018","demanda":6,"capacidade":291,"atendimento_planejado":76,"atendimento_realizado":20,"desvio":true},
{"data":"19/10/2018","demanda":56,"capacidade":66,"atendimento_planejado":24,"atendimento_realizado":6,"desvio":false},
{"data":"15/11/2018","demanda":58,"capacidade":231,"atendimento_planejado":14,"atendimento_realizado":10,"desvio":false},
{"data":"19/11/2018","demanda":13,"capacidade":127,"atendimento_planejado":103,"atendimento_realizado":59,"desvio":true},
{"data":"09/05/2018","demanda":77,"capacidade":123,"atendimento_planejado":95,"atendimento_realizado":2,"desvio":false},
{"data":"19/11/2018","demanda":34,"capacidade":290,"atendimento_planejado":30,"atendimento_realizado":63,"desvio":false},
{"data":"05/10/2018","demanda":3,"capacidade":176,"atendimento_planejado":59,"atendimento_realizado":34,"desvio":true},
{"data":"29/05/2018","demanda":92,"capacidade":84,"atendimento_planejado":64,"atendimento_realizado":24,"desvio":true},
{"data":"12/01/2018","demanda":84,"capacidade":176,"atendimento_planejado":67,"atendimento_realizado":23,"desvio":true},
{"data":"01/11/2018","demanda":91,"capacidade":240,"atendimento_planejado":54,"atendimento_realizado":64,"desvio":true},
{"data":"07/03/2018","demanda":85,"capacidade":33,"atendimento_planejado":88,"atendimento_realizado":24,"desvio":false},
{"data":"25/08/2018","demanda":34,"capacidade":245,"atendimento_planejado":77,"atendimento_realizado":39,"desvio":false},
{"data":"23/09/2018","demanda":20,"capacidade":165,"atendimento_planejado":12,"atendimento_realizado":8,"desvio":true},
{"data":"07/08/2018","demanda":23,"capacidade":151,"atendimento_planejado":80,"atendimento_realizado":35,"desvio":true},
{"data":"14/05/2018","demanda":86,"capacidade":70,"atendimento_planejado":95,"atendimento_realizado":58,"desvio":false},
{"data":"23/03/2018","demanda":71,"capacidade":224,"atendimento_planejado":9,"atendimento_realizado":64,"desvio":false},
{"data":"03/09/2018","demanda":74,"capacidade":247,"atendimento_planejado":48,"atendimento_realizado":61,"desvio":false},
{"data":"26/10/2018","demanda":8,"capacidade":57,"atendimento_planejado":87,"atendimento_realizado":34,"desvio":true},
{"data":"18/05/2018","demanda":22,"capacidade":132,"atendimento_planejado":102,"atendimento_realizado":24,"desvio":true},
{"data":"14/01/2018","demanda":28,"capacidade":261,"atendimento_planejado":47,"atendimento_realizado":37,"desvio":true},
{"data":"21/11/2018","demanda":81,"capacidade":292,"atendimento_planejado":33,"atendimento_realizado":4,"desvio":false}]

$('#tabela').DataTable( {
    data : tabela,
    columns: [
        { data: "data", title: "Data" },
        { data: "demanda", title: "Demanda" },
        { data: "capacidade", title: "Capacidade" },
        { data: "atendimento_planejado", title: "Atendimentos Planejados" },
        { data: "atendimento_realizado", title: "Atendimentos Realizados" },
        { data: "desvio", title: "Desvio" }
    ],
    language: {
        "sEmptyTable": "Nenhum registro encontrado",
        "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
        "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
        "sInfoFiltered": "(Filtrados de _MAX_ registros)",
        "sInfoPostFix": "",
        "sInfoThousands": ".",
        "sLengthMenu": "_MENU_ resultados por página",
        "sLoadingRecords": "Carregando...",
        "sProcessing": "Processando...",
        "sZeroRecords": "Nenhum registro encontrado",
        "sSearch": "Pesquisar",
        "oPaginate": {
            "sNext": "Próximo",
            "sPrevious": "Anterior",
            "sFirst": "Primeiro",
            "sLast": "Último"
        },
        "oAria": {
            "sSortAscending": ": Ordenar colunas de forma ascendente",
            "sSortDescending": ": Ordenar colunas de forma descendente"
        }
    }
} );

function exibeMenu(){
    if($("#sidebar").css("margin-left") != "-220px"){
        $('#sidebar').css("margin-left","-220px")
        $("#barra").css("padding-left","20px");
        $("#container").css("left","0px");
    } else {
        $('#sidebar').css("margin-left","0px")
        $("#barra").css("padding-left","240px");
        $("#container").css("left","220px");
    }
}
