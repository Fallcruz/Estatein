import Image from 'next/image'
import jumbotronBuilding from '@/public/assets/jumbotron-building-full.png'
import jumbotronBadge from '@/public/assets/jumbotron-badge.png'

function Jumbotron() {
    return (
        <div className='flex lg:flex-row flex-col-reverse justify-between lg:px-0 px-4 gap-2'>
            <div className='basis-[55%] flex flex-col items-start justify-center lg:ps-[6%] md:ps-14 py-10 lg:px-0 px-4 gap-8'>
                <div className='flex flex-col lg:pe-20 pe-0 gap-4'>
                    <h1 className='lg:text-5xl text-4xl font-semibold lg:leading-[58px] leading-[42px]'>
                        Discover Your Dream Property with Estatein
                    </h1>
                    <p className='text-grey-60 text-base mt-3'>
                        Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                    </p>
                </div>
                <div className='flex flex-row gap-4'>
                    <button className='font-medium px-5 py-3 bg-grey-08 border-[0.2px] border-grey-20 rounded-lg' type="button">Learn More</button>
                    <button className='font-medium px-5 py-3 bg-purple-60 border-[0.2px] border-purple-60 rounded-lg' type="button">Browse Properties</button>
                </div>
                <div className='w-full flex flex-row flex-wrap lg:justify-start lg:gap-4 gap-3'>
                    <div className='flex flex-col px-6 py-4 bg-grey-10 border-[0.2px] border-grey-20 rounded-lg gap-1'>
                        <div className='lg:text-2xl text-xl font-bold'>200+</div>
                        <div className='text-grey-60 lg:text-base text-sm font-medium'>Happy Customers</div>
                    </div>
                    <div className='flex flex-col px-6 py-4 bg-grey-10 border-[0.2px] border-grey-20 rounded-lg gap-1'>
                        <div className='lg:text-2xl text-xl font-bold'>10k+</div>
                        <div className='text-grey-60 lg:text-base text-sm font-medium'>Properties for Clients</div>
                    </div>
                    <div className='flex flex-col px-6 py-4 bg-grey-10 border-[0.2px] border-grey-20 rounded-lg gap-1'>
                        <div className='lg:text-2xl text-xl font-bold'>16+</div>
                        <div className='text-grey-60 lg:text-base text-sm font-medium'>Years of Experience</div>
                    </div>
                </div>
            </div>
            <div className='basis-[42%] pt-4 lg:pe-4 pe-0'>
                {/* <Image className='absolute top-[15rem] ms-[-4rem] w-auto h-32' src={jumbotronBadge} alt='img' width={500} height={500} quality={100} sizes='100vw' /> */}
                <Image className='w-full h-[100%] rounded-2xl mx-auto' src={jumbotronBuilding} alt='img' width={500} height={500} quality={100} sizes='100vw' priority />
            </div>
        </div>
    )
}

export default Jumbotron