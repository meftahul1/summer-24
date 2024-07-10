import React, {useState} from 'react'
import './index.scss'
import ModalComponent from '../Modal'
import { Modal } from 'antd';
import { PostStatusFirebase } from '../../../api/FirestoreAPI';

export default function PostStatus() {

  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState('')
  const sendStatus = () => {
    PostStatusFirebase(status)
  };

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
    </div>
  )
}
