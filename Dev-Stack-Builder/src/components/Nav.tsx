import logo from '../assets/logo-text.png'

const Nav = () => {
  return (
    <nav className="border-b border-gray-100 bg-white py-5 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6">
      
        <div className="flex items-center">
          <img src={logo} className="h-10 w-auto" alt="DevStack logo" />
        </div>

       
        <ul className="flex items-center space-x-8 text-base font-semibold">
          <li>
            <a href="/" className="text-pink-600">
              Home
            </a>
          </li>
          <li>
            <a href="/technologies" className="text-gray-600 transition-colors hover:text-pink-600">
              Technologies
            </a>
          </li>
          <li>
            <a href="/projects" className="text-gray-600 transition-colors hover:text-pink-600">
              Projects
            </a>
          </li>
          <li>
            <a href="/about" className="text-gray-600 transition-colors hover:text-pink-600">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="text-gray-600 transition-colors hover:text-pink-600">
              Contact
            </a>
          </li>
        </ul>

       
        <div className="flex items-center space-x-5 text-base font-semibold">
          <a href="/signin" className="text-gray-700 transition-colors hover:text-pink-600">
            Sign In
          </a>
          <a
            href="/signup"
            className="rounded-full bg-pink-600 px-7 py-2.5 text-white shadow-md transition-all hover:bg-pink-700"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav