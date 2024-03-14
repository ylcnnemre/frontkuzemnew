import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from "react-icons/fa";
/* import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; */
import { GoArrowUpRight } from "react-icons/go";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.scss"
import { useState } from 'react';
import { useTranslation } from "react-i18next"
import ButtonPurple from './components/buttons/ButtonPurple';
import MyNavbar from './components/navbar/MyNavbar';
import MainNavbar from './components/navbar/MainNavbar';
import Arrow1 from "../assets/images/Polygon5.png"
import Arrow2 from "../assets/images/Polygon6.png"
import Arrow3 from "../assets/images/Polygon4.png"
import Komek1 from "../assets/images/komek1.png"
import Komek2 from "../assets/images/komek2.png"
import Komek3 from "../assets/images/komek3.png"
import Komek4 from "../assets/images/komek4.png"
import Group from "../assets/images/Group.png"
import CardLesson from './components/cardLesson/CardLesson';
import imgProfile from "../assets/images/imgProfile.png"
import imgPlay from "../assets/images/imgPlay.png"
import imgCard from "../assets/images/imgcard.png"
import imgProfile2 from "../assets/images/imgProfile2.png"
import imgPlay2 from "../assets/images/imgPlay2.png"
import imgCard2 from "../assets/images/imgcard2.png"
import imgProfile3 from "../assets/images/imgProfile3.png"
import imgPlay3 from "../assets/images/imgPlay3.png"
import imgCard3 from "../assets/images/imgcard3.png"
import imgProfile4 from "../assets/images/imgProfile4.png"
import imgPlay4 from "../assets/images/imgPlay4.png"
import imgCard4 from "../assets/images/imgcard4.png"
import imgProfile5 from "../assets/images/imgProfile5.png"
import imgPlay5 from "../assets/images/imgPlay5.png"
import imgCard5 from "../assets/images/imgcard5.png"
import imgProfile6 from "../assets/images/imgProfile6.png"
import imgPlay6 from "../assets/images/imgPlay6.png"
import imgCard6 from "../assets/images/imgcard6.png"
import MySlider from './components/MySlider/MySlider';
import Star from "../assets/images/star.png"
import EllipseEmpty from "../assets/images/ellipseEmpty.png"
import imgLesson from "../assets/images/imgLesson.png"
import Ellipse from "../assets/images/ellipse.png"
import HalfEllipse from "../assets/images/halfEllipse.png"
import SliderGeneral from './components/sliderGeneral/SliderGeneral';
import SliderStudentOpinions from './components/sliderStudentOpinions/SliderStudentOpinions';
import MainFooter from './components/mainFooter/MainFooter';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { t } = useTranslation();

    const images = [
        Komek1,
        Komek2,
        Komek3,
        Komek4
    ];

    const nextSlide = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    return (
        <div>
            <MainNavbar />
            {/* <MyNavbar /> */}

            {/* --------------------------------------------slogan input-------------------------- */}

            <Container id='container1' >

                <p id='p1'  >{t('slogan')}</p>
                <p id='p2'   > {t('slogan2')}</p>

                <InputGroup className="mb-3" id='input'>
                    <Form.Control aria-label="Amount (to the nearest dollar)" placeholder={t("input")}
                    />
                    <InputGroup.Text>
                        <Container> <FaSearch id='iconSearch' /></Container>
                    </InputGroup.Text>
                </InputGroup>


                {/*-------------------------------------- iki ok iki buton ana sayfa ---------------------------------*/}
                <Container id='containerBelow'>
                    <div id='imageButtonsContainer'>
                        <img src={Arrow1} alt='arrow1' id='arrow1' />
                        <Button id='primaryButtons1' size="sm" >
                            {t("btn2")}
                        </Button>
                        <Button id='primaryButtons2' size="sm" >
                            {t("btn3")}
                        </Button>

                        <img src={Arrow2} alt='arrow2' id='arrow1' />
                    </div>
                </Container>
            </Container>




            {/* ------------------------------------kare --------------------------- */}

            <Container id='container2'>
                <Row>
                    <Col xs lg="2">
                        <img src={Group} alt='' id='square'></img>
                    </Col>
                    <Col md="auto">
                    </Col>

                </Row>
            </Container>


            {/* -----------------------------------slider komek---------------------------------- */}

            <Container fluid >
                <Row className="align-items-center">
                    <Col className="text-center">
                        <Button onClick={prevSlide} id='buttonSlider'>{/* <FaArrowLeft /> */}</Button>
                    </Col>
                    {images.map((image, index) => (
                        <Col key={index} className={`text-center ${index === currentIndex ? 'active' : ''}`} id='colKomek'>
                            <img src={image} alt={`Slide ${index + 1}`} id='komek' />
                        </Col>
                    ))}
                    <Col className="text-center">
                        <Button onClick={nextSlide} id='buttonSlider'> {/* <FaArrowRight /> */}</Button>
                    </Col>
                </Row>
            </Container>






            {/* -----------------------------------en populer kurslar--------------------------------- */}

            <Container id='container3' fluid>

                <Row id='row00'>
                    <Col >
                        <Container id='contText'>
                            <p id='text00'> {t("slogan5")}</p>
                            <p id='text02'>{t("slogan6")}</p>
                        </Container>

                        <p id='text01'> {t("slogan7")} </p>
                    </Col>
                    <Col ><img src={Arrow3} alt='triangle' id='triangle'></img></Col>
                    <Col xs lg="2" id='col00'>
                        <p id='text02'>  {t("slogan8")}<GoArrowUpRight id='Arrow00' /></p>
                    </Col>
                </Row>



                {/* -------------------------------cards--------------------------- */}

                <Container id='cards'>
                    <Row id='cards1'>
                        <Col md={4} className='colCardForRes'>
                            <CardLesson
                                infoText={t("infoText")}
                                name="Adem Yılmaz"
                                job={t("job")}
                                imageSrc={imgProfile}
                                imgPlay={imgPlay}
                                imgcard={imgCard}
                                btnColor='#7f56d9'
                                btnText={t("btnText")}

                            ></CardLesson>
                        </Col>
                        <Col md={4} className='colCardForRes'>
                            <CardLesson
                                infoText={t("infoText2")}
                                name='Rumeysa Yalçın'
                                job={t("job2")}
                                imageSrc={imgProfile2}
                                imgPlay={imgPlay}
                                imgcard={imgCard2}
                                btnColor='#00C1FF'
                                btnText={t("btnText2")}

                            ></CardLesson>
                        </Col>
                        <Col md={4} className='colCardForRes'>
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
                        </Col>
                    </Row>
                    <Row id='cards2'>
                        <Col md={4} className='colCardForRes'>
                            <CardLesson
                                infoText={t("infoText4")}
                                name='Recep Aktaş'
                                job={t("job4")}
                                imageSrc={imgProfile4}
                                imgPlay={imgPlay4}
                                imgcard={imgCard4}
                                btnColor='#24D198'
                                btnText={t("btnText4")}

                            ></CardLesson>
                        </Col>
                        <Col md={4} className='colCardForRes'>
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
                        </Col>
                        <Col md={4} className='colCardForRes'>
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

                        </Col>
                    </Row>
                </Container>
            </Container>



            {/* ------------------------------Katagorileri kesfedin-------------------------------- */}



            <Container id='containerCatagotires'>
                <Row className="justify-content-md-center">
                    <Col xs lg="4"></Col>
                    <Col md="6" id='colMiddle'>
                        <Col id='rowMiddle'>
                            <p id='p1'>{t("slogan9")} </p>
                            <p id='p2'>{t("slogan10")} </p>
                        </Col>
                        <p id='p3'>{t("slogan11")} </p>
                    </Col>
                    <Col xs lg="2">
                        <img src="../src/assets/images/ellipse40.png" alt="" id='ellipse40' />
                    </Col>
                </Row>



                {/* --------------------------------card slider--------------cardCatagories------------------------ */}

                <MySlider></MySlider>
            </Container>






            {/* -------------------------UZAKTAN EGITIM---------------------- */}


            <Container>
                <Row className='mt-5 pt-5' id='rwOnlineEdu'>
                    <Col xs={6} className='col1'>
                        <div >
                            <div id='divUpper'>
                                <img src={Star} alt=" " id='img21' />
                                <img src={EllipseEmpty} alt="" id='img22' />
                            </div>

                            <img src={imgLesson} alt="" id='imgLesson' />

                            <div id='divBelow'>
                                <img src={Ellipse} alt="" id='img23' />
                                <img src={HalfEllipse} alt="" id='img24' />
                            </div>
                        </div>


                    </Col>
                    <Col xs={6} className='mt-5 pt-5'>
                        <div id='divTitle'>
                            <p style={{ whiteSpace: 'pre-wrap' }} id='p11' >{t("text")} </p>
                            <p id='p12'>{t("text2")} </p>
                        </div>

                        <p id='p13'>{t("text3")}  </p>
                        <ButtonPurple buttonText={t("text4")} btnColor={'7F56D9'}></ButtonPurple>
                    </Col>
                </Row>
            </Container>





            {/* ---------------------------onerilen kurslarimiz----------------------- */}



            <Container>
                <Row className='mt-5 pt-5' >
                    <Col xs={6} md={4}>
                        <div id='divCourse' className='mt-5'>
                            <p style={{ whiteSpace: 'pre-wrap' }} id='p31' > {t("text5")} </p>
                            <p id='p32'> {t("text6")} </p>
                        </div>
                    </Col>
                    <Col xs={6} md={8}>

                    </Col>
                </Row>
               <SliderGeneral></SliderGeneral> 
            </Container>



            {/* -------------------------ogrenci gorusleri-------------------------------------- */}


            <Container fluid className='ogrGorusleri'>
                <Container fluid>
                    <Row className='contTitle1'>
                        <Col xs={2} md={4}></Col>
                        <Col xs={6} md={4} >
                            <div id='divCourse' className=' title77 mt-5'>
                                <p style={{ whiteSpace: 'pre-wrap' }} id='p31' >{t("text7")}  </p>
                                <p id='p32'> {t("text8")}  </p>

                            </div>
                            <div className='title77'><p id='info111'>{t("text9")}  </p></div>
                        </Col>
                        <Col xs={6} md={4} id='colYamuh' >
                            <img src="../src/assets/images/yamuh.png" alt="" />
                        </Col>
                    </Row>
                </Container>

                <SliderStudentOpinions></SliderStudentOpinions>
            </Container>




            {/* ---------------------------ogrenci gorusleri card slider---------------------------------- */}










            {/* _________________________________________footer---------------------------------------------- */}



            <MainFooter  ></MainFooter>



        </div>
    )
}

export default Home;
