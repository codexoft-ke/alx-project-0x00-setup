import { ButtonProps } from '@/interfaces'
import React from 'react'

const Button: React.FC<ButtonProps> = ({ 
  title, 
  styles = '',
  size = 'medium', 
  shape = 'rounded-md',
  className = '',
  onClick 
}) => {
  // Define size classes
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  }

  // Define shape classes
  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-lg': 'rounded-lg',
    'rounded-full': 'rounded-full'
  }

  // Base classes for the button
  const baseClasses = 'bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'

  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${shapeClasses[shape]} ${styles} ${className}`

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button
