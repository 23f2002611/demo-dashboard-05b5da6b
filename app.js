document.addEventListener('DOMContentLoaded', () => {
    const chartCanvas = document.getElementById('chart');
    const loadingMessage = document.getElementById('loading-message');
    const ctx = chartCanvas.getContext('2d');

    const startTime = performance.now();

    // Function to parse CSV data
    async function parseCSV(csvText) {
        const lines = csvText.trim().split('\n');
        if (lines.length === 0) {
            throw new Error("CSV data is empty.");
        }

        const headers = lines[0].split(',').map(header => header.trim());
        const data = [];

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',').map(value => value.trim());
            if (values.length === headers.length) {
                const row = {};
                headers.forEach((header, index) => {
                    row[header] = values[index];
                });
                data.push(row);
            }
        }
        return data;
    }

    // Function to fetch and render chart
    async function renderChart() {
        try {
            const response = await fetch('sample.csv');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const csvText = await response.text();
            const data = await parseCSV(csvText);

            // Assuming CSV has 'Date' and 'Value' columns
            const labels = data.map(row => row.Date);
            const values = data.map(row => parseFloat(row.Value));

            if (labels.length === 0 || values.length === 0) {
                throw new Error("No valid data found in CSV for charting.");
            }

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Sample Data Value',
                        data: values,
                        borderColor: 'rgb(75, 192, 192)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        tension: 0.1,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Sample Data Trend Over Time',
                            font: {
                                size: 16
                            }
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
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Value'
                            },
                            beginAtZero: true
                        }
                    }
                }
            });

            loadingMessage.style.display = 'none'; // Hide loading message
            const endTime = performance.now();
            const renderTime = endTime - startTime;
            console.log(`Chart rendered in ${renderTime.toFixed(2)} ms.`);

            if (renderTime > 15000) { // 15 seconds in milliseconds
                console.warn(`Chart rendering took longer than 15 seconds: ${renderTime.toFixed(2)} ms.`);
            }

        } catch (error) {
            console.error('Error loading or rendering chart:', error);
            loadingMessage.textContent = `Failed to load chart: ${error.message}`;
            loadingMessage.style.color = 'red';
        }
    }

    renderChart();
});