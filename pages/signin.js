import React from "react";
import { getProviders, signIn, getSession, getCsrfToken } from "next-auth/react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Container,
  Stack,
} from "@chakra-ui/react";

export default function SignIn({ providers, csrfToken }) {
  console.log(providers, csrfToken);
  return (
    <div className="sign-in-wrapper">
        <h1>Welcome to our custom page</h1>
      <div className="sign-in-container">
        <div className="email-form">
          <form method="post" action="/api/auth/signin/email">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label>
              <p>Email address</p>
              <input type="text" id="email" name="email" />
            </label>
            <button type="submit">Use your Email</button>
          </form>
        </div>
        <div className="signin-providers-section">
          {Object.values(providers).map((provider) => {
            if (provider.name === "Email") {
              return;
            }
            return (
              <div className="signin-providers" key={provider.name}>
                <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (session?.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const providers = await getProviders();
  return {
    props: { providers },
  }
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken },
  }
}