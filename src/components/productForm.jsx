'use client'
import React, { useEffect, useState } from "react";
import GoBackButton from "../components/goBackButton";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import Loader from "../components/loader";
import { useRouter } from "next/navigation";
// import CategorySelect from "../components/categorySelect"
import Link from "next/link";

const ProductAddForm = () => {
    const [options, setOptions] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        stock: "",
        price: "",
        brand: "",
        category: "",
        // images: "",
        desc: "",
    });
    // Getting catagories =================================================================/
    async function getData() {
        try {
            const res = await fetch("http://localhost:3000/api/categories");
            const resjson = await res.json();
            console.log(resjson);
            setOptions(resjson.message);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    // ChangeHandler =======================================================================/
    function changeHandler(e) {
        const { name, value } = e.target;
        // console.log(value);
        setFormData({ ...formData, [name]: value });
        // setOption({ ...Option, [name]: value });
    }
    console.log(formData);

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await axios.post("/api/products", { ...formData });

            if (res?.data?.success) {
                toast.success("Summbmited");
                setTimeout(() => {
                    router.back();
                }, 1000);
            }
        } catch (error) {
            console.log(error?.response?.data);
            if (error?.response?.data?.success == false) {
                toast.error("error happen");
            }
        } finally {
            setLoading(false);
        }

        console.log(formData)
    }
    return (
        <div>
            <Toaster />
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Product</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div class="sm:col-span-2">
                                <label htmlFor='name' class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name *</label>
                                <input
                                    type="text"
                                    name={"title"}
                                    value={formData.title}
                                    id="name"
                                    onChange={(e) => changeHandler(e)}
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type product name"
                                    required />
                            </div>
                            <div class="w-full">
                                <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                                <input
                                    type="text"
                                    name={"brand"}
                                    value={formData.brand}
                                    id="brand"
                                    onChange={changeHandler}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Product brand"
                                    required="" />
                            </div>
                            <div class="w-full">
                                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input
                                    type="number"
                                    name={"price"}
                                    value={formData.price}
                                    id="price"
                                    onChange={changeHandler}
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="$2999"
                                    required="" />
                            </div>
                            <div>
                                <select
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    onChange={changeHandler}
                                    name="category"
                                >
                                    <option selected="" className="ml-2">
                                        Select category
                                    </option>
                                    {options?.map((v, i) => (
                                        <option key={i} value={v._id}>
                                            {v.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                <Link href="/admin/addcatagory">Add New Category</Link>
                            </div>
                            <div>
                                <label for="stock" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock Qty *</label>
                                <input
                                    type="number"
                                    name={"stock"}
                                    id="stock"
                                    value={formData.stock}
                                    onChange={changeHandler}
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="12"
                                    required="" />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea
                                    id="desc"
                                    name={"desc"}
                                    value={formData.desc}
                                    onChange={changeHandler}
                                    rows="8"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Your description here"></textarea>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <button

                                class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                {loading ? <Loader /> : "Add product"}
                            </button>
                            <GoBackButton />

                        </div>
                    </form>
                </div>
            </section >
        </div >
    )
}

export default ProductAddForm
