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

const IndustrySelect = ({
  value,
  onChange,
  error,
}: {
  error?: string;
  value?: string;
  onChange: (e: string) => void;
}) => {
  const t = useTranslations("brandForm");

  const categories = [
    { label: "Fashion", value: "fashion" },
    { label: "Beauty & Cosmetics", value: "beauty_cosmetics" },
    { label: "Health & Wellness", value: "health_wellness" },
    { label: "Fitness & Sports", value: "fitness_sports" },
    { label: "Food & Beverage", value: "food_beverage" },
    { label: "Tech & Gadgets", value: "tech_gadgets" },
    { label: "Finance & Fintech", value: "finance_fintech" },
    { label: "Banking & Insurance", value: "banking_insurance" },
    { label: "Education & E-learning", value: "education_elearning" },
    { label: "Travel & Tourism", value: "travel_tourism" },
    { label: "Hospitality & Hotels", value: "hospitality_hotels" },
    { label: "Home & Living", value: "home_living" },
    { label: "Entertainment & Media", value: "entertainment_media" },
    { label: "Art & Culture", value: "art_culture" },
    { label: "Pets & Animals", value: "pets_animals" },
    { label: "Gaming & Esports", value: "gaming_esports" },
    { label: "Real Estate & Construction", value: "real_estate_construction" },
    { label: "Telecommunications", value: "telecommunications" },
    { label: "Retail & E-commerce", value: "retail_ecommerce" },
    { label: "Events", value: "events" },
    {
      label: "Public Sector & Institutions",
      value: "public_sector_institutions",
    },
    { label: "NGOs & Social Causes", value: "ngos_social_causes" },
    { label: "Marketing & Advertising", value: "marketing_advertising" },
    { label: "Agriculture & Agro-food", value: "agriculture_agro_food" },
    { label: "Pharmaceutical & Biotech", value: "pharmaceutical_biotech" },
    { label: "Logistics & Transportation", value: "logistics_transportation" },
  ];

  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={"industry"} className="text-gray-300">
        {t("form.industry.label")}
      </Label>
      <div>
        <Select onValueChange={onChange} defaultValue={value}>
          <SelectTrigger className="w-full border-gray-600">
            <SelectValue placeholder={t("form.industry.label")} />
          </SelectTrigger>
          <SelectContent className="bg-[#1d1d1d] text-white border-gray-600 h-[350px]">
            <SelectGroup>
              {categories.map((item) => (
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

export default IndustrySelect;
