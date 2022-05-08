function assertDataHitrate(firstYear, endYear) {
  if (firstYear === undefined) return
  if (endYear === undefined) return

  const dataOne = myBarChart.data.datasets[0]
  const dataTwo = myBarChart.data.datasets[1]

  dataOne.data = numberGeneratorArray(12)
  dataOne.label = `${type} ${firstYear}`

  dataTwo.data = numberGeneratorArray(12)
  dataTwo.label = `${type} ${endYear}`

  myBarChart.update()
}

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '')
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
    dec = typeof dec_point === 'undefined' ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec)
      return '' + Math.round(n * k) / k
    }
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}

function randomNumberInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function numberGeneratorArray() {
  let tempArray = []

  for (i = 0; i <= 12; i++) {
    tempArray.push(randomNumberInterval(0, 100))
  }

  return tempArray
}

// Bar Chart Example
var ctx = document.getElementById('hitRateChart')
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Sep',
      'Nov',
      'Dec'
    ],
    datasets: [
      {
        label: 'Hit Rate',
        backgroundColor: '#264179',
        data: numberGeneratorArray()
      },
      {
        label: 'Hit Rate',
        backgroundColor: '#E18708',
        data: numberGeneratorArray()
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [
        {
          categoryPercentage: 0.2,
          barPercentage: 1,
          time: {
            unit: 'month'
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxTicksLimit: 12
          },
          maxBarThickness: 8
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 100,
            stepSize: 25,
            maxTicksLimit: 5,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return `${value}%`
            }
          },
          gridLines: {
            color: 'rgb(234, 236, 244)',
            zeroLineColor: 'rgb(234, 236, 244)',
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
          }
        }
      ]
    },
    legend: {
      align: 'center',
      padding: 50,
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: 'rgb(255,255,255)',
      bodyFontColor: '#858796',
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel =
            chart.datasets[tooltipItem.datasetIndex].label || ''
          return tooltipItem.yLabel + '%'
        }
      }
    }
  }
})
