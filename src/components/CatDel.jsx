"use client"
import React from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const DeleteButton = ({ id }) => {
    const router = useRouter()
    const deletePost = async (id) => {
        try {
            const response = await axios.delete(`/api/categories/${id}`);
            if (data.success === true) {
                console.log(response)
                toast.success("deleted")
                router.refresh()
            }
        } catch (error) {
            console.error('Error deleting post:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <Toaster />
            <button className=' active:scale-90 duration-200' onClick={() => deletePost(id)}>
                <i className="bx bxs-trash"></i>
            </button>
        </div>
    );
};


export default DeleteButton;




// "use client"
// import React from 'react';
// import axios from 'axios';
// import { Toaster, toast } from 'react-hot-toast';
// import { useRouter } from 'next/navigation';

// const DeleteButton = ({ id }) => {
//     const router = useRouter()

//     const deletePost = async (id) => {
//         try {
//             console.log('Attempting to delete post with id:', id);
//             const response = await axios.delete(`/api/categories/${id}`);
//             console.log('category deleted:', id, response);
//             toast.success("deleted")
//             router.refresh()
//         } catch (error) {
//             console.error('Error deleting post:', error.response ? error.response.data : error.message);
//         }
//     };

//     return (
//         <div>
//             <Toaster />
//             <button className=' active:scale-90 duration-200' onClick={() => deletePost(id)}>
//                 <i className="bx bxs-trash"></i>
//             </button>
//         </div>
//     );
// };


// export default DeleteButton;
