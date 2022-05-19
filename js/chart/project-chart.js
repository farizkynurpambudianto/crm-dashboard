function assertDataProjectChart(firstYear, endYear, type) {
  if (firstYear === undefined) return
  if (endYear === undefined) return
  if (type === undefined) return

  const dataOne = projectChart.data.datasets[0]
  const dataTwo = projectChart.data.datasets[1]

  dataOne.data = arrayGeneratorProjectChart(12)
  dataOne.label = `${type} ${firstYear}`

  dataTwo.data = arrayGeneratorProjectChart(12)
  dataTwo.label = `${type} ${endYear}`

  projectChart.update()
}

function projectChartHandler(val, year, comparationYear) {
  const data = projectChart.data.datasets
  const sanitizedArr = val.filter((element) => {
    return element !== undefined
  })

  const newData = data.map((item) => {
    const bool = sanitizedArr.some((value) => item.id === value)
    return {
      ...item,
      label: projectLabelGenerator(item.id, year, comparationYear),
      hidden: !bool
    }
  })

  console.log(newData)

  projectChart.data.datasets = newData
  projectChart.update()
}

function projectLabelGenerator(key, year, comparationYear) {
  const obj = {
    prospect: `Prospek ${year}`,
    project: `Proyek ${year}`,
    prospectComparation: `Prospek ${comparationYear}`,
    projectComparation: `Proyek ${comparationYear}`
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

function randomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min) + min)
}

function arrayGeneratorProjectChart(length) {
  let tempArray = []
  for (let i = 1; i <= length; i++) {
    tempArray.push(randomNumber(0, 50))
  }

  return tempArray
}

// Area Chart Example
var ctx = document.getElementById('projectChart')
var projectChart = new Chart(ctx, {
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
        id: 'prospect',
        label: 'Prospek 2022',
        borderColor: 'rgba(61, 90, 149, 1)',
        data: arrayGeneratorProjectChart(12),
        hidden: false
      },
      {
        id: 'project',
        label: 'Proyek 2022',
        borderColor: 'rgba(247, 165, 51, 1)',
        data: arrayGeneratorProjectChart(12),
        hidden: false
      },
      {
        id: 'prospectComparation',
        label: 'Prospek 2021',
        borderColor: 'rgba(61, 90, 149, 0.4)',
        borderDash: [5, 5],
        data: arrayGeneratorProjectChart(12),
        hidden: true
      },
      {
        id: 'projectComparation',
        label: 'Proyek 2021',
        borderColor: 'rgba(247, 165, 51, 0.4)',
        borderDash: [5, 5],
        data: arrayGeneratorProjectChart(12),
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
            min: 0,
            max: 50,
            stepSize: 10,
            maxTicksLimit: 6,
            padding: 10
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
      caretPadding: 10
    }
  }
})
