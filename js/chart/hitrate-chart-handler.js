let firstYearHitrate = '2021'
let endYearHitrate = '2021'

const handlerFilterHitrateChart = (event, key) => {
  if (key === 'firstYear') {
    firstYearHitrate = event.target.value
  }
  if (key === 'endYear') {
    endYearHitrate = event.target.value
  }

  $('#legend1-hitrate-chart').text(`Hitrate ${firstYearHitrate}`)
  $('#legend2-hitrate-chart').text(`Hitrate ${endYearHitrate}`)
  assertDataHitrate(firstYearHitrate, endYearHitrate)
  console.log(firstYearHitrate, endYearHitrate)
}
