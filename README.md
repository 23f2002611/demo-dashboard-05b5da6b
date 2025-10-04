# Data Dashboard

A simple, static web dashboard displaying trend data using a line chart. This project demonstrates how to integrate Chart.js with CSV data to visualize information effectively.

## Features

*   **Responsive Design**: Adapts to various screen sizes for optimal viewing on desktop and mobile devices.
*   **Line Chart Visualization**: Displays time-series data using Chart.js, providing clear insights into trends.
*   **Static Site**: Built with pure HTML, CSS, and JavaScript, making it easy to deploy anywhere.
*   **Embedded Data**: CSV data is embedded directly within the JavaScript for a self-contained and quick-loading experience.

## Technologies Used

*   **HTML5**: For the page structure.
*   **CSS3**: For styling and layout.
*   **JavaScript (ES6+)**: For data parsing and chart rendering.
*   **Chart.js**: A popular open-source JavaScript charting library.

## Installation

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository (or download the files):**
    ```bash
    git clone <repository_url>
    cd data-dashboard
    ```
    (Note: If you received these files directly, simply place them in a folder.)

2.  **Open `index.html`:**
    Navigate to the project directory and open the `index.html` file in your web browser. No server is required as it's a static site.

## Usage

Upon opening `index.html`, the dashboard will load automatically, displaying a line chart generated from the embedded `sample.csv` data. You can inspect the `app.js` file to see how the data is parsed and fed into Chart.js.

To update the data, modify the `csvData` string within `app.js` with your desired CSV content. Ensure the format `Date,Value` is maintained for correct parsing.

## Project Structure

```
.
├── index.html      # Main HTML file for the dashboard layout
├── styles.css      # CSS file for styling the dashboard
├── app.js          # JavaScript file for data parsing and chart rendering
├── README.md       # This README file
└── LICENSE         # MIT License file
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Note:** The `sample.csv` data is embedded directly into `app.js` for demonstration purposes and to ensure the project is fully self-contained within the provided file blocks. In a real-world scenario, you might fetch this data from an external API or a separate `.csv` file.