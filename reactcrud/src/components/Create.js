import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import '../App.css';


export default function Create() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [checkbox, setcheckbox] = useState(false)
    
    const submitData = () => {
        axios.post('https://64dbc532593f57e435b1665a.mockapi.io/crudData',{
            firstName,
            lastName,
            checkbox,
        }).then((result)=>{
            console.log(result);
            clearData()})
        
    }


    //THE CLEARDATA FUNCTION NEEDS WORK, DATA INPUT IS NOT REFRESHING
    function clearData(){
        setFirstName("");
        setLastName("");
        setcheckbox(false);
    }
    // function verifyData(){
    //     if (firstName || lastName == ''){
    //         alert('Enter all field information')
    //     } else if (checkbox == false){
    //         alert('You must agree to the Terms and Conditions')
    //     }
    // }


return(
   
  <Form className='form'>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' onChange={(e)=>setcheckbox(!checkbox)}/>
    </Form.Field>
    <Button type='submit' onClick={submitData}>Submit</Button>
  </Form>
)}

