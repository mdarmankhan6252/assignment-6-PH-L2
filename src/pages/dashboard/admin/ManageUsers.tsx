import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { IUser } from "@/interfaces/interfaces";
import DeleteModal from "@/modal/DeleteModal";
import { useGetAllUsersQuery } from "@/redux/features/auth/auth.api";
import Loading from "@/utils/Loading";
import { BadgeCheck, BadgeX } from "lucide-react";



const ManageUsers = () => {

   const { data, isLoading } = useGetAllUsersQuery(undefined);
   if (isLoading) {
      return <Loading />
   }


   return (
      <div className="max-w-6xl">
         <h2 className="font-semibold text-3xl pb-6">Manage Users</h2>

         <Table>
            <TableCaption>The table of all users</TableCaption>
            <TableHeader>
               <TableRow>
                  <TableHead className="w-[100px]">SL</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-center">Verified</TableHead>
                  <TableHead className="text-left w-[110px]">Role</TableHead>
                  <TableHead className="text-center w-[110px]">Update Role</TableHead>
                  <TableHead className="text-center w-[110px]">Action</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {data?.data?.map((user: IUser, i: number) => (
                  <TableRow key={user._id}>
                     <TableCell className="font-medium">{i + 1}</TableCell>
                     <TableCell className="font-medium">{user.name}</TableCell>
                     <TableCell>{user.email}</TableCell>
                     <TableCell className="flex items-center justify-center">{user.isVerified ? <BadgeCheck className="text-blue-600" /> : <BadgeX className="text-red-500" />}</TableCell>
                     <TableCell>{user.role}</TableCell>
                     <TableCell className="text-center">
                        <Button variant={"outline"} className="border-slate-300 border">Update Role</Button>
                     </TableCell>
                     <TableCell className="text-center">
                        <DeleteModal />
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
            <TableFooter>
               <TableRow>
                  <TableCell colSpan={5}>Total Users</TableCell>
                  <TableCell className="text-right pr-12">{data?.data?.length}</TableCell>
               </TableRow>
            </TableFooter>
         </Table>
      </div>
   );
};

export default ManageUsers;