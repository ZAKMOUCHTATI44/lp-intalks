"use client";
import React, { useState } from "react";
import InputWithLabel from "../ui/InputWithLabel";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import CountrySelect from "../ui/CountrySelect";
import FollowerCount from "./FollowerCount";
import ActivePlatforms from "./ActivePlatforms";
import PhoneNumber from "../ui/phone-number";
import { useTranslations } from "next-intl";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Image from "next/image";
import axios from "axios";

const InfluencerForm = () => {
  const t = useTranslations("influencerForm");
  const [isSubmited, setIsSubmited] = useState<boolean>(false);

  const validationSchema = Yup.object({
    fullName: Yup.string().required(t("form.fullName.validation")),
    email: Yup.string()
      .email("Invalid email format")
      .required(t("form.email.validation")),
    phone: Yup.string().required(t("form.phone.validation")),
    mainProfile: Yup.string().required(t("form.mainProfile.validation")),
    mediaHandle: Yup.string().required(t("form.mediaHandle.validation")),
    country: Yup.string().required(t("form.country.validation")),
    followerCount: Yup.string().required(t("form.followerCount.validation")),
    platforms: Yup.string().required(t("form.platforms.validation")),
    terms: Yup.bool().oneOf([true], t("form.terms.validation")),
    contact: Yup.bool().oneOf([true], t("form.contact.validation")),
  });

  const initialValues = {
    fullName: "",
    mediaHandle: "",
    mainProfile: "",
    email: "",
    platforms: "",
    followerCount: "",
    phone: "",
    country: "",
    terms: false,
    contact: false,
  };

  return (
    <div className="p-5 rounded-md flex flex-col gap-5">
      <Formik
        initialValues={initialValues}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          setIsSubmited(true);
          await axios.post("/lead-creator", values);
        }}
      >
        {({ handleChange, values, errors, setFieldValue }) => (
          <Form className="flex flex-col gap-5">
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
                <div>
                  <p className="text-center font-semibold text-soft-white/80">
                    {t("subTitle")}
                  </p>
                  <p className="text-center font-semibold text-soft-white/80">
                    {t("content")}
                  </p>
                </div>
                <InputWithLabel
                  label={t("form.fullName.label")}
                  name="fullName"
                  onChange={handleChange}
                  value={values.fullName}
                  error={errors.fullName}
                />

                <div className="grid lg:grid-cols-2 gap-5">
                  <InputWithLabel
                    label={t("form.mediaHandle.label")}
                    name="mediaHandle"
                    onChange={handleChange}
                    value={values.mediaHandle}
                    error={errors.mediaHandle}
                  />
                  <InputWithLabel
                    label={t("form.mainProfile.label")}
                    name="mainProfile"
                    onChange={handleChange}
                    value={values.mainProfile}
                    error={errors.mainProfile}
                  />
                </div>
                <div className="grid lg:grid-cols-2 gap-5">
                  <InputWithLabel
                    label={t("form.email.label")}
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    error={errors.email}
                  />
                  <PhoneNumber
                    label={t("form.phone.label")}
                    onChange={(e) => setFieldValue("phone", e)}
                    value={values.phone}
                    error={errors.phone}
                  />
                </div>

                <div className="grid lg:grid-cols-2 gap-5">
                  <FollowerCount
                    onChange={(e) => setFieldValue("followerCount", e)}
                    value={values.followerCount}
                    error={errors.followerCount}
                  />
                  <ActivePlatforms
                    onChange={(e) => setFieldValue("platforms", e)}
                    error={errors.platforms}
                  />
                </div>
                <CountrySelect
                  onChange={(e) => setFieldValue("country", e)}
                  value={values.country}
                  error={errors.country}
                />

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

                <Button className="bg-main border border-main text-black hover:bg-transparent hover:text-main !h-auto w-full">
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

export default InfluencerForm;
