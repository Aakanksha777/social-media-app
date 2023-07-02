import React from 'react'
import AddPost from '../AddPost/AddPost'
import "./AddPostModal.css"

const AddPostModal = ({ userId, handleCloseModal, editPost }) => {
    return (
        <div className="add__modal">
            <div className="modal__overlay"></div>
            <AddPost userId={userId} handleCloseModal={handleCloseModal} editPost={editPost} />
        </div>
    )
}

export default AddPostModal