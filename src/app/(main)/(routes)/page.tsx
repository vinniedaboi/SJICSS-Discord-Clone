"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {UserButton} from "@clerk/nextjs" 

export default function Home() {
  return (
    <>
    <div>
      <p className="font-sans text-xl text-amber-800 overline">SJICSS Discord Main Page :)</p>
      <Button>Click me</Button>
    </div>
    <div>
          <UserButton
          afterSignOutUrl='/'
          />
    </div>
    </>
  )
}
