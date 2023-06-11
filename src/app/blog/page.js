import React from 'react'
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";


async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata = {
  title: 'Anwaar App blog',
  description: 'This is blog Page',
}

const Blog =async () => {
  const data = await getData();
  // console.log(data)
  return (
    <div className={styles.maincontainer}>
      { data.map(items=>{
        return(
        <Link href={`/blog/${items._id}`} className={styles.container} key={items._Id}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.img}
            src={items.img} alt='my image'
            width={400}
            height={250}
             />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{items.title}</h1>
          <p className={styles.desc}>{items.content}</p>
        </div>
      </Link>)
      })}
    </div>
  )
}

export default Blog