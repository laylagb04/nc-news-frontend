import {useState, useEffect 
} from 'react'
import { getArticles } from '../axios'
import Box from '@mui/material/Box';

import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import ErrorHandling from './ErrorHandling';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


function GetArticleByTopic(){
const {topic} = useParams()
const [error, setError] = useState(null)

    const [articles, setArticles] = useState([])
    const [isLoading, setLoading] = useState(true)
    
       useEffect(() => {
     
        if(!topic){
            return
        }
       

    
        getArticles({topic}).then((articlesFromApi)=>{

            setArticles(articlesFromApi.data.articles)
        setLoading(false)
           
        
        }).catch((err)=>{
            setError(err)
            setLoading(false)
        })
    }, [topic])
  

    if(error){
    
       return  <ErrorHandling message={error.message}/>
    }

    if(isLoading){
        return <p>Loading...</p>
    }

    return (
        <>
        
<ImageList sx={{ width: '100%', height: 'auto' }} cols={3} gap={10}>
{articles.map((article) => (
    <ImageListItem className='all-article-item'>
        <img className='article-images' srcSet={article.article_img_url}
                    src={article.article_img_url}
                loading='lazy'
                    />
<ImageListItemBar className='all-articles-title'
title={
    <Link to={`/articles/${article.article_id}`}  className=' all-articles-title'>
    {article.title}</Link>
}
                 
                subtitle={<p className='all-articles-author' > by {article.author}</p>}
                    />
                    </ImageListItem>
   
))}
</ImageList>
        
        </>
    )
}







   export default GetArticleByTopic