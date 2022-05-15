import {useEffect} from 'react'

function Comments({id}) {
    useEffect(() => {
      
    fetch
      
    }, [])
    
  const comments = [
      {
          comment:"It is long establishe bla bla bala",
          parentId:null,
          id:"1",
          user:"Bob"
      },
      {
          comment:"The point of using Lorem Ipsum bla bla",
          parentId:"1",
          id:"2",
          user:"Alice"
      },
      {
          comment:"Many desktop publishing bla bla",
          parentId:"2",
          id:"3",
          user:"Bob"
      },
      {
          comment:"There are many variations of passages bla balab bla",
          parentId:null,
          id:"1",
          user:"Tom"
      },
  ]

  return (
    <div>Comments</div>
  )
}

export default Comments