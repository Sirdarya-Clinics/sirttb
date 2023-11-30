import { GetNews } from '@/components/getNews'
import Footer from '@/sections/Footer'
import {Header2 } from '@/sections/Header'

export default async function NewsPage() {
   
    return (
        <>
       
            <Header2 />
            <div className='flex flex-col  items-center '>
                <GetNews/>
            </div>
            
            <Footer/>
      
            
        </>
    )
}

