import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Scroll from "./components/useScroll";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/ui/Technologies";
import { motion } from 'framer-motion';
import Freelance from '../public/photos/Tal Moshel Freelance Logo.png'


function App() {
  return (
    <>
      {/* <Scroll /> */}
      {/* <Sidebar /> */}
      {/* <Home /> */}
      <About />
      <Technologies/>
      <Projects/>
      {/* <Home /> */}

      <main className='contact-container'>
      <section
  id="contact"
  className="flex items-center justify-center"
>
  <div className="container mx-auto px-4 w-full h-full flex flex-col justify-center" style={{ fontSize: '1.5rem' }}>
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontSize: '3.2em', color: 'white' }}>
      Contact Me
    </h2>
    <div className="flex-grow flex justify-center items-center">
      <div className="max-w-md w-full">
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 h-full flex flex-col justify-between"
        >
          <div>
            <label
              htmlFor="name"
              // className="block text-sm font-medium text-gray-300 mb-1"
              style={{fontSize: '2rem', color:'white'}}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              style={{fontSize: '2rem', color:'white'}}

            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              style={{fontSize: '2rem', color:'white'}}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  </div>
</section>
<section style={{color:'white', display: 'flex', flexDirection:'column', alignItems: 'center', textAlign:'left'}} className='contact-info'>
  <img src={Freelance} alt=""  />
  <h2>0522233573</h2>
  <h2>talmoshel444@gmail.com</h2>
</section>
      </main>



      <footer className="bg-gray-900 text-center py-6">
        <p className="text-gray-400">
          &copy; 2024 Tal Moshel. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
