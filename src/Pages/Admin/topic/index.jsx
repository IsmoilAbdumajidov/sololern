import React from 'react'
import Accordion from '../../../Components/utils/accardion'
import Portal from '../../../Components/utils/portal/Index'
import TopicCrud from '../../../Components/admin/topic/topic-form'
import { getMytopic } from '../../../hooks/AdminTeacherHook'

const Topic = () => {
    // const {data} = getTopic()
    const {data} = getMytopic()
    // console.log(data)
    return (
        <div className='mt-10'>
            <div className='flex justify-end'>
                <Portal classNameBtn={'bg px-4 py-3'} text={"Fan Qo'shish"} ModalContent={TopicCrud} />
            </div>
            <div className='overflow-x-scroll'>
                <div className='border-b px-3 text-sm font-semibold min-w-[900px] py-2 border-gray-300 flex justify-between'>
                    <div className='flex flex-1 gap-5 items-center'>
                        <div>Sarlavha</div>
                    </div>
                    <div className='w-[100px]'>Sozlamalar</div>
                </div>
                <div className='min-w-[900px]'>
                    {
                        data?.length ? data?.map((item,i)=>(
                            <Accordion item={item}  key={i}/>
                        )):<div>Ma'lumot topilamdi...</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Topic