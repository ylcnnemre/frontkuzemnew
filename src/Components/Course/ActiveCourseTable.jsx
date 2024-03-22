import React, { useEffect, useMemo, useState } from 'react'
import { CourseAdminListGetAll, addCourseAdministrators, getAllCourseByStatusApi } from '../../api/Course'
import { toast } from 'react-toastify'
import { Button, Card, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'
import { getUserListApi } from '../../api/UserApi'


const ActiveCourseTable = () => {
    const [courseData, setCourseData] = useState([])
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false)
    const [TeacherList, setTeacherList] = useState([])
   
    const [selectTeacherModal, setSelectTeacherModal] = useState({
        courseId: "",
        show: false,
        teacher: null
    })
    const [selectedTeacher, setSelectedTeacher] = useState()
    const getCourseList = async () => {
        try {
            setLoading(true)
            const response = await getAllCourseByStatusApi({
                page: 0,
                pageSize: 10
            })
            console.log("resp =>", response)
            setCourseData(response.data.items)
        }
        catch (err) {
            toast.error(err.response.data.message, {
                autoClose: 1500
            })
        }
        finally {
            setLoading(false)
        }
    }

    const getTeacherList = async () => {
        try {
            const response = await getUserListApi({
                page: 0,
                pageSize: 10,
                roleId: 2
            })
            setTeacherList(response.data.items)
        }
        catch (err) {

        }

    }


    useEffect(() => {
        getCourseList()
        getTeacherList()
    }, [])


    const columns = [
        {
            name: "İsim",
            selector: (row) => <span  > {row?.name} </span>,
        },
        {
            name: "Kontenjan",
            selector: (row) => <span style={{ textTransform: "capitalize" }}> {row?.limit} </span>,
        },
        {
            name: "Açıklama",
            selector: (row) => <span> {row?.description.substring(0, 20) + "..."} </span>,
        },
        {
            name: "Dönem",
            selector: (row) => <span> {row?.semester}</span>,
        },
        {
            name: "Format",
            selector: (row) => <span>{row.type}</span>
        },
        {
            name: "Düzenle",
            selector: (row) => {
                console.log("row =>", row)
                return (
                    <div className="d-flex gap-2">
                        <Button color="warning" onClick={() => {
                            navigate(`/panel/kurs/${row.id}`)
                        }}  >
                            İncele
                        </Button>

                    </div>

                )
            }
        },
    ];

    const filteredData = useMemo(() => {

        return courseData?.filter((item) => {
            const lowercaseSearchTerm = searchTerm.toLowerCase();
            return item?.name.toLowerCase().includes(lowercaseSearchTerm);
        });

    }, [courseData, searchTerm])

    return (
        <>
            <Modal isOpen={selectTeacherModal.show} >
                <ModalHeader>
                    Eğitmen Seç
                </ModalHeader>
                <ModalBody>
                    <div className="mb-3">
                        <Label htmlFor="emailInput" className="form-label">
                            Eğitmen
                        </Label>
                        <select className='form-control' defaultValue={selectTeacherModal?.teacher?.id} onChange={(e) => {
                            setSelectedTeacher(e.target.value)
                        }}   >
                            <option value=""   >
                                Eğitmen Seçiniz
                            </option>
                            {
                                TeacherList.map(el => {
                                    return (
                                        <option value={el.id}>
                                            {el.firstName} {el.lastName}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={async () => {
                        try {
                            const response = await addCourseAdministrators({
                                userId: selectedTeacher,
                                courseId: selectTeacherModal.courseId
                            })
                            toast.success("eğitmen kayıt edildi", {
                                autoClose: 1000
                            })
                            setSelectTeacherModal({
                                courseId: "",
                                show: false
                            })
                        }
                        catch (err) {
                            toast.error("bir hata oluştu", {
                                autoClose: 1000
                            })
                        }
                    }} >
                        Kaydet
                    </Button>
                    <Button className='btn btn-danger' onClick={() => {
                        setSelectTeacherModal({
                            show: false,
                            courseId: ""
                        })
                    }} >
                        İptal
                    </Button>
                </ModalFooter>
            </Modal>
            <Row className="mb-2">
                <Col lg={2}>
                    <Button color="primary" onClick={() => {
                        navigate("/panel/kurs/ekle")
                    }}>
                        Kurs Ekle
                    </Button>
                </Col>
                <Col lg={2}>
                    <Input
                        width={"%50"}
                        type="text"
                        placeholder="Arama yap..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Col>
            </Row>

            <DataTable
                data={filteredData}
                columns={columns}
                pagination

                noDataComponent={
                    <Card className="w-100 p-5">
                        <center>
                            <h2>Herhangi bir veri bulunamadı.</h2>
                        </center>
                    </Card>
                }
                paginationComponentOptions={{
                    rowsPerPageText: "Satır Sayısı",
                    rangeSeparatorText: "-",
                    noRowsPerPage: true
                }}
            />
        </>
    )
}

export default ActiveCourseTable