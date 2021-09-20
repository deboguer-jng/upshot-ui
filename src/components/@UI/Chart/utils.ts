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
      sparkline: {
        enabled: true,
      }
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
      }
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
        opacityFrom: 0.9,
        opacityTo: 0.6,
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
        series,
        seriesIndex,
        dataPointIndex,
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
            transform: translateX(${offset}) translateY(-45px);
            overflow: visible;
          }
          .apexcharts-xaxistooltip, .apexcharts-yaxistooltip {
            background: black;
            color: ${theme.rawColors.text};
            border-radius: ${theme.radii.pill};
            font-size: ${theme.fontSizes[0]};
          }
        </style>
        <div style="
          position: relative;
          background: black;
          border-radius: 1rem;
          padding: 0.1rem 1rem;
          overflow: visible;
          font-family: ${theme.fonts.body};
          color: ${colors[seriesIndex]};
          border: 1px solid ${colors[seriesIndex]};
        " id="apexcharts-custom-tooltip"
        >
          $ ${series[seriesIndex][dataPointIndex]}
          <div style="
            position: absolute;
            bottom: -6px;
            left: 50%;
            transform: translateX(-50%) rotate(-45deg);
            width: 10px;
            height: 10px;
            background: black;
            border-left: 1px solid ${colors[seriesIndex]};
            border-bottom: 1px solid ${colors[seriesIndex]};
          ">
          </div>
        </div>
        `
      },
      x: {
        show: false,
        format: 'dd/MM/yy HH:mm',
      },
    },
  }
}

export function toggle(
  idx,
  seriesName,
  filterStatus,
  setFilterStatus,
) {
  ApexCharts.exec('upshotChart', 'toggleSeries', seriesName)

  const newStatus = [...filterStatus]
  newStatus[idx] = !newStatus[idx]
  setFilterStatus(newStatus)
}