$(function() {
    var options = {};
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
                    maximum: 10,
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
                    dataPoints: [{
                        x: 1,
                        y: 3000
                    }]
                }]
            };

            $.each(data, function(id, obj) {
                var coords = {};
                var str = obj.payload_fields.light;
                var lightVal = str.substr(str.indexOf("(") + 1, str.indexOf(","));
                str = obj.metadata.time;
                coords.y = lightVal;
                coords.x = str.substr(str.indexOf("T") + 1, str.indexOf("T") + 6);

                options.data.dataPoints.push(coords);


            });
            $(".wrapper").html(output);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
    //Better to construct options first and then pass it as a parameter

    $(".chartContainer").CanvasJSChart(options);

});
