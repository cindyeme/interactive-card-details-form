import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";

import sideImg from "../images/bg-main-desktop.png";
import smallScreenImg from "../images/bg-main-mobile.png";
import smallScreenCard from "../images/smallScreenCard.png";
import card from "../images/card.png";
import { InputLabel, Input, Label } from "../components/Field";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState('');

  const handleNumberChange = (e) => {
    let val = e.target.value;
    // let newVal = '';
    // val = val.replace(/\s/g, '');
    // for(let i=0; i < val.length; i++) {
    //     if(i%4 == 0 && i > 0) newVal = newVal.concat(' ');
    //     newVal = newVal.concat(val[i]);
    // }
    setNumber(val)
    // setNumber(val.replace(/\W/gi, " ").replace(/(.{4})/g, "$1 "));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      number,
      expiryMonth: "",
      expiryYear: "",
      cvc: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(70, "Too Long!")
        .required("Can't be blank"),
      number: Yup.number("Wrong format, numbers only")
        .max(16, "Must be less than or equal to 16 digits")
        .required("Can't be blank"),
      expiryMonth: Yup.number("Must be a number").required("Can't be blank"),
      expiryYear: Yup.number("Must be a number").required("Can't be blank"),
      cvc: Yup.number("Must be a number")
        // .max(3, "Only three digits required")
        .required("Can't be blank"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="relative">
      <Head>
        <title>Frontend Mentor | Interactive card details form</title>
        <meta name="description" content="Interactive card details form" />
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="relative">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-full md:col-span-6">
            <div className="relative">
              <div className="md:block hidden">
                <Image
                  src={sideImg}
                  width={483}
                  height={900}
                  alt="Side background"
                />
              </div>
              <div className="md:hidden">
                <Image
                  src={smallScreenImg}
                  width={375}
                  height={240}
                  alt="Side background"
                />
              </div>
              <div className="absolute top-[25%] md:top-[20%] md:left-[20%]">
                <div className="md:block hidden">
                  <Image src={card} alt="Card" width={521} height={532} />
                </div>
                <div className="md:hidden mx-8">
                  <Image src={smallScreenCard} alt="Card" width={550} height={386} />
                </div>
              </div>
              <div className="absolute top-[35%] left-[25%]">
                <div className="flex flex-col space-y-6">
                  <h1 className="text-white text-xl xl:text-3xl font-medium tracking-wide">
                    {formik.values?.number}
                  </h1>
                  <div className="flex items-center justify-between">
                    <p className="text-white tracking-wide">
                      {formik.values?.name}
                    </p>
                    {formik.values.expiryMonth && (
                      <p className="text-white tracking-wide">{`${
                        formik.values?.expiryMonth < 10
                          ? `0${formik.values.expiryMonth}`
                          : formik.values.expiryMonth
                      }/${formik.values?.expiryYear}`}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full mb-20 md:mb-0 md:col-span-6 lg:col-span-5 lg:mr-32 xl:mr-40 px-4 mt-12 md:mt-0">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col space-y-6"
            >
              {/* CardHolder Name */}
              <div className="flex flex-col relative">
                <InputLabel
                  name="name"
                  label="cardholder name"
                  placeholder="e.g. Cynthia Ngozi"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  disabled={loading}
                  error={formik.errors.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-warning text-sm mt-2">
                    {formik.errors.name}
                  </p>
                )}
              </div>
              {/* Card Number */}
              <div className="flex flex-col relative">
                <InputLabel
                  type="number"
                  name="number"
                  label="card number"
                  placeholder="e.g. 1234 5678 9123 0000"
                  onChange={formik.handleChange}
                  value={formik.values.number}
                  onBlur={formik.handleBlur}
                  disabled={loading}
                  error={formik.errors.number}
                />
                {formik.touched.number && formik.errors.number && (
                  <p className="text-warning text-sm mt-2">
                    {formik.errors.number}
                  </p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-x-8">
                {/* Card Expiry Date */}
                <div className="flex flex-col relative">
                  <Label htmlFor="expiryMonth" label="Exp. date (mm/dd)" />
                  <div className="grid grid-cols-2 gap-x-4 md:gap-x-6">
                    {/* Expiry Month */}
                    <div className="flex flex-col">
                      <Input
                        type="number"
                        name="expiryMonth"
                        placeholder="MM"
                        onChange={formik.handleChange}
                        value={formik.values.expiryMonth}
                        onBlur={formik.handleBlur}
                        disabled={loading}
                        error={formik.errors.expiryMonth}
                      />
                      {formik.touched.expiryMonth &&
                        formik.errors.expiryMonth && (
                          <p className="text-warning text-sm mt-2">
                            {formik.errors.expiryMonth}
                          </p>
                        )}
                    </div>
                    {/* Expiry Year */}
                    <div className="flex flex-col">
                      <Input
                        type="number"
                        name="expiryYear"
                        placeholder="YY"
                        onChange={formik.handleChange}
                        value={formik.values.expiryYear}
                        onBlur={formik.handleBlur}
                        disabled={loading}
                        error={formik.errors.expiryYear}
                      />
                      {formik.touched.expiryYear &&
                        formik.errors.expiryYear && (
                          <p className="text-warning text-sm mt-2">
                            {formik.errors.expiryYear}
                          </p>
                        )}
                    </div>
                  </div>
                </div>
                {/* CVC */}
                <div className="flex flex-col relative">
                  <InputLabel
                    type="number"
                    name="cvc"
                    label="CVC"
                    placeholder="e.g. 123"
                    onChange={formik.handleChange}
                    value={formik.values.cvc}
                    onBlur={formik.handleBlur}
                    disabled={loading}
                    error={formik.errors.cvc}
                  />
                  {formik.touched.cvc && formik.errors.cvc && (
                    <p className="text-warning text-sm mt-2">
                      {formik.errors.cvc}
                    </p>
                  )}
                </div>
              </div>
              <div className="pt-5 w-full">
                <button
                  type="submit"
                  className="bg-very_dark_violet rounded-md text-white py-3 text-lg hover:bg-opacity-90 transition duration-300 ease-linear w-full"
                >
                  {loading ? "Loading..." : "Confirm"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute right-0 bottom-0">
        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferer"
          >
            Frontend Mentor,
          </a>
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/emerenini-cynthia-ngozi"
            target="_blank"
            rel="noreferer"
          >
            Emerenini Cynthia Ngozi
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
