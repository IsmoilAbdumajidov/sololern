import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import Button from '../../../utils/Button/Bg'
import Modal from '../../../utils/portal/modal/Index'
import FormControl from '../../../../utils/form-utils/FormControl'

const css =
    'w-full py-2 bg-white/35 font-normal px-2  focus:outline-2 border border-teal-800 rounded-md duration-200;'

const TopicCrud = ({ onClose, state }) => {

    // initial values
    const initialValuesObjs = {
        title: "",
        poster_image: "",
        price: ""
    }

    const [initialValues, setInitialValues] = useState(
        state ? state : initialValuesObjs
    )

    // validation with Yup
    const validationSchema = Yup.object({
        title: Yup.string().required("Ma'lumot kiritilmadi*"),
        price: Yup.string().required("Ma'lumot kiritilmadi*"),
    })

    // onsubmit fucntion
    const onSubmit = async (values) => {
        console.log("value", values)
    }


    return (
        <Modal title={"Fan qo'shish"}>
            <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema} >
                {formik => {
                    return (
                        <Form className='flex flex-col gap-6'>
                            <FormControl control={"input"} label={"Sarlavhasi"} name={"title"} placeholder={"Kurs sarlavhasini kiriting"} />
                            <FormControl control={"file"} label={"Kurs Rasmi"} name={"poster_image"} />
                            <FormControl control={"input"} label={"Kurs narxi"} name={"price"} placeholder={"Kurs sarlavhasini kiriting"} />
                            <div>
                                <Button func={onClose} variant="red" extraClass="mr-1">
                                    <span>Bekor qilish</span>
                                </Button>
                                <Button disabled={!formik.isValid || formik.isSubmitting} extraClass='disabled:cursor-not-allowed' type='submit' variant="green">
                                    <span>Jo'natish</span>
                                </Button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </Modal>
    )
}

export default TopicCrud
