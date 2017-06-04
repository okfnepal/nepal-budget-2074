(function  ($) {

    var data = [{
        name : 'गरिबीको अन्त्य',
        fund : '2,04,40,32,17',
        y : 15.98,
        y2073 : '202875032'
    }, {
        name : 'शून्य भोकमरि',
        fund : '60,74,10,69',
        y : 4.75,
        y2073 : '65200389'
    }, {
        name : 'स्वस्थ जीवन',
        fund : '32,72,71,52',
        y : 2.56,
        y2073 : '42600024'
    }, {
        name : 'गणस्तरिय शिक्षा',
        fund : '67,84,60,40',
        y : 5.30,
        y2073 : '118210864'
    }, {
        name : 'लैङ्गिक  समानता',
        fund : '1,99,01,79',
        y : 0.16,
        y2073 : '2222245'
    }, {
        name : 'दिगो सफा पानी तथा सरसफाइ सेवा',
        fund : '33,14,65,53',
        y : 2.59,
        y2073 : '33978549'
    }, {
        name : 'आधुिनक ऊजार्मा पहुँचु',
        fund : '69,32,44,09',
        y : 5.42,
        y2073 : '54147486'
    }, {
        name : 'समावेशी आथिर्क वृद्धि तथा मर्यादित काम',
        fund : '9,30,60,88',
        y : .73,
        y2073 : '10850853'
    }, {
        name : 'उद्योग, नवीन खोज र पूर्वाधार',
        fund : '1,59,34,96,67',
        y : 12.46,
        y2073 : '170820561'
    }, {
        name : 'असमानता न्यूनीकरण',
        fund : '3,46,47,54',
        y : .27,
        y2073 : '4408290'
    }, {
        name : 'दिगो शहर र वस्तीहरू',
        fund : '2,40,97,90,18',
        y : 18.84,
        y2073 : '209078414'
    }, {
        name : 'दिगो उपभोग तथा उत्पादन',
        fund : '9,43,49',
        y : .01,
        y2073 : '82483'
    }, {
        name : 'जलवायु परिवतर्न अनुकुुलन',
        fund : '3,79,84,65',
        y : .30,
        y2073 : '2785606'
    }, {
        name : 'भूसतह स्रोतको उपयोग ',
        fund : '16,31,19,80',
        y : 1.28,
        y2073 : '15238037'
    }, {
        name : 'शान्तिपूर्ण, न्यायपूर्ण र सशक्त समाज',
        fund : '3,67,90,19,80',
        y : 28.76,
        y2073 : '109652093'
    }, {
        name : 'दिगो विकासका लागि साझेदारि',
        fund : '7,60,99,35',
        y : .59,
        y2073 : '6770828'
    }

    ];

    Handlebars.registerHelper("inc", function(value, options)
    {
        return parseInt(value) + 1;
    });


    var source   = $("#tbl-data").html();
    var template = Handlebars.compile(source);
    var context = {data : data};
    var html    = template(context);
    $(".text").html(html);


    /*charts*/
    Highcharts.chart('container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'आ.ब २०७४/०७५ को बजेट बिभाजन'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y:.1f}%</b> <br /> {point.fund}'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        credits : {
            enabled : false
        },
        series: [{
            name: 'percentage',
            colorByPoint: true,
            data: data
        }]
    });

    var names = data.map(function(item){return item.name;});
    var funds = data.map(function(item){return parseInt(item.fund.replace(/\,/g,""));});
    var funds2073 = data.map(function(item){return parseInt(item.y2073);});


    console.log(funds);

    Highcharts.chart('containerBar', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'बजेट बिभाजन तुलना ( ०७३/७४ र ०७४/७५)'
        },
        
        xAxis: {
            categories: names,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'in thousand',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' thousand'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true,
            // enabled : false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'year 2074/75',
            data: funds
        },{
            name: 'year 2073/74',
            data: funds2073
        }]
    });



})(jQuery);