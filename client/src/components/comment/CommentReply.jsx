import { Button, CardContent, Collapse, TextField } from '@mui/material'
import React, { Fragment } from 'react'
import avatar from '../../assets/avatar.svg'
import "./comment.styles.scss"
import CommentForm from './CommentForm';

function CommentReply({userName, comment, _id, colored, noReply}) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <CardContent className='commentReply' style={{background: colored&&"#f2f6ff"}}>
        
        <div className="titleContainer">
          <img src={avatar} alt="" />
          <div>
            <h4>{userName}</h4>
            <p>{Date.now()}</p>
          </div>
         
        </div>
        
        <p style={{margin:"0 10px"}}>{comment}</p>
        { noReply || (
        <Fragment>
        <Button onClick={handleChange}>{checked?"Cancel":"Reply"}</Button>
        <Collapse in={checked} >
          <CommentForm parentId={_id}/>
        </Collapse>
        </Fragment>
        )
        }
    </CardContent>
  )
}

export default CommentReply