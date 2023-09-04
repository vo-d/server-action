import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <h1 className='text-3xl font-bold text-centerN'>Product Warehouse</h1>

      <form action="" className='flex flex-col gap-5 max-w-xl mx-auto p-5'>
        <input 
          type="text" 
          className='border border-gray-300 p-2 rounded-md' 
          placeholder='Enter Product name'
        />
      <input 
          type="text" 
          className='border border-gray-300 p-2 rounded-md' 
          placeholder='Enter Product name'
        />        
        <button className='border bg-blue-500 text-white p-2 rounded-md'>Add Product</button>
      </form  >
    </main>
  )
}
