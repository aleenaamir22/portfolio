import React from 'react'

const About = () => {
  return (
    <div id='about' style={{backgroundColor:"gray",color:"Black"}}>
      <h1 style={{color:"beige",fontWeight:"bold",fontSize:"2.8em", textAlign:"center"}}>About</h1>
      <section className="about-introduction bg-gray-100  max-w-xl rounded-md shadow-xl my-1  p-8  text-center  justify-center mx-auto">
        <h1 style={{color:"orange" , fontSize:"1.5em",fontWeight:"bold"}}>Welcome to CodeWhisper Creative Space</h1>
        <p>
          Hi, I'm <strong>Aleena Amir</strong>, a passionate graphic designer, web developer, and UI/UX designer. I created CodeWhisper Creative Space to bring together the worlds of creativity and technology. Whether you're a startup, a small business, or an individual, I craft experiences that leave a lasting impression through stunning designs and intuitive user interfaces.
        </p>
      </section>
        <br></br>
      <section className="about-vision bg-gray-100  max-w-xl rounded-md shadow-xl my-1  p-8  text-center  justify-center mx-auto" >
        <h2 style={{color:"yellow" , fontSize:"1.5em"}} >Our Vision</h2>
        <p>
          At CodeWhisper Creative Space, we believe that design is more than just aesthetics — it's about crafting experiences that resonate. I aim to bridge the gap between creative design and functional development, ensuring that each project is both visually striking and user-friendly.
        </p>
      </section>
<br></br>
      <section className="about-services bg-gray-100  max-w-xl rounded-md shadow-xl my-1  p-8  text-center  justify-center  mx-auto">
        <h2 style={{color:"yellow" , fontSize:"1.5em"}}>What I Do</h2>
        <ul>
          <li><strong>Graphic Design:</strong> Bringing your brand's identity to life with custom logos, marketing materials, and visuals that connect with your audience.</li>
          <li><strong>Web Development:</strong> Building responsive, fast, and interactive websites tailored to meet your business goals and user needs.</li>
          <li><strong>UI/UX Design:</strong> Crafting seamless user interfaces and experiences to ensure that your website or app is easy to use and visually engaging.</li>
        </ul>
      </section>
          <br></br>
      <section className="about-approach bg-gray-100  max-w-xl rounded-md shadow-xl my-1  p-8  text-center  justify-center mx-auto">
        <h2 style={{color:"yellow" , fontSize:"1.5em"}}>My Approach</h2>
        <p>
          I approach every project with a passion for creativity and an eye for detail. My process includes collaborating with clients, understanding their vision, and combining design with development to create solutions that are both functional and beautiful. I focus on clear communication, user-centric designs, and making sure that every project is a reflection of the client's unique needs and goals.
        </p>
      </section>
            <br></br>
      <section className="about-contact bg-gray-100  max-w-xl rounded-md shadow-xl my-1  p-8  text-center  justify-center mx-auto">
        <h2 style={{color:"yellow" , fontSize:"1.5em"}}>Let's Work Together</h2>
        <p >
          Whether you're starting a new project or looking to revamp your current brand or website, I would love to help you bring your ideas to life. Reach out to me, and let's create something amazing together!
        </p>
      </section>
    </div>
  )
}

export default About
