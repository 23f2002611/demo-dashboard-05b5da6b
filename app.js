document.addEventListener('DOMContentLoaded', () => {
    const chartContainer = document.getElementById('chart-container');
    const loadingMessage = document.getElementById('loadingMessage');
    const canvas = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');

    /**
     * Parses CSV text into an array of objects.
     * Assumes the first row is the header.
     * @param {string} csvText - The raw CSV string.
     * @returns {Array<Object>} An array of objects, where each object represents a row.
     */
    function parseCsv(csvText) {
        const lines = csvText.trim().split('\n');
        if (lines.length === 0) {
            return [];
        }

        const headers = lines[0].split(',').map(header => header.trim());
        const data = [];

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',').map(value => value.trim());
            if (values.length === headers.length) {
                let row = {};
                headers.forEach((header, index) => {
                    row[header] = values[index];
                });
                data.push(row);
            }
        }
        return data;
    }

    /**
     * Fetches CSV data, parses it, and renders a line chart.
     */
    async function loadAndRenderChart() {
        try {
            const response = await fetch('sample.csv');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const csvText = await response.text();
            const parsedData = parseCsv(csvText);

            if (parsedData.length === 0) {
                loadingMessage.textContent = 'No data available to display chart.';
                return;
            }

            // Assuming the CSV has 'Date' and 'Value' columns
            const labels = parsedData.map(row => row.Date);
            const values = parsedData.map(row => parseFloat(row.Value));

            // Remove loading message
            loadingMessage.style.display = 'none';

            // Create the Chart.js line chart
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Daily Value',
                        data: values,
                        borderColor: 'rgb(75, 192, 192)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        tension: 0.3, // Makes the line slightly curved
                        fill: true,
                        pointBackgroundColor: 'rgb(75, 192, 192)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(75, 192, 192)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false, // Allows chart to fill parent container
                    plugins: {
                        title: {
                            display: true,
                            text: 'Value Over Time',
                            font: {
                                size: 18
                            },
                            color: '#333'
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Date'
                            },
                            grid: {
                                display: false // Hide x-axis grid lines
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Value'
                            },
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)' // Light y-axis grid lines
                            }
                        }
                    }
                }
            });

        } catch (error) {
            console.error('Error loading or rendering chart:', error);
            loadingMessage.textContent = `Failed to load chart data: ${error.message}`;
            loadingMessage.style.color = 'red';
        }
    }

    // Call the function to load and render the chart
    loadAndRenderChart();
});