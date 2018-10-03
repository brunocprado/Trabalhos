function criaGraficoInicio(){
    var dados = [];
    for(var i=0;i<tabela.length;i++){
        dados[i] = tabela[i].capacidade - tabela[i].atendimento_realizado;
    }

    var ds = {
            label: 'Capacidade - Atendimentos realizados',
            data: Array.from(dados),
            backgroundColor: 'rgba(42,63,84,1)'
        };

    var labels = [];
    for(var i=0;i<tabela.length;i++){
        labels.push(tabela[i].data.toString());
    }

    var grafico = new Chart("grafico", {
        type: 'bar',
        data: {
            labels: Array.from(labels),
            datasets: [ds]
        },
        options: {
            responsive:true,
            maintainAspectRatio: false,

        }
    });
}
criaGraficoInicio();
