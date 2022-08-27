import Head from 'next/head'

const MetaDetail = ({title, description, ogTitle, ogType, ogUrl, ogImage}) => {
    return(
        <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta property="og:type" content={ogType}/>
            {/* <meta property="og:image" content={ogImage} /> */}
            <meta charSet="utf-8"></meta>
            {/* <link rel="icon" href="/favicon.ico"></link> */}

            <title>{title}</title>
            <link rel="canonical" href={ogUrl} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:site_name" content="Syllad" />
            {/* <meta property="article:published_time" content="2022-08-27T00:30:00+00:00" />
            <meta property="article:modified_time" content="2022-08-26T20:43:34+00:00" /> */}
            <meta property="og:image" content={ogImage}/>
            <meta property="og:image:width" content="970" />
            <meta property="og:image:height" content="567" />
            <meta property="og:image:type" content="image/jpeg" />
            <meta name="author" content="grnBoat | Rise to the fullness" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:label1" content="Written by" />
            <meta name="twitter:data1" content="grnBoat | Rise to the fullness"  />
            {/* <meta name="twitter:label2" content="Est. reading time" />
            <meta name="twitter:data2" content="1 minute" /> */}

        </Head>
        </>
    )
}

export default MetaDetail;