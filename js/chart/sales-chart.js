// Set new default font family and font color to mimic Bootstrap's default styling
;(Chart.defaults.global.defaultFontFamily = 'Nunito'),
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
Chart.defaults.global.defaultFontColor = '#858796'

function assertData(firstYear, endYear, type) {
  if (firstYear === undefined) return
  if (endYear === undefined) return
  if (type === undefined) return

  const dataOne = myLineChart.data.datasets[0]
  const dataTwo = myLineChart.data.datasets[1]

  dataOne.data = arrayGenerator(12)
  dataOne.label = `${type} ${firstYear}`

  dataTwo.data = arrayGenerator(12)
  dataTwo.label = `${type} ${endYear}`

  myLineChart.update()
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

function toMillion(number) {
  const million = 1000000
  return number / million
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min
}

function arrayGenerator(length) {
  let tempArray = []
  for (let i = 1; i <= length; i++) {
    tempArray.push(randomNumber(10000000, 100000000))
  }

  return tempArray
}

// Area Chart Example
var ctx = document.getElementById('salesChart')
var myLineChart = new Chart(ctx, {
  type: 'line',
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
      'Nov',
      'Dec'
    ],
    datasets: [
      {
        label: 'Pendapatan 2022',
        lineTension: 0.3,
        backgroundColor: 'rgba(237, 243, 255, 1)',
        borderColor: 'rgba(78, 115, 223, 1)',
        pointRadius: 3,
        pointBackgroundColor: 'rgba(78, 115, 223, 1)',
        pointBorderColor: 'rgba(78, 115, 223, 1)',
        pointHoverRadius: 3,
        pointHoverBackgroundColor: 'rgba(78, 115, 223, 1)',
        pointHoverBorderColor: 'rgba(78, 115, 223, 1)',
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: arrayGenerator(12)
      },
      {
        label: 'Penjualan 2021',
        lineTension: 0.3,
        backgroundColor: 'rgba(255, 250, 242, 1)',
        borderColor: 'rgba(225, 135, 8, 1)',
        pointRadius: 3,
        pointBackgroundColor: 'rgba(225, 135, 8, 1)',
        pointBorderColor: 'rgba(225, 135, 8, 1)',
        pointHoverRadius: 3,
        pointHoverBackgroundColor: 'rgba(225, 135, 8, 1)',
        pointHoverBorderColor: 'rgba(225, 135, 8, 1)',
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: arrayGenerator(12)
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
          time: {
            unit: 'date'
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            autoskip: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            maxTicksLimit: 5,
            padding: 10,
            stepSize: 25000000,
            min: 0,
            max: 100000000,
            callback: function (label, index, labels) {
              return `${label / 1000000} jt`
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
      display: false
    },
    tooltips: {
      backgroundColor: 'rgb(255,255,255)',
      bodyFontColor: '#858796',
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel =
            chart.datasets[tooltipItem.datasetIndex].label || ''
          return datasetLabel + ': Rp ' + number_format(tooltipItem.yLabel)
        }
      }
    }
  }
})
