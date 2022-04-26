import React from "react";
import Head from "next/head";
import ResponsiveAppBar from "./ResponsiveAppBar";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <ResponsiveAppBar />
      {children}
    </div>
  );
}
