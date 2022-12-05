import React from 'react'
import emailjs from '@emailjs/browser'
import ContributeItem from './ContributeItem'
import SplashNav from '../splash/SplashNav'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type FormObjeType = {
  from_email: string
  from_name: string
  name: string
  starter: string
  ing: string
  mo: string
  place: string
  ci: string
  to: string
  ac: string
  ft: string
  nv: string
  ref: string
}

function Contribute() {
  const notify = () => toast("Request sent successfully!");
  const navigate = useNavigate()
  const [formObj, setFormObj] = React.useState<FormObjeType>({
    from_email: '',
    from_name: '',
    name: '',
    starter: '',
    ing: '',
    mo: '',
    place: '',
    ci: '',
    to: '',
    ac: '',
    ft: '',
    nv: '',
    ref: ''
  })
  return (
    
    <div className = 'w-full h-full justify-start flex flex-col relative overflow-x-hidden scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300 z-10 items-center text-white'>
      <SplashNav />
      <div className='text-white top-10 absolute text-4xl font-bold ml-20 my-10 border-b-2 pb-2 border-gray-800 w-full tracking-wide'>Contribution Submission Form</div>
      <form className='top-44 flex flex-col text-gray-300 absolute w-3/5' onSubmit = {(e) => {
        e.preventDefault()
        emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formObj, import.meta.env.VITE_PUBLIC_ID);
        navigate('/')
      }}>
        <div className='tracking-wide border-b-2 text-white border-gray-800 pb-3 flex mb-10 justify-between text-xl font-bold'>
            <div>PARAMETER</div>
            <div>VALUE</div>
        </div>
        <ContributeItem objKey='from_name' setFormObj={setFormObj} title = {'Name'} text = {formObj.from_name} key = {1} />
        <ContributeItem objKey='from_email' setFormObj={setFormObj} title = {'Email'} text = {formObj.from_email} key = {0} />
        <ContributeItem objKey='name' setFormObj={setFormObj} title = {'Beverage Name'} text = {formObj.name} key = {2} />
        <ContributeItem objKey='starter' setFormObj={setFormObj} title = {'Starter Culture'} text = {formObj.starter} key = {3} />
        <ContributeItem objKey='ing' setFormObj={setFormObj} title = {'Ingredient'} text = {formObj.ing} key = {4} />
        <ContributeItem objKey='mo' setFormObj={setFormObj} title = {'Microorganisms'} text = {formObj.mo} key = {5} />
        <ContributeItem objKey='place' setFormObj={setFormObj} title = {'Place'} text = {formObj.place} key = {6} />
        <ContributeItem objKey='ci' setFormObj={setFormObj} title = {'Cultural Importance'} text = {formObj.ci} key = {7} />
        <ContributeItem objKey='to' setFormObj={setFormObj} title = {'Taste and Odour'} text = {formObj.to} key = {8} />
        <ContributeItem objKey='ft' setFormObj={setFormObj} title = {'Fermentation Time'} text = {formObj.ft} key = {9} />
        <ContributeItem objKey='ac' setFormObj={setFormObj} title = {'Alcohol Content'} text = {formObj.ac} key = {12} />
        <ContributeItem objKey='nv' setFormObj={setFormObj} title = {'Nutritional Value'} text = {formObj.nv} key = {10} />
        <ContributeItem objKey='ref' setFormObj={setFormObj} title = {'Reference'} text = {formObj.ref} key = {11} />
        <button onClick = {notify} className = 'bg-red-300 h-16 text-white rounded-md tracking-wide mb-5 font-bold mt-6 hover:scale-105 hover:bg-red-400 duration-300 transition'>Send Request</button>
      </form>
    </div>
  )
}

export default Contribute