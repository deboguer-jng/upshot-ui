// @ts-nocheck
import { UpshotUIThemeType } from '../../..'
import ApexCharts from 'apexcharts'

export function getOptions(
  theme: UpshotUIThemeType,
  data: Array<{
    name: string
    data: number[] | (Date | number)[][]
    length?: number
  }>,
  events?: any
) {
  const colors = [
    theme.rawColors.blue,
    theme.rawColors.pink,
    theme.rawColors.purple,
    theme.rawColors.yellow,
    theme.rawColors.red,
    theme.rawColors.green,
  ]

  return {
    ...(theme.chart.options as ApexOptions),
    chart: {
      id: 'upshotChart',
      type: 'area',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
      events: {
        ...(events || {})
      },
    },
    stroke: {
      width: 2.5,
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
      logarithmic: true,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    colors,
    fill: {
      type: 'gradient',
      gradient: {
        gradientToColors: [
          ...new Array(data.length || theme.chart.defaultSeries.length),
        ].map((_) => 'transparent'),
        opacityFrom: 0.65,
        opacityTo: 0.3,
        stops: [0, 90, 100],
      },
    },
    markers: {
      colors,
      strokeColors: colors,
    },
    tooltip: {
      enabled: true,
      shared: false,
      fixed: {
        enabled: true,
        position: 'topRight',
        offsetX: 0,
        offsetY: 0,
      },
      custom: function ({
        dataPointIndex,
        w: {
          globals: { labels },
        },
      }) {
        const time = new Date(labels[dataPointIndex]);

        return `
        <style>
          .apexcharts-tooltip {
            background: transparent!important;
            border: none!important;
            box-shadow: none!important;
          }
        </style>
        `
      },
      x: {
        show: false,
        format: 'dd/MM/yy HH:mm',
      },
    },
  }
}

export function toggle(idx, seriesName, filterStatus, setFilterStatus) {
  ApexCharts.exec('upshotChart', 'toggleSeries', seriesName)

  const newStatus = [...filterStatus]
  newStatus[idx] = !newStatus[idx]
  setFilterStatus(newStatus)
}
