"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSignUp } from '@clerk/nextjs';
import { GraphQLClient } from 'graphql-request';

const SignUpForm = () => {
  const router = useRouter();
  const { isLoaded, signUp } = useSignUp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('Freelancer'); // Default role, can be changed based on user input
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const { createdUserId } = await signUp.create({
        emailAddress: email,
        password,
        firstName,
        lastName,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: 'email_link',
        redirectUrl: `${window.location.origin}/verify-email` // Adjust the redirect URL based on your setup
      });
      console.log('User created:', createdUserId);

      const graphQLClient = new GraphQLClient(process.env.HYGRAPH_API_ENDPOINT!, {
        headers: {
          Authorization: `Bearer ${process.env.HYGRAPH_API_TOKEN}`,
        },
      });

      const mutation = `
        mutation RegisteredUsers($username: String!, $email: String!, $role: String!) {
          registeredUsers(username: $username, email: $email, role: $role) {
            id
            username
            email
            role
          }
        }
      `;
      const variables = {
        username: email, // Adjust based on your Clerk user data structure
        email,
        role,
      };

      const data = await graphQLClient.request(mutation, variables);
      console.log('User signed up and role assigned:', data);

      // Redirect to the dashboard or another page after successful sign-up
      //router.push('/dashboard');
      router.push('/');
    } catch (error: any) {
      setError(error.errors ? error.errors[0].message : 'Something went wrong');
      console.error('Error signing up:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='mt-36'>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </div>
      <div>
        <label>Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Freelancer">Freelancer</option>
          <option value="Client">Client</option>
        </select>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
