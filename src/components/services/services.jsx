import './services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../card/card'
import Resume1 from './Jayanth Resume SDE W-1.pdf'
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion, spring} from 'framer-motion' 


const Services = () => {

const transition = {duration : 1, type: 'spring'}

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
    return ( 
        <div className="services" id='Services'>

       {/* left side */}
       <div className="awesome">
       <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
       <span>Services</span>
       <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        Reprehenderit quae enim commodi corrupti? Temporibus veritati
       </span>
       <a href={Resume1} download>
       <button className='button s-button'>Download CV</button>
     </a>
       <div className="blur s-blurl" style={{background: "#ABF1FF94"}}></div>
       </div>

       {/* right side */}
       <div className="cards">
        
        <motion.div 
        

        style={{left:'14rem'}}>
            <Card
           emoji = {HeartEmoji}
           heading = {'Developer'}
           detail = {'React Js, JavaScript, Html, Css, Node Js, Express Js, MongoDB'}
            />
        </motion.div>
       <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>

       </div>
        </div>
     );
}
 
export default Services;