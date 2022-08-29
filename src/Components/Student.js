import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper } from '@mui/material';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';


export default function Student() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [students,setStudents] = useState([])


    const handleClick=(e) =>{
        e.preventDefault()
        const student={firstName,lastName,email,phoneNumber}
        console.log(student)
        fetch("http://localhost:8080/student/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(student)

     
     
    }).then(() =>{
        console.log("New Student Added")
    })
}

useEffect(() =>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=> res.json())
    .then((result) =>{
        setStudents(result);
    }
    )
},[])



    return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >


   
      <TextField id="outlined-basic" label="Student First Name" variant="standard" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      <TextField id="outlined-basic" label="Student Last Name" variant="standard" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <TextField id="outlined-basic" label="Student Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <TextField id="outlined-basic" label="Student Phone Number" variant="standard" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <Button variant="contained" onClick={handleClick}>Submit</Button>
     
{/* <Container>
      <Paper elevation={3}>

{students.map(student => (
  <Paper elevation={6} key={student.id}> 
Id: {student.id}
firstName:{student.firstName}
lastName: {student.lastName}
email:{student.email}
phoneNumber:{student.phoneNumber}
</Paper>


))
}
</Paper>

  
</Container> */}





    </Box>
    
)};
    
