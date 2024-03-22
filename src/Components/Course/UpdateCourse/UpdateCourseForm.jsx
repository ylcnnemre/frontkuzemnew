import React, { useContext, useEffect, useState } from 'react'
import { deleteCourseApi, deleteCourseSendEmailApi, getDetailCourseApi } from '../../../api/Course'

import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { PropagateLoader } from 'react-spinners'
import EditCourseInfo from './EditCourseInfo'
import EditCoursePhoto from './EditCoursePhoto'
import EditCourseDocumentTab from './EditCourseDocumentTab'
import EditCourseStudentTab from './EditCourseStudentTab'
import { UserContext } from '../../../context/user'
import EditCourseProgram from './EditCourseProgram'
import EditCourseAnnouncement from './EditCourseAnnouncement'
import { LuTimer } from 'react-icons/lu'


const UpdateCourseForm = () => {

    const [photoList, setPhotoList] = useState([])
    const [documentList, setDocumentList] = useState([])
    const [mainData, setMainData] = useState()
    const [scheduleList, setScheduleList] = useState([])
    const { id } = useParams()
    const [activeTab, setActiveTab] = useState(1);
    const navigate = useNavigate()
    const [announcementModal, setAnnouncementModal] = useState(false)
    const navigation = useNavigate()
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showDeleteConfirmSection, setShowDeleteConfirmSection] = useState(false)
    const [verificationCode, setVerificationCode] = useState("")
    const [disableButtonControl, setDisableButtonControl] = useState({
        modalButtonDisable: false,
        deleteButtonDisable: true
    })


    const [state, dispatch] = useContext(UserContext)

    console.log("state =>", state)

    const detailCourseApiRequest = async () => {
        try {
            const response = await getDetailCourseApi(id ?? "")

            setMainData(response.data)
            setPhotoList(response.data.files.filter(el => el.type == "photo"))
            setDocumentList(response.data.files.filter(el => el.type == "document"))
            setScheduleList(response.data.schedules)
        }
        catch (err) {
            navigation("/panel/kurs")
            toast.error(err.response?.data.message, {
                autoClose: 1500
            })
        }

    }

    useEffect(() => {
        detailCourseApiRequest()
    }, [])

   


    
    const deleteCourse = async () => {
        try {
            await deleteCourseApi({ confirmCode: parseInt(verificationCode), courseId: id })
            toast.success("Kurs Silindi", {
                autoClose: 1500
            })
            const sleep = () => {
                return new Promise((resolve) => {
                    setTimeout(resolve, 2000)
                })
            }
            sleep()

            navigate("/kurs")

        }
        catch (err) {
            toast.error(err.response.data.message, {
                autoClose: 1500
            })
        }
    }


    if (!mainData) {
        return (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }} >
                <PropagateLoader color="#36d7b7" />
            </div>
        )
    }

    return (
        <>
            <>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={`${activeTab == 1 && "active"}`}
                            onClick={() => {
                                setActiveTab(1)
                            }}
                        >
                            Bilgiler
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={`${activeTab == 2 && "active"}`}
                            onClick={() => {
                                setActiveTab(2)
                            }}
                        >
                            Fotoğraflar
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={`${activeTab == 3 && "active"}`}
                            onClick={() => {
                                setActiveTab(3)
                            }}
                        >
                            Dökümanlar
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={`${activeTab == 4 && "active"}`}
                            onClick={() => {
                                setActiveTab(4)
                            }}
                        >
                            Öğrenciler
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={`${activeTab == 5 && "active"}`}
                            onClick={() => {
                                setActiveTab(5)
                            }}
                        >
                            Kurs Programı
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={`${activeTab == 6 && "active"}`}
                            onClick={() => {
                                setActiveTab(6)
                            }}
                        >
                            Duyurular
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={`${activeTab == 7 && "active"}`}
                            onClick={() => {
                                setActiveTab(7)
                            }}
                        >
                            İşlemler
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab} style={{ paddingTop: "20px" }} className="tab_content" >
                    <TabPane tabId={1}>
                        <EditCourseInfo data={mainData} />
                    </TabPane>
                    <TabPane tabId={2}>
                        <EditCoursePhoto photoList={photoList} setPhotoList={setPhotoList} />
                    </TabPane>
                    <TabPane tabId={3}>
                        <EditCourseDocumentTab documentList={documentList} setDocumentList={setDocumentList} />
                    </TabPane>
                    <TabPane tabId={4}>
                        <EditCourseStudentTab userList={mainData} setUserList={setMainData} />
                    </TabPane>
                    <TabPane tabId={5}>
                        <EditCourseProgram programList={scheduleList} setProgramList={setScheduleList} />
                    </TabPane>
                    <TabPane tabId={6}   >
                        <EditCourseAnnouncement data={mainData} setData={setMainData} />
                    </TabPane>
                    <TabPane tabId={7}   >
                    
                    </TabPane>
                    {/* <TabPane tabId={2}>
                        <EditCoursePhoto photoList={photoList} setPhotoList={setPhotoList} />
                    </TabPane>
                    <TabPane tabId={3}>
                        <EditCourseDocumentTab documentList={documentList} setDocumentList={setDocumentList} />
                    </TabPane>
                    <TabPane tabId={4}>
                        <EditCourseStudentTab userList={mainData} setUserList={setMainData} />
                    </TabPane>
                    <TabPane tabId={5}>
                        <EditCourseProgram programList={scheduleList} setProgramList={setScheduleList} />
                    </TabPane>
                    <TabPane tabId={6}   >
                        <EditCourseAnnouncement data={mainData} setData={setMainData} />
                    </TabPane>
                    <TabPane tabId={7}   >
                        <Row>
                            <Col lg={6}>
                                <div className="delete_course_container">
                                    <Button disabled={disableButtonControl.modalButtonDisable} color="danger" className="delete_course_btn" onClick={() => {
                                        setShowDeleteModal(true)
                                    }} >
                                        Kursu sil
                                    </Button>
                                    {
                                        showDeleteConfirmSection && (
                                            <div className="delete_course_confirm">
                                                <div className="timer_container">
                                                    <h6>
                                                        Kursu silmek için mailinize gönderilen onay kodunu giriniz
                                                    </h6>
                                                    <div className="timer_element">
                                                        <LuTimer className="timer_icon" />
                                                        <p style={{ fontWeight: "bold", fontSize: "1rem" }}>
                                                            {countdown.minutes} : {countdown.seconds}
                                                        </p>

                                                    </div>
                                                </div>
                                                <div className="verification_input_container" >
                                                    <VerificationInput validChars='0-9' autoFocus={true} classNames={{
                                                        character: "character_field",
                                                    }} onChange={(e) => {
                                                        setVerificationCode(e)
                                                        if (e.length == 6) {
                                                            setDisableButtonControl({
                                                                ...disableButtonControl,
                                                                deleteButtonDisable: false
                                                            })
                                                        } else {
                                                            setDisableButtonControl({
                                                                ...disableButtonControl,
                                                                deleteButtonDisable: true
                                                            })
                                                        }
                                                    }} />
                                                </div>

                                                <div className="delete_course_confirm_container">
                                                    <Button disabled={disableButtonControl.deleteButtonDisable} className="delete_course_confirm_button" color="danger" onClick={async () => {
                                                        deleteCourse()
                                                    }} >
                                                        Onaylıyorum
                                                    </Button>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>

                            </Col>
                            <Col lg={4}>

                            </Col>
                        </Row>
                    </TabPane> */}
                </TabContent>

                <Modal isOpen={showDeleteModal}>
                    <ModalHeader>
                        Onay Menüsü
                    </ModalHeader>
                    <ModalBody>
                        Bu kursu silmek istediğinizden emin misiniz ?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={async () => {
                            try {
                                await deleteCourseSendEmailApi(id)
                          
                                setShowDeleteConfirmSection(true)
                                setShowDeleteModal(false)
                                setDisableButtonControl({
                                    ...disableButtonControl,
                                    modalButtonDisable: true
                                })
                            }
                            catch (err) {
                                setShowDeleteModal(false)
                                toast.error(err.message, {
                                    autoClose: 1000
                                })
                            }

                        }}


                        >
                            Onayla
                        </Button>
                        <Button color="primary" onClick={() => {
                            setShowDeleteModal(false)
                        }} >
                            İptal
                        </Button>

                    </ModalFooter>
                </Modal>
            </>
        </>
    )
}

export default UpdateCourseForm