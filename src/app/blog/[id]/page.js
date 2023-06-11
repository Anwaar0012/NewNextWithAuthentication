import React from 'react'
import styles from './page.module.css'
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(Id) {
  const res = await fetch(`http://localhost:3000/api/posts/${Id}`, {
    cache: "no-store",
  });


  if (!res.ok) {
    // throw new Error("Failed to fetch data");
    return notFound()
  }

  return res.json();
}

export async function generateMetadata({ params }) {

  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}


const BlogPost =async ({params}) => {
  // console.log(params)
  const data = await getData(params.id);
  console.log(data)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            The Post Title is {data.title}
          </h1>
          <p className={styles.desc}>
            The Description is : {data.desc}
          </p>
          <div className={styles.author}>
          <Image
            className={styles.avatar}
            src={data.img} alt='my image'
            width={40}
            height={40}
             />
             <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
        <Image
            src={data.img} alt='my i' 
            fill={true}
            className={styles.image}
          />
        </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            {data.content}
          </p>
        </div>
      </div>
  )
}

export default BlogPost