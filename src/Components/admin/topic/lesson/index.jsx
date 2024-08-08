import React, { useEffect, useState } from 'react'
import Modal from '../../../utils/portal/modal/Index'
import { Form, Formik } from 'formik'
import FormControl from '../../../../utils/form-utils/FormControl'
import Button from '../../../utils/Button/Bg'
import * as Yup from 'yup'
import { AddLesson, EditLesson } from '../../../../hooks/AdminTeacherHook'

const css = 'w-full py-2 bg-white/35 font-normal px-2  focus:outline-2 border border-teal-800 rounded-md duration-200;';

const LessonForm = ({ state,data, onClose }) => {
    // initial values

    console.log(state)
    const initialValuesObjs =
    {
        number: 0,
        title: "",
        topic: data?.id,
        video: "",
        text: "",
        description: ""
    }


    const { mutate: addLesson, isSuccess: addSuccess } = AddLesson()
    const { mutate: editLesson, isSuccess: editSuccess } = EditLesson()

    const [initialValues, setInitialValues] = useState(state ? state :initialValuesObjs)

    // validation with Yup
    const validationSchema = Yup.object({
        title: Yup.string().required("Ma'lumot kiritilmadi*"),
        video: Yup.string().required("Ma'lumot kiritilmadi*"),
        description: Yup.string().required("Ma'lumot kiritilmadi*"),
    })

    // onsubmit fucntion
    const onSubmit = async (values) => {
        // console.log("value", values)
        state ? editLesson(values) : addLesson(values)
    }

    useEffect(() => {
        if (addSuccess || editSuccess) {
            onClose()
        }
    }, [addSuccess, editSuccess])

    return (
        <Modal title={"Dars qo'shish"}>
            <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema} >
                {formik => {
                    return (
                        <Form className='flex flex-col gap-6'>
                            <div className='h-[350px] overflow-y-scroll flex flex-col gap-4'>
                                <FormControl className={css} control={"input"} label={"Dars nomini kiriting"} name={"title"} placeholder={"Dars nomini kiriting"} />
                                <FormControl className={css} control={"input"} label={"Video link"} name={"video"} placeholder={"Video link"} />
                                <FormControl className={css} control={"input"} type="number" label={"Dars tartibi"} name={"number"} placeholder={"Dars tartibi"} />
                                <FormControl className={css} control={"textarea"} label={"Text"} name={"text"} placeholder={"Text"} />
                                <FormControl className={css} control={"textarea"} label={"Dars haqida"} name={"description"} placeholder={"Dars haqida"} />
                            </div>

                            <div>
                                <Button type="button" func={onClose} variant="red" extraClass="mr-1">
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

export default LessonForm