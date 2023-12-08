import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import vectorLine from '@/public/assets/vector/line.svg'
import Jumbotron from '@/components/Jumbotron'

export default function Home() {
    return (
        <main className=''>
            <div className='ads flex flex-row items-center justify-center bg-grey-blur py-4 lg:gap-3 gap-2' style={{ backgroundImage: `url(${vectorLine.src})` }}>
                <h3 className='lg:text-base text-xs'>✨Discover Your Dream Property with Estatein</h3>
                <Link className='underline lg:text-base text-xs' href='/'>Learn More</Link>
            </div>
            <Navbar />
            <Jumbotron />
        </main>
    )
}
