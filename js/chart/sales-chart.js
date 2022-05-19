Chart.defaults.global.defaultFontFamily = "'Satoshi', sans-serif"

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

function chartHandler(val, year, comparationYear) {
  const data = myLineChart.data.datasets
  const sanitizedArr = val.filter((element) => {
    return element !== undefined
  })

  const newData = data.map((item) => {
    const bool = sanitizedArr.some((value) => item.id === value)
    return {
      ...item,
      label: labelGenerator(item.id, year, comparationYear),
      hidden: !bool
    }
  })
  console.log(data)
  myLineChart.data.datasets = newData
  myLineChart.update()
}

function labelGenerator(key, year, comparationYear) {
  const obj = {
    sales: `Penjualan ${year}`,
    income: `Pendapatan ${year}`,
    target: `Target ${year}`,
    incomeComparation: `Pendapatan ${comparationYear}`,
    salesComparation: `Penjualan ${comparationYear}`,
    salesComparation: `Target ${comparationYear}`
  }

  return obj[key]
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
        id: 'income',
        label: 'Pendapatan 2022',
        borderColor: 'rgba(247, 165, 51, 1)',
        data: arrayGenerator(12),
        hidden: false
      },
      {
        id: 'sales',
        label: 'Penjualan 2022',
        borderColor: 'rgba(61, 90, 149, 1)',
        data: arrayGenerator(12),
        hidden: false
      },
      {
        id: 'target',
        label: 'Target 2022',
        borderColor: 'rgba(231, 68, 107, 1)',
        data: arrayGenerator(12),
        hidden: false
      },
      {
        id: 'incomeComparation',
        label: 'Pendapatan 2021',
        borderColor: 'rgba(247, 165, 51, 0.4)',
        borderDash: [5, 5],
        data: arrayGenerator(12),
        hidden: true
      },
      {
        id: 'salesComparation',
        label: 'Penjualan 2021',
        borderColor: 'rgba(61, 90, 149, 0.4)',
        borderDash: [5, 5],
        data: arrayGenerator(12),
        hidden: true
      },
      {
        id: 'targetComparation',
        label: 'Target 2021',
        borderColor: 'rgba(231, 68, 107, 0.4)',
        borderDash: [5, 5],
        data: arrayGenerator(12),
        hidden: true
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0,
        backgroundColor: 'transparent'
      }
    },
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

console.log(myLineChart)
