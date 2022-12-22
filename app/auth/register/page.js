'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        passwordConfirm,
        name,
        lastName,
        phone
      })
    });
    const data = await res.json();
    console.log('DATA', data);
    if (res.status === 200) {
      console.log('Registracija uspešna');
      router.push('/auth/login');
    } else {
      //setError(data.error);
      console.log('NAPAKAKAKAK');
    }
  };

  return (
    <>
      <div className="h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="/LogoBig.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Ustvarite račun{' '}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Vnesite podatke iz začnite z uporabo aplikacije.
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4  sm:rounded-lg sm:px-10">
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ime
                </label>
                <div className="mt-1">
                  <input
                    value={name}
                    onChange={event => setName(event.target.value)}
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Priimek
                </label>
                <div className="mt-1">
                  <input
                    value={lastName}
                    onChange={event =>
                      setLastName(event.target.value)
                    }
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Telefonska številka
                </label>
                <div className="mt-1">
                  <input
                    value={phone}
                    onChange={event => setPhone(event.target.value)}
                    id="phone"
                    name="phone"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Geslo
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="repeat-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ponovite geslo
                </label>
                <div className="mt-1">
                  <input
                    id="repeat-password"
                    value={passwordConfirm}
                    onChange={e =>
                      setPasswordConfirm(e.target.value)
                    }
                    name="repeat-password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Ustvari račun
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
