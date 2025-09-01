import type { IUser } from "@/interfaces/interfaces";
import { useGetAllUsersQuery } from "@/redux/features/auth/auth.api";
import Loading from "@/utils/Loading";
import { Box, UsersRound } from "lucide-react";
import { Chart } from "react-google-charts";




const AdminOverview = () => {

   const { data, isLoading } = useGetAllUsersQuery(undefined);

   if (isLoading) {
      return <Loading />
   }
   console.log(data);

   const users = data?.data || [];

   const sendersCount = users.filter((u: IUser) => u.role === "SENDER").length;
   const receiversCount = users.filter((u: IUser) => u.role === "RECEIVER").length;
   const total = data?.data?.length;

   const dataStatistic = [
      ["Element", "Parcel", { role: "style" }],
      ["Senders", sendersCount, "#242256"], // RGB value
      ["Receivers", receiversCount, "#36563d"], // English color name
      ["Parcels", 10, "#daba45"],
      ["Total Users", total, "#b500a3"], // CSS-style declaration
   ];

   return (
      <div>
         <h2 className="font-semibold text-3xl pb-6">Dashboard Overview</h2>
         <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  items-center justify-between max-w-5xl gap-6 ">
               <div className="p-10 border border-pink-200 rounded-sm space-y-4 bg-gradient-to-b from-pink-50 ">
                  <div className="bg-slate-50 p-3 border border-pink-200 text-pink-600 rounded-sm inline-flex">
                     <UsersRound />
                  </div>
                  <h4 className="text-slate-700 text-lg">Admin</h4>
                  <h2 className="text-4xl font-bold">{sendersCount}</h2>
               </div>

               <div className="p-10 border border-blue-200 rounded-sm space-y-4 bg-gradient-to-b from-blue-50 ">
                  <div className="bg-slate-50 p-3 border border-blue-200 text-blue-600 rounded-sm inline-flex">
                     <UsersRound />
                  </div>
                  <h4 className="text-slate-700 text-lg">Senders</h4>
                  <h2 className="text-4xl font-bold">{sendersCount}</h2>
               </div>

               <div className="p-10 border border-green-200 rounded-sm space-y-4 bg-gradient-to-b from-green-50 ">
                  <div className="bg-slate-50 p-3 border rounded-sm inline-flex border-green-200 text-green-600">
                     <UsersRound />
                  </div>
                  <h4 className="text-slate-700 text-lg">Receivers</h4>
                  <h2 className="text-4xl font-bold">{receiversCount}</h2>
               </div>

               <div className="p-10 border border-yellow-200 rounded-sm space-y-4 bg-gradient-to-b from-yellow-50 ">
                  <div className="bg-slate-50 p-3 border rounded-sm inline-flex border-yellow-200 text-yellow-600">
                     <Box />
                  </div>
                  <h4 className="text-slate-700 text-lg">Total Parcels</h4>
                  <h2 className="text-4xl font-bold">3,421</h2>
               </div>
            </div>

            <div className="border max-w-2xl">
               <Chart chartType="ColumnChart" width="100%" height="100%" data={dataStatistic} />
            </div>

         </div>
      </div>
   );
};

export default AdminOverview;


