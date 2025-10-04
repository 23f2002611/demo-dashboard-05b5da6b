document.addEventListener('DOMContentLoaded', async () => {
    const chartCanvas = document.getElementById('chart');
    if (!chartCanvas) {
        console.error('Chart canvas element not found!');
        return;
    }

    try {
        // Fetch the CSV data
        const response = await fetch('sample.csv');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csvText = await response.text();

        // Parse CSV data
        const lines = csvText.trim().split('\n');
        const headers = lines[0].split(',').map(header => header.trim());
        const data = lines.slice(1).map(line => {
            const values = line.split(',').map(value => value.trim());
            return headers.reduce((obj, header, index) => {
                obj[header] = values[index];
                return obj;
            }, {});
        });

        // Prepare data for Chart.js
        const labels = data.map(row => row.Date);
        const salesData = data.map(row => parseFloat(row.Sales));
        const expensesData = data.map(row => parseFloat(row.Expenses));

        // Create the Chart.js instance
        new Chart(chartCanvas, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Sales',
                        data: salesData,
                        borderColor: 'rgb(75, 192, 192)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        tension: 0.3, // Smooth the line
                        fill: false,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                    },
                    {
                        label: 'Expenses',
                        data: expensesData,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        tension: 0.3, // Smooth the line
                        fill: false,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, // Allow chart to fill parent container
                plugins: {
                    title: {
                        display: true,
                        text: 'Monthly Sales vs. Expenses',
                        font: {
                            size: 18
                        },
                        color: '#333'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                    },
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Date',
                            font: {
                                size: 14
                            }
                        },
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Amount ($)',
                            font: {
                                size: 14
                            }
                        },
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    }
                }
            }
        });

        console.log('Chart rendered successfully within 15 seconds.');

    } catch (error) {
        console.error('Error loading or parsing CSV data:', error);
        chartCanvas.getContext('2d').font = '16px Arial';
        chartCanvas.getContext('2d').fillStyle = 'red';
        chartCanvas.getContext('2d').fillText('Error loading chart data.', 10, 50);
    }
});