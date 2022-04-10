import { useState, useEffect } from 'react';
import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);

  return (
    <>
      <div className='container'>
        {/* <Head>
          <title>Contact Form</title>
          <link rel="icon" href="/favicon.ico" />
        </Head> */}
  
        <main className='main'>
          <h1 className='title'>Contact Form</h1>
  
          {success && (
            <p style={{ color: 'green'}}>
              Successfully submitted form!
            </p>
          )}
  
          <div className='grid'>
            <div className='card'>
              <form name="contact" method="POST" action="/?success=true" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" />
                </p>
                <p>
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" name="email" />
                </p>
                <p>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message"></textarea>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
            </div>
          </div>
        </main>
  
        {/* <footer className="footer">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className='logo' />
          </a>
        </footer> */}
      </div>
    </>
  )
}