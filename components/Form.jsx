import { InputLabel, Input, Label } from "./Field";

export default function Form({
  handleSubmit,
  handleChange,
  formData,
  // errMsg,
  errors
}) {
  const { name, number, expiryMonth, expiryYear, cvc } = formData;
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6 cardForm">
      {/* CardHolder Name */}
      <div className="flex flex-col relative">
        <InputLabel
          type="text"
          name="name"
          label="cardholder name"
          placeholder="e.g. Cynthia Ngozi"
          onChange={handleChange}
          value={name}
          error={errors.name}
        />
        {errors.name && <p className="text-warning text-sm mt-2">{errors.name}</p>}
      </div>
      {/* Card Number */}
      <div className="flex flex-col relative">
        <InputLabel
          name="number"
          label="card number"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={handleChange}
          value={number}
          error={errors.number}
        />
        {errors.number && <p className="text-warning text-sm mt-2">{errors.number}</p>}
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
                onChange={handleChange}
                value={expiryMonth}
                error={errors.expiryMonth}
              />
              {errors.expiryMonth && (
                <p className="text-warning text-sm mt-2">{errors.expiryMonth}</p>
              )}
            </div>
            {/* Expiry Year */}
            <div className="flex flex-col">
              <Input
                type="number"
                name="expiryYear"
                placeholder="YY"
                onChange={handleChange}
                value={expiryYear}
                error={errors.expiryYear}
              />
              {errors.expiryYear && (
                <p className="text-warning text-sm mt-2">{errors.expiryYear}</p>
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
            onChange={handleChange}
            value={cvc}
            error={errors.cvc}
          />
          {errors.cvc && <p className="text-warning text-sm mt-2">{errors.cvc}</p>}
        </div>
      </div>
      <div className="pt-5 w-full">
        <button
          type="submit"
          className="bg-very_dark_violet rounded-md text-white py-3 text-lg hover:bg-opacity-90 transition duration-300 ease-linear w-full"
        >
          Confirm
        </button>
      </div>
    </form>
  );
}