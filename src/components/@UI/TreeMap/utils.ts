import { UpshotUIThemeType } from '../../..'
import { transparentize } from 'polished'
import { ApexOptions } from 'apexcharts'

export function getOptions(
  theme: UpshotUIThemeType,
  data: Array<{
    id: number
    name: string
    delta: number
    marketCap: number
  }>,
  dataAvailable: boolean,
  onCollectionSelected?: (index: number) => void
) {
  const truncate = (input: string, size: number) =>
    input.length > size ? `${input.substring(0, size)}...` : input

  const max = dataAvailable
    ? data.reduce(
        (pre, cur) => (pre < cur.delta ? cur.delta : pre),
        data[0].delta
      )
    : 0
  const min = dataAvailable
    ? data.reduce(
        (pre, cur) => (pre > cur.delta ? cur.delta : pre),
        data[0].delta
      )
    : 0

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
      events: {
        dataPointSelection: (event: MouseEvent, chartContext: any,
          config: { dataPointIndex: number }
        ) => {
          onCollectionSelected(config.dataPointIndex)
        },
      },
    },
    grid: {
      show: true,
      padding: {
        left: 0,
        right: 0,
        top: -20,
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
        const value = data[dataPointIndex].delta
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
      offsetY: -5,
      formatter: function (
        text: string,
        op: { value: number; dataPointIndex: number }
      ) {
        const v: string =
          data[op.dataPointIndex].delta > 0
            ? `+${data[op.dataPointIndex].delta}%`
            : `${data[op.dataPointIndex].delta}%`

        return [truncate(text, 8), v] as any
      },
    },
    colors: data.map((item) => {
      if (item.delta < 0) {
        return transparentize((-item.delta / -min) * 0.5, theme.rawColors.red)
      } else {
        return transparentize((item.delta / max) * 0.5, theme.rawColors.blue)
      }
    }),
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
      },
    },
  }
}
