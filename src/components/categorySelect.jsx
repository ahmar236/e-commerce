

async function getData() {
    try {
        var res = await fetch('http://localhost:3000/api/categories');
        var res = await res.json()
        return res

    } catch (error) {
        console.log(error)
    }
}

const CategorySelect = async () => {

    const data = await getData()

    return (
        <div>
            <select id="category" class="bg-gray-50 pl-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected="" className='ml-2'>Select category</option>
                {data?.message.map((v, i) => {
                    return (
                        <div key={i} >
                            <option value={v?.title}>{v?.title}</option >
                        </div>
                    )
                })}

            </select >
        </div >
    )
}

export default CategorySelect
