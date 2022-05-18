import { Button, CardContent, Collapse, TextField } from '@mui/material'
import moment from 'moment';
import React, { Fragment } from 'react'
import avatar from '../../assets/avatar.svg'
import "./comment.styles.scss"
import CommentForm from './CommentForm';

function CommentReply({userName, comment, _id, colored, noReply, createdAt}) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const hideForm = () => setChecked(false)
  return (
    <CardContent className='commentReply' style={{background: colored&&"#f2f6ff"}}>
        
        <div className="titleContainer">
          <img src={avatar} alt="" />
          <div>
            <h4>{userName}</h4>
            <p>{moment(createdAt).format('LL')} AT {moment(createdAt).format('LT')}</p>
          </div>
        </div>
        
        <p style={{margin:"15px 8px 5px"}}>{comment}</p>
        { noReply || (
        <Fragment>
        <Button onClick={handleChange}>{checked?"Cancel":"Reply"}</Button>
        <Collapse in={checked} >
          <CommentForm hideForm={hideForm} parentId={_id}/>
        </Collapse>
        </Fragment>
        )
        }
    </CardContent>
  )
}

export default CommentReply