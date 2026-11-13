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


const loadCSV = (url) => {
    return new Promise((resolve, reject) => {
        Papa.parse(url, {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: (results) => resolve(results.data),
            error: (error) => reject(error)
        });
    });


};

Promise.all([
    loadCSV("2025_ucat_results.csv"),
    loadCSV("2026_ucat_anz_percentiles.csv")
]).then(([data2025, data2026]) => {

    const trace1 = {
        x: data2025.map(r => r.score_input),
        y: data2025.map(r => r.percentile_output),
        type: "scatter",
        mode: "lines",
        name: "2025", 
        line: { width: 3 },
        hovertemplate: "<b>2025 Score</b>: %{x}<br><b>Percentile</b>: %{y}%<extra></extra>"
    };

    const trace2 = {
        x: data2026.map(r => r.score_input),
        y: data2026.map(r => r.percentile_output),
        type: "scatter",
        mode: "lines",
        name: "2026", 
        line: { width: 3,}, 
        hovertemplate: "<b>2026 Score</b>: %{x}<br><b>Percentile</b>: %{y}%<extra></extra>"
    };

    const layout = {
        title: "UCAT Score vs Percentile Comparison",
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
            range: [0, 100]
        },
        hovermode: "x unified",
        legend: {
            orientation: "h",
            y: 1.25,
            x: 0.5,
            xanchor: "center"
        }
    };

   
    Plotly.newPlot("graph", [trace1, trace2], layout);
})
.catch((error) => {
    console.error("Error loading or parsing CSV files:", error);
});

