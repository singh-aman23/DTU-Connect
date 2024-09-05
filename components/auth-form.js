'use client';
import { auth } from '@/actions/auth-actions';
import Link from 'next/link';
import {useFormState} from 'react-dom';
import classes from './auth-form.module.css';


export default function AuthForm({mode}) {
  const [state, formAction] = useFormState(auth.bind(null, mode), {});
  return (
    <form className = {classes.authForm} action = {formAction}>
      <div>
        <img src="/logo.png" />
      </div>
      <p>
        <input type="email" name="email" id="email" placeholder='Email' />
      </p>
      <p>
        <input type="password" name="password" id="password" placeholder = 'Password' />
      </p>
      <p>
      {state.errors && <ul>
        {state.errors.map((error) => <li key = {error} className = {classes.formErrors}>{error}</li>)}
      </ul>}
        <button type = 'submit'>
          {mode === 'login' ? 'Login' : 'Create Account'}
        </button>
      </p>
      <p>
      {mode === 'login' && <Link href = '/?mode=signup'>Create an account</Link>}
      {mode === 'signup' && <Link href="/?mode=login">Login with an existing account.</Link>}
      </p>
    </form>
  );
}