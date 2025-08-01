import React from "react";
import { Label } from "../ui/label";
import MultiSelect from "../ui/multi-select";
import { useTranslations } from "next-intl";

const platforms = [
  { label: "Instagram", icon: "/media/instagram.png" },
  { label: "Tiktok", icon: "/media/tiktok.png" },
  { label: "Youtube", icon: "/media/youtube.png" },
  { label: "Linkedin", icon: "/media/linkedin.png" },
  { label: "Twitch", icon: "/media/twitch.png" },
];

const ActivePlatforms = ({
  onChange,
  error,
}: {
  error?: string;
  onChange: (e: string) => void;
}) => {
  const t = useTranslations("influencerForm");

  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={"platforms"} className="text-gray-300">
        {t(`form.platforms.label`)}
      </Label>
      <div>
        <MultiSelect
          options={platforms}
          onValueChange={(e) => onChange(e.join("-"))}
          defaultValue={[]}
          placeholder={t(`form.platforms.label`)}
          animation={2}
          maxCount={3}
        />
        <span className={`text-red-600 text-sm pt-2`}>{error}</span>
      </div>
    </div>
  );
};

export default ActivePlatforms;
