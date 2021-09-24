function metadata(sample){
    d3.json("samples.json").then((data)=>{
        var metadata= data.metadata;
        var resultsarray = metadata.filter(sampleobject =>
            sampleobject.id == sample);
        var results = resultsarray[0]
        var samples = d3.select("#sample-metadata");
        samples.html("");

        Object.entries(results).forEach(([a,b]) =>{
            samples.append("h5").text(`${a}: ${b}`);
        });
    });
}
function DifferentCharts(sample){
    d3.json("samples.json").then((data)=>{
        var samples =data.samples;
        var resultsarray = samples.filter(sampleobject =>
            sampleobject.id == sample);
       
        var results = resultsarray[0]
        var id = results.otu_ids;
        var values = results.sample_values;
        var labels = results.otu_labels;
        

        console.log(samples);
        console.log(resultsarray);
        console.log(results);
        
        // bubble chart
        var layout ={
            xaxis:{ title: "OTU ID"}
        };
            var trace1 = [
                {
                y: values,
                x:id,
                mode:"markers",
                text: labels,
                marker:{
                    color: id,
                    size: values,
                }
            }
        ];
        console.log(values);
        console.log(id);
        console.log(values);
        Plotly.plot("bubble", trace1, layout);


// bar chart
        var trace2=[{
            y:id.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
            x:values.slice(0,10).reverse(),
            text:labels.slice(0,10).reverse(),
            type:"bar",
            orientation:"h"

  
        }

        ];
        var barlayout={
            title: "Top 10 Bacteria"
        };
        Plotly.newPlot("bar", trace2, barlayout);
        });
}

function init(){
    var dropdown =d3.select("#selDataset");
    d3.json("samples.json").then((data)=>{
        var names =data.names;
        names.forEach((sample) =>{
        dropdown
        .append("option")
        .text(sample)
    });
    const Sample=names[0];
    DifferentCharts(Sample);
    metadata(Sample);
    });
}
function optionChanged(NewSample){
    DifferentCharts(NewSample);
    metadata(NewSample);
}


init();