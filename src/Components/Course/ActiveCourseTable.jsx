import React, { useEffect, useMemo, useState } from 'react'
import { getAllCourseByStatusApi } from '../../api/Course'
import { toast } from 'react-toastify'
import { Button, Card, Col, Input, Row } from 'reactstrap'
import { BsTrash } from 'react-icons/bs'
import { MdModeEdit } from 'react-icons/md'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'

const ActiveCourseTable = () => {
    const [courseData, setCourseData] = useState([])
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false)
    const getCourseList = async () => {
        try {
            setLoading(true)
            const testList = []
            const response = await getAllCourseByStatusApi("aktif")
            console.log("resp =>", response)
            setCourseData(response.data)
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

    useEffect(() => {
        getCourseList()
    }, [])


    const columns = [
        {
            name: "İsim",
            selector: (row) => <span  > {row?.title} </span>,
        },
        {
            name: "Branş",
            selector: (row) => <span> {row.branch.name}  </span>
        },
        {
            name: "Dönem",
            selector: (row) => <span style={{ textTransform: "capitalize" }}> {row?.semester.period} </span>,
        },
        {
            name: "Açıklama",
            selector: (row) => <span> {row?.description.substring(0, 20) + "..."} </span>,
        },
        {
            name: "Eğitmen",
            selector: (row) => <span> {row?.teacher.name}  {row.teacher.surname}  </span>,
        },
        {
            name: "Düzenle",
            selector: (row) => {
                console.log("row =>", row)
                return (

                    <div className="d-flex gap-2">
                        <Button color="warning" onClick={() => {
                            /* setSelectedId(row._id)
                            setEditMode(true)
                            setShowModal(true) */
                            navigate(`/panel/kurs/${row._id}`)
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
            return item?.title.toLowerCase().includes(lowercaseSearchTerm);
        });

    }, [courseData, searchTerm])

    return (
        <>
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