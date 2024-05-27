import Image from "next/image";
import { SignUp } from "@clerk/nextjs";

export default function SignUpFunc() {
  return(
    <>
    <div>
    <SignUp></SignUp>
    </div>
    </>
  )
}

// https://tailwindcss.com/docs/font-weight

// <p className="font-black">thats crazy</p>
