import { UpshotUIThemeType } from '../../..'
import { ApexOptions } from 'apexcharts'

export function getOptions(
  theme: UpshotUIThemeType,
  data: Array<{
    x: string
    y: number
  }>
) {
  return {
    ...(theme.chart.options as ApexOptions),
    legend: {
      show: false,
    },
    chart: {
      height: 350,
      type: 'treemap',
      toolbar: {
        show: false,
      },
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
    tooltip: {
      enabled: true,
      shared: false,
      custom: function ({ dataPointIndex }: { dataPointIndex: number }) {
        const name = data[dataPointIndex].x
        const value = data[dataPointIndex].y
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
        return [text, op.value > 0 ? `+${op.value}` : op.value]
      },
      offsetY: -4,
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
              from: -1000000,
              to: 0,
              color: theme.rawColors.red,
            },
            {
              from: 0.001,
              to: 1000000,
              color: theme.rawColors.blue,
            },
          ],
        },
      },
    },
  }
}
