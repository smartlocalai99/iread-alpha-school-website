import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* SEO Meta */}
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="IREAD ALPHA English Medium High School — Building strong foundations for a successful tomorrow. Quality education, holistic development, and experienced faculty in Guduru, Andhra Pradesh."
        />
        <meta
          name="keywords"
          content="IREAD ALPHA, English Medium, High School, Guduru, Andhra Pradesh, Admissions, Education, School"
        />
        <meta name="author" content="IREAD ALPHA English Medium High School" />

        {/* Open Graph */}
        <meta property="og:title" content="IREAD ALPHA English Medium High School" />
        <meta
          property="og:description"
          content="Building strong foundations for a successful tomorrow. Quality education, holistic development, and experienced faculty."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Hero.jpeg" />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" type="image/png" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
