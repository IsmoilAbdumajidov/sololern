// src/components/Accordion/Accordion.jsx
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Button from '../Button/Bg';
import { CiEdit } from "react-icons/ci";
import { VscTrash } from "react-icons/vsc";
import Portal from '../portal/Index';
import TopicCrud from '../../admin/topic/topic-form';

const Accordion = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="overflow-hidden rounded-lg mb-3">
        <div
          className="cursor-pointer bg-gray-100 flex justify-between items-center"
        >
          <div onClick={handleClick} className='flex py-4 ps-4 justify-between items-center flex-1'>
            <h2 className="font-medium text-lg">Hello world</h2>
            <div className={`text-lg transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
              <FiChevronDown />
            </div>
          </div>
          <div className='flex justify-center items-center gap-4 w-[100px]'>
            <Portal variant={"simple"} ModalContent={TopicCrud} text={<CiEdit className='w-6 h-6 text-green-500' />} />
            <div>
              <VscTrash className='w-6 h-6 text-red-600' />
            </div>
          </div>
        </div>
        <div
          className={`bg-white overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'
            }`}
        >
          <div className={`transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-h-96 p-4 overflow-y-auto">
              <div className='flex justify-between w-full items-center'>
                <div className='text-black font-semibold'>Darslar:</div>
                <Button variant="green" color="green">
                  <span>Dars Qo'shish</span>
                </Button>
              </div>
              <div className='flex gap-3 flex-col mt-2'>
                <div className='flex items-center border border-gray-400 rounded p-2 justify-between'>
                  <div>Hello wolrd</div>
                  <div className='flex gap-5'>
                    <div className='bg-green-500 p-1 rounded'>
                      <CiEdit className='w-6 h-6 text-white' />
                    </div>
                    <div className='bg-red-600 w-max p-1 rounded'>
                      <VscTrash className='w-6 h-6 text-white' />
                    </div>
                  </div>
                </div>
                <div className='flex items-center border border-gray-400 rounded p-2 justify-between'>
                  <div>Hello wolrd</div>
                  <div className='flex gap-5'>
                    <div className='bg-green-500 p-1 rounded'>
                      <CiEdit className='w-6 h-6 text-white' />
                    </div>
                    <div className='bg-red-600 w-max p-1 rounded'>
                      <VscTrash className='w-6 h-6 text-white' />
                    </div>
                  </div>
                </div>
                <div className='flex items-center border border-gray-400 rounded p-2 justify-between'>
                  <div>Hello wolrd</div>
                  <div className='flex gap-5'>
                    <div className='bg-green-500 p-1 rounded'>
                      <CiEdit className='w-6 h-6 text-white' />
                    </div>
                    <div className='bg-red-600 w-max p-1 rounded'>
                      <VscTrash className='w-6 h-6 text-white' />
                    </div>
                  </div>
                </div>
                <div className='flex items-center border border-gray-400 rounded p-2 justify-between'>
                  <div>Hello wolrd</div>
                  <div className='flex gap-5'>
                    <div className='bg-green-500 p-1 rounded'>
                      <CiEdit className='w-6 h-6 text-white' />
                    </div>
                    <div className='bg-red-600 w-max p-1 rounded'>
                      <VscTrash className='w-6 h-6 text-white' />
                    </div>
                  </div>
                </div>
                <div className='flex items-center border border-gray-400 rounded p-2 justify-between'>
                  <div>Hello wolrd</div>
                  <div className='flex gap-5'>
                    <div className='bg-green-500 p-1 rounded'>
                      <CiEdit className='w-6 h-6 text-white' />
                    </div>
                    <div className='bg-red-600 w-max p-1 rounded'>
                      <VscTrash className='w-6 h-6 text-white' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
