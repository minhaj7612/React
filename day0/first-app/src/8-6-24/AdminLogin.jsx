import React, { useState,useContext } from 'react';
import toast from 'react-hot-toast';
import Api from '../AxiosConfigue';
import { AdminContext } from '../Context/AdminAuthContext';
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const {state,dispatch} = useContext(AdminContext);
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setAdminData({ ...adminData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (adminData.email && adminData.password) {
        const response = await Api.post("/admin/login-admin", { adminData });

        if (response.data.success) {
          dispatch({type:"ADMIN LOGIN",payload:response.data.adminData})
          setAdminData({ email: "", password: "" });
          toast.success(response.data.message);
          navigate("/newhome");
        } else {
          toast.error(response.data.error);
        }
      } else {
        throw new Error("All fields are mandatory.");
      }
    } catch (error) {
      console.log(error, "error");
      toast.error(error?.response?.data?.error || error.message);
    }
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <h3>Admin Login</h3>
        <input type="email" onChange={handleChange} name="email" value={adminData.email} placeholder="Email" />
        <br />
        <input type="password" onChange={handleChange} name="password" value={adminData.password} placeholder="Password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdminLogin;

