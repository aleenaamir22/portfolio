import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans" id="portfolio">
      {/* Header Section */}
      <header className="bg-yellow-500 p-6 text-center text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Aleena Amir</h1>
          <p className="text-lg">Web Developer & Designer</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {/* About Section */}
        <section id="about" className="my-8 bg-white shadow-md p-6 rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-orange-300">About Me</h2>
          <p>
            Hi! I&apos;m Aleena Amir, a passionate web developer and designer who
            loves creating user-friendly, responsive, and visually appealing
            websites. My goal is to combine creativity and functionality to
            deliver exceptional digital experiences.
          </p>
        </section>

        {/*Personal info*/}
        <section id="personalinformation" className="my-8 bg-white shadow-md p-6 rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-orange-300">Personal Information</h2>
          <ul className="list-disc pl-6">
            <li>Name:Aleena Amir</li>
            <li>Age:18</li>
            <li>Date Of Birth:22/11/2006</li>
           </ul>
        </section>
                    {/* contact info  */}
        <section id="contactinformation" className="my-8 bg-white shadow-md p-6 rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-orange-300">Contact information</h2>
          <ul className="list-disc pl-6">
            <li>Email:code.whisper@gmail.com</li>
            <li>Phone:03XXXXXXXXX</li>
            <li>Location:Karachi,Pakistan</li>
           </ul>
        </section>
        
               {/*Qualification */}
               <section id="qualification" className="my-8 bg-white shadow-md p-6 rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-orange-300">Qualification</h2>
          <ul className="list-disc pl-6">
            <li>Matriculation (2022-23)</li>
            <li>Currently in HSC Part II</li>
            </ul>
        </section>

        {/* Hobbies Section */}
        <section id="hobbies" className="my-8 bg-white shadow-md p-6 rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-orange-300">Hobbies</h2>
          <ul className="list-disc pl-6">
            <li>Photography</li>
            <li>Traveling</li>
            <li>Graphic Design</li>
            <li>Reading</li>
          </ul>
        </section>

        {/* Skills Section */}
        <section id="skills" className="my-8 bg-white shadow-md p-6 rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-orange-300">Skills</h2>
          <ul className="list-disc pl-6">
            <li>HTML, CSS, JavaScript</li>
            <li>Next.js</li>
            <li>GitHub</li>
            <li>Responsive Web Design</li>
            <li>UI/UX Design</li>
            </ul>
        </section>
           {/*   Experties     */}
        <section id="experties" className="my-8 bg-white shadow-md p-6 rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-orange-300">Experties</h2>
          <ul className="list-disc pl-6">
            <li>Web Development</li>
            <li>Graphic Designing</li>
            <li>Simple Games</li>
           </ul>
        </section>

 {/* FUTURE GOALS Section */}
 <section id="goals" className="my-8 bg-white shadow-md p-6 rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-orange-300">Future Goals</h2>
          <p>
           Aspiring to become an expert programmer and excited to serve to the technology sector.Delving deeper into advanced learning of new technology and artificial intelligence(AI).Focus on growth and impact.
          </p>
        </section>
               {/*expert */}
          <section id="personal-and-oraganizational" className="my-8 bg-white shadow-md p-6 rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-orange-300">Personal & Organizational Experties</h2>
      <div className="experience-item">
        <h3 style={{color:"gold", fontSize:"1.2em"}}>Personal</h3>
        <ul>
          <li>Time management</li>
          <li>Self discipline</li>
          <li>Creativity</li>
          <li>Technical skills</li>
      
        </ul>
      </div>
      <div className="experience-item">
        <h3 style={{color:"gold", fontSize:"1.2em"}}>Organizational</h3>
        <ul>
          <li>Team Work</li>
          <li>Problem Solvig</li>
          <li>Quality Managem</li>
          <li> Organizational Ethics</li>
        </ul>
      </div>
    </section>
    <p className="mt-4 text-center">
  <a
    href="/portfolio.pdf"
    className="text-yellow-400 underline hover:text-yellow-300"
    download="Aleena-Portfolio.pdf"
  >
    Download Portfolio
  </a>
</p>
<div className="p-3 w-full pt-8 mt-8 border-t border-gray-200 text-center">
      <div className="flex items-center justify-center space-x-6">
        {/* Email */}
        <a 
          href="mailto:codewhisper@gmail.com" 
          className="text-gray-500 flex items-center space-x-2"
        >
          <SiGmail className="text-2xl hover:text-[red]" />
         {/* <span>codewhisper@gmail.com</span>*/}
        </a>
          
        {/* Instagram */}
        <Link 
          target="_blank" 
          href="https://www.instagram.com/code._.whispers" 
          className="text-gray-500"
        >
          <FaSquareInstagram className="text-2xl hover:text-[#cc2366]" />
        </Link>

        {/* LinkedIn */}
        <Link 
          target="_blank" 
          href="https://www.linkedin.com/in/aleena-amir-5995482b6" 
          className="text-gray-500"
        >
          <FaLinkedin className="text-2xl hover:text-[blue]" />
        </Link>
        </div>
     </div>
      </main>
    </div>

        
  );
};

export default Portfolio;
