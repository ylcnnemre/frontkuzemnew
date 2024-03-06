import React, { FC, useState } from 'react'
import { Button, Input } from 'reactstrap'
import { Grid } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import { toast } from 'react-toastify';

const AddCoursePhotoTab = ({ setCurrent, selectedImageFiles, handleCourseImageChange }) => {

    return (
        <div className="mb-4">
            <Input accept='image/png image/jpg image/jpeg' onChange={handleCourseImageChange} className='form-control' type='file' multiple />

            <Swiper className="swiper_add_course_container" slidesPerView={4} grid={{ rows: 1 }} spaceBetween={5} pagination={{ clickable: true }} modules={[Grid]} >
                {
                    selectedImageFiles.map((file, index) => {
                        return (
                            <SwiperSlide className="photo_slide">
                                <div className="photo_section">
                                    <img src={URL.createObjectURL(file)} className="img-fluid course_photo_img" alt="" />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

            <div className='addCoursePhoto_bottom'>
                <div>
                    <Button className='btn btn-warning' style={{ marginRight: "10px" }} onClick={() => {
                        setCurrent(1)
                    }}>
                        geri
                    </Button>
                    <Button onClick={() => {
                        if (selectedImageFiles.length == 0) {
                            toast.error("en az bir adet fotoğraf seçilmeli", {
                                autoClose: 1000
                            })
                        }
                        else {
                            setCurrent(3)
                        }

                    }}>
                        ileri
                    </Button>
                </div>
                <p>
                    Seçilen Dosya Sayısı : <strong style={{ color: "blue" }} >{selectedImageFiles.length}</strong>
                </p>
            </div>
        </div>
    )
}

export default AddCoursePhotoTab