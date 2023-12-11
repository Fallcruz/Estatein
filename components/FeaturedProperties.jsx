import Image from 'next/image'
import Property1 from '@/public/assets/properties/1.png'
import Property2 from '@/public/assets/properties/2.png'
import Property3 from '@/public/assets/properties/3.png'

function FeaturedProperties() {
    return (
        <div className='flex flex-col xl:px-16 px-8 xl:py-16 py-4 xl:mt-0 mt-10 gap-8'>
            <div className='flex flex-row items-end justify-between gap-2'>
                <div className='lg:w-[80%] flex flex-col gap-4'>
                    <h1 className='xl:text-4xl text-3xl font-semibold'>Featured Properties</h1>
                    <p className='text-grey-60 xl:text-base text-sm'>
                        Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click &quot;View Details&quot; for more information.
                    </p>
                </div>
                <div className='lg:block hidden'>
                    <button className='lg:text-sm text-sm font-medium px-5 py-3 bg-grey-10 border-[0.2px] border-grey-20 rounded-lg' type="button">View All Properties</button>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <div className='flex flex-col p-4 bg-grey-08 border-[0.2px] border-grey-15 rounded-xl gap-6'>
                    <Image className='w-full h-auto rounded-xl mx-auto' src={Property1} alt='img' width={500} height={500} quality={100} sizes='100vw' priority />
                    <div className='flex flex-col gap-2'>
                        <h1 className='lg:text-xl text-base font-medium'>Seaside Serenity Villa</h1>
                        <p className='text-grey-60 xl:text-sm text-sm'>
                            A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... <span className='underline text-white'>Read More</span>
                        </p>
                    </div>
                    <div className='flex flex-row justify-between gap-2'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-grey-60 xl:text-sm text-sm'>Price</p>
                            <h1 className='lg:text-xl text-base font-medium'>$550,000</h1>
                        </div>
                        <div>
                            <button className='h-full lg:text-sm text-xs font-medium lg:px-6 px-4 bg-purple-60 border-[0.2px] border-purple-60 rounded-lg' type="button">View Properties Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties