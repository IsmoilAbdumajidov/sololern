import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { clearLS } from '../../../utils/localStorage';
import Navbar from '../../../Components/admin/navbar';
import Sidebar from '../../../Components/admin/sidebar';
import { instance } from '../../../api/api';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true)
  instance.interceptors.response.use((response) => {

      return response;
  }, (error) => {
      console.log("error");
      if ((error.response && error?.response?.status === 401) || error?.response?.status === 403) {
          clearLS()
          navigate("/register");
      } else if (error.response && error.response.status === 500) {
          console.log(error);
      }

      return Promise.reject(error);
  });

  const logOut = () => {
      clearLS()
      navigate("/register")
  }

  return (
      <div className='bg-[#EEEEEE] min-h-screen'>
          <Navbar logOut={logOut} isOpen={isOpen} />

          <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />

          <div className={`${isOpen ? "ml-12" : "ml-12 md:ml-60"}   transform ease-in-out duration-500 pt-20 px-2 md:px-8 pb-4 `}>
              <Outlet />
          </div>
      </div>
  )
}


export default Dashboard