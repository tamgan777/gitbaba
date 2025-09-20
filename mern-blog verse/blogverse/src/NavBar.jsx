const NavBar = () => {
    return (
        <div className="h-16 flex justify-around items-center border-1 border-gray-200 ">
            <div>
                <p className="text-sm md:text-xl font-bold">BlogVerse</p>
            </div>
            <div>
                <button className="text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-800">Home</button>
            </div>
            <div className="items-center flex gap-5">
                <div>
                    <button className="text-gray-700 font-semibold">Sign In</button>
                </div>
                <div>
                    <button className=" bg-blue-700 font-semibold text-white px-4 py-2 rounded-lg">Sign Up</button>
                </div>
            </div>


        </div>
    )
}
export default NavBar;