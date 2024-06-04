// 'use client'
import React from "react";
import Link from "next/link";
import DeleteButton from "../../../components/ProdDel"
// import { Toaster, toast } from 'react-hot-toast';
// import { useRouter } from 'next/navigation';

async function getData() {
    const res = await fetch("http://localhost:3000/api/products", { cache: 'no-store' });
    return res.json();
}

const ProductTable = async () => {
    const data = await getData();

    console.log(data?.message)


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
                        {data?.message.map((v, i) => {
                            return (
                                <tr className="bg-white border-b" key={i}>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{v?.title}</td>
                                    <td className="px-6 py-4">{v?.stock}</td>
                                    <td className="px-6 py-4">{v?.category.title}</td>
                                    <td className="px-6 py-4">{v?.price}</td>
                                    <td className="px-6 py-4 text-center">
                                        <DeleteButton id={v._id} />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="w-80 text-center p-4 mt-9 bg-blue-500 rounded-lg shadow-md">
                <Link href="/admin/addproducts">Add New Product</Link>
            </div>
        </div>
    );
};

export default ProductTable