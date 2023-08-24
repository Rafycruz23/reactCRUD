import React from "react";
import { Button, Table } from 'semantic-ui-react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../App.css'


export default function Read(){
    const [Data, setData] = useState([])
    useEffect(()=>{
        axios.get('https://64dbc532593f57e435b1665a.mockapi.io/crudData').then((response) =>{setData(response.data); console.log(response.data)})
    }, [])

return(
    <div>
 <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Check</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {Data.map((data)=>{
            return(
         <Table.Row>
        <Table.Cell>{data.firstName}</Table.Cell>
        <Table.Cell>{data.lastName}</Table.Cell>
        <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
        <Link to='/update'>
        <Table.Cell>
          <Button onClick={()=> setData(data)}>Update</Button>
        </Table.Cell>
        </Link>
      </Table.Row>
            )
        })}
    </Table.Body>
  </Table>

    </div>

)
}