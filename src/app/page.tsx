'use client';

import React from 'react';
import { redirect } from "next/navigation";


export default function Home() {
  redirect("/external/waitlist");
}
// app/page.tsx
