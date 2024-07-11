import React from 'react'
import "./PostsCard.scss"

export default function PostsCard({ posts }) {
  return (
    <div className='posts-card'>
        <p>
            {posts.content}
        </p>
    </div>
  )
}
