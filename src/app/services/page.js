import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';
// 1. Add the following two imports
import { revalidatePath } from 'next/cache';
import * as mutations from '../../graphql/mutations';

import config from '../../amplifyconfiguration.json';

const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies
});

// 2. Create a new Server Action
async function createBookingData(formData) {
  'use server';
  const { data } = await cookiesClient.graphql({
    query: mutations.createBookingData,
    variables: {
      input: {
        name: formData.get('name')?.toString() ?? '',
        email: formData.get('name')?.toString() ?? ''
      }
    }
  });

  console.log('Created Todo: ', data?.createBookingData);

  revalidatePath('/');
}

export default async function Home() {
  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '0 auto',
        textAlign: 'center',
        marginTop: '100px'
      }}
    >
      {/* 3. Update the form's action to use the
          new create Todo Server Action*/}
      <form action={createBookingData}>
        <input name="name" placeholder="Add a todo" />
        <input name="email" placeholder="Add a todo" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}