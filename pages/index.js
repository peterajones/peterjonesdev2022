import { signIn, signOut, useSession } from 'next-auth/react'
import clientPromise from '../lib/mongodb';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home({ isConnected }) {
  console.log(`DB is connected: ${isConnected}`);
  const {data: session} = useSession()
  if (session) {
    const {user} = session;
    return (
      <div  className={styles.container}>
        <p>Signed in as {user.name} <img src={user.image} alt={user.name} className={styles.avatar}/></p>
        <p>Click <Link href="/account"><a>here</a></Link> to go to your account.</p><br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <>
      <div  className={styles.container}>
        <p>Not signed in, </p>
        {isConnected ? (
          <p>but connected to the DB</p>
        ) : (
          <p>, but <em>not</em> connected to the DB</p>
        )}
        <button onClick={() => signIn('github')}>Sign in</button>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    await clientPromise
    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
