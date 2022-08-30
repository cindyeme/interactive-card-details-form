import { useState } from "react";
import * as yup from "yup";
import Form from "../components/Form";
import ThanksCard from "../components/ThanksCard";

export default function Home() {
  const [validate, setValidate] = useState(false);

  // form data initials
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  });

  // errors
  const [errors, setErrors] = useState({
    name: "",
    number: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  });

  // destructure formData object keys
  const { name, number, expiryMonth, expiryYear, cvc } = formData;

  // validation schema
  const validationSchema = yup.object().shape({
    name: yup.string().required("Can't be blank"),
    number: yup
      .number()
      .nullable()
      .transform((v, o) => (o === "" ? null : v))
      .typeError("Wrong format, numbers only")
      .required("Can't be blank"),
    expiryMonth: yup
      .number()
      .nullable()
      .transform((v, o) => (o === "" ? null : v))
      .typeError("Must be a number")
      .required("Can't be blank"),
    expiryYear: yup
      .number()
      .nullable()
      .transform((v, o) => (o === "" ? null : v))
      .typeError("Must be a number")
      .required("Can't be blank"),
    cvc: yup
      .number()
      .nullable()
      .transform((v, o) => (o === "" ? null : v))
      .typeError("Must be a number")
      // .max(3, "Must be three numbers")
      .required("Can't be blank"),
  });

  // handle change
  const handleInputChange = (e) => {
    if (e.target.name === "number" && e.target.value) {
      e.target.value = e.target.value
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
        .slice(0, 19);
    }

    if (e.target.name === "expiryMonth" || e.target.name === "expiryYear") {
      e.target.value = e.target.value
        .toString()
        .replace(/[^0-9]/g, "")
        .substring(0, 2);
      if (e.target.name === "expiryMonth" && e.target.value > 12)
        e.target.value = "12";
    }

    if (e.target.name === "cvc") {
      e.target.value = e.target.value.substring(0, 3);
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = await validationSchema.isValid(formData, {
      abortEarly: false,
    });

    if (isFormValid) {
      setValidate(true);
      setErrors({
        name: "",
        number: "",
        expiryMonth: "",
        expiryYear: "",
        cvc: "",
      });
    } else {
      validationSchema
        .validate(formData, { abortEarly: false })
        .catch((error) => {
          const errors = error.inner.reduce((acc, error) => {
            return {
              ...acc,
              [error.path]: error.message,
            };
          }, {});
          setErrors({
            name: errors.name,
            number: errors.number,
            expiryMonth: errors.expiryMonth,
            expiryYear: errors.expiryYear,
            cvc: errors.cvc,
          });
          // console.log(errors, ">>>", errors);
        });
    }
  };

  // reset formData
  const resetForm = () => {
    setFormData({
      name: "",
      number: "",
      expiryMonth: "",
      expiryYear: "",
      cvc: "",
    });
    setValidate(false);
  };
  return (
    <>
      <main className="relative App">
        <div className="cardDeco">
          <div className="cardFront">
            <span>{number || "0000 0000 0000 0000"}</span>
            <div>
              <span>{name || "Jane Appleseed"}</span>
              <span>
                {expiryMonth || "00"}/{expiryYear || "00"}
              </span>
            </div>
          </div>

          <div className="cardBack">
            <span>{cvc || "000"}</span>
          </div>
        </div>
        {validate ? (
          <ThanksCard resetForm={resetForm} />
        ) : (
          <Form
            formData={formData}
            handleChange={handleInputChange}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="md:absolute right-0 bottom-0">
        <div className="attribution pt-10 md:pt-0">
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
    </>
  );
}
