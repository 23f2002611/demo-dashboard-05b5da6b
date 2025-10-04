# Data Dashboard

A simple, static web dashboard displaying a line chart from CSV data. This project demonstrates fetching local CSV data, parsing it, and rendering an interactive line chart using Chart.js.

## Features

*   **Dynamic Charting**: Renders a line chart using data fetched from a local `sample.csv` file.
*   **Fast Loading**: Chart renders within 15 seconds, even on slower connections (for typical local CSV sizes).
*   **Responsive Design**: Adapts to various screen sizes.
*   **Clean UI**: Modern and professional dashboard layout.
*   **MIT License**: Open-source and freely usable.

## Technologies Used

*   **HTML5**: For the page structure.
*   **CSS3**: For styling and layout.
*   **JavaScript (ES6+)**: For data fetching, parsing, and chart rendering logic.
*   **Chart.js**: A popular open-source JavaScript charting library for creating interactive data visualizations.

## Setup and Usage

To run this project locally, follow these steps:

1.  **Clone the repository (or download the files):**
    ```bash
    git clone <repository-url>
    cd data-dashboard
    ```
    (Replace `<repository-url>` with the actual URL if this were a real repo.)

2.  **Open `index.html` in your web browser:**
    Simply navigate to the project directory and double-click `index.html`, or open it via your browser's file menu.

    Alternatively, you can use a local web server (recommended for larger projects or if you encounter CORS issues with `file://` protocol, though not expected for this simple setup):

    *   **Using Python:**
        ```bash
        python -m http.server 8000
        ```
        Then, open your browser and go to `http://localhost:8000`.

    *   **Using Node.js (if `http-server` is installed globally):**
        ```bash
        http-server -p 8000
        ```
        Then, open your browser and go to `http://localhost:8000`.

The dashboard will load, fetch the `sample.csv` data, and display the line chart automatically.

## Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Stylesheet for the dashboard
├── app.js              # JavaScript for data fetching and chart rendering
├── sample.csv          # Sample data for the chart
├── README.md           # Project README file
└── LICENSE             # MIT License file
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.