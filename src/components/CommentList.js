import { useEffect } from "react"
import CommentCard from "./CommentCard"

const CommentList = ({ comments, showAuthor, setShowAuthor }) => {
  useEffect(() => {
    console.log('Me monte')

    return () => {
      console.log('me desmonte')
    }
  }, [])
  
  return (
    <div>
      { comments.map((comment) => (
          <CommentCard 
            key={comment.id} 
            text={comment.text} 
            author={comment.author}
            showAuthor={showAuthor}
            setShowAuthor={setShowAuthor}
          /> 
        )
      )}
    </div>
  )
}

export default CommentList
