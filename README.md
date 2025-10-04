# Dashboard with Line Chart

A simple, static dashboard displaying a line chart generated from CSV data using Chart.js. This project demonstrates how to fetch local CSV data, parse it, and visualize it effectively on a web page.

## Features

*   **Dynamic Line Chart:** Visualizes data from `sample.csv` as a responsive line chart.
*   **Data Fetching & Parsing:** Fetches and parses CSV data directly within the browser.
*   **Responsive Design:** Adapts to various screen sizes for optimal viewing on desktop and mobile devices.
*   **Modern Styling:** Clean and professional user interface.
*   **Easy Deployment:** A fully static site, requiring only a web server to host the files.

## Technologies Used

*   **HTML5:** For the page structure.
*   **CSS3:** For styling and layout.
*   **JavaScript (ES6+):** For data fetching, parsing, and chart rendering logic.
*   **Chart.js:** A popular open-source JavaScript charting library for creating interactive data visualizations.

## Setup and Usage

To get this project up and running, follow these simple steps:

1.  **Clone the Repository (or download the files):**
    ```bash
    git clone https://github.com/your-username/dashboard-line-chart.git
    cd dashboard-line-chart
    ```
    *(Replace `your-username` with your actual GitHub username if you fork this project.)*

2.  **Place `sample.csv`:** Ensure the `sample.csv` file is located in the same directory as `index.html`, `styles.css`, and `app.js`. The `app.js` script expects to find it there.

3.  **Open `index.html`:**
    Simply open the `index.html` file in your web browser. You can do this by double-clicking the file or by navigating to its path in your browser's address bar.

    Alternatively, for local development, you can use a simple local web server (e.g., Python's `http.server`):
    ```bash
    python -m http.server 8000
    ```
    Then, open your browser and go to `http://localhost:8000`.

The dashboard will load, fetch the `sample.csv` data, and render the line chart within the designated `#chart` area.

## Project Structure

```
.
├── index.html        # Main HTML file
├── styles.css        # Stylesheet for the dashboard
├── app.js            # JavaScript for data handling and chart rendering
├── sample.csv        # Example CSV data file
└── README.md         # Project README file
└── LICENSE           # MIT License file
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.