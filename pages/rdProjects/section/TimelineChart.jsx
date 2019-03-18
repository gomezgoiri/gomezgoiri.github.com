import React from 'react'
import PropTypes from 'prop-types'
import Chart from 'react-google-charts'

const columns = [
  { type: 'string', id: 'President' },
  { type: 'date', id: 'Start' },
  { type: 'date', id: 'End' }
]

const TimelineChart = ({ rows = [], onSelected }) => (
  <Chart
    chartType="Timeline"
    width="100%"
    height="300px"
    loader={<div>Loading Chart</div>}
    data={[
      columns,
      ...rows.map(({ short, start, end }) => [
        short,
        new Date(start),
        new Date(end)
      ])
    ]}
    chartEvents={[
      {
        eventName: 'select',
        callback: ({ chartWrapper }) => {
          const selection = chartWrapper.getChart().getSelection()
          onSelected(selection[0].row)
        }
      }
    ]}
  />
)

TimelineChart.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      short: PropTypes.string,
      start: PropTypes.string,
      end: PropTypes.string
    })
  ),
  onSelected: PropTypes.func.isRequired
}

export default TimelineChart
