import React from 'react'

// Temp data. Replace w/ api calls.
var commentData = [{user: 'User #1', comment: 'Comment #1'}, {user: 'User #2', comment: 'Comment #2'}, {user: 'User #3', comment: 'Comment #3'}]

const Comments = () => (
  <div>
    {commentData.map((val, key) => {
      return (
        <div key={key} className='commentContainer'>
          <div className='userPic' />
          <div className='commentText'>
            <h2>{val.user}</h2>
            <p>{val.comment}</p>
          </div>
        </div>
      )
    })}
  </div>
)

export default Comments
