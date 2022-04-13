let firstYear = '2021'
let endYear = '2021'
let type = 'Penjualan'

const handlerFilterSalesChart = (event, key) => {
  if (key === 'firstYear') {
    firstYear = event.target.value
  }
  if (key === 'endYear') {
    endYear = event.target.value
  }
  if (key === 'type') {
    type = event.target.value
  }
  $('#legend1-sales-chart').text(`${type} ${firstYear}`)
  $('#legend2-sales-chart').text(`${type} ${endYear}`)
  assertData(firstYear, endYear, type)
  console.log(firstYear, endYear, type)
}
