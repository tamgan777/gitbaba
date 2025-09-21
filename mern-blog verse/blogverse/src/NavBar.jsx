import { Link } from 'react-router-dom'
import { Bomb, Menu, X } from 'lucide-react'
import { useState } from 'react'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="w-full bg-gray-900 border-b border-gray-700 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-2">
                        <Bomb className="text-yellow-400 w-6 h-6 sm:w-8 sm:h-8" />
                        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                            BlogVerse
                        </p>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link 
                            to="/" 
                            className="text-purple-400 hover:text-purple-300 hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                        >
                            Home
                        </Link>
                        <Link 
                            to="/ProductCard" 
                            className="text-purple-400 hover:text-purple-300 hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                        >
                            Product Card
                        </Link>
                    </div>

                    {/* Desktop Auth Links */}
                    <div className="hidden md:flex items-center space-x-2">
                        <Link 
                            to="/Login" 
                            className="text-purple-400 hover:text-purple-300 hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                        >
                            Login
                        </Link>
                        <Link 
                            to="/SignUp" 
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                        >
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-purple-400 hover:text-purple-300 focus:outline-none focus:text-purple-300 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-700">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
                            <Link 
                                to="/" 
                                className="text-purple-400 hover:text-purple-300 hover:bg-gray-800 block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link 
                                to="/ProductCard" 
                                className="text-purple-400 hover:text-purple-300 hover:bg-gray-800 block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Product Card
                            </Link>
                            <div className="border-t border-gray-700 pt-2 mt-2">
                                <Link 
                                    to="/Login" 
                                    className="text-purple-400 hover:text-purple-300 hover:bg-gray-800 block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Login
                                </Link>
                                <Link 
                                    to="/SignUp" 
                                    className="bg-purple-600 hover:bg-purple-700 text-white block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 mt-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar;