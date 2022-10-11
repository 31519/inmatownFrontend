import Head from 'next/head'
import { Helmet } from "react-helmet";


const MetaDetail = ({title, description, ogTitle, ogType, ogUrl, ogImage}) => {
    

        
    return(
        <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta property="og:type" content={ogType}/>
            <meta charSet="utf-8"></meta>
            <link rel="icon" href="/favicon.png"></link>

            <title>{title}</title>
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={des} />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:site_name" content="CRfeeds" />
            <meta property="og:image"  itemprop="image" content={ogImage}/>
            <meta property="og:image:width" content="970" />
            <meta property="og:image:height" content="567" />
            <meta itemprop="width" content="1200"/>
            <meta itemprop="height" content="800"/>
            <meta property="og:image:type" content="image/jpeg" />
            <meta name="author" content="CRfeeds | Rise to the fullness" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:label1" content="Written by" />
            <meta name="twitter:data1" content="CRfeeds | Rise to the fullness"  />

        </Head>
        {/* <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta property="og:type" content={ogType}/>
            <meta charSet="utf-8"></meta>
            <link rel="icon" href="/favicon.png"></link>

            <title>{title}</title>
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:site_name" content="CRfeeds" />
            <meta property="og:image"  itemprop="image" content={ogImage}/>
            <meta property="og:image:width" content="970" />
            <meta property="og:image:height" content="567" />
            <meta itemprop="width" content="1200"/>
            <meta itemprop="height" content="800"/>
            <meta property="og:image:type" content="image/jpeg" />
            <meta name="author" content="CRfeeds | Rise to the fullness" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:label1" content="Written by" />
            <meta name="twitter:data1" content="CRfeeds | Rise to the fullness"  />
        </Helmet> */}
        </>
    )
}

export default MetaDetail;