
import "./index.scss"
import { useTranslation } from "react-i18next"
import zz from "../../../assets/images/zz.png"
import MainNavbar from "../../components/navbar/MainNavbar";
import FontHead from "../../components/fontHead/FontHead";
import MainFooter from "../../components/mainFooter/MainFooter";


const BlogDetay = () => {

    const { t } = useTranslation();
    return (
        <div>
            <MainNavbar />
            <FontHead page={`${t("bdetay")}`}></FontHead>
            <div >
                <div className="Container003 my-4 ">
                    <img src={zz} alt="" id="imgg" />
                    <div>
                        <div style={{ display: "flex", justifyContent: "center" }} className="my-3"> <h1> {t("bdetay2")}</h1></div>

                        <div className="blog_detail_desc" >
                            <h4>{t("bdetay1")} </h4>
                            <p>{t("bdetay3")}
                            </p>
                        </div>
                        <div className="blog_detail_desc">
                            <h4>{t("bdetay4")}</h4>
                            <p>
                                {t("bdetay5")}
                            </p>
                        </div>

                        <div className="blog_detail_desc">
                            <h4>{t("bdetay6")}</h4>

                            <p>
                                {t("bdetay7")}
                            </p>
                        </div>
                        <div className="blog_detail_desc">
                            <h4>{t("bdetay8")}  </h4>
                            <p>
                                {t("bdetay9")}
                            </p>
                        </div>
                        <div className="blog_detail_desc">
                            <h4>  {t("bdetay10")}</h4>
                            <p>  {t("bdetay11")} </p>
                        </div>
                        <div className="blog_detail_desc">
                            <h4>{t("bdetay12")} </h4>
                            <p>
                                {t("bdetay13")}
                            </p>
                        </div>
                    </div>

                </div>
            </div>



            <MainFooter visibility={'hidden'} ></MainFooter>
        </div>
    )
}

export default BlogDetay
