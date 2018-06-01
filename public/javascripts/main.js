var dom = document.getElementById("chart");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    legend: {
        data: ['温度']
    },
    grid: {
        left: '0%',
        right: '6%',
        bottom: '0%',
        containLabel: true
    },
    // toolbox: {
    //     show: true,
    //     feature: {
    //         dataZoom: {
    //             yAxisIndex: 'none'
    //         },
    //         dataView: {
    //             readOnly: false
    //         },
    //         magicType: {
    //             type: ['line', 'bar']
    //         },
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            interval: 0,
            formatter: function (value) {
                return value + '时';
            }
        },
        data: getHours()
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            interval: 0,
            // formatter: function (value) {
            //     return value + '℃';
            // }
            formatter: '{value} °C'
        },
    },
    series: [{
        name: '温度',
        type: 'line',
        data: getTemperature(),
        markPoint: {
            data: [{
                    type: 'max',
                    name: '最大值'
                },
                {
                    type: 'min',
                    name: '最小值'
                }
            ]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

function getHours() {
    var arr = []
    for (var item of $.ajax({
            url: "/data",
            async: false
        }).responseJSON) {
        arr.push(item.hours)
    }
    return arr
}

function getTemperature() {
    var arr = []
    for (var item of $.ajax({
            url: "/data",
            async: false
        }).responseJSON) {
        arr.push(item.T)
    }
    return arr
}

window.onresize = function () {
    myChart.resize()
}