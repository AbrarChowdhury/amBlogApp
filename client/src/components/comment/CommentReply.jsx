import { Button, Card } from '@mui/material'
import React from 'react'

function CommentReply({userName, comment, id}) {
  return (
    <Card>
        <h2 style={{margin:"0 10px"}}>{userName}</h2>
        <p style={{margin:"0 10px"}}>{comment}</p>
        <Button>Reply</Button>
    </Card>
  )
}

export default CommentReply