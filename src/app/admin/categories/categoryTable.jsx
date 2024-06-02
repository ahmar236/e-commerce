'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";

const CategoryTable = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/categories');
                const data = await res.json();
                setCategories(data.message);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (categoryId) => {
        try {
            // Send DELETE request to your API endpoint
            await fetch(`http://localhost:3000/api/categories/${categoryId}`, {
                method: 'DELETE'
            });

            // Update categories state after successful deletion
            setCategories(categories.filter(category => category._id !== categoryId));
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };

    return (
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">Category Title</th>
                            <th scope="col" className="px-6 py-3">Description</th>
                            <th scope="col" className="px-6 py-3 text-center">DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(category => (
                            <tr className="bg-white border-b" key={category._id}>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{category.title}</td>
                                <td className="px-6 py-4">{category.desc}</td>
                                <td className="px-6 py-4 text-center">
                                    <button onClick={() => handleDelete(category._id)}>
                                        <i className="bx bx-comment-x"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="w-80 text-center p-4 mt-9 bg-blue-500 rounded-lg shadow-md">
                <Link href="/admin/addcatagory">Add New Category</Link>
            </div>
        </div>
    );
};

export default CategoryTable;
