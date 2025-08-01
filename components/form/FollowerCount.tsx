import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { useTranslations } from "next-intl";

const FollowerCount = ({
  value,
  onChange,
  error,
}: {
  error?: string;
  value?: string;
  onChange: (e: string) => void;
}) => {
  const t = useTranslations("influencerForm");
  const data = [
    {
      value: "nano",
    },
    {
      value: "micro",
    },
    {
      value: "macro",
    },
    {
      value: "celebrities",
    },
  ];

  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={"followerCount"} className="text-gray-300">
        {t(`form.followerCount.label`)}
      </Label>
      <div>
        <Select onValueChange={onChange} defaultValue={value}>
          <SelectTrigger className="w-full border-gray-600">
            <SelectValue placeholder={t(`form.followerCount.label`)} />
          </SelectTrigger>
          <SelectContent className="bg-[#1d1d1d] text-white border-gray-600">
            <SelectGroup>
              {data.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {t(`form.followerCount.options.${item.value}`)}
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

export default FollowerCount;
