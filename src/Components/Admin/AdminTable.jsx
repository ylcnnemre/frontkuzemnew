import React, { useEffect, useState } from 'react'
import { GetAdminListApi, getUserListApi } from '../../api/UserApi';
import { Button, Card, Col, Input, Row } from 'reactstrap';
import { MdModeEdit } from 'react-icons/md';
import DataTable from 'react-data-table-component';
import PageLoader from '../Common/PageLoader';
import { useNavigate } from 'react-router-dom';

const AdminTable = () => {
    const { data, isLoading } = GetAdminListApi()
    const [adminList, setAdminList] = useState([])
    const navigate = useNavigate()

    const [searchTerm, setSearchTerm] = useState("");
    const columns = [
        {
            name: "Adı",
            selector: (row) => <span> {row?.firstName} </span>,
        },
        {
            name: "Soyadı",
            selector: (row) => <span> {row?.lastName} </span>,
        },
        {
            name: "Email",
            selector: (row) => <span> {row?.email} </span>,
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
                            navigate(`/panel/admin/duzenle/${row.id}`)
                        }} >
                            <MdModeEdit />
                        </Button>
                    </div>

                )
            }
        },
    ];

    const getAdminList = async () => {
        try {
            const response = await getUserListApi({
                page: 0,
                pageSize: 10,
                roleId: 1
            })
            setAdminList(response.data.items)
        }
        catch (err) {

        }
    }

    useEffect(() => {
        getAdminList()
    }, [])


    const filteredData = adminList?.filter((item) => {
        const lowercaseSearchTerm = searchTerm.toLowerCase();
        return item?.firstName.toLowerCase().includes(lowercaseSearchTerm);
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

        </>
    )
}

export default AdminTable