import { PackageCheck, CalendarDays, MapPin } from "lucide-react";

const DeliveryHistory = () => {
  // Dummy delivery data
  const deliveries = [
    { id: "DH-201", receiver: "Sadia Akter", status: "Delivered", date: "2025-09-05", location: "Dhaka" },
    { id: "DH-202", receiver: "Rafi Ahmed", status: "Delivered", date: "2025-09-03", location: "Chittagong" },
    { id: "DH-203", receiver: "Tanvir Hasan", status: "Delivered", date: "2025-08-30", location: "Khulna" },
    { id: "DH-204", receiver: "Nusrat Jahan", status: "Delivered", date: "2025-08-25", location: "Rajshahi" },
    { id: "DH-205", receiver: "Arman Khan", status: "Delivered", date: "2025-08-20", location: "Sylhet" },
  ];

  return (
    <div>
      <h2 className="font-semibold text-3xl pb-6">Delivery History</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl pb-8">
        <div className="p-6 border border-green-200 rounded-md bg-gradient-to-b from-green-50 space-y-3">
          <div className="bg-white p-3 border border-green-200 text-green-600 rounded-md inline-flex">
            <PackageCheck />
          </div>
          <h4 className="text-slate-700 text-lg">Total Delivered</h4>
          <h2 className="text-3xl font-bold">{deliveries.length}</h2>
        </div>

        <div className="p-6 border border-blue-200 rounded-md bg-gradient-to-b from-blue-50 space-y-3">
          <div className="bg-white p-3 border border-blue-200 text-blue-600 rounded-md inline-flex">
            <CalendarDays />
          </div>
          <h4 className="text-slate-700 text-lg">This Month</h4>
          <h2 className="text-3xl font-bold">12</h2>
        </div>

        <div className="p-6 border border-purple-200 rounded-md bg-gradient-to-b from-purple-50 space-y-3">
          <div className="bg-white p-3 border border-purple-200 text-purple-600 rounded-md inline-flex">
            <MapPin />
          </div>
          <h4 className="text-slate-700 text-lg">Top Location</h4>
          <h2 className="text-3xl font-bold">Dhaka</h2>
        </div>
      </div>

      {/* History Table */}
      <div className="overflow-x-auto border rounded-md shadow-sm">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Delivery ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Receiver</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Location</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map((d) => (
              <tr key={d.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-700">{d.id}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{d.receiver}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium border rounded-full bg-green-100 text-green-700 border-green-300">
                    {d.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{d.date}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{d.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryHistory;
