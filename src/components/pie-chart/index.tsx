import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';

interface IPieChart {
  title: string;
  seriesData: any;
}

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
}

const PieChart: React.FC<IPieChart> = ({ title, seriesData }) => {
  const options: Highcharts.Options = {
    chart: {
      style: {
        fontFamily: 'inherit',
      },
    },
    plotOptions: {
      pie: {
        innerSize: '90%',
        dataLabels: {
          enabled: false,
        },
        colors: ['#01c5d3', '#ff8b5c'],
      },
      series: {
        states: {
          hover: {
            enabled: false,
          },
          inactive: {
            enabled: false,
          },
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: title,
    },
    xAxis: {
      visible: false,
    },
    yAxis: {
      visible: false,
    },
    exporting: {
      enabled: false,
    },
    series: [
      {
        type: 'pie',
        data: seriesData,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChart;
