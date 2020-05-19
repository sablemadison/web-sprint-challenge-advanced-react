// write your custom hook here to control your checkout form
import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { truncateSync } from 'fs';
// import CheckoutForm from '../components/CheckoutForm';
export default function useForm(initialValue, key){

    const [values, setValues] = useLocalStorage(initialValue, key);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    
    const handleChanges = (e) => {
        e.preventDefault()
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    

      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true); 
        console.log('Form submitted')
      };


      return [values, handleChanges, handleSubmit, showSuccessMessage]
    
}

