import React from 'react';
import './Box.css'; 
import { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';


const Box = () => {

  const[mesg,setmesg]=useState("")

  const show=()=>{
   setmesg('the message  is 🙌')
  }

  const hide=()=>{
   setmesg('')
  }


  return (
    <div className="box">
      <h1 style={{marginLeft:'100px',color:"red"}}>message Box </h1>
<img style={{width:'100px',marginLeft:'350px',marginTop:'-80px'}} src='https://i.pinimg.com/originals/7e/69/ec/7e69eca344ca1465da94d698ded08e8e.gif'/>
      <div className="d-grid gap-2 d-md-block">
        <br/>
<br/>
<br/>
<h4 style={{marginLeft:'120px',marginTop:'-40px'}}>{mesg}</h4>

      <MDBBtn onClick={show} style={{marginLeft:'120px',margin:'px'}}>SHOW</MDBBtn>

      <MDBBtn onClick={hide} style={{marginLeft:'30px',margin:'px'}}>HIDE</MDBBtn>
    </div>
    </div>
  );
}

export default Box;