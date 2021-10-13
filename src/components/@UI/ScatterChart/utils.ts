import ApexCharts from 'apexcharts'

export function toggle(idx, seriesName, filterStatus, setFilterStatus) {
  ApexCharts.exec('upshotChart', 'toggleSeries', seriesName)

  const newStatus = [...filterStatus]
  newStatus[idx] = !newStatus[idx]
  setFilterStatus(newStatus)
}
