import React from 'react'
import './ClientTransfer.css'
import InputField from '../Common/Input/InputField'
import { useForm } from "react-hook-form"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ClientTransfer = () => {

  const navigate=useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const dropDownData=['Volvo','Saab','Opel','Audi','Mercedes']

  const onSubmit=(data)=>{
    console.log(data)    
  }

  return (
    <div className='client_wrapper'>
      <form className='' onSubmit={handleSubmit(onSubmit)}>
        <div className='border-b-[2.5px] border-gray-300 px-2 py-3  flex flex-wrap client_top'>
          <InputField inputName={'Client Name'} inputType={'select'}  dropDownData={dropDownData} register={register}/>
          <InputField inputName={'Protocol Number'} inputType={'select'}  dropDownData={dropDownData} register={register}/>
          <InputField inputName={'Process Status'} inputType={'text'} textPlaceholder={'Phase 1'} register={register}/>
          <InputField inputName={'LG Study'} inputType={'select'}  dropDownData={dropDownData} register={register}/>
          <InputField inputName={'Report Type'} inputType={'select'}  dropDownData={dropDownData} register={register}/>
          <InputField inputName={'Report Status Type'} inputType={'text'} textPlaceholder={'Pending'} register={register}/>

        </div>
        <div className=' max-w-[1360px] m-auto p-8 grid grid-cols-2'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <h3 className='text-black font-semibold text-xl'> 
                Format Of Transfer
              </h3>
              <div className='flex flex-col gap-2'>
              <InputField inputName={`.csv files: delimited format with I delimiter (pipe)`} inputType={'checkbox'} checkboxValue={'csv'} register={register} />
              <InputField inputName={'SAS'} inputType={'checkbox'} checkboxValue={'SAS'} register={register} />
              <InputField inputName={'file type: [.typ]'} inputType={'checkbox'} checkboxValue={'csv'} register={register} />
              <InputField inputName={'other file type:'} inputType={'checkbox'} checkboxValue={'other'} register={register} />

              </div>
            </div>
            <div className='flex flex-col gap-2'>
            <h3 className='text-black font-semibold text-xl'> 
            Delivery location for transfer
              </h3>
              <div  className='flex flex-col gap-2'>
              <InputField inputName={'LabConnect Sharefile:'} inputType={'boxSelect'} checkboxValue={'SAS'} register={register} dropDownData={dropDownData}/>
              <InputField inputName={'Client Portal:'} inputType={'boxSelect'} checkboxValue={'SAS'} register={register} dropDownData={dropDownData}/>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
            <h3 className='text-black font-semibold text-xl'> 
            Test Transfer Type
              </h3>
              <div  className='flex flex-col gap-2'>
              <InputField inputName={'Test Data'} inputType={'checkbox'} checkboxValue={'csv'} register={register} />
              <InputField inputName={'Live Data'} inputType={'checkbox'} checkboxValue={'other'} register={register} />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
            <h3 className='text-black font-semibold text-xl'> 
            Export file name convention
              </h3>
              <div  className='flex flex-col gap-2'>
              <InputField inputName={'File format'} inputType={'select'}  dropDownData={dropDownData} register={register}/>
              </div>
            </div>
            <div className='flex flex-col gap-2'>      
             <h3 className='text-black font-semibold text-xl'> 
            Study Milestones
              </h3>
              <div  className='flex flex-col gap-2'>
              <InputField inputName={'First Patient First Visit​'} inputType={'text'} textPlaceholder={'Date'} register={register}/>
              <InputField inputName={'Last Patient Last Visit​'} inputType={'text'} textPlaceholder={'Date'} register={register}/>
              </div>
            </div>
          </div>
          {/* <div className='border border-black max-w-[1000px] m-auto p-8 grid grid-cols-2'></div> */}
          <div className='flex flex-col gap-2'>
          <h3 className='text-black font-semibold text-xl'> 
            Transfer Frequency
              </h3>
              <div  className='flex flex-col gap-2'>
              <InputField inputName={'Monthly'} inputType={'checkbox'} checkboxValue={'csv'} register={register} />
              <InputField inputName={"Quarterly"} inputType={'checkbox'} checkboxValue={'csv'} register={register}/>
              <InputField inputName={'On Demand'} inputType={'checkbox'} checkboxValue={'csv'} register={register} />
              <InputField inputName={"Weekly"} inputType={'checkbox'} checkboxValue={'csv'} register={register}/>
              <InputField inputName={'Daily'} inputType={'checkbox'} checkboxValue={'csv'} register={register} />
              <InputField inputName={"Every Other Month"} inputType={'checkbox'} checkboxValue={'csv'} register={register}/>
              <InputField inputName={'Twice a Month'} inputType={'checkbox'} checkboxValue={'csv'} register={register} />
              <InputField inputName={"Other"} inputType={'checkbox'} checkboxValue={'csv'} register={register}/>
              </div> 
              <div className='flex flex-col gap-2'>
              <h3 className='text-black font-semibold text-xl'> 
            Automated Transfer
              </h3>
              <div  className='flex flex-col gap-2'>
              <InputField inputName={'No'} inputType={'checkbox'} checkboxValue={'csv'} register={register} />
              <InputField inputName={'Yes'} inputType={'checkbox'} checkboxValue={'csv'} register={register}/>
              </div> 
              </div> 
              <div className='flex flex-col gap-2'>
              <h3 className='text-black font-semibold text-xl'> 
            Blinding
              </h3>
              <div  className='flex flex-col gap-2'>
              <InputField inputName={'Not Required'} inputType={'checkbox'} checkboxValue={'csv'} register={register} />
              <InputField inputName={'STD'} inputType={'checkbox'} checkboxValue={'csv'} register={register}/>
              <InputField inputName={'Custom'} inputType={'checkbox'} checkboxValue={'csv'} register={register}/>
              </div> 
              </div> 
              <div className='flex flex-gap-4'>
              
              </div>             
          </div>
      
        </div>
        <div className=' px-5 m-auto flex justify-end w-full gap-2'>
          <button type='submit' className='min-w-[150px] rounded-md bg-[#5b5bf1] text-white py-2 px-5'>Save</button>
              <button type='button' onClick={()=>navigate('/')} className='min-w-[150px] rounded-md py-2 px-5 border border-[#5b5bf1] bg-gray-400'>Cancel</button>
              <button type='button' onClick={()=> reset()} className='min-w-[150px] rounded-md py-2 px-5 border border-[#5b5bf1] bg-gray-300'>Clear</button>
          </div>
      </form>
    </div>
  )
}

export default ClientTransfer