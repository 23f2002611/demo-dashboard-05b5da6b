document.addEventListener('DOMContentLoaded', () => {
    // Fetch the CSV data
    fetch('sample.csv')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(csvText => {
            const rows = csvText.trim().split('\n');
            const labels = []; // To store dates
            const data = [];   // To store values

            // Skip the header row and parse the rest
            for (let i = 1; i < rows.length; i++) {
                const [date, value] = rows[i].split(',');
                labels.push(date); // Dates are in 'YYYY-MM-DD' format
                data.push(parseFloat(value)); // Convert value to a number
            }

            // Get the canvas element
            const ctx = document.getElementById('myChartCanvas').getContext('2d');

            // Create the Chart.js line chart
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Daily Value',
                        data: data,
                        borderColor: 'rgb(75, 192, 192)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        tension: 0.3, // Smooth the line
                        fill: false,  // Do not fill the area under the line
                        pointRadius: 5, // Size of data points
                        pointBackgroundColor: 'rgb(75, 192, 192)',
                        pointBorderColor: '#fff',
                        pointHoverRadius: 7,
                        pointHoverBackgroundColor: 'rgb(75, 192, 192)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false, // Allow chart to fill its container
                    plugins: {
                        title: {
                            display: true,
                            text: 'Daily Value Trend Over Time',
                            font: {
                                size: 18
                            },
                            color: '#333'
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            titleFont: { size: 14 },
                            bodyFont: { size: 12 },
                            padding: 10,
                            cornerRadius: 5
                        },
                        legend: {
                            display: true,
                            position: 'top',
                            labels: {
                                font: {
                                    size: 14
                                },
                                color: '#555'
                            }
                        }
                    },
                    scales: {
                        x: {
                            type: 'time', // Use 'time' scale for date handling
                            time: {
                                unit: 'day',
                                tooltipFormat: 'MMM D, YYYY', // Format for tooltips
                                displayFormats: {
                                    day: 'MMM D' // Format for axis labels
                                }
                            },
                            title: {
                                display: true,
                                text: 'Date',
                                font: {
                                    size: 16
                                },
                                color: '#444'
                            },
                            ticks: {
                                color: '#666'
                            },
                            grid: {
                                display: false // Hide vertical grid lines
                            }
                        },
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Value',
                                font: {
                                    size: 16
                                },
                                color: '#444'
                            },
                            ticks: {
                                color: '#666'
                            },
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)' // Light horizontal grid lines
                            }
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error('Error fetching or parsing CSV data:', error);
            const chartDiv = document.getElementById('chart');
            if (chartDiv) {
                chartDiv.innerHTML = '<p style="color: red; text-align: center;">Failed to load chart data. Please check the console for more details.</p>';
            }
        });
});