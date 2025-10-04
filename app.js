document.addEventListener('DOMContentLoaded', function() {
    const margin = { top: 20, right: 30, bottom: 60, left: 60 };
    const width = 960 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Function to parse date and value
    const parseData = d => {
        d.date = d3.timeParse("%Y-%m-%d")(d.date);
        d.value = +d.value;
        return d;
    };

    // Load data and render charts
    d3.csv("sample.csv", parseData).then(data => {
        if (!data || data.length === 0) {
            console.error("No data loaded or data is empty.");
            return;
        }

        // --- Line Chart ---
        const svgLine = d3.select("#chart")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Scales
        const xScaleLine = d3.scaleTime()
            .domain(d3.extent(data, d => d.date))
            .range([0, width]);

        const yScaleLine = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)])
            .range([height, 0]);

        // Line generator
        const line = d3.line()
            .x(d => xScaleLine(d.date))
            .y(d => yScaleLine(d.value));

        // Add the line path
        svgLine.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line);

        // Add X axis
        svgLine.append("g")
            .attr("class", "x axis")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(xScaleLine));

        // Add Y axis
        svgLine.append("g")
            .attr("class", "y axis")
            .call(d3.axisLeft(yScaleLine));

        // --- Bar Chart ---
        // Aggregate data by year
        const annualData = d3.rollup(data,
            v => d3.sum(v, d => d.value),
            d => d.date.getFullYear()
        );

        const barData = Array.from(annualData, ([year, totalValue]) => ({ year: year, value: totalValue }))
            .sort((a, b) => a.year - b.year); // Sort by year

        if (!barData || barData.length === 0) {
            console.error("No aggregated data for bar chart.");
            return;
        }

        const svgBar = d3.select("#bars")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Scales for bar chart
        const xScaleBar = d3.scaleBand()
            .domain(barData.map(d => d.year))
            .range([0, width])
            .padding(0.1);

        const yScaleBar = d3.scaleLinear()
            .domain([0, d3.max(barData, d => d.value)])
            .range([height, 0]);

        // Add bars
        svgBar.selectAll(".bar")
            .data(barData)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", d => xScaleBar(d.year))
            .attr("y", d => yScaleBar(d.value))
            .attr("width", xScaleBar.bandwidth())
            .attr("height", d => height - yScaleBar(d.value));

        // Add X axis for bar chart
        svgBar.append("g")
            .attr("class", "x axis")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(xScaleBar));

        // Add Y axis for bar chart
        svgBar.append("g")
            .attr("class", "y axis")
            .call(d3.axisLeft(yScaleBar));

    }).catch(error => {
        console.error("Error loading or parsing data:", error);
    });
});