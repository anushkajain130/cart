import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs , setBlogs] = useState(null);
    
    // const HandleCart = (id) => {
    //     // Find the selected item by its id
    //     const selectedItem = blogs.find(blog => blog.id === id);

    //     if (selectedItem) {
    //         // Send the selected item to another JSON server
    //         fetch("http://localhost:8000/Cartblogs", {
    //             method: 'POST',
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(selectedItem)
    //         })
    //         .then(
    //             console.log(id)
    //         )
    //         .catch(error => {
    //             console.error("Error while sending data to the server:", error);
    //         });
    //     }
    //     }

        // const HandleCart = (id) => {
        //     // Check if the selected item already exists in the "Cartblogs" server
        //     fetch(`http://localhost:8000/Cartblogs/${id}`)
        //         .then(response => response.json())
        //         .then(blog => {
        //             if (blog) {
        //                 // If the item already exists, update the count
        //                 blog.count = (blog.count || 0) + 1;
        
        //                 // Update the item on the "Cartblogs" server
        //                 fetch(`http://localhost:8000/Cartblogs/${id}`, {
        //                     method: 'PUT',
        //                     headers: { "Content-Type": "application/json" },
        //                     body: JSON.stringify(blog)
        //                 })
        //                 .then(response => {
        //                     console.log(id)
        //                     // console.log(count)
        //                     // Handle the response from the server if needed
        //                 })
        //                 .catch(error => {
        //                     console.error("Error while updating the item:", error);
        //                 });
        //             } else {
        //                 // If the item doesn't exist, add it as a new item
        //                 const selectedItem = blogs.find(blog => blog.id === id);
        
        //                 if (selectedItem) {
        //                     // Set an initial count of 1
        //                     selectedItem.count = 1;
        
        //                     // Add the item to the "Cartblogs" server
        //                     fetch("http://localhost:8000/Cartblogs", {
        //                         method: 'POST',
        //                         headers: { "Content-Type": "application/json" },
        //                         body: JSON.stringify(selectedItem)
        //                     })
        //                     .then(response => {
        //                         // Handle the response from the server if needed
        //                         console.log(id)
        //                         // console.log(count)
        //                     })
        //                     .catch(error => {
        //                         console.error("Error while adding the item:", error);
        //                     });
        //                 }
        //             }
        //         })
        //         .catch(error => {
        //             console.error("Error while checking the existing item:", error);
        //         });
        // }
        

// const HandleCart = (id) => {
//     // Check if the selected item already exists in the "Cartblogs" server
//     fetch(`http://localhost:8000/Cartblogs`)
//         .then(response => response.json())
//         .then(existingItem => {
//             if (existingItem) {
//                 // If the item already exists, update the count
//                 existingItem.count = (existingItem.count || 0) + 1;

//                 // Update the item on the "Cartblogs" server
//                 fetch(`http://localhost:8000/Cartblogs/${id}`, {
//                     method: 'PUT',
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify(existingItem)
//                 })
//                 .then(response => {
//                     // Handle the response from the server if needed
//                 })
//                 .catch(error => {
//                     console.error("Error while updating the item:", error);
//                 });
//             } else {
//                 // If the item doesn't exist, add it as a new item
//                 const selectedItem = blogs.find(blog => blog.id === id);

//                 if (selectedItem) {
//                     // Set an initial count of 1
//                     selectedItem.count = 1;

//                     // Add the item to the "Cartblogs" server using a POST request
//                     fetch("http://localhost:8000/Cartblogs", {
//                         method: 'POST',
//                         headers: { "Content-Type": "application/json" },
//                         body: JSON.stringify(selectedItem)
//                     })
//                     .then(response => {
//                         // Handle the response from the server if needed
//                     })
//                     .catch(error => {
//                         console.error("Error while adding the item:", error);
//                     });
//                 }
//             }
//         })
//         .catch(error => {
//             console.error("Error while checking the existing item:", error);
//         });
// }

// const HandleCart = (id) => {
//     // Check if the selected item already exists in the new object
//     fetch(`http://localhost:8000/Cartblogs`)
//         .then(response => response.json())
//         .then(selectedItems => {
//             const selectedItem = blogs.find(item => item.id === id);
//             if (selectedItem) {
//                 // If the item already exists, increment the count
//                 selectedItem.count = (selectedItem.count || 0) + 1;
//             } else {
//                 // If the item doesn't exist, add it as a new item
//                 selectedItems.push({ id, count: 1 });
//             }

//             // Update the new object on the JSON server
//             fetch(`http://localhost:8000/Cartblogs`, {
//                 method: 'POST', // Use PUT to update the entire object
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(selectedItems)
//             })
//             .then(response => {
//                 // Handle the response from the server if needed
//             })
//             .catch(error => {
//                 console.error("Error while updating the selected items:", error);
//             });
//         })
//         .catch(error => {
//             console.error("Error while checking the existing item:", error);
//         });
// }


    const HandleCart = (id) =>{
        const selectedItem = blogs.find(blog => blog.id === id)
    
        if(selectedItem.count === 0)
        {
            selectedItem.count +=1
            fetch(`http://localhost:8000/Cartblogs`, {
            method: 'POST', // Use PUT to update the entire object
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(selectedItem)
        })
        .then(console.log(id))
        .then(response => response.json()
            // Handle the response from the server if needed)
        )
        .catch(error => {
            console.error("Error while updating the selected items:", error);
        });
        }
    
        else if(selectedItem.count >= 0)
        {
            console.log("hi")
             
              selectedItem.count +=1
              fetch(`http://localhost:8000/Cartblogs/${selectedItem.id}`, {
                method: 'PUT', // or 'PATCH' if you want to partially update
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(selectedItem),
              })
                .then(response => response.json())
                .then(selectedItem => {
                  console.log('Updated resource:', selectedItem.count);
                })
                .catch(error => {
                  console.error('Error updating resource:', error);
                });
        

// const HandleCart = (id) =>{
//     const selectedItem = blogs.find(blog => blog.id === id)

//     if(selectedItem.count === 0)
//     {
//         selectedItem.count +=1
//         fetch(`http://localhost:8000/Cartblogs`, {
//         method: 'POST', // Use PUT to update the entire object
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(selectedItem)
//     })
//     .then(console.log(id))
//     .then(response => response.json()
//         // Handle the response from the server if needed)
//     )
//     .catch(error => {
//         console.error("Error while updating the selected items:", error);
//     });
//     }

//     else if(selectedItem.count >= 0)
//     {
//         console.log("hi")
         
//           selectedItem.count +=1
//           fetch(`http://localhost:8000/Cartblogs/${selectedItem.id}`, {
//             method: 'PUT', // or 'PATCH' if you want to partially update
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(selectedItem),
//           })
//             .then(response => response.json())
//             .then(selectedItem => {
//               console.log('Updated resource:', selectedItem.count);
//             })
//             .catch(error => {
//               console.error('Error updating resource:', error);
//             });
          
        
        // fetch(`http://localhost:8000/Cartblogs/${selectedItem.id}`, {
        //     method: 'PUT',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(selectedItem)
        // })
        // .then(response => response.json())
        // .then(updatedItem => {
        //     console.log(updatedItem); // Handle the response from the server if needed
        // })
        // .catch(error => {
        //     console.error("Error while updating the item:", error);
        // });
    //     fetch(`http://localhost:8000/Cartblogs/${selectedItem.id}`)
    //     .then(response => response.json())
    //     .then(selectedItem => {
    //     // Increment the count for the retrieved item
    //      selectedItem.count += 1;  
    //    });

    }

   }
   
    



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
        <div className="main">
            { blogs && < Bloglist blogs={blogs} title="all the blogs" HandleCart={HandleCart}/>
            }
        </div>
      );
}
 
export default Home;