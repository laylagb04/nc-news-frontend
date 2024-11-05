import {useParams} from 'react-router-dom'
import {useLocation, Link} from 'react-router-dom'
import { getArticleById } from '../axios'
import {useState, useEffect} from 'react'

function ArticleCard() {

const [article, setArticle] = useState({})
let { article_id} = useParams()

console.log(article_id)
useEffect(() => {
    getArticleById(article_id).then((articleData ) => {
        setArticle(articleData)
    })
}, [])

console.log(article, 'state')



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

        <div className='article-vote-id-parent'>
            <div className='left'> 
        <p className='article-vote-id-child'>Comment Count: {article.comment_count}</p>
        <p className='article-vote-id-child'>Votes: {article.votes}</p>
        </div>


        <div className='right'>


      <p  className='article-vote-id-child'> Article ID: {article.article_id}</p>
      <p className='article-vote-id-child'> Created at: {article.created_at}</p>
      </div>
      </div>

      
        
    </div>
    </>
)
}
export default ArticleCard