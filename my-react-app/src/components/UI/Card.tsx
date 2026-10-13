import React from 'react'

interface CardProps {
children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({children}) => {
  <div className='bg-white rounded-2xl shadow-xl p-8 mx-auto max-w-xl'>{children}</div>
};

export default Card;
