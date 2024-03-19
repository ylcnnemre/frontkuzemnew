import React, { useEffect, useMemo, useState } from 'react'
import { addCourseAdministrators, getAllCourseByStatusApi } from '../../api/Course'
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
        show: false
    })
    const [selectedTeacher, setSelectedTeacher] = useState()
    const getCourseList = async () => {
        try {
            setLoading(true)
            const testList = []
            const response = await getAllCourseByStatusApi()
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
        const response = await getUserListApi({
            page: 0,
            pageSize: 10,
            roleId: 2
        })
        setTeacherList(response.data.items)
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
                            /*  setSelectedId(row._id)
                            setEditMode(true)
                            setShowModal(true) 
                            navigate(`/panel/kurs/${row._id}`) */
                        }}  >
                            İncele
                        </Button>
                        <Button onClick={() => {
                            setSelectTeacherModal({
                                courseId: row.id,
                                show: true
                            })
                        }} >
                            Yetkilendir
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
                            Cinsiyet
                        </Label>
                        <select className='form-control' onChange={(e) => {
                            setSelectedTeacher(e.target.value)
                        }}   >
                            <option value="">
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
                            console.log("response ==> ", response)
                        }
                        catch (err) {

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
                        /*  setEditMode(false)
                         setShowModal(true) */
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
                }}
            />
        </>
    )
}

export default ActiveCourseTable