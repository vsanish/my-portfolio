export default function Hero() {
  return (
    <section id="home" className="text-white bg-gradient-to-b from-black to-gray-900 min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <img src="/profile.jpg" className="rounded-full w-40 mb-4 border-4 border-blue-400" />
      <h1 className="text-4xl md:text-5xl font-bold mb-2">
        Hi, I'm <span className="text-blue-400">Anish</span>
      </h1>
      <p className="text-lg mb-2">Frontend Developer</p>
      <p className="text-gray-300 max-w-xl">I specialize in HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS, Python, C, C++, Flask, UI/UX, and data analysis to bring ideas to life.</p>
      <div className="mt-6 flex gap-4">
        <a href="#contact" className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">Get In Touch</a>
        <a href="/AnishCV.pdf" className="px-4 py-2 border rounded">View Resume</a>
      </div>
    </section>
  )
}
