import { useState } from "react";
import CommentList from "./components/CommentList";

const App = () => {
  const comments = [
    {
      text:  'Hola mundo',
      author: 'Alfredo',
      id: '28',
    }, 

    {
      text: 'Soy un comentario',
      author: 'Luis',
      id: '333',
    }, 
    
    {
      text: 'Que tal esta todo?',
      author: 'Juan',
      id: '450',
    }
  ]

  const [showAuthor, setShowAuthor] = useState(false)
  const [showCommentsList, setShowCommentsList] = useState(true)



  // SIEEMPRE tienes que enviar un array como segundo parametro

  
  return (
    <div>
      {showCommentsList && <CommentList comments={comments} showAuthor={showAuthor} setShowAuthor={setShowAuthor} />}

      <button onClick={() => setShowCommentsList(!showCommentsList)}>
        Toggle comments list
      </button>
    </div>
  )
}

export default App;
