import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import InfluencerForm from "./InfluencerForm";
import { useSearchParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Client-side only rendering to avoid SSR issues with searchParams
const PopupInfluencerForm = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // Get the search param safely
  const isOpenCreator = searchParams?.get("isOpenCreator") === "true";

  useEffect(() => {
    setOpen(isOpenCreator);
  }, [isOpenCreator]);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    const newSearchParams = new URLSearchParams(searchParams?.toString());
    
    if (isOpen) {
      newSearchParams.set("isOpenCreator", "true");
    } else {
      newSearchParams.delete("isOpenCreator");
    }

    // Preserve other query parameters while updating
    router.replace(`?${newSearchParams.toString()}`);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="!max-w-4xl h-[90vh] bg-body border-gray-600 overflow-y-auto">
        <InfluencerForm />
      </DialogContent>
    </Dialog>
  );
};

// Export with SSR disabled to avoid hydration mismatch
export default dynamic(() => Promise.resolve(PopupInfluencerForm), {
  ssr: false
});