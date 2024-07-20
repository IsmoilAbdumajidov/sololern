import React from 'react'
import Accordion from '../../../Components/utils/accardion'
import Portal from '../../../Components/utils/portal/Index'
import TopicCrud from '../../../Components/admin/topic/topic-form'

const Topic = () => {
    return (
        <div className='mt-10'>
            <div className='flex justify-end'>
                <Portal variant={'green'} text={"Kurs Qo'shish"} ModalContent={TopicCrud} />
            </div>
            <div className='overflow-x-scroll'>
                <div className='border-b px-3 text-sm    font-semibold min-w-[900px] py-2 border-gray-300 flex justify-between'>
                    <div className='flex flex-1 gap-5 items-center'>
                        <div>Sarlavha</div>
                    </div>
                    <div className='w-[100px]'>Sozlamalar</div>
                </div>
                <div className='min-w-[900px]'>
                    <Accordion />
                    <Accordion />
                    <Accordion />
                    <Accordion />
                </div>
            </div>


        </div>
    )
}

export default Topic