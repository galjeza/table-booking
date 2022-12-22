'use client';
import { useSession } from 'next-auth/react';

export default function Page() {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Page</h1>
      <h1>{session.user.email}</h1>
    </div>
  );
}
