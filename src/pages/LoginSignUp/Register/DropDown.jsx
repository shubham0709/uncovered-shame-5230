import React from 'react';
import Select from 'react-select';
// import 'bootstrap/dist/css/bootstrap.min.css';

const techCompanies = [
  { label: "India(+91)", value: 1 },
  { label: "United State(+1)", value: 2 },
  { label: "United Arab Emitres(+971)", value: 3 },
  { label: "Tesla", value: 4 },
  { label: "Amazon", value: 5 },
  { label: "Alphabet", value: 6 },
];

const DropDown = () => (
  <div >
    <div >
      <div ></div>
      <div >
        <Select options={ techCompanies } />
      </div>
      <div ></div>
    </div>
  </div>
);

export default DropDown