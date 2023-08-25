import React, {  useState, useEffect } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import '../App.css';


export default function Update() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [checkbox, setcheckbox] = useState(false)
    const [id, setID] = useState(null)

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'))
        setLastName(localStorage.getItem('Last Name'))
        setcheckbox(localStorage.getItem('Checkbox'))
    }, [])
    
    const updateData = () => {
        axios.put(`https://64dbc532593f57e435b1665a.mockapi.io/crudData/${id}`,{
            firstName,
            lastName,
            checkbox,
        }).then((result)=>{
            console.log(result);
            })
        
    }


return(
   
  <Form className='form'>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <Checkbox className="ui  toggle checkbox" readonly="" tabindex="0" label='I agree to the Terms and Conditions' value={!checkbox} onChange={(e)=>setcheckbox(!checkbox)}/>
    </Form.Field>
    <Button type='submit' onClick={updateData}>Update</Button>
  </Form>
)}

