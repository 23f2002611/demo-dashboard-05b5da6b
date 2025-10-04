# Static Dashboard with Line Chart

A simple, static web dashboard designed to display a line chart generated from CSV data. This project demonstrates how to fetch and parse local CSV files using JavaScript and visualize the data using the Chart.js library.

## Features

*   **Dynamic Line Chart:** Renders a responsive line chart based on data provided in `sample.csv`.
*   **CSV Data Integration:** Fetches and parses CSV data directly within the browser.
*   **Responsive Design:** Adapts to various screen sizes for optimal viewing on desktops, tablets, and mobile devices.
*   **Modern Web Technologies:** Built using standard HTML, CSS, and JavaScript.
*   **Chart.js:** Utilizes the popular Chart.js library for powerful and flexible data visualization.
*   **Date Handling:** Employs `chartjs-adapter-date-fns` for robust time-series data plotting.

## Technologies Used

*   **HTML5:** For the page structure.
*   **CSS3:** For styling and layout.
*   **JavaScript (ES6+):** For data fetching, parsing, and chart rendering logic.
*   **Chart.js:** A flexible JavaScript charting library.
*   **date-fns:** A modern JavaScript date utility library, used with `chartjs-adapter-date-fns` for time-scale management in Chart.js.

## Setup and Installation

To get this dashboard running locally, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/static-dashboard.git
    cd static-dashboard
    ```
2.  **Open `index.html`:**
    Simply open the `index.html` file in your preferred web browser. No server setup is required as it's a static site.

## Usage

Upon opening `index.html`, the dashboard will automatically:

1.  Fetch the `sample.csv` file.
2.  Parse the CSV data, extracting dates and corresponding values.
3.  Render a line chart displaying the "Daily Value Trend Over Time" within the `#chart` section.

You can modify the `sample.csv` file to update the chart data. Ensure the CSV format remains consistent (e.g., `Date,Value` as header, followed by `YYYY-MM-DD,Number` for data rows).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.