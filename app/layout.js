import { Inter } from "next/font/google";
import "app/globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Model Pro",
  description:
    "Modelpro is a company specializing in producing high-quality composite parts and tools for a wide range of industries. Our team of experts uses state-of-the-art technology and cutting-edge manufacturing processes to ensure precision and quality in all our products.",
  keywords:
    "composite materials, kompositni materijali, alati, kragujevac, strength-to-weight ratio, parts, tools, manufacturing, precision, CAD models, prototypes, engineering, design, customer service, inzenjerska firma, izrada alata od kompozitnih materijala, modeli",
  author: "Dusan Gojkovic",
  ogTitle: "Modelpro | Composite Parts and Tools",
  ogDescription:
    "Modelpro is a company specializing in producing high-quality composite parts and tools for a wide range of industries. Our team of experts uses state-of-the-art technology and cutting-edge manufacturing processes to ensure precision and quality in all our products.",
  ogType: "website",
  ogUrl: "https://modelpro.net/",
  ogImage: "https://modelpro.net/public/images/logo-09107cc5.svg",
  ogImageAlt: "Modelpro logo",
  ogSiteName: "Modelpro",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        {/* Favicon links */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/images/favicon_io/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/images/favicon_io/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/images/favicon_io/favicon-16x16.png'
        />
        <link rel='manifest' href='/images/favicon_io/site.webmanifest' />

        {/* Metadata */}
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords} />
        <meta name='author' content={metadata.author} />
        <meta property='og:title' content={metadata.ogTitle} />
        <meta property='og:description' content={metadata.ogDescription} />
        <meta property='og:type' content={metadata.ogType} />
        <meta property='og:url' content={metadata.ogUrl} />
        <meta property='og:image' content={metadata.ogImage} />
        <meta property='og:image:alt' content={metadata.ogImageAlt} />
        <meta property='og:site_name' content={metadata.ogSiteName} />

        {/* Google Fonts */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className={inter.className}>
        {children}
        <script
          type='module'
          src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
        ></script>
        <script nomodule src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'></script>
      </body>
    </html>
  );
}
