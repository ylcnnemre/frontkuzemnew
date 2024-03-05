import React, { useState } from 'react'
import { GetAdminListApi } from '../../api/UserApi';
import { Button, Card, Col, Input, Row } from 'reactstrap';
import { MdModeEdit } from 'react-icons/md';
import DataTable from 'react-data-table-component';
import PageLoader from '../Common/PageLoader';
import { useNavigate } from 'react-router-dom';

const AdminTable = () => {
    const { data, isLoading } = GetAdminListApi()
    const navigate = useNavigate()

    const [searchTerm, setSearchTerm] = useState("");
    const columns = [
        {
            name: "Adı",
            selector: (row) => <span> {row?.name} </span>,
        },
        {
            name: "Soyadı",
            selector: (row) => <span> {row?.surname} </span>,
        },
        {
            name: "Email",
            selector: (row) => <span> {row?.email} </span>,
        },

        {
            name: "Tc No",
            selector: (row) => (
                <span>
                    {row.tcNo}
                </span>
            ),
        },
        {
            name: "Telefon",
            selector: (row) => (
                <span>
                    {row.phone}
                </span>
            ),
        },
        {
            name: "Düzenle",
            selector: (row) => {
                console.log("row =>", row)
                return (

                    <div className="d-flex gap-2">
                        <Button color="warning" onClick={() => {
                              navigate(`/panel/admin/duzenle/${row._id}`)
                        }} >
                            <MdModeEdit />
                        </Button>
                    </div>

                )
            }
        },
    ];

    const filteredData = data?.filter((item) => {
        const lowercaseSearchTerm = searchTerm.toLowerCase();
        return item?.name.toLowerCase().includes(lowercaseSearchTerm);
    });

    return (
        <>
            <Row className="mb-2">
                <Col lg={2}>
                    <Button color="primary" onClick={() => {
                        navigate("/panel/admin/ekle")
                    }}>
                        Admin Ekle
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

            {isLoading && (
                <>
                    <PageLoader />
                </>
            )}
        </>
    )
}

export default AdminTable