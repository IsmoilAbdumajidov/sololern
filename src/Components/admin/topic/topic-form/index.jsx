import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import Button from '../../../utils/Button/Bg'
import Modal from '../../../utils/portal/modal/Index'
import FormControl from '../../../../utils/form-utils/FormControl'
import { AddTopic, EditTopic } from '../../../../hooks/AdminTeacherHook'

const css =
    'w-full py-2 bg-white/35 font-normal px-2  focus:outline-2 border border-teal-800 rounded-md duration-200;'

const TopicCrud = ({ onClose, state }) => {

    // initial values
    const initialValuesObjs = {
        name: state?.name || "",
        description: state?.description || "",
    }
    const { mutate: addTopic,isSuccess:addSuccess } = AddTopic()
    const { mutate: editTopic,isSuccess:editSuccess } = EditTopic()

    const [initialValues, setInitialValues] = useState(initialValuesObjs)

    // validation with Yup
    const validationSchema = Yup.object({
        name: Yup.string().required("Ma'lumot kiritilmadi*"),
        description: Yup.string().required("Ma'lumot kiritilmadi*"),
    })

    // onsubmit fucntion
    const onSubmit = async (values) => {
        // console.log("value", values)
        state ? editTopic({ id: state.id, ...values }) : addTopic(values)
    }

    useEffect(() => {
      if (addSuccess || editSuccess) {
        onClose()
      }
    }, [addSuccess,editSuccess])



    return (
        <Modal title={"Fan qo'shish"}>
            <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema} >
                {formik => {
                    return (
                        <Form className='flex flex-col gap-6'>
                            <FormControl className={css} control={"input"} label={"Fan nomini kiriting"} name={"name"} placeholder={"Fan nomini kiriting"} />
                            <FormControl className={css} control={"textarea"} label={"Fan haqida"} name={"description"} placeholder={"Fan haqida"} />
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

export default TopicCrud
