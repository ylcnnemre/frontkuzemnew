
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss'
import { useTranslation } from "react-i18next"
import CardLesson from "../cardLesson/CardLesson";
import imgProfile from "../../../assets/images/imgProfile.png"
import imgPlay from "../../../assets/images/imgPlay.png"
import imgCard from "../../../assets/images/imgcard.png"

import imgProfile2 from "../../../assets/images/imgProfile2.png"
import imgPlay2 from "../../../assets/images/imgPlay2.png"
import imgCard2 from "../../../assets/images/imgcard2.png"

import imgProfile3 from "../../../assets/images/imgProfile3.png"
import imgPlay3 from "../../../assets/images/imgPlay3.png"
import imgCard3 from "../../../assets/images/imgcard3.png"


import imgProfile4 from "../../../assets/images/imgProfile4.png"
import imgPlay4 from "../../../assets/images/imgPlay4.png"
import imgCard4 from "../../../assets/images/imgcard4.png"


import imgProfile5 from "../../../assets/images/imgProfile5.png"
import imgPlay5 from "../../../assets/images/imgPlay5.png"
import imgCard5 from "../../../assets/images/imgcard5.png"


import imgProfile6 from "../../../assets/images/imgProfile6.png"
import imgPlay6 from "../../../assets/images/imgPlay6.png"
import imgCard6 from "../../../assets/images/imgcard6.png"

function SliderGeneral() {
    const { t } = useTranslation();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024, // Bu noktayı ihtiyacınıza göre ayarlayın
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container mt-4" >
            <Slider {...settings}>

                <div style={{ display: 'inline-block' }}>
                    <CardLesson
                        infoText={t("infoText")}
                        name='Adem Yılmaz'
                        job={t("job")}
                        imageSrc={imgProfile}
                        imgPlay={imgPlay}
                        imgcard={imgCard}
                        btnColor='#7f56d9'
                        btnText={t("btnText")}

                    ></CardLesson>
                </div>

                <div>
                    <CardLesson
                        infoText={t("infoText2")}
                        name='Rumeysa Yalçın'
                        job={t("job2")}
                        imageSrc={imgProfile2}
                        imgPlay={imgPlay2}
                        imgcard={imgCard2}
                        btnColor='##00C1FF'
                        btnText={t("btnText2")}

                    ></CardLesson>
                </div>

                <div>
                    <CardLesson
                        infoText={t("infoText3")}
                        name='Tuna Tavus'
                        job={t("job3")}
                        imageSrc={imgProfile3}
                        imgPlay={imgPlay3}
                        imgcard={imgCard3}
                        btnColor='blue'
                        btnText={t("btnText3")}

                    ></CardLesson>
                </div>
                <div> <CardLesson
                    infoText={t("infoText4")}
                    name='Recep Aktaş'
                    job={t("job4")}
                    imageSrc={imgProfile4}
                    imgPlay={imgPlay4}
                    imgcard={imgCard4}
                    btnColor='#24D198'
                    btnText={t("btnText4")}

                ></CardLesson></div>
                <div>
                    <CardLesson
                        infoText={t("infoText5")}
                        name='Kemal Kartal'
                        job={t("job5")}
                        imageSrc={imgProfile5}
                        imgPlay={imgPlay5}
                        imgcard={imgCard5}
                        btnColor='#7f56d9'
                        btnText={t("btnText5")}

                    ></CardLesson>
                </div>
                <div>
                    <CardLesson
                        infoText={t("infoText6")}
                        name='Ayşenur Güven'
                        job={t("job6")}
                        imageSrc={imgProfile6}
                        imgPlay={imgPlay6}
                        imgcard={imgCard6}
                        btnColor='#f15568'
                        btnText={t("btnText6")}

                    ></CardLesson>
                </div>


            </Slider>
        </div>
    );
}

export default SliderGeneral;

