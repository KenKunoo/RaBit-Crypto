import React, { useContext } from 'react'
import { CryptoContext } from '../context/CryptoContext'

const TableComponent = () => {

  const {test} = useContext(CryptoContext);

  return (
    <div className = 'flex flex-col mt-9 border border-gray-100 rounded'>
        <table className = 'w-full table-auto'>
            <thead className='capitalize text-base text-gray-100 font-medium border-b border-gray-100'>
              <tr>
                <th className ='py-1'>asset</th>
                <th className ='py-1'>name</th>
                <th className ='py-1'>price</th>
                <th className ='py-1'>total volume</th>
                <th className ='py-1'>market cap change</th>
                <th className ='py-1'>1H</th>
                <th className ='py-1'>24H</th>
                <th className ='py-1'>7D</th>
              </tr>
            </thead>
            <tbody>
              <tr className ='text-center text-base border-b border-gray-100 hover:bg-gray-200 last:border-b-0'>
                <th className='py-4'>asset</th>
                <th className='py-4'>name</th>
                <th className='py-4'>price</th>
                <th className='py-4'>total volume</th>
                <th className='py-4'>market cap change</th>
                <th className='py-4'>1H</th>
                <th className='py-4'>24H</th>
                <th className='py-4'>7D</th>
              </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TableComponent