import React, { useState } from "react";
import Button from "../../Components/Button/Bg";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navigating from "../../Components/Navbar/Navigating";

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("user")) || { email: "" };

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

  const LogOut = () => {
    try {
      localStorage.setItem("user", "");
      localStorage.setItem("login", JSON.stringify(false));
      notify("Accountdan chiqildi");
      nav("/");
    } catch (error) {
      notify("Accountdan chiqish ilojsiz", "err");
      console.log("LogOut error", error);
    }
  };

  return (
    <div>
      <Navigating login={1} />
      <h1>Your Password: {user?.password}</h1>
      <h1>Your Email: {user?.email}</h1>

      <Button func={LogOut} text={"Log Out"} />
    </div>
  );
};

export default ProfilePage;
