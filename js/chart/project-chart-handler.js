let firstYearProjectChart = '2021'
let endYearProjectChart = '2021'
let typeProjectChart = 'Prospek'

const handlerFilterProjectChart = (event, key) => {
  if (key === 'firstYear') {
    firstYearProjectChart = event.target.value
  }
  if (key === 'endYear') {
    endYearProjectChart = event.target.value
  }
  if (key === 'type') {
    typeProjectChart = event.target.value
  }
  assertDataProjectChart(
    firstYearProjectChart,
    endYearProjectChart,
    typeProjectChart
  )
  $('#legend1-project-chart').text(
    `${typeProjectChart} ${firstYearProjectChart}`
  )
  $('#legend2-project-chart').text(`${typeProjectChart} ${endYearProjectChart}`)
  console.log(firstYearProjectChart, endYearProjectChart, typeProjectChart)
}
