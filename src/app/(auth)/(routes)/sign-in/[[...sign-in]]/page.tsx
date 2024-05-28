"use client"
import Image from "next/image";
import{ Button } from "@/components/ui/button";
import { SignIn } from "@clerk/nextjs";

export default function SignInFunc() {
  return(
    <html>
      <body>
      <div>
      <SignIn></SignIn>
      </div>
    </body>
    </html>
  )
}

// https://tailwindcss.com/docs/font-weight

// <p className="font-black">thats crazy</p>

// <Button></Button>