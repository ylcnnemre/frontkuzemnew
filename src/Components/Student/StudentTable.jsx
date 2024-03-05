import React, { useEffect, useState } from 'react'
import { getStudentListApi } from '../../api/UserApi'
import { toast } from 'react-toastify'
import { MdModeEdit } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'
import { Button, Card, Col, FormFeedback, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'

const StudentTable = () => {
  const [studentList, setStudentList] = useState([])
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("");
  const getUserDataList = async () => {
    try {
      const response = await getStudentListApi()
      setStudentList(response.data)
    }
    catch (err) {
      toast.error(err.response.data.message, {
        autoClose: 1000
      })
    }
  }

  useEffect(() => {
    getUserDataList()
  }, [])

  const columns = [
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
            <Button color='danger' style={{ marginLeft: "20px" }} >
              <BsTrash />
            </Button>
          </div>

        )
      }
    },
  ];


  const filteredData = studentList?.filter((item) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    return item?.name.toLowerCase().includes(lowercaseSearchTerm);
  });

  return (
    <>
      <Row className="mb-2">
        <Col lg={2}>
          <Button color="primary" onClick={() => {
            navigate("/panel/ogrenci/ekle")
          }}>
            Öğrenci Ekle
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

export default StudentTable