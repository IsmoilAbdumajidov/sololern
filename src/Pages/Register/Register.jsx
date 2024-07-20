import React, { useRef, useState } from "react";
// import CustomBtn from "../../Components/Button/Custom";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { SiteConfig } from "../../utils/site-config";
import axios from "axios";
import { Regisetrtext } from "../../utils/text";
import Password from "../../Components/utils/Input/Password";
import BorderedBtn from "../../Components/utils/Button/Border";
import Button from "../../Components/utils/Button/Bg";
import Select from "../../Components/utils/Input/Select";



const Register = () => {
  const PasswordRef = useRef({});
  const RePasswordRef = useRef({});
  const NameRef = useRef({});
  const lastNameRef = useRef({});
  const UsernameRef = useRef({});
  const EmailRef = useRef({});
  const [course, setCourse] = useState();
  const [group, setGroup] = useState();

  const [GroupData, setGroupData] = useState([]);

  const [loader, setLoader] = useState(1);

  const LoadingData = async () => {
    if (!GroupData.length) {
      await axios
        .get(
          `https://solonammqi.pythonanywhere.com/account/groupsatt/?format=json`
        )
        .then((res) => {
          setGroupData(res.data);
          setLoader(0);
        });
    }
  };

  LoadingData();

  const onChange = (e) => {
    setCourse(e.target.value);
  };

  const onChangeGroup = (e) => {
    setGroup(e.target.value);
  };

  const [userData, setUserData] = useState({});

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
        username: UsernameRef.current.value,
        email: EmailRef.current.value,
        password: PasswordRef.current.value,
        first_name: NameRef.current.value,
        last_name: lastNameRef.current.value || "",
        course: +course || 1,
        group_name: +group || GroupData[0].id,
      };

      console.log(user);

      setUserData(user);
      const response = await axios.post(`/api/account/register/`, user);
      console.log(await response);
      console.log(userData);
      await localStorage.setItem("user", JSON.stringify(user));

      return true;
    } catch (error) {
      console.log("Create User Error:", error);
      return error;
    }
  };

  const SignUp = async () => {
    // SetLoding

    await setLoader(1);

    // Check empty
    if (
      !(
        PasswordRef?.current?.value &&
        RePasswordRef?.current?.value &&
        NameRef?.current?.value &&
        UsernameRef?.current?.value
      )
    ) {
      notify(Regisetrtext.DontFill, "err");
      setLoader(0);
      return false;
    }

    // PASSWORD MIN LENGHT
    if (PasswordRef?.current?.value.length < SiteConfig.passwordMinLength) {
      notify(Regisetrtext.PasswordLength, "err");
      setLoader(0);
      return false;
    }

    // CHECK PASSWORDS
    if (RePasswordRef?.current?.value !== PasswordRef?.current?.value) {
      notify(Regisetrtext.PassWordIncorrect, "err");
      setLoader(0);
      return false;
    }

    // CREATE USER (FINAL)
    const res = await CreateUser();
    if (res === true) {
      setLoader(0);
      notify(Regisetrtext.AllDone);
      localStorage.setItem("login", JSON.stringify(true));
      nav("/");
    } else {
      setLoader(0);
      console.log(res?.response?.data);
      if (
        res?.response?.data?.username[0] ===
        "A user with that username already exists."
      )
        notify(Regisetrtext.usernameAlreadyExists, "err");
      else notify(Regisetrtext.error, "err");
    }
  };

  return (
    <div className="flex registerBg  flex-col min-h-screen justify-center h-full w-full sm:min-w-[600px]">
      <div className="flex justify-center h-full w-full">
        <div className="w-auto h-auto bg-white-600/60 backdrop-blur  rounded border p-4">
          <div className="flex flex-col gap-6">
            <center>
              <h1 className="text-2xl md:text-3xl text-white font-semibold">
                Registratsiya
              </h1>
            </center>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex flex-col gap-4"
            >
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

                {/* <Input Ref={GroupRef} text="Guruh nomi" inputType="text" /> */}
                <Select changeFunc={onChangeGroup} options={[...GroupData]} />

                <Select changeFunc={onChange} />
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
      {loader ? (
        <div className="loaderWindow">
          <div className="loader"></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Register;
