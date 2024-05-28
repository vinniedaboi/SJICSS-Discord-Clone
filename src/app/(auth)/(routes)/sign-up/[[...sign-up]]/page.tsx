import Image from "next/image";
import { SignUp } from "@clerk/nextjs";

export default function SignUpFunc() {
  return(
    <html>
      <body>
    <div>
    <SignUp></SignUp>
    </div>
    </body>
    </html>
  )
}

// https://tailwindcss.com/docs/font-weight

// <p className="font-black">thats crazy</p>
