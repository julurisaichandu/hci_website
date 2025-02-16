import Head from "next/head";
import { Lato } from 'next/font/google'
const roboto = Lato({
    weight: '400',
    subsets: ['latin'],
  })
const Layout = ({ children }: { children: React.ReactNode }) => {
  
 

    return (
    
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="DESCRIPTION META TAG" />
        <meta property="og:title" content="SOCIAL MEDIA TITLE TAG" />
        <meta property="og:description" content="SOCIAL MEDIA DESCRIPTION TAG" />
        <meta property="og:url" content="URL OF THE WEBSITE" />
        <meta property="og:image" content="/static/image/your_banner_image.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Academic Project Page</title>
        <link rel="icon" href="/static/images/favicon.ico" />
        {/* <link
          href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans|Castoro"
          rel="stylesheet"
        /> */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
<link href="https://fonts.googleapis.com/css2?family=Monomakh&display=swap" rel="stylesheet"></link> */}
      </Head>
      <main className={roboto.className}>{children}</main>
    </>
  );
};

export default Layout;
