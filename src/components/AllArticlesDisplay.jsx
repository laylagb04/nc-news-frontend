import {useState, useEffect} from 'react'
import { getArticles } from '../axios'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2'
import ArticleCard from './ArticleCard';
import {Link} from 'react-router-dom'



function AllArticlesDisplay(){
const [articles, setArticles] = useState([])
const [loading, isLoading] = useState(true)

   useEffect(() => {
    getArticles().then((articles)=>{
        const articlesArray = articles.data.articles
        setArticles(articlesArray)
        isLoading(false)
    })
   }, [])

if (loading) {
    return <p>
        Loading...
    </p>
}



return (
    <>
    <div className='all-items-display'>
    <Box sx={{flexGrow:1}}>
    <Grid container spacing = {{sx:1,md:2}} columns = {{xs:4, sm:8, md:12}}>
            {articles.map((article) => (
                
               


                 <Grid className='article-grid' size={{xs:2, sm:2, md:4  }}>
                  
                  
                  
                    <div className='article-img'>
                    <img className='article-images' srcSet={article.article_img_url}
                    src={article.article_img_url}
                
                    />
                     </div>
                     
                     <Link to={`/articles/${article.article_id}`}  className='link'>
                     {article.title}</Link>
                    {/* <button onClick={() => ArticleCard(article.article_id)} className='article-title'> {article.title}</button>  */}
                    <p className='article-authorid'>{article.author}</p>
                    </Grid>
))}

    </Grid>
    </Box>
    </div>
    </>
)





}



export default AllArticlesDisplay