import React from 'react';

interface IChartLegend {
  label: string;
  value: string | number;
  color: string;
}

const ChartLegend: React.FC<IChartLegend> = ({ label, value, color }) => (
  <div className="grid grid-cols-4 my-2">
    <div className="flex justify-end pr-2 pt-1">
      <div className="w-4 h-4 rounded-xl" style={{ backgroundColor: color }}></div>
    </div>
    <div>{label}</div>
    <div>
      <strong>{value}</strong>
    </div>
  </div>
);

export default ChartLegend;
