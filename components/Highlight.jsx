import Image from 'next/image'
import vectorStore from '@/public/assets/vector/store.svg'
import vectorCamera from '@/public/assets/vector/camera.svg'
import vectorBuilding from '@/public/assets/vector/building.svg'
import vectorBrightness from '@/public/assets/vector/brightness.svg'

function Highlight() {
    return (
        <div className='grid xl:grid-cols-4 grid-cols-2 border-[0.2px] border-grey-15 p-4 xl:mx-0 mx-4 xl:my-0 my-5 gap-4 xl:rounded-none rounded-lg' style={{ boxShadow: '0px 0px 0px 6px #191919' }}>
            <div className='relative flex flex-col xl:p-6 p-5 bg-grey-10 border-[0.2px] border-grey-15 rounded-lg gap-4 items-center justify-center text-center'>
                <div className='w-fit p-3 rounded-[100%] border-[0.2px] border-purple-60'>
                    <Image className='w-auto h-6' src={vectorStore} alt='img' width={500} height={500} quality={100} sizes='100vw' />
                </div>
                <div className='text-white xl:text-base text-sm font-medium'>Find Your Dream Home</div>
                <svg className='text-grey-30 w-5 h-5 absolute top-4 right-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </div>
            <div className='relative flex flex-col xl:p-6 p-5 bg-grey-10 border-[0.2px] border-grey-15 rounded-lg gap-4 items-center justify-center text-center'>
                <div className='w-fit p-3 rounded-[100%] border-[0.2px] border-purple-60'>
                    <Image className='w-auto h-6' src={vectorCamera} alt='img' width={500} height={500} quality={100} sizes='100vw' />
                </div>
                <div className='text-white xl:text-base text-sm font-medium'>Unlock Property Value</div>
                <svg className='text-grey-30 w-5 h-5 absolute top-4 right-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </div>
            <div className='relative flex flex-col xl:p-6 p-5 bg-grey-10 border-[0.2px] border-grey-15 rounded-lg gap-4 items-center justify-center text-center'>
                <div className='w-fit p-3 rounded-[100%] border-[0.2px] border-purple-60'>
                    <Image className='w-auto h-6' src={vectorBuilding} alt='img' width={500} height={500} quality={100} sizes='100vw' />
                </div>
                <div className='text-white xl:text-base text-sm font-medium'>Effortless Property Management</div>
                <svg className='text-grey-30 w-5 h-5 absolute top-4 right-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </div>
            <div className='relative flex flex-col xl:p-6 p-5 bg-grey-10 border-[0.2px] border-grey-15 rounded-lg gap-4 items-center justify-center text-center'>
                <div className='w-fit p-3 rounded-[100%] border-[0.2px] border-purple-60'>
                    <Image className='w-auto h-6' src={vectorBrightness} alt='img' width={500} height={500} quality={100} sizes='100vw' />
                </div>
                <div className='text-white xl:text-base text-sm font-medium'>Smart Investments, Informed Decisions</div>
                <svg className='text-grey-30 w-5 h-5 absolute top-4 right-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </div>
        </div>
    )
}

export default Highlight