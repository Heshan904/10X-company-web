import React from 'react';
import NaviBar from '../component/NaviBar';
import Footer from '../component/Footer';
import './project.css';
import comweb from '../images/project/proc.png';

const hilight = { color: 'rgba(4, 255, 20, 1)',fontSize:"60px",BlobEvent}


function Project() {
  return (
    <>
      <NaviBar />
      <div className="pro">
        <div className="prh">
                <h1 style={{ fontSize:"40px"}}>Our compleated <span style={hilight} >projects</span></h1>

          </div>
        <div className="subpro">
          
          <div
            className="img"
            style={{
              backgroundImage: `url(${comweb})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center', // You can adjust this
              width: '100%',
                  // You can also use a fixed width if needed
            }}
          ></div>
          <div className="pdis">
            <h1>Our company website</h1>
            <p>The frontend is developed using React.js and Bootstrap, offering a seamless, fast, and interactive interface optimized for all devices. With component-based architecture and responsive design, the site ensures high performance and accessibility.</p>
            <p>The backend is powered by Node.js and MySQL, providing a robust and scalable foundation for data management, API integrations, and secure server-side operations.</p>
            <a href="https://10-x-company-web.vercel.app/" target='_blank' rel='noreferrer'><button style={{border:"2px solid green", borderRadius:"10px", width:"fit-content", cursor:"pointer",fontSize:"20px",alignSelf:"center" ,color:'black'}}>View preview</button></a>
          </div>
        </div>
        <div className="subpro">
          
          <div
            className="img"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/da2wbtci0/image/upload/v1757611533/WhatsApp_Image_2025-09-09_at_8.45.48_PM_e5broq.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center', // You can adjust this
              width: '100%',
                  // You can also use a fixed width if needed
            }}
          ></div>
          <div className="pdis">
            <h1>Library Management System</h1>
            <p>Our Library Management System is a simple yet powerful solution designed to streamline the process of managing books and members within an organization. It provides an easy-to-use interface where administrators can add, update, and organize books, while members can search, borrow, and return them efficiently.</p>
            <p>With features such as real-time book availability, member records, and borrowing history, the system reduces manual work and ensures smooth library operations. Built with scalability and user-friendliness in mind, it can be adapted for schools, universities, and small organizations looking for a reliable digital library solution.</p>
            <a href="https://my-portfolio-theta-ivory-88.vercel.app/" target='_blank' rel='noreferrer'><button style={{border:"2px solid green", borderRadius:"10px", width:"fit-content", cursor:"pointer",fontSize:"20px",alignSelf:"center" ,color:'black'}}>View preview</button></a>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
}

export default Project;
