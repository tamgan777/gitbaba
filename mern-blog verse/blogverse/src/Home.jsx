import NavBar from "./NavBar";

function Home() {
    const posts = [{
        id: 1,
        title: "Getting Started with React and Tailwind CSS",
        author: "Prem Sagar",
        timeRead: " 5 min read",
        postedOn: "Jan 10, 2024",
        content: "React and Tailwind CSS are a powerful combination for building modern web applications. In this article, we'll explore how to set up a React project with Tailwind CSS and create a simple responsive layout.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 2,
        title: "Understanding JavaScript Closures",
        author: "Asha Deepthi",
        timeRead: " 7 min read",
        postedOn: "Dec 05, 2023",
        content: "JavaScript closures are a fundamental concept that every developer should understand. In this article, we'll dive deep into closures, how they work, and practical examples of their usage.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 3,
        title: "A Guide to Responsive Web Design",
        author: "Alekhya Rani",
        timeRead: " 6 min read",
        postedOn: "Nov 20, 2023",
        content: "Responsive web design is essential in today's mobile-first world. This guide will walk you through the principles of responsive design and how to implement them using CSS and modern frameworks.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 4,
        title: "Exploring the New Features of ES2021",
        author: "Sravanthi",
        timeRead: " 8 min read",
        postedOn: "Oct 01, 2023",
        content: "ES2021 introduces several new features that enhance the JavaScript language. In this article, we'll explore these features and how they can improve your code.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 5,
        title: "Mastering Flexbox for Layout Design",
        author: "Leela Avinash",
        timeRead: " 10 min read",
        postedOn: "Sep 15, 2023",
        content: "Flexbox is a powerful layout module in CSS that allows for flexible and responsive design. This article will guide you through the basics of Flexbox and how to use it effectively in your projects.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 6,
        title: "Introduction to TypeScript for JavaScript Developers",
        author: "Charan Teja",
        timeRead: " 9 min read",
        postedOn: "Aug 10, 2023",
        content: "TypeScript is a superset of JavaScript that adds static typing and other features to enhance developer productivity. This introduction will cover the basics of TypeScript and how to get started.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }]

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar />
            
            {/* Hero Section */}
            <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Welcome back, Dev Astra
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                        Discover amazing stories, insights, and ideas from our community of writers.
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                            Write a New Post
                        </button>
                        <button className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                            View My Posts
                        </button>
                    </div>
                </div>
            </div>

            {/* Posts Grid */}
            <div className="w-full px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {posts.map((post) => (
                            <article 
                                key={post.id} 
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                            >
                                {/* Image Section */}
                                <div className="relative overflow-hidden">
                                    <img 
                                        className="w-full h-48 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-300" 
                                        src={post.Image} 
                                        alt={post.title}
                                        loading="lazy"
                                    />
                                    <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 px-3 py-2 rounded-full text-xs font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                                        Save
                                    </button>
                                </div>
                                
                                {/* Content Section */}
                                <div className="p-4 sm:p-6">
                                    {/* Author Info */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <img 
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-md" 
                                            src={post.profilePic} 
                                            alt={post.author}
                                            loading="lazy"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm sm:text-base font-semibold text-gray-900 truncate">
                                                {post.author}
                                            </p>
                                            <p className="text-xs sm:text-sm text-gray-500">
                                                {post.postedOn} • {post.timeRead}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Title and Content */}
                                    <div className="space-y-3">
                                        <h2 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                                            {post.title}
                                        </h2>
                                        <p className="text-sm sm:text-base text-gray-600 line-clamp-3 leading-relaxed">
                                            {post.content}
                                        </p>
                                    </div>
                                    
                                    {/* Read More Button */}
                                    <div className="mt-4 sm:mt-6 flex justify-end">
                                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline transition-colors duration-200 group-hover:font-semibold">
                                            Read more →
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;