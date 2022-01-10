import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image';
import clientPromise from '../lib/mongodb';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home({ isConnected }) {
  const {data: session} = useSession()
  if (session) {
    console.log(session);
    const {user} = session;
    return (
      <div  className={styles.container}>
        <p>Signed in as {user.name} 
          {/* <Image src={user.image } alt={user.name} className={styles.avatar}/> */}
        </p>
        <p>Click <Link href="/account"><a>here</a></Link> to go to your account.</p><br />
        <button onClick={() => signOut()} className='button'>Sign out</button>
      </div>
    )
  }
  return (
    <>
      <div  className={styles.container}>
        <h1>Homepage</h1>
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
