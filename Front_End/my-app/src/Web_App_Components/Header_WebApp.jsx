import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Box, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";
import { LoggedOut } from '../Redux/ProtectRoutesReducers/ProtectRoutes'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { StoreImagePath,FetchEmpty } from '../Redux/UserProfileImages/UserProfileImages'
export default function HeaderWebApp() {
    const Dispatch = useDispatch()
    const navigate = useNavigate()
    const UserImage=useSelector((state)=>state.UserImage)
    const [Open, SetOpen] = useState(false)
    const token = JSON.parse(localStorage.getItem('SecretKey'));
    const SecretToken = `Bearer ${token.SecretToken}`

    const OpenProfile = () => {
        if (!Open) {
            SetOpen(true)
        }
        else {
            SetOpen(false)
        }

    }
    useEffect(() => {
        const CallFetchUserProfileApi = async () => {
            const Response = await fetch(`http://localhost:8000/User/fetch/User/Profile/Image/${token.ID}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': SecretToken
                    }
                }
            )
            const fetchprofileimage=await Response.json()
            console.log(fetchprofileimage)
            if(fetchprofileimage.length > 0)
            {
                Dispatch(StoreImagePath(`http://localhost:8000/${fetchprofileimage[0].UserProfile}`))
            }
            else 
            {
                Dispatch(FetchEmpty())
            }
        
        }
        CallFetchUserProfileApi()

    }, [])
    return <>
        <AppBar position="sticky" >
            <Toolbar >
                <Box flex={1}>
                    <Typography variant="h6" textTransform={"uppercase"}><i class="fa-solid fa-blog"></i> Blog</Typography>
                </Box>

                <Box flex={1} fontFamily={"Arial"} display={"flex"} justifyContent={"flex-end"} columnGap={3} alignItems={"center"}>
                    <Badge badgeContent={4} color="error" sx={{ cursor: "pointer" }}>
                        <NotificationsIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error" sx={{ cursor: "pointer" }}>
                        <EmailIcon></EmailIcon>
                    </Badge>
                    <Box display={"flex"} gap={1} alignItems={"center"}>
                        <Avatar src={UserImage} onClick={() => OpenProfile()} sx={{ cursor: "pointer" }} />
                        <Box display={"flex"} alignItems={"center"}>

                        </Box>
                        {Open ? <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"

                            open={Open}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem sx={{"a":{color:"black",textDecoration:"none"}}}><Link to={"/MyProfile"} >Profile</Link></MenuItem>
                            <MenuItem onClick=
                            {
                                ()=>
                                {
                                   
                                    localStorage.removeItem('SecretKey');
                                    Dispatch(LoggedOut())
                                    navigate('/')
                                    
                    
                                }
                               
                                }
                                >Logout</MenuItem>
                        </Menu> : null
                        }

                    </Box>
                </Box>
            </Toolbar>
        </AppBar>

    </>
}