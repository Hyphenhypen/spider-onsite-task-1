import { useState } from "react";
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import './Login.css';

export default function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
        organisation: '',
        orgpassword:'',
    })

    const loginUser = async (e)=>{
        e.preventDefault();
        const {email, password,organisation, orgpassword} = data
        try {
            const {data} = await axios.put('/login', {
                email, password, organisation, orgpassword
            });
            if(data.error){
                toast.error(data.error)
            }else{
                setData({})
                navigate('/login')
            }
        } catch (error) {
            
        }
    }
  return (
      <div className="Login">
        <h1>Uploading Passwords</h1>
        <div className="LoginContainer">
            <form onSubmit={loginUser}>
                <div className="LoginName">
                    <input type="email" placeholder='Enter your email'
                    value = {data.email}
                    onChange={(e)=>setData({...data, email: e.target.value})}
                    />
                </div>
                <div className="LoginName">
                    <input type="password" placeholder='Enter your password'
                    value = {data.password}
                    onChange={(e)=>setData({...data, password: e.target.value})}
                    />
                </div>
                <div className="LoginName">
                    <input type="password" placeholder='Enter organisation'
                    value = {data.organisation}
                    onChange={(e)=>setData({...data, organisation: e.target.value})}
                    />
                </div>
                <div className="LoginName">
                    <input type="password" placeholder='Enter organisations password'
                    value = {data.orgpassword}
                    onChange={(e)=>setData({...data, orgpassword: e.target.value})}
                    />
                </div>
                <div className="submit">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}