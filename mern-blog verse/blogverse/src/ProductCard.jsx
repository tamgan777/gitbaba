import NavBar from "./NavBar";

const ProductCard = () => {
    // Sample product data - easily expandable
    const products = [
        {
            id: 1,
            name: "Premium Headphones",
            description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
            price: 129.99,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            category: "Electronics"
        },
        {
            id: 2,
            name: "Smart Watch",
            description: "Feature-rich smartwatch with fitness tracking, heart rate monitor, and GPS.",
            price: 299.99,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            category: "Wearables"
        },
        {
            id: 3,
            name: "Wireless Speaker",
            description: "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
            price: 89.99,
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            category: "Audio"
        },
        {
            id: 4,
            name: "Gaming Mouse",
            description: "Precision gaming mouse with RGB lighting and customizable DPI settings.",
            price: 59.99,
            image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            category: "Gaming"
        },
        {
            id: 5,
            name: "Laptop Stand",
            description: "Ergonomic aluminum laptop stand with adjustable height and cooling design.",
            price: 49.99,
            image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            category: "Accessories"
        },
        {
            id: 6,
            name: "USB-C Hub",
            description: "Multi-port USB-C hub with HDMI, USB 3.0, and fast charging support.",
            price: 39.99,
            image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            category: "Accessories"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
            <NavBar />
            
            {/* Header Section */}
            <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Our Products
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our carefully curated collection of premium products designed to enhance your lifestyle.
                    </p>
                </div>
            </div>

            {/* Products Grid */}
            <div className="w-full px-4 sm:px-6 lg:px-8 pb-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                        {products.map((product) => (
                            <div 
                                key={product.id}
                                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border border-gray-100"
                            >
                                {/* Image Section */}
                                <div className="relative overflow-hidden bg-gray-50">
                                    <img 
                                        src={product.image} 
                                        alt={product.name}
                                        className="w-full h-48 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                                        <span className="text-xs font-medium text-purple-600">
                                            {product.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-4 sm:p-6 flex flex-col h-full">
                                    <div className="flex-1">
                                        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                                            {product.name}
                                        </h2>
                                        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                                            {product.description}
                                        </p>
                                    </div>
                                    
                                    {/* Price and Button */}
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-2xl sm:text-3xl font-bold text-green-600">
                                                ${product.price}
                                            </span>
                                            <div className="flex items-center space-x-1 text-yellow-400">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Load More Section */}
            <div className="w-full px-4 sm:px-6 lg:px-8 pb-12">
                <div className="max-w-7xl mx-auto text-center">
                    <button className="bg-white hover:bg-gray-50 text-purple-600 font-semibold py-3 px-8 rounded-lg border-2 border-purple-200 hover:border-purple-300 transition-all duration-200 transform hover:scale-105 shadow-md">
                        Load More Products
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;