import {useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import { themeContext } from "../../Context";
import { useContext } from "react";
const Contact = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
    
     
    const [done, setDone] = useState("")
     const [u_name, setName] = useState("")
      const [u_email, setMail] = useState("")
       const [textArea, setArea] = useState("")
       
       const [instuction,setInstruction]=useState("")
       useEffect(()=>{
        const Email_Exp=/^[a-zA-Z0-9%._+]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,}$/

        if(u_email && !Email_Exp.test(u_email)){
         setInstruction('!please Enter valid mail id')
        }
        else{
          setInstruction("")
          setDone(true)
        }

       },[u_email])
    const sendEmail = (e) => {
      e.preventDefault();

      let data={
           user_name:u_name,
           user_email:u_email,
           message:textArea
      }
      if(done){
         emailjs.send('service_wz06oim', 'template_ld88iwe',data, 'i-VxBNouwiUg93SLA')
        .then((result) => {
            console.log(result.text);
            alert('Thank you for contacting me! I’ll get back to you soon.')
            
        }, (error) => {
            console.log(error.text);
        });
        setMail("")
        setArea("")
        setName("")
        }
      
    };

    return ( 
        <div className="contact-form" id='Contact'>
          <div className="w-left">
             <div className="awesome">
                <span style={{color: darkMode? 'white': '',fontSize:'1rem'}}>Open to opportunities as a MERN stack developer. </span>
                <span>Kindly get in touch.</span>
             
             <div 
             className="blur s-blurl"
             style={{background: "#ABF1FF94"}}
             ></div>
             </div>
          </div>

        <div className="c-right">
           <form  onSubmit={sendEmail}>
            <input type="text" value={u_name} onChange={(e)=>setName(e.target.value)} className='user' placeholder='Name' required />
            <div className="mailbox">
              <input type="text" name='user_email' value={u_email} onChange={(e)=>setMail(e.target.value)} className='user' placeholder='Email' required/><br/>
            <small style={{color:'red'}}>{instuction}</small>
            </div>
            <textarea name="message" value={textArea} onChange={(e)=>setArea(e.target.value)} className='user' placeholder='Message' required/>
          <input type="submit" value='Send' className='button' />
          
          <div
          className='blur c-blurl'
          style={{background:"var(--purple)"}}
          ></div>
           </form>
        </div>

        </div>
     );
}
 
export default Contact;