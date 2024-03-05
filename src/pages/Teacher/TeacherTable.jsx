import React, { useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row, Input, Button } from "reactstrap";
import DataTable from "react-data-table-component";
import PageLoader from "../../Components/Common/PageLoader";
import { GetTeacherListApi, getTeacherListApi } from "../../api/Teacher";
import { MdModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";



const Index = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { data, isLoading, revalidate } = GetTeacherListApi("teacher")
    const navigate = useNavigate()
    console.log("data =>", data)
    /* const updateCellStatu = async (param) => {
        try {
            const response = await patchOrganizationsId(
                { is_active: !param?.is_active },
                param?.id
            );
            revalidate();
        } catch (error) {
           
        }
    }; */

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
            name: "Cinsiyet",
            selector: (row) => (
                <span>
                    {row.gender}
                </span>
            ),
        },
        {
            name: "Branş",
            selector: (row) => (
                <span>
                    {row.branch.name}
                </span>
            ),
        },
        {
            name: "Düzenle",
            selector: (row) => {
                console.log("row =>",row)
                return (

                    <div className="d-flex gap-2">
                        <Button color="warning" onClick={()=>{
                            navigate(`/panel/egitmen/duzenle/${row._id}`)
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
        <React.Fragment>
            <Row className="mb-2">
                <Col lg={2}>
                    <Button color="primary" onClick={() => {
                        navigate("/panel/egitmen/ekle")
                    }}>
                        Eğitmen Ekle
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
        </React.Fragment>
    );
};


export default Index