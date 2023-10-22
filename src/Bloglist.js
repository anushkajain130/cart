const Bloglist = ({ blogs , title , HandleCart }) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id} >
                    {/*key is a unique property jisse hum har blog ko access karenge*/}
                    <h2>{ blog.title }</h2>
                    <p>written by {blog.author}</p>
                    <button onClick={() => HandleCart(blog.id )}>add to cart</button>
                </div>

            ))}

        </div>


     );
}
 
export default Bloglist;