import React, { useState } from 'react'
import './inputField.css'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './checkbox.css'
import { convertLength } from '@mui/material/styles/cssUtils';


const InputField = ({inputName,inputType,required=false,checkbox,textPlaceholder,dropDownData,register,checkboxValue}) => {
  const [isChecked,setIsChecked]=useState(true);
    const [dropdownVal,setDropDownVal]=useState(dropDownData ? dropDownData[0]:'')

   return (
    <>
    <div className='input_wrapper'>
        {inputType === 'checkbox' && (
            <div className='checkbox_wrapper checkbox-wrapper-40'>
                {/* <input className='border border-black rounded-md' type="checkbox" id={inputName} {...register(inputName)} value={checkboxValue}/>
                <label>{inputName}</label> */}
                <label>
                    <input className='border border-black rounded-md' type="checkbox" id={inputName} {...register(inputName)} value={checkboxValue}/>
                    <span className="checkbox"></span>
                </label>
                <p className='text-black'>{inputName}</p>
            </div>
        )}
        {inputType ===  'select' && (
            <div className='input_fields'>
                <label>{inputName}</label>
                {inputType === 'select' &&  (
                    <Select {...register(`${inputName}`)} name={inputName} id={inputName} value={dropdownVal} className='h-[35px] w-[200px]' onChange={(event)=>setDropDownVal(event.target.value)}>
                        {dropDownData.map((val,i)=>{
                            return (
                                <MenuItem key={val} value={val}>{val}</MenuItem>
                            )
                        })}
                    </Select>
                )}
            </div>
        )}
             {
             inputType === 'text' && (
                <div className='input_fields'>
                     <label>{inputName}</label>
                     <input className='border border-black rounded-md  h-[35px] px-2' required={required} {...register(inputName)} type={inputType} placeholder={textPlaceholder}/>

                </div>
            )
        }
        {inputType === 'boxSelect' && (
            <div className='checkbox_wrapper'>
            <input className='border border-black rounded-md h-[35px]' type="checkbox" id={inputName} {...register(inputName)} value={checkboxValue} onClick={()=>setIsChecked((prev)=> !prev)}/>
            <label>{inputName}</label>
                <Select {...register(`${inputName}`)} name={inputName} id={inputName} disabled={isChecked} className='h-[35px] min-w-[200px] w-fit'value={dropdownVal}  onChange={(event)=>setDropDownVal(event.target.value)}>
                {dropDownData.map((val,i)=>{
                    return (
                        <MenuItem key={val} value={val} >{val}</MenuItem>
                    )
                })}
                </Select>
        </div>
        )}
    </div>
    </>
  )
}

export default InputField