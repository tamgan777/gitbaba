function BlogPost({Author,Title,Body})

{

    return(
    <div className="blogpost">
       
     <p>Author :{Author}</p>
     <p>Title :{Title}</p> 
     <p>Body :{Body}</p>
    </div>  
);
}
export default BlogPost;