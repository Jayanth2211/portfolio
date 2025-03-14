import "../intro/intro.css"
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from "../floatingDiv/floatingDiv"
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion' 


const Intro = () => {

  const transition = {duration : 2, type: 'spring'}

    const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
    return ( 
        <div className="intro">

            <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white': ''}}>Hy! I Am </span>
                <span>Jayanth Y N</span>
                <span>Frontend Developer with good
                 knowledge in web designing and development,
                 producting the Quality work</span>
            </div>
<a href="https://wa.me/919740839515" target="_blank"> <button className="button i-button"> Hire me</button></a>
       
            <div className="i-icons">
              <a href="https://github.com/Jayanth2211?tab=repositories" target="_blank"><img src={Github} alt="" /></a>
              <a href="https://www.linkedin.com/in/jayanth-y-n-050a20277/" target="_blank"><img src={LinkedIn} alt="" /></a>
              <a href="https://www.instagram.com/jayanth_yn/" target="_blank"><img src={Instagram} alt="" /></a>
                
                
                
            </div>

            </div>

            <div className="i-right">
             <img src={Vector1} alt="" />
             <img src={Vector2} alt="" />
             <img src={boy} alt="" />
             <motion.img
            
             src={glassesimoji} alt="" />

             <motion.div
             

             style={{top: '-4%', left:'68%'}}
             className="floating-div"

             >
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
             </motion.div>

             <motion.div
               
             style={{top:'18rem', left:'0rem'}}
             className="floating-div"
             >
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
             </motion.div>
           {/* blur divs */}

           {/* <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
           <div className="blur"
            style={{
            background: '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem'
         }}
         >
        
         </div> */}

            </div>
        </div>
     );
}
 
export default Intro;