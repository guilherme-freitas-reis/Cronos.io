import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta lang="pt-BR" />
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <title>Olá 😊! Bem vind@ ao Cronos.io</title>
          <meta name="title" content="Olá 😊! Bem vind@ ao Cronos.io" />
          <meta
            name="description"
            content="É bom saber que você tem interesse em receber alertas sobre as tarefas da faculdade, e o Cronos.io vai te ajudar!"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://cronos-io.vercel.app/" />
          <meta property="og:title" content="Olá 😊! Bem vind@ ao Cronos.io" />
          <meta
            property="og:description"
            content="É bom saber que você tem interesse em receber alertas sobre as tarefas da faculdade, e o Cronos.io vai te ajudar!"
          />
          <meta
            property="og:image"
            content="https://cronos-io.vercel.app/og-image.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://cronos-io.vercel.app/"
          />
          <meta
            property="twitter:title"
            content="Olá 😊! Bem vind@ ao Cronos.io"
          />
          <meta
            property="twitter:description"
            content="É bom saber que você tem interesse em receber alertas sobre as tarefas da faculdade, e o Cronos.io vai te ajudar!"
          />
          <meta
            property="twitter:image"
            content="https://cronos-io.vercel.app/og-image.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
          <meta name="theme-color" content="#28abfa" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
