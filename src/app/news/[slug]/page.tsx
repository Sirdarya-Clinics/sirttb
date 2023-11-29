
import ErrorPage from '@/app/not-found'
import { findAll } from '@/lib/firebase'
import { Header, Header2 } from '@/sections/Header'
import { Suspense } from 'react'
export default async function Page({ params }: { params: { slug: string } }) {
    console.log(params.slug)
    const data = await getData()
    const obj = { ...data }.props
    const filtered = obj.filter((item) => item.id == params.slug)
    console.log(obj.filter((item) => item.id == params.slug))
    if (params.slug.length < 36) {
        // This will activate the closest `error.js` Error Boundary
        return <ErrorPage />
    }
    return (
        <>
            <Header2 />
            <Suspense fallback={false}>
                <div>My Post: {params.slug}</div>
                <br />
                <p>{filtered[0].name}</p>
                <p>{filtered[0].message}</p>
                <p>{filtered[0].imageUrl}</p>
                <p>{filtered[0].date}</p>
            </Suspense>


        </>
    )
}

// interface Blog {
//     date: string,
//     id: string,
//     imageUrl: string,
//     massage: string,
//     name: string,
//     uuid: string
// }

async function getData() {
    const ress = await findAll()
    return { props: [...ress] }
}

