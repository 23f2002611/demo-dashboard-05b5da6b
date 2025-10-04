# Data Visualizations

This project demonstrates two basic data visualizations using D3.js: a line chart and a bar chart.

## How it works

This application loads data from `sample.csv` and renders two distinct visualizations:

1.  **Line Chart (Value Over Time):**
    *   **Data Source:** `sample.csv`
    *   **Purpose:** Displays the trend of a `value` over `date`.
    *   **Implementation:** The `app.js` script uses D3.js to parse the `date` column into `Date` objects and the `value` column into numbers. It then creates an SVG element within the `#chart` div, sets up time and linear scales for the X and Y axes respectively, and draws a line connecting the data points.

2.  **Bar Chart (Annual Value Summary):**
    *   **Data Source:** `sample.csv`
    *   **Purpose:** Shows the aggregated sum of `value` for each year present in the dataset.
    *   **Implementation:** The `app.js` script first aggregates the data from `sample.csv` by extracting the year from each `date` and summing up the corresponding `value`s. It then creates a separate SVG element within the `#bars` div. A band scale is used for the X-axis (years) and a linear scale for the Y-axis (total value). Rectangles are drawn for each year, with their height proportional to the aggregated annual value.

Both charts are styled using `styles.css` to provide a clean and readable presentation. The `index.html` file provides the structure, including the `div` elements where the D3.js visualizations are rendered.

## Project Structure

*   `index.html`: The main HTML file that structures the web page and includes the D3.js library and `app.js`.
*   `styles.css`: Contains the styling for the HTML elements and the SVG charts.
*   `app.js`: The JavaScript file responsible for loading data, processing it, and rendering the D3.js visualizations.
*   `sample.csv`: A sample dataset used for the visualizations.
*   `.github/workflows/pages.yml`: GitHub Actions workflow for deploying the project to GitHub Pages.
*   `LICENSE`: The project's license file.
*   `README.md`: This file, providing information about the project.

## Getting Started

To run this project locally:

1.  Clone the repository: `git clone [repository-url]`
2.  Navigate to the project directory: `cd [project-name]`
3.  Open `index.html` in your web browser.

Alternatively, if hosted on GitHub Pages, simply visit the deployed URL.