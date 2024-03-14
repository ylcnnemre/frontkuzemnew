import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import "./mySlider.scss"
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next"
import CardCatagories from '../cardCategories/CardCategories';
import it from "../../../assets/images/it.png"
import handcrafts from "../../../assets/images/handcrafts.png"
import art from "../../../assets/images/art.png"
import Religion from "../../../assets/images/Religion.png"
import Languages from "../../../assets/images/Languages.png"
import Sport from "../../../assets/images/spor.png"
const MySlider = () => {
    const { t } = useTranslation();
    const photoList = [
        { path: it, name: `${t("a1")}` },
        { path: art, name: `${t("a2")}` },
        { path: handcrafts, name: `${t("a3")}` },
        { path: Religion, name: `${t("a4")}` },
        { path: Languages, name: `${t("a5")}` },
        { path: Sport, name: `${t("a6")}` },
        { path: it, name: 'Bilişim Teknolojileri' },
        { path: art, name: 'Resim' },
        { path: handcrafts, name: 'El Sanatları' },
        { path: Religion, name: 'Din ve Değerler Eğitimi' },
        { path: Languages, name: 'Yabancı Diller' },
        { path: Sport, name: 'Spor' },
    ];

    const [slidesPerView, setSlidesPerView] = useState(6);
    /* const [isSwiping, setIsSwiping] = useState(false); */

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;

            if (width < 700) {
                setSlidesPerView(1);
            } else if (width < 800) {
                setSlidesPerView(2);
            } else if (width < 1000) {
                setSlidesPerView(3);
            } else if (width < 1400) {
                setSlidesPerView(4);
            } else {
                setSlidesPerView(6);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    /*  function handleSlideChange() {
       setIsSwiping(true);
     }
   
     function handleSwiperTransitionEnd() {
       setIsSwiping(false);
     } */

    return (
        <div>
            <Swiper
                className="swiper_container"
                slidesPerView={slidesPerView}
                grid={{ rows: 1 }}
                spaceBetween={30}
                pagination={{ clickable: true }}
            /*         onSlideChange={handleSlideChange}
                    onTransitionEnd={handleSwiperTransitionEnd} */
            >
                {photoList.map((el, index) => (
                    <SwiperSlide key={index} className="photo_slide">
                        <div className="photo_section">
                            <CardCatagories text={el.name} img={el.path} ></CardCatagories>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/*    <Container className='mt-5 contDot'>       
        <img src="../src/assets/images/dots.png" alt="" id='dot' className={isSwiping ? 'flip' : ''}/>
      </Container> */}
        </div>
    );
};

export default MySlider;
