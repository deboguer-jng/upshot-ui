const chart = {
  options: {
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
      horizontalAlign: 'left',
      fontSize: '14px',
      labels: {
        useSeriesColors: true,
      },
      markers: {
        width: 16,
        height: 16,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  },
  defaultSeries: [
    {
      name: 'default',
      data: [31, 40, 28, 32, 51, 42, 109, 100],
    },
  ],
}

export default chart
