function metadata(sample){
    d3.json("samples.json").then((data)=>{
        var metadata= data.metadata;
        var resultsarray = metadata.filter(sampleobject =>
            sampleobject.id == sample);
        var results = resultsarray[0]
        var samples = d3.select("#sample-metadata");
        sample.html("");

        Object.entries(result).forEach(([a,b]) =>{
            samples.append("h5").text(`${a}: ${b}`);
        });
    });
}
function DifferentCharts(samples){
    d3.json("samples.json").then((data)=>{
        var selectsample =data.selectsample;
        var resultsarray = metadata.filter(sampleobject =>
            sampleobject.id == sample);
    }   var results = resultsarray[0]
        var id = results.otu_ids;
        var values = results.sample_values;
        var labels = results.otu_lables;
        

        console.log(selectsample);
        console.log(resultsarray);
        console.log(results);
        
        // bubble chart
        var layout ={
            xaxis:{ title: "OTU ID"}
        };
        var trace1=[
            x: id,
            y: values,
            mode:"markers",
            text: lables,
            marker:{
                color: id,
                size: values,
            }
        ];
        console.log(values);
        console.log(id);
        console.log(values);
        Plotly.newplot("bubble", trace1, layout);
}