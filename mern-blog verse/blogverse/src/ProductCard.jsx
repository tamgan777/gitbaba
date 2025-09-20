

const ProductCard = () => {
    return (
        <div className=" border-2 border-gray-600 p-4 m-2 flex flex-wrap justify-center gap-10 rounded-lg">
            {/* <img src="https://via.placeholder.com/150" alt="Sample Product" className="w-full h-48 object-cover mb-4" /> */}
           {/*<div className="w-64 border flex flex-col rounded-lg p-4 items-center bg-gray-100">
                <img src="vite.svg" alt="Sample Product" className="w-32 h-32 rounded-full border-2 border-blue-500" />
                <h2 className="text-xl font-bold text-blue-800">Sample Product</h2>
                <p className="text-md font-semibold text-gray-600 text-center">This is a sample product description.</p>
                <p className="text-2xl font-bold text-green-700">$29.99</p>
                <button className="border mt-3 py-3 text-white bg-blue-600 hover:bg-blue-800 cursor-pointer w-full rounded-md">Add to Cart</button>
            </div>*/}
            <div className="w-64 border flex flex-col rounded-lg p-4 items-center bg-gray-100">
                <img src="vite.svg" alt="Sample Product" className="w-32 h-32 rounded-full border-2 border-blue-500" />
                <h2 className=" text-xl font-bold text-blue-800">Sample Product</h2>
                <p className="text-md font-semibold text-gray-600 text-center">This is a sample product description.</p>
                <p className="text-2xl font-bold text-green-700">$29.99</p>
                <button className="border mt-3 py-3 text-white bg-blue-600 hover:bg-blue-800 cursor-pointer w-full rounded-md">Add to Cart</button>
            </div>
            <div className="w-64 border flex flex-col rounded-lg p-4 items-center bg-gray-100">
                <img src="vite.svg" alt="Sample Product" className="w-32 h-32 rounded-full border-2 border-blue-500" />
                <h2 className="text-xl font-bold text-blue-800">Sample Product</h2>
                <p className="text-md font-semibold text-gray-600 text-center">This is a sample product description.</p>
                <p className="text-2xl font-bold text-green-700">$29.99</p>
                <button className="border mt-3 py-3 text-white bg-blue-600 hover:bg-blue-800 cursor-pointer w-full rounded-md">Add to Cart</button>
            </div>
            <div className="w-64 border flex flex-col rounded-lg p-4 items-center bg-gray-100">
                <img src="vite.svg" alt="Sample Product" className="w-32 h-32 rounded-full border-2 border-blue-500" />
                <h2 className="text-xl font-bold text-blue-800">Sample Product</h2>
                <p className="text-md font-semibold text-gray-600 text-center">This is a sample product description.</p>
                <p className="text-2xl font-bold text-green-700">$29.99</p>
                <button className="border mt-3 py-3 text-white bg-blue-600 hover:bg-blue-800 cursor-pointer w-full rounded-md">Add to Cart</button>
            </div>
            <div className="w-64 border flex flex-col rounded-lg p-4 items-center bg-gray-100">
                <img src="vite.svg" alt="Sample Product" className="w-32 h-32 rounded-full border-2 border-blue-500" />
                <h2 className="text-xl font-bold text-blue-800">Sample Product</h2>
                <p className="text-md font-semibold text-gray-600 text-center">This is a sample product description.</p>
                <p className="text-2xl font-bold text-green-700">$29.99</p>
                <button className="border mt-3 py-3 text-white bg-blue-600 hover:bg-blue-800 cursor-pointer w-full rounded-md">Add to Cart</button>
            </div>        
        </div>
    );
};

export default ProductCard;