import React, { useMemo, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { createCourseDatesApi } from '../../../api/bbb';
import { DatePicker } from 'antd';
import moment from 'moment';
import "./index.scss"
const MyCourseTable = ({ userData }) => {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("");
    const [createCourseDateModal, setCreateCourseDateModal] = useState({
        courseId: 0,
        show: false,
        duration: 0,
        startTime: ""
    })
    console.log("userData =>", userData)
    const columns = [
        {
            name: "İsim",
            selector: (row) => <span  > {row?.name} </span>,
        },
        {
            name: "Açıklama",
            selector: (row) => <span> {row.description}  </span>
        },
        {
            name: "Kontenjan",
            selector: (row) => <span style={{ textTransform: "capitalize" }}> {row?.limit} </span>,
        },
        {
            name: "Düzenle",
            selector: (row) => {
                console.log("row =>", row)
                return (
                    <div className="d-flex gap-2">
                        <Button color="warning" onClick={() => {
                            setCreateCourseDateModal({
                                courseId: row.id,
                                duration: 0,
                                show: true,
                                startTime: ""
                            })
                        }}  >
                            İncele
                        </Button>
                    </div>

                )
            }
        },
    ];

    /*  const tableData = useMemo(() => {
         return userData?.courses.filter(el => el != null) ?? []
     }, [userData]) */

    const filteredData = userData?.filter((item) => {
        const lowercaseSearchTerm = searchTerm.toLowerCase();
        return item?.name.toLowerCase().includes(lowercaseSearchTerm);
    });

    const createCourse = async () => {
        try {

            const response = await createCourseDatesApi({
                courseId: createCourseDateModal.courseId,
                duration: createCourseDateModal.duration,
                startTime: new Date().toUTCString()
            })
            console.log("respone => ", response)
        }
        catch (err) {

        }
    }

    return (
        <>
            <Modal isOpen={createCourseDateModal.show} >
                <ModalHeader>
                    Canlı Kurs Kaydı Oluştur
                </ModalHeader>
                <ModalBody>
                    <div className='course_date_time' > 
                        <Label>
                            Başlangıç Zamanı
                        </Label>
                        <DatePicker showTime allowClear={false}  onChange={(e) => {
                            console.log("ee => ", e.toISOString() )
                            const utcDate = moment.utc(e).format(); // Tarihi UTC formatına dönüştürme
                            console.log("UTC Tarih =", utcDate);
                        }} />
                    </div>
                    <Label htmlFor="phonenumberInput" className="form-label">
                        Süre
                    </Label>
                    <Input
                        name="birthDate"

                        type="number"
                        placeholde1r="Süre"
                        onChange={(e) => {
                            setCreateCourseDateModal({
                                ...createCourseDateModal,
                                duration: e.target.value
                            })
                        }}
                    />

                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => {
                        createCourse()
                    }} >
                        Onayla
                    </Button>
                    <Button className="btn btn-danger" onClick={() => {
                        setCreateCourseDateModal({
                            courseId: "",
                            duration: 0,
                            show: false,
                            startTime: ""
                        })
                    }} >
                        İptal
                    </Button>
                </ModalFooter>
            </Modal>


            <Row className="mb-2">
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

export default MyCourseTable