import React from 'react'
import AddPostModal from '../AddPostModal/AddPostModal'

const EditPost = ({ userId, handleCloseModal, editPost }) => {
    return (
        <AddPostModal userId={userId} handleCloseModal={handleCloseModal} editPost={editPost} />
    )
}

export default EditPost