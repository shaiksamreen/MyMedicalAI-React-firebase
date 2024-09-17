import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <nav className='gap-x-2 w-full z-20 top-0 left-0 h-12 border-b place-content-center items-center'>

            {
                userLoggedIn
                    ?
                    <div style={{display:'flex', justifyContent:'space-between', padding:'10px'}}>
                        <h4 style={{color: 'pink', fontWeight:'bold'}}>MyMedical AI</h4>
                        <button onClick={() => { navigate('/upload')}} style={{color: 'grey', fontWeight:'bold'}}  >Upload</button>
                        <button onClick={() => { navigate('/analyze')}} style={{color: 'grey', fontWeight:'bold'}} >Analyze</button>
                        <button onClick={() => { navigate('/history') }} style={{color: 'grey', fontWeight:'bold'}} >History</button> 
                        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-blue-600 underline'>Logout</button>
                    </div>
                    :
                    <div style={{display:'flex', justifyContent:'space-between', padding:'10px'}}>
                        <h4 style={{color: 'pink', fontWeight:'bold'}}>MyMedical AI</h4>
                        {/* <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-blue-600 underline'>Logout</button> */}
                    </div>
                    // :
                    // <>
                    //     <Link className='text-sm text-blue-600 underline' to={'/login'}>Login</Link>
                    //     <Link className='text-sm text-blue-600 underline' to={'/register'}>Register New Account</Link>
                    // </>
            }

        </nav>
    )
}

export default Header