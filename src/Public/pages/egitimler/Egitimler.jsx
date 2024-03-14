
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
/* import ButtonGroup from 'react-bootstrap/ButtonGroup';
 */import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';

import './index.scss'
import { useTranslation } from "react-i18next";
import MainNavbar from "../../components/navbar/MainNavbar";
import CardLesson from '../../components/cardLesson/CardLesson';
import FontHead from '../../components/fontHead/FontHead';
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
import MainFooter from '../../components/mainFooter/MainFooter';

const Egitimler = () => {

    const { t } = useTranslation();

    return (
        <div>
            <MainNavbar />
            <FontHead page={`${t("egitimler0")}`}></FontHead>





            <Container className="containerButtons">
                <Button variant="transparent" style={{ display: "flex" }} className="buttonx " >
                    {t("egitimler")} <Badge bg="secondary" style={{ marginLeft: "5px", marginTop: "4px" }} id="number">34</Badge>
                </Button>
                <Button variant="transparent" style={{ display: "flex", whiteSpace: "nowrap" }} className="buttonx " >
                    {t("egitimler2")} <Badge bg="secondary" style={{ marginLeft: "5px", marginTop: "4px" }} id="number">9</Badge>
                </Button>
                <Button variant="transparent" style={{ display: "flex", whiteSpace: "nowrap" }} className="buttonx " >
                    {t("egitimler3")} <Badge bg="secondary" style={{ marginLeft: "5px", marginTop: "4px" }} id="number">13</Badge>
                </Button>
                <Button variant="transparent" style={{ display: "flex" }} className="buttonx " >
                    {t("egitimler4")}  <Badge bg="secondary" style={{ marginLeft: "5px", marginTop: "4px" }} id="number">5</Badge>
                </Button>
                <Button variant="transparent" style={{ display: "flex", whiteSpace: "nowrap" }} className="buttonx " >
                    {t("egitimler5")} <Badge bg="secondary" style={{ marginLeft: "5px", marginTop: "4px" }} id="number">2</Badge>
                </Button>
                <Button variant="transparent" style={{ display: "flex" }} className="buttonx " >
                    {t("egitimler6")}  <Badge bg="secondary" style={{ marginLeft: "5px", marginTop: "4px" }} id="number">1</Badge>
                </Button>
                <Button variant="transparent" style={{ display: "flex", whiteSpace: "nowrap" }} className="buttonx " >
                    {t("egitimler7")}  <Badge bg="secondary" style={{ marginLeft: "5px", marginTop: "4px" }} id="number">3</Badge>
                </Button>
                <Button variant="transparent" style={{ display: "flex", whiteSpace: "nowrap" }} className="buttonx " >
                    {t("egitimler8")} <Badge bg="secondary" style={{ marginLeft: "5px", marginTop: "4px" }} id="number">1</Badge>
                </Button>



            </Container>




            <div id="egitimler2" >
                <Container>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic1">
                            {t("egitimler0")}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Button className="buttonx " style={{ display: 'grid', gridTemplateColumns: 'auto auto' }} >Tümü   {t("egitimler")} <div id="number"> 34</div>   </Button>
                            <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Bilişim Teknolojileri {t("egitimler2")} <div id="number">9</div></Button>
                            <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>El Sanatları  {t("egitimler3")} <div id="number">13</div></Button>
                            <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Resim  {t("egitimler4")} <div id="number">5</div></Button>
                            <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Din ve Değerler Eğitimi {t("egitimler5")} <div id="number">2</div></Button>
                            <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Spor {t("egitimler6")}  <div id="number">1</div></Button>
                            <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Yabancı Diller {t("egitimler7")} <div id="number">3</div></Button>
                            <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Kişisel Gelişim {t("egitimler8")} <div id="number">1</div></Button>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </div>










            <Container id='cards'>
                <Row id='cards1' style={{ paddingTop: '3%' }}>
                    <Col md={4} className='colCardForRes'>
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
                    </Col>
                    <Col md={4} className='colCardForRes'>
                        <CardLesson
                            infoText={t("infoText2")}
                            name='Rumeysa Yalçın'
                            job={t("job2")}
                            imageSrc={imgProfile2}
                            imgPlay={imgPlay2}
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
                <Row id='cards2' style={{ paddingTop: '3%' }}>
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


            <div style={{ height: '300px' }}></div>
            <MainFooter visibility={'hidden'} />
        </div>
    )
}

export default Egitimler;







