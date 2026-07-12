Papa.parse("2025_ucat_results.csv", {
    download:true,
    header:true,
    dynamicTyping: true,

    complete: function(results) {
        const x = results.data.map(r => r.score_input);
        const y = results.data.map(r => r.percentile_output);

        const trace = {
            x: x,
            y: y,

            type: "scatter",
            mode: "lines",

            line: {
                width: 3
            },

            hovertemplate: 
                "<b>Score</b>: %{x}<br>" + 
                "<b>Percentile</b>: %{y}%<extra></extra>"
        };

        const layout = {
            title: "2025 UCAT ANZ Score vs Percentile",

             font: {
        family: "DM Sans, sans-serif",
        size: 14,
        color: "#222"
    },

            xaxis: {
                title: "UCAT Score"
            },

            yaxis: {
                title: "Percentile",
                range: [0,100]
            },

            hovermode: "x unified"
        };

        Plotly.newPlot("graph", [trace], layout);
    }
});