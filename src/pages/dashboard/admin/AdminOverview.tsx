import { Box, UsersRound } from "lucide-react";
import { Chart } from "react-google-charts";




const AdminOverview = () => {

   const data = [
      ["Element", "Parcel", { role: "style" }],
      ["Senders", 100, "#242256"], // RGB value
      ["Receivers", 210, "#36563d"], // English color name
      ["Parcels", 300, "#daba45"],
      ["Total Users", 233, "#b500a3"], // CSS-style declaration
   ];

   return (
      <div>
         <h2 className="font-semibold text-3xl pb-6">Dashboard Overview</h2>
         <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  items-center justify-between max-w-4xl gap-6 ">
               <div className="p-10 border border-blue-200 rounded-sm space-y-4 bg-gradient-to-b from-blue-50 ">
                  <div className="bg-slate-50 p-3 border border-blue-200 text-blue-600 rounded-sm inline-flex">
                     <UsersRound />
                  </div>
                  <h4 className="text-slate-700 text-lg">Senders</h4>
                  <h2 className="text-4xl font-bold">3,421</h2>
               </div>

               <div className="p-10 border border-green-200 rounded-sm space-y-4 bg-gradient-to-b from-green-50 ">
                  <div className="bg-slate-50 p-3 border rounded-sm inline-flex border-green-200 text-green-600">
                     <UsersRound />
                  </div>
                  <h4 className="text-slate-700 text-lg">Receivers</h4>
                  <h2 className="text-4xl font-bold">3,421</h2>
               </div>

               <div className="p-10 border border-yellow-200 rounded-sm space-y-4 bg-gradient-to-b from-yellow-50 ">
                  <div className="bg-slate-50 p-3 border rounded-sm inline-flex border-yellow-200 text-yellow-600">
                     <Box />
                  </div>
                  <h4 className="text-slate-700 text-lg">Total Parcels</h4>
                  <h2 className="text-4xl font-bold">3,421</h2>
               </div>
            </div>

            <div className="border max-w-4xl">
               <Chart chartType="ColumnChart" width="100%" height="100%" data={data} />
            </div>

         </div>
      </div>
   );
};

export default AdminOverview;


