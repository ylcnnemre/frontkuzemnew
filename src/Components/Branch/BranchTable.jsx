import React, { useEffect, useState } from 'react'
import { Button, Card, Col, FormFeedback, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { GetAllBranch, createBranch, deleteBranchApi, getAllBranch, updateBranchApi } from '../../api/Branch';
import { MdModeEdit } from 'react-icons/md';
import { FiTrash } from 'react-icons/fi';
import DataTable from 'react-data-table-component';
import PageLoader from '../Common/PageLoader';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from "yup"
import { toast } from 'react-toastify';
const BranchTable = () => {
    const [branch, setBranch] = useState([])
    const navigate = useNavigate()
    const [deleteModalShow, setDeleteModalShow] = useState({
        branchId: "",
        show: false
    })

    const [searchTerm, setSearchTerm] = useState("");
    const [modalShow, setModalShow] = useState({
        type: "create",
        show: false
    })
    const columns = [
        {
            name: "İsim",
            selector: (row) => <span> {row?.name} </span>,
        },
        {
            name: "Düzenle",
            selector: (row) => {
                console.log("row =>", row)
                return (

                    <div className="d-flex gap-2">
                        <Button color="warning" onClick={() => {
                            const selectedBranch = branch.find(el => el.id == row.id)
                            formik.setFieldValue("name", selectedBranch?.name)
                            formik.setFieldValue("id", selectedBranch?.id)
                            setModalShow({
                                type: "edit",
                                show: true
                            })
                        }} >
                            <MdModeEdit />
                        </Button>
                        <Button color='danger' style={{ marginLeft: "20px" }} onClick={async () => {
                            setDeleteModalShow({
                                branchId: row.id,
                                show: true
                            })
                        }} >
                            <FiTrash />
                        </Button>
                    </div>

                )
            }
        },
    ];

    useEffect(() => {
        const fetchBranches = async () => {
            try {
                const branches = await getAllBranch({
                    page : 0,
                    pageSize: 10
                });
                console.log("branches =>",branches)
                const list=[]
                for(let item=0;item<1;item++){
                    list.push(branches.data.items[0])
                }
                console.log("list =>",list)
                setBranch(branches.data.items);
            } catch (err) {
                console.error("Error fetching branches:", err);
            }
        };
        fetchBranches();
    }, [])

    const filteredData = branch?.filter((item) => {
        const lowercaseSearchTerm = searchTerm.toLowerCase();
        return item?.name.toLowerCase().includes(lowercaseSearchTerm);
    });

    const formik = useFormik({
        initialValues: {
            id: "",
            name: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("İsim Giriniz"),
        }),
        onSubmit: async (value, { resetForm }) => {
            try {
                if (modalShow.type == "create") {
                    console.log("vale =>", value)
                    const response = await createBranch({
                        name: value.name,
                    })
                    console.log("resp =>",response)
                    setBranch([...branch,{
                        id : response.data.data.id,
                        name : value.name
                    }])
                    toast.success("branş kayıt edildi", {
                        autoClose: 1000
                    })
                    resetForm()
                    setModalShow({
                        type: "create",
                        show: false
                    })
                }
                else {
                    console.log("val =>", value)
                    const response = await updateBranchApi(value)
                    console.log("resp =>",response)
                    setBranch(branch.map(el => {
                        if(el.id==value.id){
                            return {
                                id : el.id,
                                name : value.name
                            }
                        }
                        return el
                    }))
                    toast.success("branş kayıt edildi", {
                        autoClose: 1000
                    })
                    resetForm()
                    setModalShow({
                        type: "create",
                        show: false
                    })
                }
            }
            catch (err) {
                toast.error(err.response.data.Detail, {
                    autoClose: 1500
                })
                resetForm()
            }

        }
    })

    return (
        <>
            <Row className="mb-2">
                <Col lg={2}>
                    <Button color="primary" onClick={() => {
                        setModalShow({
                            show: true,
                            type: "create"
                        })
                    }}>
                        Branş Ekle
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
                onChangePage={(el)=>{
                    console.log("el =>",el)
                }}
                
                onChangeRowsPerPage={(per)=>{
                    console.log("per =>",per)
                }}
                noDataComponent={
                    <Card className="w-100 p-5">
                        <center>
                            <h2>Herhangi bir veri bulunamadı.</h2>
                        </center>
                    </Card>
                }
                paginationComponentOptions={{
                    noRowsPerPage:true,
                    rowsPerPageText: "Satır Sayısı",
                    rangeSeparatorText: "-",
                }}
            />





            <Modal isOpen={modalShow.show}>
                <ModalHeader>
                    {
                        modalShow.type == "edit" ? "Branş Düzenle" : "Branş Ekle"
                    }
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="firstnameInput" className="form-label">
                                    İsim
                                </Label>
                                <Input type="text" className="form-control" id="name" name='name'
                                    placeholder='isim'
                                    value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                    invalid={
                                        formik.touched.name && formik.errors.name ? true : false
                                    }
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <FormFeedback type="invalid"><div>{formik.errors.name}</div></FormFeedback>
                                ) : null}
                            </div>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => {
                        formik.handleSubmit()
                    }} >
                        {
                            modalShow.type == "edit" ? "Güncelle" : "Ekle"
                        }
                    </Button>
                    <Button color='danger' onClick={() => {
                        setModalShow({
                            show: false,
                            type: "create"
                        })
                    }} >
                        İptal
                    </Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={deleteModalShow.show}>
                <ModalHeader>
                    Onay Formu
                </ModalHeader>
                <ModalBody>
                    Bu branşı silmek istediğinize emin misiniz ?
                </ModalBody>
                <ModalFooter>
                    <Button color='danger' onClick={async () => {
                        try {
                            await deleteBranchApi(deleteModalShow.branchId)

                            setBranch(branch.filter(el => el.id !== deleteModalShow.branchId))

                            setDeleteModalShow({
                                show: false,
                                branchId: ""
                            })
                            toast.success("Silme işlemi başarılı", {
                                autoClose: 1000
                            })
                        }
                        catch (err) {
                            toast.error(err.response.data.message, {
                                autoClose: 1500
                            })
                            setDeleteModalShow({
                                show: false,
                                branchId: ""
                            })
                        }
                    }} >
                        Sil
                    </Button>
                    <Button onClick={() => {
                        setDeleteModalShow({
                            show: false,
                            branchId: ""
                        })
                    }}>
                        İptal
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default BranchTable