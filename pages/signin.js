import { getProviders, signIn, getSession, getCsrfToken} from "next-auth/react";

export default function SignIn({ providers, csrfToken }) {
  console.log(providers, csrfToken);
  return (
    <div className="sign-in-wrapper">
      <div className="sign-in-container">
        <div className="email-form-container">
          <form method="post" action="/api/auth/signin/email" className="email-form">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label>
              <p className="email-label">Email address</p>
              <input type="text" id="email" name="email" placeholder="Email address" />
            </label>
            <button type="submit" class="button">Use your Email</button>
          </form>
        </div>
        <div className="divider"></div>
        <div className="signin-providers-section">
          {Object.values(providers).map((provider) => {
            console.log(provider)
            if (provider.name === "Email") {
              return;
            }
            return (
              <>
                <div className="signin-providers" key={provider.name}>
                  <button onClick={() => signIn(provider.id)} className="button">Sign in with {provider.name}</button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req, res } = context
  const session = await getSession({ req });
  if (session?.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const providers = await getProviders(context);
  console.log(providers);
  const csrfToken = await getCsrfToken(context);
  console.log(csrfToken);
  return {
    props: { providers, csrfToken },
  }
}