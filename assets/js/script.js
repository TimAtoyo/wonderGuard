//
var countryToCurrency = {
  AD: "EUR",
  AE: "AED",
  AF: "AFN",
  AG: "XCD",
  AI: "XCD",
  AL: "ALL",
  AM: "AMD",
  AN: "ANG",
  AO: "AOA",
  AQ: "USD",
  AR: "ARS",
  AS: "USD",
  AT: "EUR",
  AU: "AUD",
  AW: "AWG",
  AX: "EUR",
  AZ: "AZN",
  BA: "BAM",
  BB: "BBD",
  BD: "BDT",
  BE: "EUR",
  BF: "XOF",
  BG: "BGN",
  BH: "BHD",
  BI: "BIF",
  BJ: "XOF",
  BL: "EUR",
  BM: "BMD",
  BN: "BND",
  BO: "BOB",
  BQ: "USD",
  BR: "BRL",
  BS: "BSD",
  BT: "BTN",
  BV: "NOK",
  BW: "BWP",
  BY: "BYN",
  BZ: "BZD",
  CA: "CAD",
  CC: "AUD",
  CD: "CDF",
  CF: "XAF",
  CG: "CDF",
  CH: "CHF",
  CI: "XOF",
  CK: "NZD",
  CL: "CLP",
  CM: "XAF",
  CN: "CNY",
  CO: "COP",
  CR: "CRC",
  CU: "CUC",
  CV: "CVE",
  CW: "ANG",
  CX: "AUD",
  CY: "EUR",
  CZ: "CZK",
  DE: "EUR",
  DJ: "DJF",
  DK: "DKK",
  DM: "DOP",
  DO: "DOP",
  DZ: "DZD",
  EC: "USD",
  EE: "EUR",
  EG: "EGP",
  EH: "MAD",
  ER: "ERN",
  ES: "EUR",
  ET: "ETB",
  FI: "EUR",
  FJ: "FJD",
  FK: "FKP",
  FM: "USD",
  FO: "DKK",
  FR: "EUR",
  GA: "XAF",
  GB: "GBP",
  GD: "XCD",
  GE: "GEL",
  GF: "EUR",
  GG: "GBP",
  GH: "GHS",
  GI: "GIP",
  GL: "DKK",
  GM: "GMD",
  GN: "GNF",
  GP: "EUR",
  GQ: "XAF",
  GR: "EUR",
  GS: "FKP",
  GT: "GTQ",
  GU: "USD",
  GW: "XOF",
  GY: "GYD",
  HK: "HKD",
  HM: "AUD",
  HN: "HNL",
  HR: "EUR",
  HT: "HTG",
  HU: "HUF",
  ID: "IDR",
  IE: "EUR",
  IL: "ILS",
  IM: "GBP",
  IN: "INR",
  IO: "USD",
  IQ: "IQD",
  IR: "IRR",
  IS: "ISK",
  IT: "EUR",
  JE: "GBP",
  JM: "JMD",
  JO: "JOD",
  JP: "JPY",
  KE: "KES",
  KG: "KGS",
  KH: "KHR",
  KI: "AUD",
  KM: "KMF",
  KN: "XCD",
  KP: "KPW",
  KR: "KRW",
  KW: "KWD",
  KY: "KYD",
  KZ: "KZT",
  LA: "LAK",
  LB: "LBP",
  LC: "XCD",
  LI: "CHF",
  LK: "LKR",
  LR: "LRD",
  LS: "LSL",
  LT: "EUR",
  LU: "EUR",
  LV: "EUR",
  LY: "LYD",
  MA: "MAD",
  MC: "EUR",
  MD: "MDL",
  ME: "EUR",
  MF: "EUR",
  MG: "MGA",
  MH: "USD",
  MK: "MKD",
  ML: "XOF",
  MM: "MMK",
  MN: "MNT",
  MO: "MOP",
  MP: "USD",
  MQ: "EUR",
  MR: "MRU",
  MS: "XCD",
  MT: "EUR",
  MU: "MUR",
  MV: "MVR",
  MW: "MWK",
  MX: "MXN",
  MY: "MYR",
  MZ: "MZN",
  NA: "NAD",
  NC: "XPF",
  NE: "NGN",
  NF: "AUD",
  NG: "NGN",
  NI: "NIO",
  NL: "EUR",
  NO: "NOK",
  NP: "NPR",
  NR: "AUD",
  NU: "NZD",
  NZ: "NZD",
  OM: "OMR",
  PA: "PAB",
  PE: "PEN",
  PF: "XPF",
  PG: "PGK",
  PH: "PHP",
  PK: "PKR",
  PL: "PLN",
  PM: "EUR",
  PN: "NZD",
  PR: "USD",
  PS: "ILS",
  PT: "EUR",
  PW: "USD",
  PY: "PYG",
  QA: "QAR",
  RE: "EUR",
  RO: "RON",
  RS: "RSD",
  RU: "RUB",
  RW: "RWF",
  SA: "SAR",
  SB: "SBD",
  SC: "SCR",
  SD: "SDG",
  SE: "SEK",
  SG: "SGD",
  SH: "SHP",
  SI: "EUR",
  SJ: "NOK",
  SK: "EUR",
  SL: "SLL",
  SM: "EUR",
  SN: "XOF",
  SO: "SOS",
  SR: "SRD",
  SS: "SSP",
  ST: "STN",
  SV: "USD",
  SX: "ANG",
  SY: "SYP",
  SZ: "SZL",
  TC: "USD",
  TD: "XAF",
  TF: "EUR",
  TG: "XOF",
  TH: "THB",
  TJ: "TJS",
  TK: "NZD",
  TL: "USD",
  TM: "TMT",
  TN: "TND",
  TO: "TOP",
  TR: "TRY",
  TT: "TTD",
  TV: "AUD",
  TW: "TWD",
  TZ: "TZS",
  UA: "UAH",
  UG: "UGX",
  UM: "USD",
  US: "USD",
  UY: "UYU",
  UZ: "UZS",
  VA: "EUR",
  VC: "XCD",
  VE: "VES",
  VG: "USD",
  VI: "USD",
  VN: "VND",
  VU: "VUV",
  WF: "XPF",
  WS: "USD",
  YE: "YER",
  YT: "EUR",
  ZA: "ZAR",
  ZM: "ZMW",
  ZW: "ZWL",
  default: "USD",
};
//
var fromCurrency = document.querySelector(".fromCurrency");
var toCurrency = document.querySelector(".toCurrency");

// ountiesToSelectField
var countryCodEl = document.querySelector(".country-option");

// Advisory card element
var countryNameEl = document.querySelector(".country-name");
console.log(countryNameEl);
var riskLevelEl = document.querySelector(".risk-level");
var linkToMoreInfoEl = document.querySelector(".link-to-more-info");
var timeEl = document.querySelector(".time");




// Testing api to see the results
var url = `https://www.travel-advisory.info/api`;

var fetchPromise = fetch(url).then((response) => response.json());
fetchPromise.then((data) => {
    var advisoryResutls = data.data;
    addCountiesToSelectField(advisoryResutls);
});

function addCountiesToSelectField(advisoryResutls) {
    console.log(advisoryResutls);
    // countesForm Advisory Results
    for (const country in advisoryResutls) {
       
        // Get the country name from fetched object
        var countryName = advisoryResutls[country].name;

        // Creating Country Option Elenemt
        var countryElement = document.createElement('option');
        
        countryElement.textContent = countryName;
        
        //Append Countryelement to the select Element on the DOM
        countryCodEl.append(countryElement)
    }
}



// var response = fetch(url);
// var jsonResponse = response.then((response) =>
//   response.json()
// );
// var data = jsonResponse.then((data) => {data});
// console.log(data);

//   var results =
// function logResults(advice){
//     console.log(advice);
// }

// var displayCountryInfo = function (results) {
//   for (const key in results) {
//     if (Object.hasOwnProperty.call(results, key)) {
//       // Object of each country (advisory)
//       const countryAdvisoryObject = results[key];

//       // Name of country
//       var countryName = countryAdvisoryObject.name;

//       // iso Country Code
//       var countryCode = countryAdvisoryObject.iso_alpha2;

//       //

//       // Creating Option Element and adding country code and name to element value and text content respectively
//       var optionEl = document.createElement("option");
//       optionEl.textContent = countryName;
//       optionEl.setAttribute("value", countryCode);

//       // Append the options to the element on html Document
//       countryCodEl.append(optionEl);
//     }
//   }

//   var selectedvalue = countryCodEl.value;
//   for (const country in countryToCurrency) {
//     if (Object.hasOwnProperty.call(countryToCurrency, country)) {
//       const selectedCountry = countryToCurrency[country];
//       if (selectedvalue === country) {
//         // console.log(`this is the one im looking for ${selectedCountry}`);
//         return selectedCountry;
//       }
//     }
//   }
// };

// function mapCountryToCurrencyField() {
//   for (const country in countryToCurrency) {
//     if (Object.hasOwnProperty.call(countryToCurrency, country)) {
//       const element = countryToCurrency[country];

//       var currencyfromOptionEl = document.createElement("option");
//       currencyfromOptionEl.innerText = element;
//       currencyfromOptionEl.setAttribute("value", element);
//       fromCurrency.append(currencyfromOptionEl);

//       var currencyToOptionEl = document.createElement("option");
//       currencyToOptionEl.innerText = element;
//       currencyToOptionEl.setAttribute("value", element);
//       toCurrency.append(currencyToOptionEl);
//     }
//   }
// }
// var userCurrencyInput = fromCurrency.value;
// // console.log(`usser input ${userCurrencyInput}`);

// // // Exchange API Call
// // var exchangeURL = `https://v6.exchangerate-api.com/v6/bd30a0f67f97361ae2f2083c/latest/${userCurrencyInput}`;
// // fetch(exchangeURL)
// //   .then((response) => response.json())
// //   .then((currencyData) => {
// //     var currencyObject = currencyData.conversion_rates;
// //     mapCountryToCurrency(currencyObject);
// //   });

// mapCountryToCurrencyField();

// function mapCountryToCurrency(currencyoObject) {
//   var selectedCountry = displayCountryInfo();
//   for (const key in currencyoObject) {
//     if (Object.hasOwnProperty.call(currencyoObject, key)) {
//       const element = currencyoObject[key];
//       // console.log(element);
//       // var currencyFromSelectElement = document.crea
//     }
//   }
//   //   console.log(`this is the passed in country ${selectedCountry}`);
// }

//  function advisoryCardPopulartor(results, countryNameEl) {
//   for (const key in results) {
//     if (Object.hasOwnProperty.call(results, key)) {
//       // Object of each country (advisory)
//       const countryAdvisoryObject = results[key];

//       // Name of country
//       var countryName = countryAdvisoryObject.name;

//       var riskLevel = countryAdvisoryObject.name;

//     //   console.log(countryCodEl);
//     //   console.log(countryNameEl);
//       // iso Country Code
//       var countryCode = countryAdvisoryObject.iso_alpha2;
//       if (countryCodEl.value === countryCode) {
//         countryNameEl.textContent = "";
//         countryNameEl.textContent = countryName;
//         console.log(`Testing`);

//         // riskLevel
//         // linkToMoreInfo
//         // time
//       }
//     }
//   }
// };

// countryCodEl.addEventListener("change", async (e) => {
//     e.preventDefault()
//     console.log();
//    await advisoryCardPopulartor(results, countryNameEl);
//     //   console.log(e.target);
// //   displayCountryInfo(results);
// //   mapCountryToCurrency(currencyoObject, selectedCountry);
//   });

// //   countryCodEl.addEventListener("change", async (e) => {
// //     e.preventDefault();

// //     // Fetch data and wait for it to complete
// //     const response = await fetch(url);
// //     const data = await response.json();

// //     // Results object
// //     const results = data.data;

// //     // Call displayCountryInfo to populate the country options
// //     const selectedCountry = displayCountryInfo(results);

// //     // Call advisoryCardPopulartor with the necessary arguments
// //     advisoryCardPopulartor(results, countryNameEl);
// // });
