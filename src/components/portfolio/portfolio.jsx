import './portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from '../../img/hotstar.webp'
import Ecommerce from '../../img/meesho.webp'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import 'swiper/css'
import { themeContext } from "../../Context";
import { useContext } from "react";


const Portfolio = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return ( 
        <div className="portfolio" id='Portfolio'>
            
            {/* heading */}
            <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper 
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
            >
               <SwiperSlide>
                <a href="https://disneyhotstar-clone-frontend.onrender.com/" target='_blank'><img src={Sidebar} alt="" height={200} width={500}/></a>
                
               </SwiperSlide>

               <SwiperSlide>
                <a href="https://meshoproject.onrender.com/" target='_blank'><img src={Ecommerce} alt="" height={200} width={500} /></a>
                
               </SwiperSlide>

               <SwiperSlide>
                <a href="https://foodblog-frontend.onrender.com/" target='_blank'><img src="https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?size=626&ext=jpg&ga=GA1.2.12140546.1689867406&semt=sph" alt="" height={200} width={500} /></a>
                
               </SwiperSlide>

              

            </Swiper>
        </div>
     );
}
 
export default Portfolio;