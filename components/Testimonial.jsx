import Image from 'next/image'
import Property1 from '@/public/assets/properties/1.png'
import Profile from '@/public/assets/pic-profile.png'

function Testimonial() {
    return (
        <div className='flex flex-col xl:px-16 px-8 xl:py-16 py-4 xl:mt-0 mt-10 gap-8'>
            <div className='flex flex-row items-end justify-between gap-2'>
                <div className='lg:w-[80%] flex flex-col gap-4'>
                    <h1 className='xl:text-4xl text-3xl font-semibold'>What Our Clients Say</h1>
                    <p className='text-grey-60 xl:text-base text-sm'>
                        Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
                    </p>
                </div>
                <div className='lg:block hidden'>
                    <button className='lg:text-sm text-sm font-medium px-5 py-3 bg-grey-10 border-[0.2px] border-grey-20 rounded-lg' type="button">View All Testimonials</button>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <div className='flex flex-col p-4 bg-grey-08 border-[0.2px] border-grey-15 rounded-xl gap-6'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='lg:text-xl text-base font-medium'>Exceptional Service!</h1>
                        <p className='xl:text-sm text-sm leading-[24px]'>
                            Our experience with Estatein was outstanding. Their team&apos;s dedication and professionalism made finding our dream home a breeze. Highly recommended!
                        </p>
                    </div>
                    <div className='flex flex-row items-center gap-4'>
                        <div>
                            <Image className='w-full h-auto rounded-xl mx-auto' src={Profile} alt='img' width={500} height={500} quality={100} sizes='100vw' priority />
                        </div>
                        <div className='flex flex-col gap-0'>
                            <h1 className='lg:text-lg text-base font-normal'>Wade Warren</h1>
                            <p className='text-grey-60 xl:text-sm text-sm'>USA, California</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial