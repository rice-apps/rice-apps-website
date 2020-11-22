import '../main.css';

const Navbar = () => {
  return (
    <div className="App">

      <nav class="z-10 flex items-center justify-between flex-wrap bg-white-500 p-4">

        {/*}
        Optional Button For Responsive Menu (Mobile Only)
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button> 
        </div>*/}

        <div class="w-full block flex-grow lg:flex lg:items-center lg:h-auto">

          <div class="text-md lg:flex-grow">
            <a href="#home" class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 
            hover:text-teal-600 ml-20">
              Home
            </a>
            <a href="#projects" class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 
            hover:text-teal-600 ml-20">
              Projects
            </a>
            <a href="#events" class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 
            hover:text-teal-600 ml-20">
              Events
            </a>
            <a href="#resources" class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 
            hover:text-teal-600 ml-20">
              Resources
            </a>
            <a href="#about-us" class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 
            hover:text-teal-600 ml-20">
              About Us
            </a>
          </div>

          <div>
            <a href="#" class="z-50 inline-block text-md px-4 py-2 leading-none rounded-3xl text-teal-600 
            -600 hover:border-transparent hover:text-teal-400 bg-white mt-4 lg:mt-0 mr-3">
              Dark Mode
              </a>
          </div>

        </div>
    </nav>
    </div>
  );
}

export default Navbar;