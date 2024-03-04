import React, { useId } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId() //useId() is a React hook for generating unique IDs that can be passed to accessbility attributes

  console.log('component rendered');

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} //it might be possible that the method wasn't defined so we are checking using &&
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >

          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>   {/*to bring performance in looping you have to include key*/}
              {currency}
            </option>
          ))}

        </select>
      </div>
    </div>
  );
}

export default InputBox

//better way to export components is to create an index.js file and import the components int index.js and export them from there itself