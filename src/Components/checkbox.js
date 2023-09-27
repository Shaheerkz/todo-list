/* eslint-disable no-undef */
import React, { useState } from 'react';

function Checkbox() {
  const [shaheer, setshaheer] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const checkboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };
  const checkboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };
  const checkboxChange3 = () => {
    setIsChecked3(!isChecked3);
  };
  const textStyle1 = isChecked1 ? { textDecoration: 'line-through' } : {};
  const textStyle2 = isChecked2 ? { textDecoration: 'line-through' } : {};
  const textStyle3 = isChecked3 ? { textDecoration: 'line-through' } : {};
  console.log(shaheer, "Name");
  return (
    <React.Fragment>
      <div className='container'>
      <ul className='flex flex-col items-center bg-black w-1/4 py-5 rounded-lg'>
      <h1 className='text-white pb-8 flex justify-center items-center'>TODO LIST APP</h1>
        <li className='flex bg-white py-2 mb-1 w-80 rounded-lg group px-2 ring-1 ring-slate-900/5 shadow-lg  hover:bg-sky-500 hover:ring-sky-500 cursor-pointer'>
          
          <input 
            type='checkbox'
            checked={isChecked1}
            onChange={checkboxChange1}
          />
          <p class="px-5 text-slate-500 group-hover:text-white " style={textStyle1}>This is your First project</p>
        </li>
        <li className='flex bg-white py-2 mb-1 w-80 rounded-lg group px-2 ring-1 ring-slate-900/5 shadow-lg  hover:bg-sky-500 hover:ring-sky-500 cursor-pointer'>
          <input 
            type='checkbox'
            checked={isChecked2}
            onChange={checkboxChange2}
          />
          <p class="px-5 text-slate-500 group-hover:text-white " style={textStyle2}>This is your Second project</p>
        </li>
        <li className='flex bg-white py-2 mb-1 w-80 rounded-lg group px-2 ring-1 ring-slate-900/5 shadow-lg  hover:bg-sky-500 hover:ring-sky-500 cursor-pointer'>
          <input 
            type='checkbox'
            checked={isChecked3}
            onChange={checkboxChange3}
          />
          <p class="px-5 text-slate-500 group-hover:text-white " style={textStyle3}>This is your Third project</p>
        </li>
        <li>
          <button className='bg-white' onClick={() => {
            "Shaheer"
          }}>Click me</button>
        </li>
      </ul>
      </div>
    </React.Fragment>
  );
}

export default Checkbox;
