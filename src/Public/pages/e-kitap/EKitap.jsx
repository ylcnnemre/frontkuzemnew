

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap"
import MainFooter from '../../components/mainFooter/MainFooter'
import "./index.scss"
import { useTranslation } from "react-i18next";
import MainNavbar from '../../components/navbar/MainNavbar';
import FontHead from '../../components/fontHead/FontHead';
import i1 from "../../../assets/images/i1.png"
import i2 from "../../../assets/images/i2.png"

const Ekitap = () => {
  const {t} = useTranslation();
  return (
    <div>
      <MainNavbar />
      <FontHead page={`${t("ekitap0")}`}></FontHead>
      <Container id="allConta" >
        <Row>
          <Col md={6}>
            <Container className="containerCard containerCard1">

              <Container className="contİnsideLeft" style={{ background: "#24d198" }}>        
                   <img src={i1} alt="" id="img" />
              </Container>
              
              <p style={{left:'9%'}} id="pLeft"> {t("ekitap")} </p>
              <div className="pt-5" id="divLeft"> <p className="title"> {t("ekitap2")} </p> </div>
            </Container>
          </Col>
          <Col md={6}>
            <Container className="containerCard containerCard2">
              <Container className="contİnsideRight" style={{ backgroundColor: "#00c1ff" }}>
                <img src={i2} alt="" id="img" />
              </Container>
              <p id="pRight" style={{right:'10%'}} > {t("ekitap3")} </p>
              <div className="pt-5" id="divRight"> <p className="title"> {t("ekitap4")} </p> </div>

            </Container>
          </Col>
        </Row>

        <Row style={{ marginTop: '1%' }}>
          <Col md={6}>
            <Container className="containerCard containerCard3">
              <Container className="contİnsideLeft" style={{ backgroundColor: "#ff6905" }}>
                <img src="../src/assets/images/i3.png" alt="" id="img" />
              </Container>
              <p  style={{left:'10%'}}  id="pLeft">  {t("ekitap5")}</p>
              <div className="pt-5" id="divLeft"> <p className="title"> {t("ekitap6")}</p> </div>

            </Container>
          </Col>
          <Col md={6}>
            <Container className="containerCard containerCard4">
              <Container className="contİnsideRight" style={{ backgroundColor: "#dc5348" }}>
                <img src="../src/assets/images/i4.png" alt="" id="img" />
              </Container>
              <p id="pRight" style={{right:'6%'}} >{t("ekitap7")}</p>
              <div className="pt-5" id="divRight"> <p className="title"> {t("ekitap8")}</p> </div>

            </Container>
          </Col>
        </Row>

        <Row style={{ marginTop: '1%' }}>
          <Col md={6}>
            <Container className="containerCard containerCard5">
              <Container className="contİnsideLeft" style={{ backgroundColor: "#7f56d9" }}>
                <img src="../src/assets/images/i5.png" alt="" id="img" />
              </Container>
              <p  style={{left:'7%'}}  id="pLeft">{t("ekitap9")}</p>
              <div className="pt-5" id="divLeft"> <p className="title">{t("ekitap10")}</p> </div>

            </Container>
          </Col>
          <Col md={6}>
            <Container className="containerCard containerCard6">
              <Container className="contİnsideRight" style={{ backgroundColor: "#3d5cff" }}>
                <img src="../src/assets/images/i6.png" alt="" id="img" />
              </Container>
              <p id="pRight" style={{right:'10%'}} >{t("ekitap11")}</p>
              <div className="pt-5" id="divRight"> <p className="title">{t("ekitap12")}</p> </div>

            </Container>
          </Col>
        </Row>



        <Col style={{ height: '150px' }} />
      </Container>
      <MainFooter  visibility={'hidden'} />
    </div>


  )
}

export default Ekitap