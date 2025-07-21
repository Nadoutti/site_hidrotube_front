

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Footer Section</h2>
            <p className="text-sm">© 2023 Your Company. All rights reserved.</p>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-sm hover:underline">Home</a>
            <a href="#" className="text-sm hover:underline">About</a>
            <a href="#" className="text-sm hover:underline">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
