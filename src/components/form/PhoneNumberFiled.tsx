import { ChangeEventHandler, useState } from "react";

export interface PhoneNumberFieldProps {
  name: string;
  isRequired?: boolean;
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
  defaultValue?: string;
}

interface CountryOption {
  code: string;
  placeholder: string;
}

const countries: CountryOption[] = [
  { code: "US", placeholder: "+1 (555) 000-0000" },
  { code: "ES", placeholder: "+34 612 345 678" },
  { code: "MR", placeholder: "+222 12 34 56 78" },
];

const PhoneNumberField = (props: PhoneNumberFieldProps) => {
  const { name, label, onChange, isRequired, errorMessage, defaultValue } =
    props;

  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(
    countries[0]
  );

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const countryCode = event.target.value;
    const newCountry = countries.find((c) => c.code === countryCode);
    if (newCountry) setSelectedCountry(newCountry);
  };

  return (
    <div>
      <div className="phone-number-filed">
        <label className="label" htmlFor={name}>
          {label}
        </label>
        <div className="input-container">
          <div className="country-selector-wrapper">
            <select
              className="country-selector"
              onChange={handleCountryChange}
              value={selectedCountry.code}
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.code}
                </option>
              ))}
            </select>
          </div>
          <input
            id={name}
            type="number"
            placeholder={selectedCountry.placeholder}
            className="phone-input"
            onChange={onChange}
            required={isRequired}
            defaultValue={defaultValue}
          />
        </div>
      </div>
      {!!errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default PhoneNumberField;
