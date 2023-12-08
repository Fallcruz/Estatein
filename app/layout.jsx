import './globals.scss'
import Head from 'next/head'

export const metadata = {
    title: 'Estatein',
    description: 'Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <body className={`max-w-[1600px] mx-auto bg-grey-08`}>
                {children}
            </body>
        </html>
    )
}
