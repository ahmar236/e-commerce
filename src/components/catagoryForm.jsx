'use client'
import React, { useState } from "react"
// import CategorySelect from './categorySelect'
import Link from 'next/link'
import axios from "axios"
import GoBackButton from "./goBackButton"
import { toast, Toaster } from "react-hot-toast";
import Loader from "../components/loader";
import { useRouter } from "next/navigation";

const CatagoryAddForm = () => {

    const [formData, setFormData] = useState({
        title: "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    };

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const res = await axios.post("/api/categories", { ...formData });

            if (res?.data?.success) {
                toast.success("Summbmited");
                setTimeout(() => {
                    router.back();
                }, 1000);
            }
        } catch (error) {
            if (error?.response?.data?.success === false) {
                toast.error(error?.response?.data?.Message);
            }
        } finally {
            setLoading(false);
        }
    };



    return (
        <div>
            <Toaster />
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Catagory</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div class="sm:col-span-2">
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Category Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.title}
                                    name={"title"}
                                    onChange={changeHandler}
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Category name" required="" />
                            </div>

                            <div class="sm:col-span-2">
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Description</label>
                                <textarea
                                    id="description"
                                    value={formData.desc}
                                    name={"desc"}
                                    onChange={changeHandler}
                                    rows="8"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <button
                                type="submit"
                                class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                {loading ? <Loader /> : "Add Catagory"}
                            </button>
                            <GoBackButton />

                        </div>
                    </form>
                </div>
            </section >
        </div >
    )
}

export default CatagoryAddForm
