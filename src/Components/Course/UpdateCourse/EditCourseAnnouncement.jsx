import React, { useMemo, useState } from 'react'
import DataTable from 'react-data-table-component';
import { BsTrash } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { MdModeEdit } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Card, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { deleteAnnouncementApi } from '../../../api/Course';
import CourseAnnouncementModal from '../CourseAnnouncementModal';

const EditCourseAnnouncement = ({ data, setData }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [initialData, setInitialData] = useState()
    const [deleteModal, setDeleteModal] = useState(false)
    const [modalShow, setModalShow] = useState(false)
    const { id } = useParams()
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
            selector: (row) => <span> {row.createdBy.name} {row.createdBy.surname} </span>
        },
        {
            name: "Düzenle",
            selector: (row) => {
                console.log("row =>", row)
                return (
                    <div>
                        <Button color='danger' style={{ marginRight: "30px" }} onClick={() => {
                            const selectedElement = tableData.find(el => el._id == row._id)
                            setInitialData({
                                content: selectedElement?.content,
                                title: selectedElement?.title,
                                announcementId: selectedElement?._id
                            })
                            setDeleteModal(true)
                        }} >  <BsTrash />
                        </Button>
                        <Button color='warning' style={{ marginRight: "30px" }} onClick={() => {
                            const selectedElement = tableData.find(el => el._id == row._id)
                            console.log("asdv123=>", selectedElement)
                            setInitialData({
                                content: selectedElement?.content,
                                title: selectedElement?.title,
                                announcementId: selectedElement?._id
                            })

                            setModalShow(true)
                        }} >
                            <FiEdit />
                        </Button>
                    </div>
                )
            }
        },
    ];

    const createAnnnouncement = (data) => {
        setData(data)
    }

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
                <Col lg={10} style={{ display: "flex", justifyContent: "flex-end" }} >
                    <Button className='btn btn-success' onClick={() => {
                        setInitialData(undefined)
                        setModalShow(true)
                    }} >
                        Duyuru Ekle
                    </Button>
                </Col>
                <CourseAnnouncementModal initialData={initialData} process={createAnnnouncement} courseId={id} modalShow={modalShow} setModalShow={setModalShow} />
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

            <Modal isOpen={deleteModal} >
                <ModalHeader>
                    <h6>
                        Onay
                    </h6>
                </ModalHeader>
                <ModalBody>
                    <h5>
                        Silmek istediğinize emin misiniz ?
                    </h5>
                </ModalBody>
                <ModalFooter>
                    <Button className='btn btn-primary' onClick={async () => {
                        try {
                            const response = await deleteAnnouncementApi({
                                announcementId: initialData?.announcementId,
                                courseId: id
                            })
                            toast.success("duyuru silindi", {
                                autoClose: 1000
                            })
                            setData(response.data)
                            setDeleteModal(false)
                        }
                        catch (err) {
                            toast.error(err.message, {
                                autoClose: 1000
                            })
                        }
                    }}>
                        Sil
                    </Button>
                    <Button className='btn btn-danger' onClick={() => {
                        setDeleteModal(false)
                    }}>
                        İptal
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default EditCourseAnnouncement