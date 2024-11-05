
import {useState, useEffect} from 'react'
import { getCommentsById } from '../axios'

function CommentCard({article}){
    
    const {article_id} = article
    const [comments, setComments] = useState([])

    useEffect(()=> {
        getCommentsById(article_id).then((comments)=> {
            
            setComments(comments)
        })
    }, [article_id])

    
return (
  <>
  <div>
    {comments.map((comment) => (
        <div className='comment-div'> 
        <p className='comment'>{comment.author}</p>
        <p className='comment body'>{comment.body}</p>
        <p className='comment'> Article ID: {comment.article_id}</p>
        <p className='comment '> Votes:{comment.votes}</p>
        <p className='comment'> ID: {comment.comment_id}</p>
        <p className='comment'> Created at: {comment.created_at}</p>
    </div>
    ))}
      </div> 
        </>
)
   
}


export default CommentCard