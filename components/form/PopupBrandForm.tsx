import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BrandForm from "./BrandForm";

const PopupBrandForm = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="!max-w-4xl h-[90vh] bg-body bg-bottom border-gray-600 overflow-y-scroll">
        <DialogHeader className=" hidden">
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            {` Make changes to your profile here. Click save when you're done.`}
          </DialogDescription>
        </DialogHeader>
        <BrandForm />
      </DialogContent>
    </Dialog>
  );
};

export default PopupBrandForm;
