import React from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { ChangeData } from "../Redux/AuthReducers/SignupFormReducer";
export default function Signup({label,type,value,name,focus})
{
    const dispatch=useDispatch()
    return<>
       <TextField name={name} value={value} label={label} type={type} fullWidth sx={{ "label": { fontFamily: "Raleway", fontWeight: "500" } }}  focused={focus} required onChange={(e)=>dispatch(ChangeData({[e.target.name]:e.target.value}))}>
            </TextField>
    </>
}