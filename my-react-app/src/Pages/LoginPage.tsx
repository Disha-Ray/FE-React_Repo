import React from 'react'
import Card from '../components/UI/Card'
import PrimaryButton from '../components/UI/PrimaryButton';

const LoginPage = () => {

    const handleLogin = () => {
        alert("Login done");
    }
  return (
    <div className='min-h-screen bg-[#eefcf6] flex items-start justify-center p-8'>
      <Card>
        <PrimaryButton 
        onClick={handleLogin}
        >
            Log In
        </PrimaryButton>
      </Card>
    </div>

    
  )
}

export default LoginPage
