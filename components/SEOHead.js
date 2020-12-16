import Head from 'next/head'

const SEOHead = ({ title, description, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charset="utf-8" />
      <meta name="description" key="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta name="title" content={title} />
      <meta name="keywords" content="altun rzayev, altun rzayev portfolio, engineer, altun rzayev engineer, altun rzayev istanbul, altun engineer, altun portfolio, altun turkey, altun istanbul, roket, altun rzayev muhendis, altun muhendis" />
      <meta property="og:title" key="og:title" content={title} />
      <meta property="og:locale" key="og:locale" content="en_TR" />
      <meta property="og:url" key="og:url" content={url} />
      <meta property="og:type" key="og:type" content="website" />
      <meta property="og:description" key="og:description" content={description} />
      <meta property="og:image" key="og:image" content="/robot.png" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  )
}

export default SEOHead
