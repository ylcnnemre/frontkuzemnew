
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.scss'
import { useTranslation } from "react-i18next";
import MainNavbar from '../../components/navbar/MainNavbar';
import FontHead from '../../components/fontHead/FontHead';
import CardBlog from '../../components/cardBlogGuncel/CardBlog';
import MainFooter from '../../components/mainFooter/MainFooter';
import b1 from "../../../assets/images/b1.png"

const Guncel = () => {
    const { t } = useTranslation();
    return (
        <div>
            <MainNavbar />
            <FontHead page={`${t("guncel")}`}></FontHead>




            <Container>
                <Row style={{ paddingTop: '5%' }}>
                    <Col><CardBlog
                        title={`${t("guncel2")}`}
                        content={`${t("guncel3")}`}
                        date={'31.01.2024'}
                        img={b1}
                        page={"/gunceldetay"}
                    ></CardBlog></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>


            <div style={{ height: '450px' }}></div>


            <MainFooter visibility={'hidden'} />
        </div>
    )
}

export default Guncel
