$(function() {
    $.ajax({
        method: "GET",
        url: "http://vd9ksd.myvserver.online/lora/values?limit=10",
        success: function(data) {
            var output = "";
            var left = true;
            var test = 0;
            $.each(data, function(id, obj) {
                console.log(test);


            });
            $(".wrapper").html(output);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
    //Better to construct options first and then pass it as a parameter
    var options = {
        title: {
            text: "Helligkeit"
        },
        animationEnabled: true,
        axisY: {
            includeZero: false,
            maximum: 110000,
            valueFormatString: "#0,."
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
                },
                {
                    x: 2,
                    y: 7000
                },
                {
                    x: 3,
                    y: 10000
                },
                {
                    x: 4,
                    y: 14000
                },
                {
                    x: 5,
                    y: 23000
                },
                {
                    x: 6,
                    y: 31000
                },
                {
                    x: 7,
                    y: 42000
                },
                {
                    x: 8,
                    y: 56000
                },
                {
                    x: 9,
                    y: 64000
                },
                {
                    x: 10,
                    y: 81000
                }
            ]
        }]
    };
    $(".chartContainer").CanvasJSChart(options);

});
