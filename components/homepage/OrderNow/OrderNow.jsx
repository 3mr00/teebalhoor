"use client";
import SwitchLang from "@/components/SwitchLang";
import Image from "next/image";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FaRegUser } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { LiaCartPlusSolid } from "react-icons/lia";
import { MdAlternateEmail, MdOutlineError } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import { HiOutlineHome } from "react-icons/hi";
import { useTranslations } from "next-intl";

const OrderNow = ({ locale }) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations();

  const handleOpen = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(t("HomePage.nameRequired")),
    phone: Yup.string()
      .matches(/^05\d{8}$/, t("HomePage.phoneRequired"))
      .required(t("HomePage.phoneRequired")),
    emirate: Yup.string().notOneOf(["-1"], t("HomePage.selectCity")).required(),
    address: Yup.string().required(t("HomePage.addressRequired")),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      emirate: "",
      email: "",
      address: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form values", values);
    },
  });

  return (
    <div>
      <div
        className={`z-50 gap-4 shadow-lg transition-all ease-in-out p-4 fixed bg-white inset-x-0 bottom-0  w-full h-[100svh] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="fixed bottom-0 left-0 right-0 top-0 z-10 w-[100vw] bg-black/80"></div>
        <div className="relative z-20 mx-auto max-w-[500px] rounded-t-[10px] border bg-[#f5f5f5]">
          <h2 className="text-foreground text-lg font-semibold">
            <div className="bg-background rounded-t-lg pb-4">
              <div className="my-3 flex justify-center">
                <div className="h-1 w-12 bg-[#bdbdbd]"></div>
              </div>
              <div className="relative flex items-center justify-center">
                <div
                  onClick={handleClose}
                  className="bg-[#ec972e]/20 text-brand hover:bg-[#ec972e]/30 absolute left-3 me-2 flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200 hover:cursor-pointer focus:outline-none"
                  type="button"
                >
                  <svg
                    width="24px"
                    className=""
                    viewBox="0 0 24 24"
                    fill="#ec972e"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                      fill="#ec972e"
                    ></path>
                  </svg>
                  <span className="sr-only">Close</span>
                </div>
                <h2>{t("HomePage.orderDeliveryInfo")} </h2>
              </div>
            </div>
          </h2>
          <div
            className="relative overflow-hidden h-[calc(100dvh-100px)]"
            style={{
              position: "relative",
              "--radix-scroll-area-corner-width": "0px",
              "--radix-scroll-area-corner-height": "0px",
            }}
          >
            <div
              data-radix-scroll-area-viewport=""
              className="h-full w-full rounded-[inherit]"
              style={{ overflow: "hidden scroll" }}
            >
              <div style={{ minWidth: "100%", display: "table" }}>
                <div>
                  <div
                    className="bg-background mx-4 rounded-2xl border-2 p-4 mb-14 mt-4"
                    style={{ borderColor: "rgb(236, 151, 46)" }}
                  >
                    <div>
                      <div className="mb-2 flex w-full rounded-lg p-2 hover:cursor-pointer border-2 border-blue-600 bg-sky-200">
                        <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md">
                          <div
                            data-radix-aspect-ratio-wrapper=""
                            style={{
                              position: "relative",
                              width: "100%",
                              paddingBottom: "100%",
                            }}
                          >
                            <div style={{ position: "absolute", inset: "0px" }}>
                              <Image
                                src="https://teebalhoor.com/_next/image?url=https%3A%2F%2Fapi.alhoorllc.com%2Fstorage%2Fattachments%2F17324400111925632(3402x3402).webp&w=640&q=75" // Replace with the actual image path
                                alt="Icon"
                                width={100}
                                height={100}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="ms-4 w-[80%]">
                          <div className="flex w-full justify-between text-start text-sm font-bold text-black">
                            <div className="whitespace-nowrap">
                              <span>{t("HomePage.buy")}&nbsp; </span>
                              <span className="text-brand">1</span>&nbsp;
                              <span>{t("HomePage.for")}</span>&nbsp;
                              <span className="text-brand">35</span>&nbsp;
                              <span>AED&rlm;</span>
                            </div>
                            <div>
                              <span className="text-brand text-sm">
                                <span className="me-1 font-bold">35</span>
                                AED&rlm;
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center justify-between pt-1">
                            <p className="w-auto rounded-lg bg-gradient-to-l px-2 py-1 text-xs font-semibold uppercase text-white from-green-500 to-green-500">
                              {t("HomePage.Saved")} 53%
                            </p>
                            <span className="text-sm text-gray-400 line-through">
                              74.47 AED&rlm;
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-2 my-4 rounded bg-gray-100 p-3">
                      <div className="flex justify-between text-xs">
                        <p>{t("HomePage.subtotal")} </p>
                        <p className="font-semibold">35 AED&rlm;</p>
                      </div>
                      <div className="my-2 flex justify-between text-xs">
                        <p>{t("HomePage.deliveryFee")} </p>
                        <p className="font-semibold">{t("HomePage.free")}</p>
                      </div>
                      <div className="my-2 flex justify-between text-xs text-green-600">
                        <p>{t("HomePage.youSaved")} </p>
                        <p className="font-semibold">+39.47 AED&rlm;</p>
                      </div>
                      <div className="h-[1px] bg-gray-400"></div>
                      <div className="mt-2 flex justify-between text-xs font-semibold">
                        <p>{t("HomePage.total")}</p>
                        <p>35 AED&rlm;</p>
                      </div>
                    </div>
                    <div className="flex justify-center font-bold text-rose-500">
                      {t("HomePage.fillYourDetails")}{" "}
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                      <div>
                        <div className=" flex md:flex-row flex-col justify-between mb-2">
                          {/* Name Input */}
                          <div>
                            <div className="relative mt-2 rounded-md shadow-sm">
                              {formik.errors.name && formik.touched.name && (
                                <div className="absolute inset-y-0 right-3 flex items-center">
                                  <MdOutlineError className="text-red-500 text-lg" />
                                </div>
                              )}

                              <input
                                className={`border-input bg-transparent px-3 block h-12 w-full rounded-sm py-1.5 ps-14 text-xs text-gray-900 ring-1 ${
                                  formik.errors.name && formik.touched.name
                                    ? "ring-red-500 shadow-[0_0_0_0.25rem_rgba(220,53,69,.5)]"
                                    : "ring-gray-400"
                                }`}
                                placeholder={t("HomePage.enterYourName")}
                                {...formik.getFieldProps("name")}
                              />
                              <div className="absolute inset-y-0 left-0 flex h-[46px] w-[47px] items-center bg-gray-100 px-3">
                                <FaRegUser className="text-lg text-black" />
                              </div>
                            </div>
                            {formik.errors.name && formik.touched.name && (
                              <p className="text-destructive text-xs text-red-500">
                                {formik.errors.name}
                              </p>
                            )}
                          </div>

                          {/* Phone Input */}
                          <div className="space-y-2">
                            <div className="relative mt-2 rounded-md shadow-sm">
                              <div className="absolute inset-y-0 left-0 flex h-[46px] w-[47px] items-center bg-gray-100 px-3">
                                <CiMobile3 className="text-lg text-black" />
                              </div>
                              <input
                                type="tel"
                                className={`border-input bg-transparent px-3 block h-12 w-full rounded-sm py-1.5 ps-14 text-xs text-gray-900 ring-1 ${
                                  formik.errors.phone && formik.touched.phone
                                    ? "ring-red-500 shadow-[0_0_0_0.25rem_rgba(220,53,69,.5)]"
                                    : "ring-gray-400"
                                }`}
                                placeholder="0501234567"
                                {...formik.getFieldProps("phone")}
                              />
                              {formik.errors.phone && formik.touched.phone && (
                                <div className="absolute inset-y-0 right-3 flex items-center">
                                  <MdOutlineError className="text-red-500 text-lg" />
                                </div>
                              )}
                            </div>
                            {formik.errors.phone && formik.touched.phone && (
                              <p className="text-destructive text-xs text-red-500">
                                {formik.errors.phone}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className=" flex md:flex-row flex-col justify-between mb-2">
                          {/* Emirate Select */}
                          <div className="space-y-2">
                            <div className="relative mt-2 rounded-md md:w-[187px] w-full">
                              <div className="absolute inset-y-0 left-0 flex h-[46px] w-[47px] items-center bg-gray-100 px-3">
                                <HiOutlineHome className="text-lg text-black" />
                              </div>
                              <select
                                className={`border-input bg-transparent px-3 block h-12 w-full rounded-sm py-1.5 ps-14 text-xs text-gray-900 ring-1 ${
                                  formik.errors.name && formik.touched.name
                                    ? "ring-red-500 shadow-[0_0_0_0.25rem_rgba(220,53,69,.5)]"
                                    : "ring-gray-400"
                                }`}
                                {...formik.getFieldProps("emirate")}
                              >
                                <option value="-1">
                                  {" "}
                                  {t("HomePage.selectCity")}{" "}
                                </option>
                                <option value="Abu Dhabi">
                                  Abu Dhabi / أبو ظبي
                                </option>
                                <option value="Umm al-Quwain">
                                  Umm al-Quwain / أم القيوين
                                </option>
                                <option value="Sharjah">
                                  Sharjah / الشارقة
                                </option>
                                <option value="Al Ain">Al Ain / العين</option>
                                <option value="Fujairah">
                                  Fujairah / الفجيرة
                                </option>
                                <option value="Dubai">Dubai / دبي</option>
                                <option value="Ras Al Khaimah">
                                  Ras Al Khaimah / راس الخيمة
                                </option>
                                <option value="Ajman">Ajman / عجمان</option>
                              </select>
                              {formik.errors.emirate &&
                                formik.touched.emirate && (
                                  <div className="absolute inset-y-0 right-3 flex items-center">
                                    <MdOutlineError className="text-red-500 text-lg" />
                                  </div>
                                )}
                            </div>
                            {formik.errors.emirate &&
                              formik.touched.emirate && (
                                <p className="text-destructive text-xs text-red-500">
                                  {formik.errors.emirate}
                                </p>
                              )}
                          </div>
                          {/* Email Input */}
                          <div>
                            <div className="relative mt-2 rounded-md ">
                              <input
                                className={`border-input bg-transparent px-3 block h-12 w-full rounded-sm py-1.5 ps-14 text-xs text-gray-900 ring-1 ${
                                  formik.errors.email && formik.touched.email
                                    ? "ring-red-500 shadow-[0_0_0_0.25rem_rgba(220,53,69,.5)]"
                                    : "ring-gray-400"
                                }`}
                                placeholder={t("HomePage.enterYourEmail")}
                                {...formik.getFieldProps("email")}
                              />
                              <div className="absolute inset-y-0 left-0 flex h-[46px] w-[47px] items-center bg-gray-100 px-3">
                                <MdAlternateEmail className="text-lg text-black" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Address Textarea */}
                        <div className="space-y-2 ">
                          <textarea
                            className={`border-input focus-visible:ring-ring flex min-h-[60px] w-full bg-transparent focus-visible:outline-none focus-visible:ring-1 rounded-sm border-0 px-2 py-1.5 text-xs text-gray-900 ring-1 ${
                              formik.errors.address && formik.touched.address
                                ? "ring-red-500 shadow-[0_0_0_0.25rem_rgba(220,53,69,.5)]"
                                : "ring-gray-400"
                            }`}
                            placeholder={t("HomePage.enterAddress")}
                            {...formik.getFieldProps("address")}
                          />
                          {formik.errors.address && formik.touched.address && (
                            <p className="text-destructive text-xs text-red-500">
                              {formik.errors.address}
                            </p>
                          )}
                        </div>
                        {/* Submit Button */}
                        <div className="mt-auto flex flex-col gap-2 p-4">
                          <div className=" bg-white fixed bottom-0 left-1/2 z-10 mx-auto w-[750px] max-w-[100vw] -translate-x-1/2 rounded-sm border-t border-t-[#dee2e6] px-2 py-2 shadow-sm transition-all duration-150 translate-y-0">
                            <div className="relative flex items-center">
                              <button
                                type="submit"
                                className="bg-[#ec972e] relative me-2 flex w-full items-center justify-center px-4 py-4 text-xl font-[600] leading-8 text-white shadow-xl transition duration-300 hover:opacity-80 rounded-full"
                              >
                                {t("HomePage.orderNow")}{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background fixed bottom-0 left-1/2 z-10 mx-auto w-[750px] max-w-[100%] -translate-x-1/2 rounded-sm border-t border-t-[#dee2e6] px-2 py-2 shadow-sm transition-all duration-150 translate-y-0">
        <div className="relative flex items-center">
          <button
            onClick={handleOpen}
            className="bg-[#ec972e] relative me-2 flex justify-center font-[600] w-full  px-4 py-4 text-xl leading-8 text-white shadow-xl transition duration-300 hover:opacity-80 rounded-full "
          >
            <LiaCartPlusSolid className="text-[2.5rem] absolute top-[14px] left-[20px] z-50" />
            {t("HomePage.orderNow")}{" "}
          </button>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://wa.me/+971547744211/?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20TEEBALHOOR%20%D8%B4%D8%A7%D9%87%D8%AF%D8%AA%20%D8%A7%D8%B9%D9%84%D8%A7%D9%86%20%20(https%3A%2F%2Fteebalhoor.com%2Fadespresso%2F1732440014%3Fesp_id%3D9f86e5970757b154071f92a51185872001b9aa7830b14ea4079593c627a6eda7)%20%20%D8%A8%D8%AE%D9%88%D8%B1%20%D8%AF%D8%B1%D9%87%D9%85%20%D8%A7%D9%84%D8%A7%D9%85%D8%A7%D8%B1%D8%A7%D8%AA%D9%8A(%D8%B9%D8%B1%D9%88%D8%B6%20%D8%A7%D9%84%D8%B9%D9%8A%D8%AF%20%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%20%D8%A8%D9%83%D9%85%D9%8A%D8%A9%20%D9%85%D8%AD%D8%AF%D9%88%D8%AF%D8%A9)%F0%9F%98%8D%F0%9F%87%A6%F0%9F%87%AA%F0%9F%87%A6%F0%9F%87%AA%20%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%86%20%D8%A3%D8%B7%D9%84%D8%A8"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-xl">
              <IoLogoWhatsapp size={30} className=" text-white " />
            </div>
          </a>
          <SwitchLang locale={locale} />
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
