const Genre = () => {
    useEffect(() =>
    {
        fetch('http://localhost:8000/blogs')
            .then(res => {
             return res.json()
            })
            .then(data => {
            //  console.log(data)
             setBlogs(data)
            })
    }, []);
    return ( 
        
     );
}
 
export default Genre;