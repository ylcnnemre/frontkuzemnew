import React, { useMemo, useState } from 'react'
import DataTable from 'react-data-table-component';
import { MdModeEdit } from 'react-icons/md';
import { Button, Card, Col, Input, Row } from 'reactstrap';

const EditCourseAnnouncement = ({ data, setData }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const columns = [
        {
            name: "İsim",
            selector: (row) => <span> {row?.title} </span>,
        },
        {
            name: "Açıklama",
            selector: (row) => <span> {row?.content} </span>,
        },
        {
            name: "Oluşturan",
            selector : (row) => <span> {row.createdBy.name} {row.createdBy.surname} </span>
        },
        {
            name: "Düzenle",
            selector: (row) => {
                console.log("row =>", row)
                return (

                    <div className="d-flex gap-2">
                        <Button color="warning" onClick={() => {

                        }}  >
                            <MdModeEdit />
                        </Button>

                    </div>

                )
            }
        },
    ];
    console.log("da =>", data)
    const tableData = useMemo(() => {
        return data.announcement
    }, [data])

    const filteredData = tableData.filter((item) => {
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

export default EditCourseAnnouncement