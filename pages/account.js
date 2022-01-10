import { getSession, signOut } from 'next-auth/react'

export default function Account({ session }) {
  const user = session?.user

  return (
  <>
    <div><p>You can only see this page if you are logged in!</p></div><br />
    <button onClick={() => signOut()} className='button'>Sign out</button>
  </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if(!session) return { redirect: { destination: '/', permanent: false } }

  return {
    props: {session}
  }
}