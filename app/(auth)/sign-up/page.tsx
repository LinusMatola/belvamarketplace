// app/auth/page.js
'use client';

import { SignInButton, SignUp, SignedOut } from '@clerk/nextjs';
import Image from 'next/image';
import Stages from './Stages';
import Options from './Options';
import SignUpForm from './SignUpForm';
import NavBar from '@/components/NavBar';
import PasswordForm from './PasswordForm';

export default function AuthPage() {


  return (
    <main>
        <NavBar isHomePage={false}/>
        <SignUpForm />
    </main>
  );
}
