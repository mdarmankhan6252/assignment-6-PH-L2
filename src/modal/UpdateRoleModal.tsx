import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import type React from "react";

type UpdateRoleModalProps = {
  userId: string;
  handleUpdateUserRole: (id: string, role: string) => void;
  role: string;
};

const UpdateRoleModal = ({ userId, handleUpdateUserRole, role }: UpdateRoleModalProps) => {
  const [selectedRole, setSelectedRole] = useState(role);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleUpdateUserRole(userId, selectedRole);
    console.log('clicked');
  };

  return (
    <Dialog>
      <form onSubmit={onSubmit}>
        <DialogTrigger asChild>
          <Button variant="outline">Update Role</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update the user Role</DialogTitle>
            <DialogDescription>
              Choose a new role for this user and click save.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 pb-6">
            <Select defaultValue={role} onValueChange={setSelectedRole}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select the role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>ROLE</SelectLabel>
                  <SelectItem value="ADMIN">ADMIN</SelectItem>
                  <SelectItem value="SENDER">SENDER</SelectItem>
                  <SelectItem value="RECEIVER">RECEIVER</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={() => handleUpdateUserRole(userId, selectedRole)} type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default UpdateRoleModal;
