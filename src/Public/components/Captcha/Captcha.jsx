
import { useTranslation } from "react-i18next"

import React, { useState } from "react";
import "./index.scss";
import { Button, Input } from "reactstrap";

export const Captcha = () => {
    const { t } = useTranslation();



    const randomString = Math.random().toString(36).slice(8);
    const [captcha, setCaptcha] = useState(randomString);
    const [text, setText] = useState("");
    const [valid, setValid] = useState(false);
    const [success, setSuccess] = useState(false);

    const refreshString = () => {
        setText("");
        setCaptcha(Math.random().toString(36).slice(8));
    };

    const matchCaptcha = (event) => {
        event.preventDefault();
        if (text === captcha) {
            setValid(false);
            setSuccess(true);
        } else {
            setValid(true);
            setSuccess(false);
        }
    };

    return (
        <React.Fragment  >
            {/* {success && (
                <Alert variant="outlined" sx={{ marginBottom: "20px" }}>
                    Successful
                </Alert>
            )} */}
            <div className="cardxyz" >

                <div className="code_section" >
                    <div className="h3" style={{ color: 'white', backgroundColor: 'black', padding: '5px 15px', borderRadius: '5px',marginRight:"20px" }}>{captcha} </div>
                    <Button id="primaryButton2"

                        onClick={() => refreshString()}
                    >  {t('refresh')}</Button>
                </div>



                <form onSubmit={matchCaptcha}>
                    <Input
                        className="captcha_text_input"
                        label=""
                        focused
                        value={text}
                        fullWidth
                        placeholder="Kod"
                        onChange={(e) => setText(e.target.value)}

                    />

                    <p id="kvk">
                        {t("text10")}
                        <a href=""> {t("text11")}</a>
                        {t("text12")}


                    </p>

                    <Button
                        id="primaryButton"
                        color="success"
                        type="submit"
                        disabled={
                            text === captcha ? false : true
                        }
                    >
                        {t("send")}
                    </Button>


                </form>

            </div>
        </React.Fragment>
    );
};