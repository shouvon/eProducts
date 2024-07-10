import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { LayoutBox } from './style'
import { MuiBox, MuiGrid } from '../../Components/MUI/MuiIndex'
import LoginImage from '../../assets/login.jpg'
import RegisterImage from '../../assets/registration.jpg'

function AuthLayout() {

  const location = useLocation();
  console.log(location)
  const image = location.pathname === '/login' ? LoginImage : RegisterImage
    return (
        <LayoutBox>
            <MuiGrid container className='auth-container'>
                <MuiGrid item md={6} className='left-muiGrid'>
                    <MuiBox className='left d-flex jcc aic' sx={{height: "100vh"}}>
                        <img src={image} alt="" />
                    </MuiBox>
                </MuiGrid>
                <MuiGrid item md={6} className='right-muiGrid'>
                    <MuiBox className='right d-flex jcc aic'>
                        <MuiBox sx={{ width: '100%' }}>
                            <MuiBox className='auth-outlet'>
                                <Outlet />
                            </MuiBox>
                        </MuiBox>
                    </MuiBox>
                </MuiGrid>
            </MuiGrid>
        </LayoutBox>
    )
}

export default AuthLayout
