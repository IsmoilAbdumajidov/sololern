import React, { useRef, useState } from "react";
import Input from "../../Components/Input/Simple";
import Password from "../../Components/Input/Password";
import BorderedBtn from "../../Components/Button/Border";
import Button from "../../Components/Button/Bg";
// import CustomBtn from "../../Components/Button/Custom";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

const Register = () => {
  const PasswordRef = useRef({});
  const RePasswordRef = useRef({});
  const NameRef = useRef({});
  const lastNameRef = useRef({});
  const UsernameRef = useRef({});
  const GroupRef = useRef({});
  const EmailRef = useRef({});

  const [userData, setUserData] = useState({});
  console.log(userData);

  const nav = useNavigate();

  const notify = (text, type = "ok") => {
    if (type === "ok") {
      toast.success(text || "Tayyor");
    } else if (type === "err") {
      toast.error(text || "Xato");
    } else if (type === "wait") {
      toast.loading(text || "Kuting...");
    }
  };

  const CreateUser = async () => {
    try {
      let user = {
        name: NameRef.current.value,
        surname: lastNameRef.current.value || "",
        username: UsernameRef.current.value,
        email: EmailRef.current.value,
        password: PasswordRef.current.value,
        group: GroupRef.current.value,
      };

      setUserData(user);
      localStorage.setItem("user", JSON.stringify(user));

      return true;
    } catch (error) {
      console.log("Create User Error:", error);
      return false;
    }
  };

  const SignUp = async () => {
    if (
      !(
        PasswordRef?.current?.value &&
        RePasswordRef?.current?.value &&
        NameRef?.current?.value &&
        UsernameRef?.current?.value &&
        GroupRef?.current?.value &&
        EmailRef?.current?.value
      )
    ) {
      notify("Maydonlar hammasi tolmadi", "err");
      return;
    }

    if (RePasswordRef?.current?.value !== PasswordRef?.current?.value) {
      notify("Parollar mos emas", "err");
      return;
    }
    if (await CreateUser()) {
      notify("Tayyor");
      localStorage.setItem("login", JSON.stringify(true));
      nav("/");
    } else {
      notify("Qandaydur xatolik");
    }
  };

  return (
    <div className="flex registerBg  flex-col min-h-screen justify-center h-full w-full sm:min-w-[600px]">
      <div className="flex justify-center h-full w-full">
        <div className="w-auto h-auto bg-indigo-600/60 backdrop-blur border-blue-600 rounded border-2 p-4">
          <div className="flex flex-col gap-6">
            <center>
              <h1 className="text-2xl md:text-3xl text-white font-semibold">
                Registratsiya
              </h1>
            </center>
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 flex-col gap-4">
                <Input
                  Ref={NameRef}
                  isRequired={true}
                  text="Ism"
                  inputType="text"
                />
                <Input Ref={lastNameRef} text="Familiya" inputType="text" />
                <Input
                  Ref={EmailRef}
                  isRequired={true}
                  text="Email"
                  inputType="email"
                />
                <Input
                  Ref={UsernameRef}
                  isRequired={true}
                  text="Username"
                  inputType="text"
                />

                <Password
                  isRequired={true}
                  text="Parol"
                  Ref={PasswordRef}
                  inputChoose="secondary"
                />
                <Password
                  isRequired={true}
                  Ref={RePasswordRef}
                  text="Parolni qayta yozing"
                  inputChoose="secondary"
                />

                <Input Ref={GroupRef} text="Guruh nomi" inputType="text" />
              </div>

              <div className="flex gap-3 justify-between sm:justify-end">
                <BorderedBtn btnType="reset" text="Tozalash"></BorderedBtn>
                <Button
                  func={SignUp}
                  btnType="submit"
                  text="Royxatdan o'tish"
                ></Button>
              </div>
            </form>
            <div className="flex justify-center items-center gap-3 sm:px-5">
              <hr className="flex-1" />
              <p className="text-xl font-medium text-white">or</p>
              <hr className="flex-1" />
            </div>
            <center>
              <p className="">
                Already have an account?{" "}
                <span>
                  <Link
                    to="/login"
                    className="text-cyan-500 font-medium transition-all duration-300 hover:underline"
                  >
                    Log In
                  </Link>
                </span>{" "}
              </p>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
