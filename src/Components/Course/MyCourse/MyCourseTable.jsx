import React, { useMemo, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Input, Row } from 'reactstrap';

const MyCourseTable = ({ userData }) => {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("");
    console.log("userData =>", userData)
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

    const tableData = useMemo(() => {
        return userData?.courses.filter(el => el != null) ?? []
    }, [userData])

    const filteredData = tableData?.filter((item) => {
        const lowercaseSearchTerm = searchTerm.toLowerCase();
        return item?.title.toLowerCase().includes(lowercaseSearchTerm);
    });


    return (
        <>
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