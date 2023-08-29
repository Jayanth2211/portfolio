import './knowledge.css'
import css from '../../img/css.webp'
import html from '../../img/html.webp'
import js from '../../img/js.png'
import nodejs from '../../img/nodejs.png'
import reacticon1 from '../../img/reacticon1.gif'
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion, spring} from 'framer-motion' 



const Knowledge = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return ( 
         <div className="knowledge" id='Project'>
           {/* left side */}
       <div className="awesome">
       <span style={{color: darkMode? 'white': ''}}>I Have </span>
       <span>Good Knowledge In</span>
       <span>
       React Js, JavaScript, HTML, and CSS, proficiently crafting<br />
dynamic and responsive web applications. Adept at leveraging<br />
React's component-based architecture to create engaging<br />
user interfaces while ensuring seamless integration with<br />
well-structured code and optimal user experiences.
     
       </span>
     <a href="https://wa.me/919740839515" target='_blank'><button className='button s-button'>Hire Me </button></a>
       
       <div className="blur s-blurl" style={{background: "#ABF1FF94"}}></div>
       </div>

       { /* right side  */}
       <div className="k-right">
        <div 
        className="k-mainCircle">
            <div className="k-secCircle css">
             <img src={css} alt="" />
            </div>
            <div className="k-secCircle html">
             <img src={html} alt="" />
            </div>
            <div className="k-secCircle react">
             <img src={reacticon1} alt="" />
            </div>
            <div className="k-secCircle node">
             <img src={nodejs} alt="" />
            </div>
            <div className="k-secCircle js">
             <img src={js} alt="" />
            </div>
        </div>

        {/* background circle */}
        {/* <div className="k-backCircle blueCircle"></div>
        <div className="k-backCircle yellowCircle"></div> */}
       </div>
         </div>
     );
}
 
export default  Knowledge ;