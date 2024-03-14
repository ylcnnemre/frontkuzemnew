
import FontHead from "../../components/fontHead/FontHead";
import MainNavbar from "../../components/navbar/MainNavbar";
import "./index.scss"
import { useTranslation } from "react-i18next"
import is from "../../../assets/images/is.png"
import MainFooter from "../../components/mainFooter/MainFooter";

const GuncelDetay = () => {
    const { t } = useTranslation();

    return (
        <div>
            <MainNavbar />
            <FontHead page={`${t("gdetay0")}`}></FontHead>
            <div >
                <div className="Container003 my-4 ">
                    <img src={is} alt="" id="imgg" />
                    <div className="guncel_detay_content"  >
                        <h3 > {t("gdetay")} </h3>
                        <p>
                            {t("gdetay2")}
                        </p>
                    </div>

                </div>
            </div>

            <MainFooter visibility={'hidden'} ></MainFooter>
        </div>
    )
}

export default GuncelDetay
