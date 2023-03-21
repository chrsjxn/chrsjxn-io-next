import styles from './page.module.css'
import { categories, sortedPosts } from '@/lib/posts'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <>
      <h1>Writing</h1>
        {categories.map(category => {
          return <React.Fragment key={category}>
            <h2>{category}</h2>
            <ul>
            {sortedPosts[category]?.map(post =>
              <li className={styles.post} key={post.path}>
                <Link href={post.path}>{post.title}</Link>
                {" "}
                ({post.date})
              </li>)}
            </ul>
          </React.Fragment>
        })}
    </>
  )
}
