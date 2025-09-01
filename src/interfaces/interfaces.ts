export interface IUser {
   _id: string
   email: string;
   isActive: "ACTIVE" | "BLOCKED" | "INACTIVE";
   isDeleted: boolean;
   isVerified: boolean;
   name: string;
   password: string;
   role: "RECEIVER" | "SENDER" | "ADMIN";
   updatedAt: string;
}
