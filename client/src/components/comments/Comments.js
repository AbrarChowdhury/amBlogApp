import { Container } from '@mui/material'
import {useEffect, useState} from 'react'
import CommentForm from '../comment/CommentForm'
import CommentReply from '../comment/CommentReply'

function Comments({postId}) {
//   const [comments,setComments]=useState()
//   useEffect(() => {
//     fetch(`/api/comment${postId}}`)
//     .then(res=>res.json())
//     .then(json=>setComments(json.result))
//     .catch(err=>console.log(err))
//   }, [])
  const firstChildren = (comment)=>{
    return comments.filter(({parentId})=>parentId===comment.id)
  }
  const comments = [
      {
          comment:"It is long establishe bla bla bala",
          parentId:null,
          id:"1",
          userName:"Bob"
      },
      {
          comment:"The point of using Lorem Ipsum bla bla",
          parentId:"1",
          id:"2",
          userName:"Alice"
      },
      {
          comment:"The point of using Lorem Ipsum bla bla",
          parentId:"1",
          id:"5",
          userName:"TESTOO"
      },
      {
          comment:"Testoo tumi faul point of using Lorem Ipsum bla bla",
          parentId:"5",
          id:"15",
          userName:"Abrar"
      },
      {
          comment:"Testoo tumi faul point of using Lorem Ipsum bla bla",
          parentId:"15",
          id:"25",
          userName:"Ashak"
      },
      {
          comment:"Many desktop publishing bla bla",
          parentId:"2",
          id:"3",
          userName:"Bob"
      },
      {
          comment:"There are many variations of passages bla balab bla",
          parentId:null,
          id:"9",
          userName:"Tom"
      },
  ]

  return (
    <Container>
        <CommentForm postId={postId}/>
        {comments.filter(({parentId})=>parentId===null).map( (comment1) =>{ 
                return(
                    <div>
                        <CommentReply {...comment1}/>
                        {firstChildren(comment1).map(comment2=>{
                            return(
                                <div style={{paddingLeft:"20px"}}>
                                    <CommentReply {...comment2}/>
                                    {firstChildren(comment2).map(comment3=>{
                                        return(
                                            <div style={{paddingLeft:"40px"}}>
                                                <CommentReply {...comment3}/>
                                                {firstChildren(comment3).map(comment4=>{
                                                    return(
                                                        <div style={{paddingLeft:"60px"}}>
                                                            <CommentReply {...comment4}/>
                                                        </div>
                                                    )
                                                })
                                                }
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            )
                        })
                        
                        }
                    </div>
                )
            })
        }
    </Container>
    
  )
}

export default Comments