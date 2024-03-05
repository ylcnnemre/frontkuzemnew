import React, { useEffect, useState, useContext } from "react";
import {
    Card,
    CardBody,
    Col,
    Container,
    Input,
    Label,
    Row,
    Button,
    Form,
    FormFeedback,
    Alert,
    Spinner,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import withRouter from "../../Components/Common/withRouter";
import * as Yup from "yup";
import { useFormik } from "formik";
import { UserContext } from "../../context/user";
/* import { loginJWT } from "../../api/user"; */

import AuthSlider from "../AuthenticationInner/AuthSlider";
import { toast } from "react-toastify";
import { loginApi } from "../../api/UserApi";

const Login = (props) => {
    const navigate = useNavigate();

    const [state, dispatch] = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [userLogin, setUserLogin] = useState([]);
    const [passwordShow, setPasswordShow] = useState(false);

    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: userLogin.email || "",
            password: userLogin.password || "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email boş olamaz."),
            password: Yup.string().required("Şifre boş olamaz."),
        }),
        onSubmit: async (values) => {
            setIsLoading(true);
            try {
                const response = await loginApi(values);
                if (response?.status == 200 || response?.status == 201) {
                    setIsLoading(false);
                    dispatch({ type: "LOGIN", payload: response.data });
                    navigate("/panel/anasayfa");
                } else {
                    toast.error("Error");
                }
            } catch (error) {
                toast.error("Error");
                console.log("dsadsa" + error);
                setIsLoading(false);
            } finally {
                setIsLoading(false);
            }
        },
    });

    document.title = "Giriş Yap | Sporcu Analiz";
    return (
        <React.Fragment>
            <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
                <div className="bg-overlay"></div>
                <div className="auth-page-content overflow-hidden pt-lg-5">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Card className="overflow-hidden">
                                    <Row className="g-0">
                                        <AuthSlider />

                                        <Col lg={6}>
                                            <div className="p-lg-5 p-4 mt-lg-5 mb-lg-5">
                                                <div className="text-center mt-2">
                                                    <h5 className="text-primary">Hoş Geldiniz !</h5>
                                                    <p className="text-muted">
                                                        Devam etmek için giriş yapın.
                                                    </p>
                                                </div>

                                                <div className="p-2 mt-4">
                                                    <Form
                                                        onSubmit={(e) => {
                                                            e.preventDefault();
                                                            validation.handleSubmit();
                                                            return false;
                                                        }}
                                                        action="#"
                                                    >
                                                        <div className="mb-3">
                                                            <Label
                                                                htmlFor="email"
                                                                className="form-label"
                                                            >
                                                                Kullanıcı adı
                                                            </Label>
                                                            <Input
                                                                name="email"
                                                                className="form-control"
                                                                placeholder="Kullanıcı adınızı giriniz"
                                                                type="email"
                                                                onChange={validation.handleChange}
                                                                onBlur={validation.handleBlur}
                                                                value={
                                                                    validation.values.email || ""
                                                                }
                                                                invalid={
                                                                    validation.touched.email &&
                                                                        validation.errors.email
                                                                        ? true
                                                                        : false
                                                                }
                                                            />
                                                            {validation.touched.email &&
                                                                validation.errors.email ? (
                                                                <FormFeedback type="invalid">
                                                                    {validation.errors.email}
                                                                </FormFeedback>
                                                            ) : null}
                                                        </div>

                                                        <div className="mb-3">
                                                            {/* <div className="float-end">
                                                                <Link to="/forgot-password" className="text-muted">Forgot password?</Link>
                                                            </div> */}
                                                            <Label
                                                                className="form-label"
                                                                htmlFor="password-input"
                                                            >
                                                                Parola
                                                            </Label>
                                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                                                <Input
                                                                    name="password"
                                                                    value={
                                                                        validation.values
                                                                            .password || ""
                                                                    }
                                                                    type={
                                                                        passwordShow
                                                                            ? "text"
                                                                            : "password"
                                                                    }
                                                                    className="form-control pe-5"
                                                                    placeholder="Parolanızı giriniz"
                                                                    onChange={
                                                                        validation.handleChange
                                                                    }
                                                                    onBlur={validation.handleBlur}
                                                                    invalid={
                                                                        validation.touched
                                                                            .password &&
                                                                            validation.errors.password
                                                                            ? true
                                                                            : false
                                                                    }
                                                                />
                                                                {validation.touched.password &&
                                                                    validation.errors.password ? (
                                                                    <FormFeedback type="invalid">
                                                                        {validation.errors.password}
                                                                    </FormFeedback>
                                                                ) : null}
                                                                <button
                                                                    className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                                                                    type="button"
                                                                    id="password-addon"
                                                                    onClick={() =>
                                                                        setPasswordShow(
                                                                            !passwordShow
                                                                        )
                                                                    }
                                                                >
                                                                    <i className="ri-eye-fill align-middle"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* 
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                                                <Label className="form-check-label" htmlFor="auth-remember-check">Beni Hatırla</Label>
                                                            </div> */}

                                                        <div className="mt-4">
                                                            <Button
                                                                color="success"
                                                                className="btn btn-success w-100"
                                                                type="submit"
                                                            >
                                                                {isLoading ? (
                                                                    <Spinner size="sm"></Spinner>
                                                                ) : (
                                                                    <span>Giriş Yap</span>
                                                                )}
                                                            </Button>
                                                        </div>
                                                    </Form>
                                                </div>

                                                <div className="mt-4 text-center"></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <footer className="footer">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center">
                                    <p className="mb-0 text-muted">
                                        &copy; 2023 Şehir Teknolojileri Merkezi tarafından yapıldı.{" "}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        </React.Fragment>
    );
};

export default withRouter(Login);
