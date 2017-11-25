$(function() {
    var options = {};
    var dataP = [];
    $.ajax({
        method: "GET",
        url: "http://vd9ksd.myvserver.online/lora/values?limit=10",
        success: function(data) {
            options = {
                title: {
                    text: "Helligkeit"
                },
                animationEnabled: true,
                axisY: {
                    includeZero: false,
                    maximum: 100,
                    valueFormatString: "#0"
                },
                axisX: {
                    title: "Zeitpunkt"
                },
                toolTip: {
                    shared: true,
                    content: "<span style='\"'color: {color};'\"'><strong>{name}</strong></span> {y}"
                },

                data: [{
                    type: "splineArea",
                    showInLegend: true,
                    name: "Helligkeit",
                    dataPoints: []
                }]
            };

            $.each(data, function(id, obj) {
                var coords = {};
                var str = obj.payload_fields.light;
                var lightVal = str.substr(str.indexOf("(") + 1, str.indexOf(",") - 1);
                str = obj.metadata.time;
                coords.y = lightVal;
                coords.x = str.substr(str.indexOf("T") + 1, str.indexOf("T") + 3);

                options.data[0].dataPoints.push(coords);


            });

            options.data.dataPoints = dataP;
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
    //Better to construct options first and then pass it as a parameter

    $(".chartContainer").CanvasJSChart(options);

});
