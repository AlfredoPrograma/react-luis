const CommentCard = ({ text, author, showAuthor, setShowAuthor }) => {
  return (
    <div>
      <h1>{text}</h1>
      {
        showAuthor && <h2>Escrito por: {author}</h2>
      }


      <button onClick={() => setShowAuthor(!showAuthor)}>Toggle authors</button>
    </div>
  )
}

export default CommentCard

// {
//   showAuthor ?
//     <h2>Escrito por: {author}</h2>
//     :
//     null
// }