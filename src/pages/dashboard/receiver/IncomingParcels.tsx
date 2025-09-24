import { Package, } from "lucide-react";

const IncomingParcels = () => {
  // Dummy parcel data
  const parcels = [
    { id: "PX-101", sender: "Arman Khan", status: "Pending", date: "2025-09-10" },
    { id: "PX-102", sender: "Rafi Ahmed", status: "In Transit", date: "2025-09-08" },
    { id: "PX-103", sender: "Nusrat Jahan", status: "Delivered", date: "2025-09-05" },
    { id: "PX-104", sender: "Tanvir Hasan", status: "Pending", date: "2025-09-04" },
    { id: "PX-105", sender: "Sadia Akter", status: "Delivered", date: "2025-09-01" },
  ];

  // Badge styles for statuses
  const statusStyles: Record<string, string> = {
    Pending: "bg-yellow-100 text-yellow-700 border-yellow-300",
    "In Transit": "bg-blue-100 text-blue-700 border-blue-300",
    Delivered: "bg-green-100 text-green-700 border-green-300",
  };

  return (
    <div>
      <h2 className="font-semibold text-3xl pb-6">Incoming Parcels</h2>

      <div className="overflow-x-auto border rounded-md shadow-sm">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Parcel ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Sender</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel) => (
              <tr key={parcel.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-700">{parcel.id}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{parcel.sender}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium border rounded-full ${statusStyles[parcel.status]}`}
                  >
                    {parcel.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{parcel.date}</td>
                <td className="px-6 py-4 text-sm">
                  <button className="px-3 py-1 text-sm text-blue-600 border border-blue-300 rounded-md hover:bg-blue-50 flex items-center gap-1">
                    <Package size={16} /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IncomingParcels;
