import React, { useState, useMemo } from 'react'
import './index.scss'
import ModalComponent from '../Modal'
import { Modal } from 'antd';
import { PostStatusFirebase, getStatus } from '../../../api/FirestoreAPI';
import PostsCard from '../../PostsCard/PostsCard';

export default function PostStatus() {

  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState('')
  const [allStatuses, setAllStatus] = useState([]);
  const sendStatus = () => {
    PostStatusFirebase(status)
  };

  useMemo(() => {
    getStatus(setAllStatus);
  }, [])

  // console.log(allStatuses)

  return (
    <div className='post-container'>
      <div className='post-status'>
        <button className='open-post' onClick={() => setModalOpen(true)}>
          Create Post
        </button>
      </div>

      <ModalComponent
        modalOpen={modalOpen} 
        setModalOpen={setModalOpen}
        setStatus={setStatus}
        status={status}
        sendStatus={sendStatus}

      />

      
      <div>
        {allStatuses.map((posts) => {
          return (
            <React.Fragment key={posts.id}>
               <PostsCard posts={posts}/>
            </React.Fragment>
            
          );
        })}
      </div>
    </div>
  )
}
