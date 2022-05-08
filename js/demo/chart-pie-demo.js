// Pie Chart Example
var ctx = document.getElementById('myPieChart')
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Proposal Sukses', 'Proposal Gagal'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#264179', '#EDF3FF']
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: 'rgb(255,255,255)',
      bodyFontColor: '#858796',
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10
    },
    legend: {
      display: false
    },
    cutoutPercentage: 75
  }
})
