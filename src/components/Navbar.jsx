export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-400">Portfolio</h1>
      <ul className="flex gap-6">
        <li><a href="#home" className="hover:text-blue-400">Home</a></li>
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
        <li><a href="#education" className="hover:text-blue-400">Education</a></li>
        <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
        <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  )
}
