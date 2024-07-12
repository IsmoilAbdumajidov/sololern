import { Form, Formik } from 'formik';
import React from 'react'
import * as Yup from "yup"
import FormControl from '../../utils/form-utils/FormControl';
import Button from '../../Components/Button/Bg';
import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getGroup, useSignUp, useVerify } from '../../hooks/RegisterHook';
import { useState } from 'react';
import OtpInput from '../../Components/OTPinput/OTPinput';

const css = ""


const Signup = () => {
    const [isSuccess, setisSuccess] = useState(false)

    const [otp, setOtp] = useState('');
    const [username, setUsername] = useState('');
    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
    };

    const {data} = getGroup()
    console.log(data)

    // select options
    const selectGroup = data?.length ? data?.map(elem => (
        { key: elem.name, value: elem.id }
    )) : [{ key: "Ma'lumot topilmadi", value: "" }]

    // select options
    const selectCourse = [
        { key: "Kursni tanlang", value: "" },
        { key: "1-kurs", value: 1 },
        { key: "2-kurs", value: 2 },
        { key: "3-kurs", value: 3 },
        { key: "4-kurs", value: 4 },
    ]

    // initial values
    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        first_name: "",
        last_name: "",
        course: '',
        group_name: "",
    }
    const validationSchema = Yup.object({
        email: Yup.string().required("Ma'lumot kiritilmadi*"),
        username: Yup.string().required("Ma'lumot kiritlmadi"),
        first_name: Yup.string().required("Ma'lumot kiritlmadi"),
        last_name: Yup.string().required("Ma'lumot kiritlmadi"),
        course: Yup.string().required("Ma'lumot kiritlmadi"),
        group_name: Yup.string().required("Ma'lumot kiritlmadi"),
        password: Yup.string().required("Ma'lumot kiritilmadi").max(8, "8 tadan kam belgi kiritishingiz kerak").min(4, "4 tadan ko'p belgi kiritishingiz kerak"),
        confirmPassword: Yup.string().required("Ma'lumot kiritilmadi").oneOf([Yup.ref("password"), ""], "Parollar mos kelmadi").max(8, "8 tadan kam belgi kiritishingiz kerak").min(4, "4 tadan ko'p belgi kiritishingiz kerak"),
    })

    const { mutate:signUpM } = useSignUp({ setisSuccess,setUsername })
    const { mutate:verify } = useVerify()
    // onsubmit fucntion
    const onSubmit = (values, onSubmitProps) => {
        signUpM(values)
    }
    const submitHandler = () => {
        verify(
            {
                username: username,
                code: otp
            }
        )
    }

    return (
        <div className='w-full md:w-[700px]'>
            {!isSuccess ?
                <div className="flex flex-col gap-6">
                    <center>
                        <h1 className="text-2xl md:text-3xl text-white font-semibold">
                            Registratsiya
                        </h1>
                    </center>
                    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit} >
                        {
                            formik => (
                                <Form className='flex flex-col gap-4'>
                                    <div className='flex flex-col sm:grid gap-4 '>
                                        <FormControl control={"input"} type="text" label="Ism" name="first_name" placeholder="Ism" />
                                        <FormControl control={"input"} type="text" label="Familya" name="last_name" placeholder="Familya" />
                                        <FormControl control={"input"} type="email" label="Email" name="email" placeholder="Email" />
                                        <FormControl control={"input"} type="text" label="Username" name="username" placeholder="Username" />
                                        <FormControl maxLength={8} control={"password"} name={"password"} label={"Parol"} placeholder={"Parol"} />
                                        <FormControl maxLength={8} control={"password"} name={"confirmPassword"} label={"Parol"} placeholder={"Parolingizni takrorlang"} />
                                        <FormControl control={"select"} options={selectCourse} label="Kurs" name="course" />
                                        <FormControl control={"select"} options={[{ key: "Gruxni tanlang", value: "" }, ...selectGroup]} label="Grux" name="group_name" />
                                        <div className="flex gap-3  col-span-2 justify-between sm:justify-end">
                                            <Button variant={"red"} btnType="reset" text="Tozalash" />
                                            <Button extraClass={"disabled:opacity-40 disabled:hover:cursor-not-allowed"} disabled={!formik.isValid || formik.isSubmitting}
                                                btnType="submit"
                                                text="Royxatdan o'tish"
                                            ></Button>

                                        </div>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                    <div className="flex justify-center items-center gap-3 sm:px-5">
                        <hr className="flex-1" />
                        <p className="text-xl font-medium text-white">or</p>
                        <hr className="flex-1" />
                    </div>
                    <center>
                        <p className="text-white">
                            Already have an account?{" "}
                            <span>
                                <Link
                                    to="/register/sign-in"
                                    className="text-cyan-500 font-medium transition-all duration-300 hover:underline"
                                >
                                    Sign in
                                </Link>
                            </span>{" "}
                        </p>
                    </center>
                </div>
                :
                <div className="flex flex-col gap-6">
                    <OtpInput value={otp} separator={<span className='text-white'>-</span>} onChange={handleChange} numInputs={6} />
                    <div className="flex gap-3 mt-10 justify-center">
                        <Button func={()=>setisSuccess(false)} variant={"red"}  btnType="reset" text="Ortga qaytish" />
                        <Button func={submitHandler} extraClass={"disabled:opacity-40 disabled:cursor-not-allowed"}
                            btnType="submit"
                            text="SMS kodni jo'nating"
                        ></Button>
                    </div>
                </div>
            }
        </div>

    )
}

export default Signup