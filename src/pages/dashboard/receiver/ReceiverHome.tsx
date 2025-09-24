import { Package, Clock, Truck, CheckCircle } from "lucide-react";
import { Chart } from "react-google-charts";

const ReceiverHome = () => {
  const dataStatistic = [
    ["Status", "Count", { role: "style" }],
    ["Pending", 5, "#f59e0b"],
    ["Shipped", 12, "#3b82f6"],
    ["Delivered", 20, "#10b981"],
    ["Total", 37, "#9333ea"],
  ];

  return (
    <div>
      <h2 className="font-semibold text-3xl pb-6">Receiver Dashboard</h2>

      <div className="space-y-6">
        {/* Statistic Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 items-center justify-between max-w-5xl gap-6">
          
          <div className="p-10 border border-yellow-200 rounded-sm space-y-4 bg-gradient-to-b from-yellow-50">
            <div className="bg-slate-50 p-3 border border-yellow-200 text-yellow-600 rounded-sm inline-flex">
              <Clock />
            </div>
            <h4 className="text-slate-700 text-lg">Pending Parcels</h4>
            <h2 className="text-4xl font-bold">5</h2>
          </div>

          <div className="p-10 border border-blue-200 rounded-sm space-y-4 bg-gradient-to-b from-blue-50">
            <div className="bg-slate-50 p-3 border border-blue-200 text-blue-600 rounded-sm inline-flex">
              <Truck />
            </div>
            <h4 className="text-slate-700 text-lg">Shipped Parcels</h4>
            <h2 className="text-4xl font-bold">12</h2>
          </div>

          <div className="p-10 border border-green-200 rounded-sm space-y-4 bg-gradient-to-b from-green-50">
            <div className="bg-slate-50 p-3 border border-green-200 text-green-600 rounded-sm inline-flex">
              <CheckCircle />
            </div>
            <h4 className="text-slate-700 text-lg">Delivered Parcels</h4>
            <h2 className="text-4xl font-bold">20</h2>
          </div>

          <div className="p-10 border border-purple-200 rounded-sm space-y-4 bg-gradient-to-b from-purple-50">
            <div className="bg-slate-50 p-3 border border-purple-200 text-purple-600 rounded-sm inline-flex">
              <Package />
            </div>
            <h4 className="text-slate-700 text-lg">Total Parcels</h4>
            <h2 className="text-4xl font-bold">37</h2>
          </div>
        </div>

        {/* Chart */}
        <div className="border max-w-2xl">
          <Chart chartType="ColumnChart" width="100%" height="400px" data={dataStatistic} />
        </div>
      </div>
    </div>
  );
};

export default ReceiverHome;
