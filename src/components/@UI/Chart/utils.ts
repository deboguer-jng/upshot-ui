// @ts-nocheck
import { UpshotUIThemeType } from '../../..'
import ApexCharts from 'apexcharts'

export function getOptions(
  theme: UpshotUIThemeType,
  data: Array<{
    name: string
    data: number[] | (Date | number)[][]
    length?: number,
  }>,
  embedded: boolean,
  selected?: boolean = true,
) {
  const colors = [
    theme.rawColors.primary,
    theme.rawColors.secondary,
    theme.rawColors.purple,
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
    },
    stroke: {
      width: selected ? 2.5 : 0.5,
    },
    yaxis: {
      axisBorder: {
        show: !embedded,
      },
      labels: {
        show: false,
      },
    },
    xaxis: {
      type: 'datetime',
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: !embedded,
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
        opacityFrom: selected ? 0.9 : 0.5,
        opacityTo: selected ? 0.6 : 0.2,
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
      custom: function ({
        w: {
          globals: { clientX: x, svgWidth: width },
        },
      }) {
        const offset =
          x <= width / 2 ? 'calc(-50% - 12px)' : 'calc(50% + 9.5px)'

        return `
        <style>
          .apexcharts-tooltip {
            background: transparent!important;
            border: none!important;
            box-shadow: none!important;
            transform: translateX(${offset}) translateY(-10px);
            overflow: visible;
          }
          .apexcharts-xaxistooltip, .apexcharts-yaxistooltip {
            background: black;
            color: ${theme.rawColors.text};
            border-radius: ${theme.radii.pill};
            font-size: ${theme.fontSizes[0]};
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
