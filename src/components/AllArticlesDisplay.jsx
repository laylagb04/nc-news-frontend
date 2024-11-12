import {useState, useEffect} from 'react'
import { getArticles } from '../axios'
import Box from '@mui/material/Box';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import {Link, useSearchParams} from 'react-router-dom'
import ErrorHandling from './ErrorHandling';


function AllArticlesDisplay(){
const [articles, setArticles] = useState([])
const [loading, isLoading] = useState(true)
const [sortBy, setSortBy] = useState('created_at')
const [sortOrder, setSortOrder] = useState('desc')
const [searchParams, setSearchParams] = useSearchParams()
const [error, setError] = useState(null)



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
    }).catch((err)=> {
        
        setError(err)
    })
   }, [searchParams])
   
   if(error){
    return <ErrorHandling message={error.message}/>
}

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
    
     
    </Box>
    </div>
    </>
)
}
export default AllArticlesDisplay

