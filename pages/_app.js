// import { SessionProvider } from "next-auth/react"
// import '../styles/globals.css'

// function App({ 
//   Component,
//   pageProps: {session, ...pageProps}
// }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }

// export default App
import Router from 'next/router';
import NProgress from 'nprogress';
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';
import '../styles/globals.scss';

NProgress.configure({
	easing: 'ease-in-out',
	speed: 350,
	showSpinner: false,
	trickleRate: 1.02,
	trickleSpeed: 800
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps }) {
	return (
		<SessionProvider session={pageProps.session}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	);
}

export default App;
