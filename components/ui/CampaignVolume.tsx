import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./label";
import { useTranslations } from "next-intl";

const CampaignVolume = ({
  value,
  onChange,
  error,
}: {
  error?: string;
  value?: string;
  onChange: (e: string) => void;
}) => {
  const t = useTranslations("brandForm");
  const campaignOptions = [
    { label: t("form.campaignVolume.options.1-2"), value: "1-2" },
    { label: t("form.campaignVolume.options.3-5"), value: "3-5" },
    { label: t("form.campaignVolume.options.6-10"), value: "6-10" },
    { label: t("form.campaignVolume.options.11-20"), value: "11-20" },
    { label: t("form.campaignVolume.options.20+"), value: "20+" },
  ];

  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={"campaignVolume"} className="text-gray-300">
        {t("form.campaignVolume.label")}
      </Label>
      <div>
        <Select onValueChange={onChange} defaultValue={value}>
          <SelectTrigger className="w-full border-gray-600">
            <SelectValue placeholder={t("form.campaignVolume.label")} />
          </SelectTrigger>
          <SelectContent className="bg-[#1d1d1d] text-white border-gray-600">
            <SelectGroup>
              {campaignOptions.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <span className={`text-red-600 text-sm pt-2`}>{error}</span>
      </div>
    </div>
  );
};

export default CampaignVolume;
