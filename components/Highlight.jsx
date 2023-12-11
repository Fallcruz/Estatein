import Image from 'next/image'
import vectorStore from '@/public/assets/vector/store.svg'
import vectorBuilding from '@/public/assets/vector/building.svg'
import vectorBrightness from '@/public/assets/vector/brightness.svg'
import { ArrowUpRightIcon, BanknotesIcon, BuildingOffice2Icon, HomeModernIcon, SunIcon } from '@heroicons/react/24/solid'

function Highlight() {
    return (
        <div className='grid xl:grid-cols-4 grid-cols-2 border-[0.2px] border-grey-15 p-4 xl:mx-0 mx-4 xl:my-0 my-5 gap-4 xl:rounded-none rounded-lg' style={{ boxShadow: '0px 0px 0px 6px #191919' }}>
            <div className='relative flex flex-col xl:p-6 p-5 bg-grey-10 border-[0.2px] border-grey-15 rounded-lg gap-4 items-center justify-center text-center'>
                <div className='w-fit p-3 rounded-[100%] border-[0.2px] border-purple-60'>
                    <HomeModernIcon className='w-auto h-6 text-purple-60'/>
                </div>
                <div className='text-white xl:text-base text-sm font-medium'>Find Your Dream Home</div>
                <ArrowUpRightIcon className='text-grey-30 w-5 h-5 absolute top-4 right-4' />
            </div>
            <div className='relative flex flex-col xl:p-6 p-5 bg-grey-10 border-[0.2px] border-grey-15 rounded-lg gap-4 items-center justify-center text-center'>
                <div className='w-fit p-3 rounded-[100%] border-[0.2px] border-purple-60'>
                    <BanknotesIcon className='w-auto h-6 text-purple-60' />
                </div>
                <div className='text-white xl:text-base text-sm font-medium'>Unlock Property Value</div>
                <ArrowUpRightIcon className='text-grey-30 w-5 h-5 absolute top-4 right-4' />
            </div>
            <div className='relative flex flex-col xl:p-6 p-5 bg-grey-10 border-[0.2px] border-grey-15 rounded-lg gap-4 items-center justify-center text-center'>
                <div className='w-fit p-3 rounded-[100%] border-[0.2px] border-purple-60'>
                    <BuildingOffice2Icon className='w-auto h-6 text-purple-60' />
                </div>
                <div className='text-white xl:text-base text-sm font-medium'>Effortless Property Management</div>
                <ArrowUpRightIcon className='text-grey-30 w-5 h-5 absolute top-4 right-4' />
            </div>
            <div className='relative flex flex-col xl:p-6 p-5 bg-grey-10 border-[0.2px] border-grey-15 rounded-lg gap-4 items-center justify-center text-center'>
                <div className='w-fit p-3 rounded-[100%] border-[0.2px] border-purple-60'>
                    <SunIcon className='w-auto h-6 text-purple-60' />
                </div>
                <div className='text-white xl:text-base text-sm font-medium'>Smart Investments, Informed Decisions</div>
                <ArrowUpRightIcon className='text-grey-30 w-5 h-5 absolute top-4 right-4' />
            </div>
        </div>
    )
}

export default Highlight