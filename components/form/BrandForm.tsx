"use client";
import React, { useState } from "react";
import InputWithLabel from "../ui/InputWithLabel";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import CampaignVolume from "../ui/CampaignVolume";
import CountrySelect from "../ui/CountrySelect";
import IndustrySelect from "../ui/IndustrySelect";
import PhoneNumber from "../ui/phone-number";
import { useTranslations } from "next-intl";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Image from "next/image";
import axios from "axios";
const BrandForm = () => {
  const t = useTranslations("brandForm");
  const [isSubmited, setIsSubmited] = useState<boolean>(false);

  const validationSchema = Yup.object({
    fullName: Yup.string().required(t("form.firstName.validation")),
    email: Yup.string()
      .email("Invalid email format")
      .required(t("form.email.validation")),
    phone: Yup.string().required(t("form.phone.validation")),
    company: Yup.string().required(t("form.company.validation")),
    campaignVolume: Yup.string().required(t("form.campaignVolume.validation")),
    country: Yup.string().required(t("form.country.validation")),
    industry: Yup.string().required(t("form.industry.validation")),
    jobTitle: Yup.string().required(t("form.jobTitle.validation")),
    terms: Yup.bool().oneOf([true], t("form.terms.validation")),
    contact: Yup.bool().oneOf([true], t("form.contact.validation")),
  });

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    company: "",
    campaignVolume: "",
    country: "",
    industry: "",
    jobTitle: "",
    terms: false,
    contact: false,
  };

  return (
    <div className="p-5 rounded-md flex flex-col gap-5 h-full ">
      <Formik
        initialValues={initialValues}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          setIsSubmited(true);
          await axios.post("/leads-brand", values);
        }}
      >
        {({ handleChange, values, errors, setFieldValue }) => (
          <Form className="flex flex-col gap-5  min-h-full ">
            {isSubmited ? (
              <div className="h-full flex flex-col justify-center items-center gap-3.5">
                <Image src={"/coche.webp"} alt="coche" width={75} height={75} />
                <p className="text-4xl font-semibold w-1/2 text-center">
                  {t("form.success")}
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f9ffcb] via-[#e0f74e] to-[#c4db2c]">
                  {t("title")}
                </h2>
                <p className="text-center font-semibold text-soft-white/80">
                  {t("subTitle")}
                </p>
                <InputWithLabel
                  label={t("form.firstName.label")}
                  name="fullName"
                  onChange={handleChange}
                  value={values.fullName}
                  error={errors.fullName}
                />
                <InputWithLabel
                  label={t("form.email.label")}
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  error={errors.email}
                />
                <div className="grid lg:grid-cols-2 gap-5">
                  <PhoneNumber
                    label={t("form.phone.label")}
                    onChange={(e) => setFieldValue("phone", e)}
                    value={values.phone}
                    error={errors.phone}
                  />
                  <InputWithLabel
                    label={t("form.company.label")}
                    name="company"
                    onChange={handleChange}
                    value={values.company}
                    error={errors.company}
                  />
                </div>

                <div className="grid lg:grid-cols-2 gap-5">
                  <InputWithLabel
                    label={t("form.jobTitle.label")}
                    name="jobTitle"
                    onChange={handleChange}
                    value={values.jobTitle}
                    error={errors.jobTitle}
                  />
                  <CampaignVolume
                    onChange={(e) => setFieldValue("campaignVolume", e)}
                    value={values.campaignVolume}
                    error={errors.campaignVolume}
                  />
                </div>
                <div className="grid lg:grid-cols-2 gap-5">
                  <CountrySelect
                    onChange={(e) => setFieldValue("country", e)}
                    value={values.country}
                    error={errors.country}
                  />
                  <IndustrySelect
                    onChange={(e) => setFieldValue("industry", e)}
                    value={values.industry}
                    error={errors.industry}
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={values.terms}
                      onCheckedChange={(e) => setFieldValue("terms", e)}
                      className="data-[state=checked]:bg-main data-[state=checked]:text-black"
                    />
                    <Label htmlFor="terms"> {t("form.terms.label")}</Label>
                  </div>
                  <span className={`text-red-600 text-sm pt-2`}>
                    {errors.terms}
                  </span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      onCheckedChange={(e) => setFieldValue("contact", e)}
                      name="contact"
                      checked={values.contact}
                      id="contact"
                      className="data-[state=checked]:bg-main data-[state=checked]:text-black"
                    />
                    <Label htmlFor="contact">{t("form.contact.label")}</Label>
                  </div>
                  <span className={`text-red-600 text-sm pt-2`}>
                    {errors.contact}
                  </span>
                </div>
                <Button
                  type="submit"
                  className="bg-main border border-main text-black hover:bg-transparent hover:text-main !h-auto w-full"
                >
                  {t("form.cta")}
                </Button>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BrandForm;
