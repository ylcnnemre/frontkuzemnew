import React, { useMemo, useState } from 'react'
import DataTable from 'react-data-table-component';
import { MdModeEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Input, Row } from 'reactstrap';

const EditCourseStudentTab = ({ userList, setUserList }) => {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("");
    const columns = [
        {
            name: "#",
            width : "80px",
            selector: (row) => {
                return (
                    <img style={{height:"40px",width:"40px",borderRadius:"50%"}} src={`${process.env.REACT_APP_BASEURL}${row.profileImg.path}`} alt="" />
                )
            }
        },
        {
            name: "İsim",
            selector: (row) => <span> {row?.name} </span>,
        },
        {
            name: "Dönem",
            selector: (row) => <span style={{ textTransform: "capitalize" }}> {row?.surname} </span>,
        },
        {
            name: "Email",
            selector: (row) => <span style={{ textTransform: "capitalize" }}> {row?.email} </span>,
        },
        {
            name: "Tc No",
            selector: (row) => <span style={{ textTransform: "capitalize" }}> {row?.tcNo} </span>,
        },
        {
            name: "Telefon",
            selector: (row) => <span style={{ textTransform: "capitalize" }}> {row?.phone} </span>,
        },
        {
            name: "Düzenle",
            selector: (row) => {
                console.log("row =>", row)
                return (

                    <div className="d-flex gap-2">
                        <Button color="warning" onClick={() => {
                            navigate(`/panel/ogrenci/duzenle/${row._id}`)
                        }}  >
                            <MdModeEdit />
                        </Button>
                    </div>

                )
            }
        },
    ];
    console.log("userList =>", userList)
    const userData = useMemo(() => {
        if (userList) {
            return userList.joinUserList?.filter(item => item != null || item != undefined) ?? []
        }
        return []
    }, [userList.joinUserList])

    const filteredData = userData?.filter((item) => {
        const lowercaseSearchTerm = searchTerm.toLowerCase();
        return item?.name.toLowerCase().includes(lowercaseSearchTerm);
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

export default EditCourseStudentTab