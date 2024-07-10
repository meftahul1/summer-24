import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import './index.scss'


const ModalComponent = ({modalOpen, setModalOpen, setStatus, sendStatus, status}) => {
  
  return (
    <>
      
      <Modal
        title="Create Post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
            <Button
              onClick={sendStatus}
              key="submit"
              type="primary"
              disabled={status.length > 0 ? false : true}
              >
              Post
            </Button>,
          ]}
      >
        <input 
            className='modal-input'
            placeholder='Write something...'
            onChange={(event) => setStatus(event.target.value)}
            value={status}
                
        />
      </Modal>
    </>
  );
};
export default ModalComponent;