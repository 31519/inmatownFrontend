import Head from 'next/head'

const MetaScreen = ({title, description, ogTitle, ogType, ogUrl, ogImage}) => {
    const logoImage = "/favicon.png"
    return(
        <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta name="description" content={description} ></meta>
            <meta property="og:title" content={ogTitle} />
            <meta property="og:type" content={ogType}/>
            <meta property="og:url" content={ogUrl} />
            <meta property="og:image" itemprop="image"  content={logoImage} />
            <meta charSet="utf-8"></meta>
            <link rel="icon" href="/favicon.png"></link>
            <title>{title}</title>

        </Head>
        </>
    )
}

export default MetaScreen;