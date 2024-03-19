import React, { useEffect, useMemo, useState } from 'react'
import { getDynamicUserSearchApi, getUserListApi } from '../../api/UserApi'
import { toast } from 'react-toastify'
import { MdModeEdit } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'
import { Button, Card, Col, FormFeedback, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'
import { PropagateLoader } from 'react-spinners'

const StudentTable = () => {
  const [studentList, setStudentList] = useState([])
  const [filterType, setFilterType] = useState("firstName")
  const [totalCount, setTotalCount] = useState(0)
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("");
  const getUserDataList = async (page) => {
    try {
      const response = await getUserListApi({
        page: page,
        pageSize: 10,
        roleId: 3
      })
      console.log("resp=> ", response)
      setStudentList(response.data.items)
      setTotalCount(response.data.count)
    }
    catch (err) {
      toast.error(err.response.data.message, {
        autoClose: 1000
      })
    }
  }

  useEffect(() => {
    getUserDataList(0)
  }, [])

  const columns = [
    {
      name: "İsim",
      selector: (row) => <span> {row?.firstName} </span>,
    },
    {
      name: "Soyisim",
      selector: (row) => <span style={{ textTransform: "capitalize" }}> {row?.lastName} </span>,
    },
    {
      name: "Email",
      selector: (row) => <span style={{ textTransform: "capitalize" }}> {row?.email} </span>,
    },
    {
      name: "Telefon",
      selector: (row) => <span style={{ textTransform: "capitalize" }}> {row?.phone} </span>,
    },
    {
      name: "Düzenle",
      selector: (row) => {
        return (

          <div className="d-flex gap-2">
            <Button color="warning" onClick={() => {
              navigate(`/panel/ogrenci/duzenle/${row.id}`)
            }}  >
              <MdModeEdit />
            </Button>

          </div>

        )
      }
    },
  ];


  const dynamicSearch = async (e) => {
    try {
      if (e !== "") {
        const body = {
          "sort": [
            {
              "field": "firstname",
              "dir": "asc"
            }
          ],
          "filter": {
            "field": filterType,
            "operator": "contains",
            "value": e,
          },
          "roleId": 4
        }

        const response = await getDynamicUserSearchApi(body, {
          page: 0,
          pageSize: 10
        }
        )
        const selected = response.data.items
        setStudentList(selected)
        setTotalCount(selected.length)
      }
      else{
        getUserDataList(0)
      }
    }
    catch (err) {

    }
  }



  if (false) {
    return (
      <div style={{ width: "100%", textAlign: "center", padding: "50px 0" }} >
        <PropagateLoader />
      </div>
    )
  }



  return (
    <>
      <Row className="mb-2">
        <Col lg={2}>
          <div className="mb-3">
            <select className='form-control' onChange={(e) => {
              setFilterType(e.target.value)
            }} >
              <option value="firstName">
                İsime göre ara
              </option>
              <option value="lastName">
                Soyisime göre ara
              </option>
              <option value="email">
                Emaile göre ara
              </option>
              <option value="phone">
                Telefona göre ara
              </option>
            </select>
          </div>
        </Col>
        <Col lg={2}>
          <Input
            width={"%50"}
            type="text"
            placeholder="Arama yap..."
            onChange={(e) => {
              dynamicSearch(e.target.value)
            }}
          />
        </Col>
        <Col lg={8}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button color="primary" onClick={() => {
              navigate("/panel/ogrenci/ekle")
            }}>
              Öğrenci Ekle
            </Button>
          </div>
        </Col>

      </Row>
      {/* {
        true && (
          <div style={{ width: "100%", textAlign: "center", padding: "50px 0" }} >
            <PropagateLoader />
          </div>
        )
      } */}
      <DataTable
        data={studentList}
        columns={columns}
        pagination
        paginationTotalRows={totalCount}
        paginationServer
        onChangePage={(e) => {
          getUserDataList(e - 1)
        }}
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
          noRowsPerPage: true
        }}
      />
    </>
  )
}

export default StudentTable