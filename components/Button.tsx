'use client'

import Image from "next/image";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textStyles?: string;
  rightIcon?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  disabled,
  className,
  textStyles,
  rightIcon,
  onClick,
  ...props
}) => {
  return (  
    <button
      type={type}
      disabled={disabled}
      className={`flex flex-row relative justify-center items-center py-3 px-6 font-bold outline-none ${className}`}
      onClick={onClick}
      { ...props }
    >
      <span className={`flex-1 ${textStyles}`}>
       {children}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image 
            src={rightIcon}
            alt='right-icon'
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}
 
export default Button;