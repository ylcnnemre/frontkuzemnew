
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.scss'
import { useTranslation } from "react-i18next";
import MyNavbar from '../../components/navbar/MyNavbar';
import FontHead from '../../components/fontHead/FontHead';
import MainFooter from '../../components/mainFooter/MainFooter';
import MainNavbar from '../../components/navbar/MainNavbar';
import basgan from "../../../assets/images/basgan.png"

const Kurumsal = () => {
    const { t } = useTranslation();
    return (
        <div>
            <MainNavbar />
            <FontHead page={`${t("kurumsal")}`}></FontHead>
            <Container className="pt-5 pb-5 mb-5">
                <h4 id="title">{t("kurumsal1")}</h4>
                <p id="text">
                    {t("kurumsal2")}<br /> <br />

                    {t("kurumsal3")} <br />
                    {t("kurumsal4")} <br />
                    {t("kurumsal5")}  <br /> <br />

                    {t("kurumsal6")}  <br />
                    {t("kurumsal7")}  <br /> <br />

                    {t("kurumsal8")}
                </p>


                <Container className="pt-5">
                    <Row>
                        <Col xs={6} md={3} style={{ paddingLeft: '0' }}>
                            <img src={basgan} alt="" id='img' />

                        </Col>

                        <Col xs={12} md={9}>
                            <h4 id="title">{t("kurumsal9")}</h4>
                            <p id="text">

                                {t("kurumsal10")}<br />
                                {t("kurumsal11")} <br />
                                {t("kurumsal12")}  <br />
                                {t("kurumsal13")}  <br />
                                {t("kurumsal14")}   <br />
                                {t("kurumsal15")}  <br />
                                {t("kurumsal16")} <br />
                                {t("kurumsal17")} <br />
                                {t("kurumsal18")}   <br />
                                {t("kurumsal19")}  <br />
                                {t("kurumsal20")}  <br />
                                {t("kurumsal21")} <br />
                                {t("kurumsal22")}   <br />
                            </p>
                        </Col>
                        <div style={{ display: 'flex', justifyContent: 'end', paddingRight: '5%' }}>

                            <p id="text" >Uğur İbrahim Altay </p>

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'end' }}>

                            <p id="text" >{t("kurumsal23")}</p>
                        </div>


                    </Row>

                </Container>



            </Container>



            <MainFooter visibility={'hidden'}></MainFooter>
        </div>
    )
}

export default Kurumsal
