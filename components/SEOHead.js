import Head from 'next/head'

const SEOHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="My name is Altun Rzayev and I am Aeronautical and Mechatronics Engineer. I'm obsessed with machine learning and AI. On this page you can find more information about my projects and academic/professional background." />
      <meta name="keywords" content="altun rzayev, altun rzayev portfolio, altun rzayev engineer, altun rzayev istanbul, altun engineer, altun portfolio, altun turkey, altun istanbul, roket, altun rzayev muhendis, altun muhendis" />
      <link rel="icon" href="/svg/1.svg" />
    </Head>
  )
}

export default SEOHead
