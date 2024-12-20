import {useParams} from 'react-router-dom'

import { getArticleById } from '../axios'
import {useState, useEffect} from 'react'
import CommentCard from './CommentCard'
import VoteButton from './VoteButton';
import ErrorHandling from './ErrorHandling';



function ArticleCard() {

const [article, setArticle] = useState({})
const [error, setError] = useState(null)

let { article_id} = useParams()



useEffect(() => {
   
    getArticleById(article_id).then((articleData ) => {
        setArticle(articleData)
     
        
    }).catch((err)=> {
        setError(err)
    })
}, [article_id])


if(error){
    return <ErrorHandling message={error.message}/>
}

return (
    <>
    <div className='individual-article-card'>

        <div className ='article-title'>
        <h2>{article.title}</h2>
        </div>
        <p> By {article.author}</p>
        <div>
        <p className='article-topic'> {article.topic}</p>
        </div>
    
            
        <div className='article-img-div' >
        <img className='article-img' srcSet={article.article_img_url} src={article.article_img_url}></img>
        </div>

        
        <p className='article-body'> {article.body}</p>

<VoteButton article_id={article_id} articleVotes={article.votes} />
      <CommentCard article={article} />
      <p className='article-vote-id-child'>Comment Count: {article.comment_count}</p>


      <div className='right'>
<p  className='small-info'> Article ID: {article.article_id}</p>
<p className='small-info'> Created at: {article.created_at}</p>

</div>
        
    </div>
    </>
)
}
export default ArticleCard