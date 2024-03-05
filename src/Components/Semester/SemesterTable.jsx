import React, { useEffect, useMemo, useState } from 'react'
import { BsTrash } from 'react-icons/bs';
import { MdMo, MdModeEdit } from 'react-icons/md';
import { Button, Card, Col, FormFeedback, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { getAllSemesterApi } from '../../api/SemesterApi';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import SemesterSaveModal from './SemesterSaveModal';

const SemesterTable = () => {
  const [semesterData, setSemesterData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");
  const [editMode, setEditMode] = useState(false)
  const [selectedId, setSelectedId] = useState()
  const [showModal, setShowModal] = useState(false)

  const getAllSemester = async () => {
    try {
      setLoading(true)
      const response = await getAllSemesterApi()
      console.log("r =A", response.data)
      setSemesterData(response.data)
    }
    catch (err) {
      toast.error(err.message, {
        autoClose: 1000
      })
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllSemester()
  }, [])

  const columns = [
    {
      name: "İsim",
      selector: (row) => <span> {row?.name} </span>,
    },
    {
      name: "Dönem",
      selector: (row) => <span style={{ textTransform: "capitalize" }}> {row?.period} </span>,
    },
    {
      name: "Yıl",
      selector: (row) => <span style={{ textTransform: "capitalize" }}> {row?.year} </span>,
    },
    {
      name: "Açıklama",
      selector: (row) => <span> {row?.description.substring(0, 20) + "..."} </span>,
    },
    {
      name: "Durum",
      selector: (row) => <span> {row.active ? "Aktif" : "Pasif"}  </span>
    },
    {
      name: "Düzenle",
      selector: (row) => {
        console.log("row =>", row)
        return (

          <div className="d-flex gap-2">
            <Button color="warning" onClick={() => {
              setSelectedId(row._id)
              setEditMode(true)
              setShowModal(true)
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

  const selectedSemesterData = useMemo(() => {
    return semesterData.find(el => el._id == selectedId)
  }, [selectedId, semesterData])

  const filteredData = semesterData?.filter((item) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    return item?.name.toLowerCase().includes(lowercaseSearchTerm);
  });
  return (
    <>
      <Row className="mb-2">
        <Col lg={2}>
          <Button color="primary" onClick={() => {
            setEditMode(false)
            setShowModal(true)
          }}>
            Dönem Ekle
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
      <SemesterSaveModal editMode={editMode} editData={selectedSemesterData} setSemesterData={setSemesterData} setShowModal={setShowModal} showModal={showModal} />
    </>
  )
}

export default SemesterTable