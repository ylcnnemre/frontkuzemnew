
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CiPhone, CiMail, CiLocationOn, CiFacebook } from "react-icons/ci";
import "./index.scss"
import { RxInstagramLogo } from "react-icons/rx";
import { RiTwitterXFill } from "react-icons/ri";

import PropTypes from 'prop-types'
import { useTranslation } from "react-i18next"

import { NavLink } from 'react-router-dom';
import CardFooter from '../cardFooter/CardFooter';
import footerImg from "../../../assets/images/footerImg.png"
import footerImg2 from "../../../assets/images/footerImg2.png"
import footerImg3 from "../../../assets/images/footerImg3.png"
import footerImg4 from "../../../assets/images/footerImg4.png"
import logoFooter from "../../../assets/images/logoFooter.png"

const MainFooter = (props) => {
    const { t } = useTranslation();

    return (
        <div style={{ backgroundColor: '#7F56D9' }}>
            <Container fluid className='pt-3 Footer'>

                <Container className='containerCards'>
                    <Row className='rowCards'>


                        <Col xs={6} md={2} >
                            <CardFooter id='card' section={footerImg} number='300' catagorie={t("f1")} visibility={props.visibility}></CardFooter>

                        </Col>


                        <Col xs={6} md={2}>
                            <CardFooter id='card' section={footerImg2} number='20,000+' catagorie={t("f2")} visibility={props.visibility}></CardFooter>

                        </Col>
                        <Col xs={6} md={2}>
                            <CardFooter id='card' section={footerImg3} number='10,000+' catagorie={t("f3")} visibility={props.visibility}></CardFooter>

                        </Col>
                        <Col xs={6} md={2}>
                            <CardFooter id='card' section={footerImg4} number='100,000+' catagorie={t("f4")} visibility={props.visibility}></CardFooter>
                        </Col>


                    </Row>
                </Container>



                <Row className='mt-5 pt-2  row1'>
                    <Col sm={9} xs={9} md={9} lg={3} style={{ paddingLeft: '0' }} id='collogoFooter'>
                        <img src={logoFooter} alt="" id='logoFooter' />
                    </Col>



                    <Col sm={4} xs={12} md={4} lg={2} className='colcc  colcc1'>
                        <h4 className='title'> {t("f5")}</h4>
                        <Col style={{ display: 'flex' }} className='mt-3'>
                            <NavLink >  <a className='text' >{t("f6")}</a> </NavLink>
                            <NavLink to="/blog"><a className=' text text1' >{t("f7")}</a></NavLink>
                        </Col>
                        <Col style={{ display: 'flex' }} className='mt-3'>
                            <NavLink to="/kurumsal"><a className='text' href=''>{t("f8")}</a> </NavLink>
                            <NavLink to="/egitimler"><a className='text text1' href=''>{t("f9")}</a> </NavLink>
                        </Col>
                    </Col>




                    <Col sm={4} xs={12} md={4} lg={2} className='colcc1'>
                        <h4 className='title'>{t("f10")}</h4>
                        <Col style={{ display: 'flex' }} className='mt-3'> <CiPhone className='text' /> <p className='text' style={{ whiteSpace: 'pre-wrap' }}>    (505) 555-0104</p>  </Col>
                        <Col style={{ display: 'flex' }} className='mt-1'><CiMail className='text' /> <p className='text' style={{ whiteSpace: 'pre-wrap' }}>     info@komek.com.tr</p> </Col>
                    </Col>




                    <Col sm={4} xs={6} md={3} lg={2} className='colcc1'>
                        <h4 className='title'>{t("f11")}</h4>
                        <Col style={{ display: 'flex' }} className='mt-3'><CiLocationOn className='text' /> <p className='text' style={{ whiteSpace: 'pre-wrap' }}>    Horozluhan, 42120 <br />    Selçuklu/Konya</p> </Col>
                    </Col>




                    <Col xs={0} md={0} lg={3} id='colVidee'> </Col>

                </Row>







                <Row id='row2'>
                    <hr id='hr' className='mt-5' />
                    <div style={{paddingTop:"10px",paddingBottom:"10px"}} >
                        <p >Copyright 2024 | Şehir Teknolojileri Merkezi</p>
                        <div>
                            <CiFacebook className='socialMedia' />
                            <RiTwitterXFill className='socialMedia' />
                            <RxInstagramLogo className='socialMedia' />
                        </div>
                    </div>

                </Row>

            </Container>

        </div>
    )
}
MainFooter.propTypes = {

    visibility: PropTypes.string
}

export default MainFooter
