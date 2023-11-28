'use client'

import ImageUploader from "@/components/ImageUploader"
import Loader from "@/components/Loader"
import { db, findAll, storage } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Image from "next/image";
import { useState, useEffect } from 'react'


export default function BackendPage() {


  return (
    <main className="flex  min-h-screen flex-col items-center justify-center">
      <ImageUploader />
      <button className="rounded-md border-2 border-gray-700 hover:bg-gray-300 p-2" onClick={() => findAll()}>get all blogs</button>
      <BlogList />
    </main>
  )
}


export function BlogListItem(props: { blog: any; }) {

  interface Blog {
    date: string,
    id: string,
    imageUrl: string,
    massage: string,
    name: string,
    uuid: string
  }
  
  const [isShown, setIsShown] = useState(false);

  const [imgUrl, setImgUrl] = useState();
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [progresspercent, setProgresspercent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentBlogData, setCurrentBlogData] = useState<Blog>()

  const handleSubmit = (e: any, fileUrl: string) => {
    e.preventDefault()

    const storageRef2 = ref(storage, 'files');
    //console.log('storage:', storageRef2)

    const file = e.target?.files[0]
    //console.log('file:', e.target?.files[0])
    if (!file) return;

    // const photoRef = storage.getInstance().getReferenceFromUrl(contentDTOs[p1].imageUrl.toString())
    // photoRef.delete()

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log(progress)
        setProgresspercent(progress);
        setLoading(true)
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //@ts-ignore 
          setImgUrl(downloadURL)
          setLoading(false)
          // console.log(downloadURL)
        });
      }
    );
  }

  const handleClick = (blog: Blog) => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
    setCurrentBlogData(blog)

    console.log(blog)
  };

  const onSubmit = async (event: Event | undefined, blog: Blog) => {
    let currentDate = new Date().toJSON().slice(0, 10);
     //console.log('blog:',blog)
    event?.preventDefault();
    await setDoc(doc(db, "blogs", blog.id), {
      uuid: blog.id,
      name: name,
      message: text,
      imageUrl: imgUrl || blog.imageUrl,
      date: currentDate
    });

    // console.log({
    //   id: blog.id,
    //   uuid: blog.uuid,
    //   name: name,
    //   message: text,
    //   imageUrl: imgUrl || blog.imageUrl,
    //   date: currentDate
    // })
    alert('yangi ozgarishlarni korish uchun saxifani yangilang!')
  }

  const { blog } = props
  // console.log(blog)
  return (
    <li className="">
      {blog.imageUrl ?
        <div className="border-red-800 border-4">
          <Image className="object-contain h-48 w-96 p-2" loading="lazy" src={blog.imageUrl} width={300} height={300} alt="img" />
          <div className="font-bold ">sana:<p className=" text-blue-500">{blog.date}</p></div>
          <p>Yangilik mavzusi: {blog.name}</p>
          <text className="object-contain h-48 w-48">Yangilik matni: {blog.message}</text>
          <br/>
          <button className="rounded-md border-2 border-gray-700 hover:bg-gray-300 p-2" onClick={() => handleClick(blog)}>change</button>
          {isShown && (
            <div className='flex flex-col justify-center'>
              <input onChange={() => handleSubmit(event, blog.imageUrl)} type='file' />
              <input className="border-1 text-black" value={name} onChange={e => setName(e.target.value)} type='text' placeholder="name" />
              <input className="border-1 text-black" value={text} onChange={e => setText(e.target.value)} type='text' placeholder="Text" />
              <button className="rounded-md border-2 border-gray-700 hover:bg-gray-300 p-2 w-16 text-center justify-center flex"  onClick={() => onSubmit(event, blog)} type='submit'>Upload</button>
              {
                    !imgUrl &&
                    <div className='outerbar'>
                         <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 " style={{ width: progresspercent + "%" }}>{progresspercent}%</div>
                    </div>
                    </div>

                }
            </div>

            
          )}

          {/* 👇️ show component on click */}
          {/* {isShown && <>texrt</>} */}
        </div> :
        <Loader />
      }
    </li>
  )
}


export function BlogList() {
  const [loading, setLoading] = useState(false)
  const [countries, setCountries] = useState([{}])

  const fetchData = async () => {
    setLoading(true)

    const res = await findAll()

    setCountries([...res])
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className="">
      

      {loading &&
        <p>loading...</p>
      }

      <ul className="grid grid-cols-1 gap-4 p-4 text-center sm:grid-cols-2 lg:grid-cols-3">
        {countries.length > 0 && countries.map((blog, id) => (

          <BlogListItem key={id} blog={blog} />
        ))}
      </ul>
    </section>
  )
}