import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import * as Yup from "yup"
import FormControl from '../../utils/form-utils/FormControl';
import { Link } from 'react-router-dom';
import BorderedBtn from '../../Components/Button/Border';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSignIn } from '../../hooks/RegisterHook';
import OtpInput from '../../Components/OTPinput/OTPinput';
import Button from '../../Components/Button/Bg';


const css = ""


const Signin = () => {

  // initial values
  const initialValues = {
    username: "",
    password: ""
  }
  const validationSchema = Yup.object({
    username: Yup.string().required("Ma'lumot kiritlmadi"),
    password: Yup.string().required("Ma'lumot kiritilmadi").max(8, "8 tadan kam belgi kiritishingiz kerak").min(4, "4 tadan ko'p belgi kiritishingiz kerak"),
  })
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: useSignIn, onSuccess: (data) => {
      // queryClient.invalidateQueries({ queryKey: ["getBuildingById"] });
      console.log(data);
    },

  });
  // console.log(mutation);
  // onsubmit fucntion
  const onSubmit = (values, onSubmitProps) => {
    mutation.mutate(values)
    // setTimeout(() => {
    //     onSubmitProps.setSubmitting(false)
    //     onSubmitProps.resetForm()
    // }, 3000);
  }

  return (
    <div className="w-full md:w-[700px] flex flex-col gap-6">
      <center>
        <h1 className="text-2xl md:text-3xl text-white font-semibold">
          Registratsiya
        </h1>
      </center>
      <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit} >
        {
          formik => (
            <Form className='flex flex-col gap-4'>
              <div className='flex flex-col gap-4 '>
                <FormControl control={"input"} type="text" label="Username" name="username" placeholder="Username" />
                <FormControl maxLength={8} control={"password"} name={"password"} label={"Parol"} placeholder={"Parol"} />
                <div className="flex gap-3  col-span-2 justify-between sm:justify-end">
                  <Button variant={"red"} btnType="reset" text="Tozalash"/>
                  <Button extraClass={"disabled:opacity-40 disabled:cursor-not-allowed"} disabled={!formik.isValid || formik.isSubmitting}
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
          to="/register/sign-up"
              className="text-cyan-500 font-medium transition-all duration-300 hover:underline"
            >
              Sign up
            </Link>
          </span>{" "}
        </p>
      </center>
    </div>
  )
}

export default Signin