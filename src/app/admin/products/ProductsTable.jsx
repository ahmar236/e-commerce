'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";

const ProductTable = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/products');
                const data = await res.json();
                setProducts(data.message);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (productId) => {
        try {
            // Send DELETE request to your API endpoint
            await fetch(`http://localhost:3000/api/products/${productId}`, {
                method: 'DELETE'
            });

            // Update products state after successful deletion
            setProducts(products.filter(product => product._id !== productId));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">Product Name</th>
                            <th scope="col" className="px-6 py-3">Stock</th>
                            <th scope="col" className="px-6 py-3">Category</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3 text-center">DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr className="bg-white border-b" key={product._id}>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{product.title}</td>
                                <td className="px-6 py-4">{product.stock}</td>
                                <td className="px-6 py-4">{product.category.title}</td>
                                <td className="px-6 py-4">{product.price}</td>
                                <td className="px-6 py-4 text-center">
                                    <button onClick={() => handleDelete(product._id)}>
                                        <i className="bx bx-comment-x"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="w-80 text-center p-4 mt-9 bg-blue-500 rounded-lg shadow-md">
                <Link href="/admin/addproducts">Add New Product</Link>
            </div>
        </div>
    );
};

export default ProductTable;
