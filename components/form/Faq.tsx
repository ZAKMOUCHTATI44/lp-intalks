import React from "react";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Faq = () => {
  const t = useTranslations("faq");
  const items = [1, 2, 3, 4, 5];

  return (
    <div className="py-24">
      <div className="container mx-auto grid lg:grid-cols-2 px-5 items-center">
        <div className="flex flex-col gap-4">
          <div className="text-5xl font-semibold text-main">{t("title")}</div>
          <p className="text-sm">{t("description")}</p>
        </div>
        <Accordion type="single" collapsible className="">
          {items.map((id) => (
            <AccordionItem key={id} value={`item-${id}`}>
              <AccordionTrigger className="lg:text-xl hover:underline-offset-0  data-[state=open]:text-main">
                {t(`q${id}-question`)}
              </AccordionTrigger>
              <AccordionContent>{t(`q${id}-answer`)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
