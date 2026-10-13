import React from 'react'

interface PrimaryButtonProps {
    children: React.ReactNode;
    onClick?: ()=> void;
    type?: "button"| "submit" | "reset";
}

const PrimaryButton: React.FC<PrimaryButtonProps>  = ({
    children,
    onClick,
    type="button",
}) => {
  return (
    <button type={type} onClick={onClick} className='w-full mt-2 text-white font-semibold  py-3 rounded-lg shadow-sm hover:opacity-95 transition'>
        {children}
    </button>
  )
}

export default PrimaryButton;
