import { UpshotUIThemeType } from '../../..'
import { darken } from 'polished'
import { ApexOptions } from 'apexcharts'

export function getOptions(
  theme: UpshotUIThemeType,
  data: Array<{
    name: string
    value: number
  }>
) {
  const max = data.reduce((pre, cur) => pre < cur.value ? cur.value : pre, data[0].value)

  return {
    ...(theme.chart.options as ApexOptions),
    legend: {
      show: false,
    },
    chart: {
      id: 'upshotTreeMapChart',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: false,
      },
    },
    grid: {
      show: true,
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
      forceNiceScale: true,
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
    tooltip: {
      enabled: true,
      shared: false,
      custom: function ({ dataPointIndex }: { dataPointIndex: number }) {
        const name = data[dataPointIndex].name
        const value = data[dataPointIndex].value
        return `
          <style>
            .apexcharts-tooltip {
              background: transparent!important;
              border: none!important;
              box-shadow: none!important;
            }
          </style>
          <div style="background-color: ${
            theme.rawColors['grey-900']
          }; border-radius: 5px; color: white; padding: 12px; font-weight: 600">
            ${name} <span style="color: ${
          value > 0 ? theme.rawColors.blue : theme.rawColors.red
        }">${value > 0 ? `+${value}` : `${value}`}%</span>
          </div>
          `
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
      },
      formatter: function (text: string, op: { value: number }) {
        const v: string = op.value > 0 ? `+${op.value}` : `${op.value}`
        return [text, v]
      },
    },
    plotOptions: {
      treemap: {
        enableShades: true,
        shadeIntensity: 0.5,
        reverseNegativeShade: true,
        useFillColorAsStroke: true,
        colorScale: {
          ranges: [
            {
              from: -max,
              to: 0,
              color: theme.rawColors.red,
            },
            {
              from: 0.001,
              to: max,
              color: darken(0.2, theme.rawColors.blue),
            },
          ],
        },
      },
    },
  }
}
