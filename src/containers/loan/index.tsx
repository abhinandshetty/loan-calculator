import React, { useEffect, useState } from 'react';
import PieChart from '@/components/pie-chart';
import SliderInputSection from '@/components/slider-input-section';
import ChartLegend from '@/components/chart-legend';

const Loan: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(3000000);
  const [rateOfInterest, setRateOfInterest] = useState<number>(7);
  const [tenure, setTenure] = useState<number>(240);
  const [emi, setEmi] = useState<number>(0);

  useEffect(() => {
    setEmi(
      (loanAmount * (rateOfInterest / 12 / 100) * Math.pow(1 + rateOfInterest / 12 / 100, tenure)) /
        (Math.pow(1 + rateOfInterest / 12 / 100, tenure) - 1)
    );
  }, [loanAmount, rateOfInterest, tenure]);

  const formatAmount = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      <div className="grid bg-black h-16 text-white text-center pt-5">Finance Tools</div>
      <div className="grid grid-cols-12 lg:mt-5">
        <div className="col-start-1 col-span-12 lg:col-start-2 lg:col-span-10 p-8 bg-white mt-5 shadow-xl grid grid-cols-2">
          <div className="col-span-12 md:col-span-1">
            <div className="mt-5 my-10">
              <div className="font-bold text-3xl">Loan Calculator</div>
            </div>
            <SliderInputSection
              title="Loan amount"
              inputLabel="₹"
              inputValue={Number(loanAmount).toLocaleString('en-IN')}
              value={loanAmount}
              min={100000}
              max={50000000}
              onChange={setLoanAmount}
            />

            <SliderInputSection
              title="Rate of interest"
              inputLabel="%"
              inputValue={rateOfInterest}
              value={rateOfInterest}
              min={0}
              max={30}
              onChange={setRateOfInterest}
            />

            <SliderInputSection
              title="Loan tenure"
              inputLabel="months"
              inputValue={tenure}
              value={tenure}
              min={1}
              max={360}
              onChange={setTenure}
            />

            <div className="my-12">
              <div className="grid grid-cols-3">
                <div className="col-start-1 font-bold text-2xl">EMI</div>
                <div
                  className="col-start-3 col-start-1 font-bold text-2xl text-right"
                  style={{ color: '#01c5d3' }}
                >
                  {formatAmount(emi)}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-1">
            <PieChart
              title={`Total amount: <br/><strong>${formatAmount(emi * tenure)}</strong>`}
              seriesData={[loanAmount, emi * tenure - loanAmount]}
            />

            <ChartLegend label="Principal" value={formatAmount(loanAmount)} color="#01c5d3" />
            <ChartLegend
              label="Interest"
              value={formatAmount(emi * tenure - loanAmount)}
              color="#ff8b5c"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Loan;
