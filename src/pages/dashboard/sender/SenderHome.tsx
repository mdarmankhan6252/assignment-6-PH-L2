import { Package, Clock, Truck, CheckCircle } from "lucide-react";
import { Chart } from "react-google-charts";

const SenderHome = () => {
  // Dummy data for chart
  const dataStatistic = [
    ["Status", "Count", { role: "style" }],
    ["Pending", 8, "#f59e0b"],
    ["In Transit", 15, "#3b82f6"],
    ["Delivered", 25, "#10b981"],
    ["Total", 48, "#9333ea"],
  ];

  // Chart options
  const chartOptions = {
    title: "Sender Parcel Overview",
    legend: { position: "none" },
    backgroundColor: "transparent",
    hAxis: {
      title: "Category",
      textStyle: { fontSize: 12 },
      gridlines: { color: "transparent" },
    },
    vAxis: {
      title: "Count",
      minValue: 0,
      textStyle: { fontSize: 12 },
      gridlines: { color: "#e5e7eb" },
    },
    bar: { groupWidth: "50%" },
    colors: ["#f59e0b", "#3b82f6", "#10b981", "#9333ea"],
  };

  return (
    <div>
      <h2 className="font-semibold text-3xl pb-6">Sender Dashboard</h2>

      <div className="space-y-6">
        {/* Statistic Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-5xl">
          <div className="p-10 border border-yellow-200 rounded-sm space-y-4 bg-gradient-to-b from-yellow-50">
            <div className="bg-slate-50 p-3 border border-yellow-200 text-yellow-600 rounded-sm inline-flex">
              <Clock />
            </div>
            <h4 className="text-slate-700 text-lg">Pending Parcels</h4>
            <h2 className="text-4xl font-bold">8</h2>
          </div>

          <div className="p-10 border border-blue-200 rounded-sm space-y-4 bg-gradient-to-b from-blue-50">
            <div className="bg-slate-50 p-3 border border-blue-200 text-blue-600 rounded-sm inline-flex">
              <Truck />
            </div>
            <h4 className="text-slate-700 text-lg">In Transit</h4>
            <h2 className="text-4xl font-bold">15</h2>
          </div>

          <div className="p-10 border border-green-200 rounded-sm space-y-4 bg-gradient-to-b from-green-50">
            <div className="bg-slate-50 p-3 border border-green-200 text-green-600 rounded-sm inline-flex">
              <CheckCircle />
            </div>
            <h4 className="text-slate-700 text-lg">Delivered</h4>
            <h2 className="text-4xl font-bold">25</h2>
          </div>

          <div className="p-10 border border-purple-200 rounded-sm space-y-4 bg-gradient-to-b from-purple-50">
            <div className="bg-slate-50 p-3 border border-purple-200 text-purple-600 rounded-sm inline-flex">
              <Package />
            </div>
            <h4 className="text-slate-700 text-lg">Total Parcels</h4>
            <h2 className="text-4xl font-bold">48</h2>
          </div>
        </div>

        {/* Chart */}
        <div className="border max-w-2xl rounded-md shadow-sm p-4 bg-white">
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={dataStatistic}
            options={chartOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default SenderHome;
