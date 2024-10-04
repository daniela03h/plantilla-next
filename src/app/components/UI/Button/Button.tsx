"use client"

import { IButton } from "@/app/types/IButton";
import { ButtonStyle } from "./Button-style";

const Button: React.FC<IButton> = ({ children, onClick }) => {
    return (
        <ButtonStyle onClick={onClick}>{children}</ButtonStyle>
    )
}

export default Button;
