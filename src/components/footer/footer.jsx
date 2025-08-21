import './footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'


const Footer = () => {
    return ( 
        <div className="footer" id='Footer'>
          <img src={Wave} alt="" style={{width:'100%'}}/>
          <div className="f-content">
            <a href="mailto:jayanth22yn@gmail.com" target='_blank'><span>jayanth22yn@gmail.com</span></a>
               <div className="f-icons">
               <a href="https://www.instagram.com/jayanth_yn/" target='_blank'><Insta color='white' size='3rem'/></a>
                <a href="https://github.com/Jayanth2211?tab=repositories" target='_blank'>
                <Github color='white' size='3rem'/></a>
                <a href="https://www.linkedin.com/in/jayanth-y-n-050a20277/"  target='_blank'> <ion-icon name="logo-linkedin" id='linkedIn' ></ion-icon></a>
               
               </div>
          </div>
        </div>
     );
}
 
export default Footer;