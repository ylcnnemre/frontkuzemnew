
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.scss'
import { useTranslation } from "react-i18next";
import MainNavbar from '../../components/navbar/MainNavbar';
import FontHead from '../../components/fontHead/FontHead';
import MainFooter from '../../components/mainFooter/MainFooter';
import CardBlog from '../../components/cardBlogGuncel/CardBlog';
import b1 from "../../../assets/images/b1.png"
import b2 from "../../../assets/images/b2.png"
import b3 from "../../../assets/images/b3.png"

const Blog = () => {

    const { t } = useTranslation();
    return (
        <div>
            <MainNavbar />
            <FontHead page={`${t("blog0")}`}></FontHead>
            <div style={{ height: '100px' }}></div>

            <Container>
                <Row>
                    <Col><CardBlog
                        title={`${t("blog2")}`}
                        content={`${t("blog3")}`}
                        date={'26.10.2023'}
                        img={b1}
                        page={"/blogdetay"}
                    ></CardBlog></Col>
                    <Col><CardBlog
                        title={`${t("blog4")}`}
                        content={`${t("blog5")}`}
                        date={'27.10.2023'}
                        img={b2}
                    ></CardBlog></Col>
                    <Col><CardBlog
                        title={`${t("blog6")}`}
                        content={`${t("blog7")}`}
                        date={'27.10.2023'}
                        img={b3}
                    ></CardBlog></Col>
                </Row>
            </Container>

            <div style={{ height: '500px' }}></div>


            <MainFooter visibility={'hidden'}></MainFooter>
        </div>
    )
}

export default Blog
