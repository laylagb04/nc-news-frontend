import {useState, useEffect} from 'react'
import { getArticles } from '../axios'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2'
import ArticleCard from './ArticleCard';
import {Link, useSearchParams} from 'react-router-dom'



function AllArticlesDisplay(){
const [articles, setArticles] = useState([])
const [loading, isLoading] = useState(true)
const [sortBy, setSortBy] = useState('created_at')
const [sortOrder, setSortOrder] = useState('desc')
const [searchParams, setSearchParams] = useSearchParams()

   useEffect(() => {
    const sortParam = searchParams.get('sort_by') 
    const orderParam = searchParams.get('order') 


    const params = {
        sort_by: sortParam,
        order: orderParam
    }

    getArticles(params).then((articles)=>{
        const articlesArray = articles.data.articles
        setArticles(articlesArray)
        isLoading(false)
    })
   }, [searchParams])

if (loading) {
    return <p>
        Loading...
    </p>
}

function handleSort(event){
const [newSortBy, newSortOrder] = event.target.value.split('-')
    setSortBy(newSortBy)
    setSortOrder(newSortOrder)
    setSearchParams({sort_by: newSortBy, order: newSortOrder})




}

return (
    <>
    <div className='all-items-display'>
    <Box sx={{flexGrow:1}}>
        <div className='sorting-box'>
<label>Sort By</label>
<select value={`${sortBy}-${sortOrder}`}onChange={handleSort}>

    <option value='created_at-desc'>Created at descending</option>
<option value='created_at-asc'> Created at ascending</option>
<option value='votes-asc'> Votes ascending</option>
<option value='votes-desc'> Votes descending</option>
<option value='comment_count-desc'> Comments descending</option>
<option value='comment_count-asc'> Comments ascending</option>
</select>

        </div>
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