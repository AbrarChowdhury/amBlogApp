import { Card, Container } from '@mui/material'
import {useEffect, useState} from 'react'
import CommentForm from '../comment/CommentForm'
import CommentReply from '../comment/CommentReply'

function Comments({postId}) {
  const [comments,setComments]=useState(null)
  useEffect(() => {
    fetch(`/api/comments/${postId}`)
    .then(res=>res.json())
    .then(json=>setComments(json.result))
    .catch(err=>console.log(err))
  }, [])

  const firstChildren = (comment)=>{
    return comments.filter(({parentId})=>parentId===comment._id)
  }


  return (
    <Container>
        <CommentForm postId={postId}/>

        {comments?.filter(({parentId})=>parentId===null).map( (comment1) =>{ 
                return(
                    <div>
                        <Card sx={{borderRadius:0,marginTop:1}}><CommentReply {...comment1}/></Card>
                        {firstChildren(comment1).map(comment2=>{
                            return(
                                <Card sx={{marginLeft:"4%",borderRadius:0, paddingBottom:"15px"}}>
                                    <CommentReply colored {...comment2}/>
                                    {firstChildren(comment2).map(comment3=>{
                                        return(
                                            <Card sx={{marginLeft:"5%",borderRadius:0}}>
                                                <CommentReply colored {...comment3}/>
                                                {firstChildren(comment3).map(comment4=>{
                                                    return(
                                                        <Card sx={{marginLeft:"6%",borderRadius:0}}>
                                                            <CommentReply colored noReply {...comment4}/>
                                                        </Card>
                                                    )
                                                })
                                                }
                                            </Card>
                                        )
                                    })
                                    }
                                </Card>
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