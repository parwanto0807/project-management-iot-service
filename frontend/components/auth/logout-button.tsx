"use client"

//import { logout } from "@/action/auth/logout";
//import { signOut } from "next-auth/react";
import Link from "next/link";
// import { Button  } from "@/components/ui/button";

interface LogoutButtonProps {
    children?: React.ReactNode;
};

export const LogoutButton = ({
    children
}: LogoutButtonProps) => {
    <Link href="/localhost:3000/login">
    </Link>
    return (
        <span className="cursor-pointer">
            {children}
        </span>
    );
};