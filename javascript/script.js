// Dados iniciais do gráfico
const data = {
    labels: ['Receita', 'Despesas', 'Investimentos', 'Outros'],
    datasets: [{
        label: 'Fluxo de Caixa',
        data: [3000, 2000, 1000, 500],
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Configuração do gráfico
const conf = {
    type: 'pie',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 18 // Aumenta o tamanho da fonte da legenda
                    }
                }
            },
            tooltip: {
                enabled: true,
                bodyFont: {
                    size: 16 // Aumenta o tamanho da fonte dos tooltips
                }
            }
        }
    }
};

// Renderizando o gráfico
const myPieChart = new Chart(
    document.getElementById('myPieChart'),
    conf
);

// Função para atualizar os dados do gráfico
function updateChart() {
    const inputData = document.getElementById('dataInput').value;
    const dataArray = inputData.split(',').map(Number);

    if (dataArray.length === myPieChart.data.labels.length) {
        myPieChart.data.datasets[0].data = dataArray;
        myPieChart.update();
    } else {
        alert(`Por favor, insira exatamente ${myPieChart.data.labels.length} valores.`);
    }
}

document.getElementById('updateButton').addEventListener('click', updateChart);
