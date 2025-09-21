import { Link } from 'react-router-dom'
import {Bomb} from 'lucide-react'

const NavBar = () => {
    return (
        <div className="h-full flex justify-around items-center border-1  bg-gray-900 border-gray-200 sm:w-[90%] text-x1">
            <div className='flex absolute '>
                <Bomb className='relative right-1 top-2 text-yellow-50'/>
                <p className=" text-white text-sm  md:text-3xl">BlogVerse</p>
            </div>
            <div className='relative flex right-70'>
                <Link to="/" className=" text-purple-500 px-5 py-2 rounded-lg">Home</Link>
                <Link to="/ProductCard" className="text-purple-500 font-semibold px-4 py-2 rounded-lg">Product Card</Link>

            </div>
            <div className="items-center flex gap-5 relative left-60 ">
                <div>
                    <Link to="/Login" className="text-purple-500 font-semibold">Login</Link>
                </div>
                <div>
                    <Link to="/SignUp" className="text-purple-500 font-semibold px-4 py-2 rounded-lg">Sign Up</Link>
                </div>

            </div>


        </div>
    )
}
export default NavBar;