import React, { useState } from 'react';
import styled from 'styled-components';

const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #232323;
  border-radius: 10px;
  padding: 10px;
`;

const Tab = styled.button`
  flex: 1;
  background-color: ${(props) => (props.active ? '#4A4A4A' : 'transparent')};
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const Content = styled.div`
  margin-top: 20px;
  color: white;
`;

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <p>I am Rahul Yennu, a passionate and driven Computer Science Engineering student at Gayatri Vidya Parishad College of Engineering, with an 8.1 CGPA. Currently pursuing an Industry Ready Certification in Full-stack Development from Nxtwave Disruptive Technologies, I am honing my skills in both frontend and backend technologies. My expertise includes HTML, CSS, JavaScript, React.js, Python, Node.js, and SQLite. I have developed several projects, such as a job searching platform, an e-commerce website, and a GitHub repos browser. My projects reflect my ability to create user-centric solutions and implement secure, scalable applications. Outside of academics, I have a strong interest in cyber security and Android app development. I am also a team player with achievements in sports, including winning college championships in football and cricket</p>;
      case 'experiences':
        return <p>During my academic journey at Gayatri Vidya Parishad College of Engineering, I have gained hands-on experience in both front-end and back-end development. Through my coursework and personal projects, I’ve developed proficiency in technologies such as HTML, CSS, JavaScript, React.js, Python, Node.js, and SQLite. I am currently enhancing my skills through an Industry Ready Certification in Full-stack Development from Nxtwave Disruptive Technologies.

        In my projects, I have designed and implemented a range of applications, including a job searching platform, an e-commerce site, and a tool for browsing popular GitHub repositories. These experiences have honed my abilities in creating responsive, user-friendly interfaces, securing applications with JWT tokens, and managing RESTful API interactions.
        
        I have also demonstrated leadership and teamwork skills by leading my college teams to victory in football and cricket championships, reflecting my ability to collaborate effectively and achieve goals under pressure.</p>;
      case 'recommended':
        return <p>In my role as a developer and aspiring full-stack engineer, I recommend exploring a blend of essential technologies and methodologies to stay ahead in the industry:

        React.js: A powerful library for building dynamic user interfaces. Its component-based architecture and state management make it a go-to for modern web applications.
        
        Node.js & Express: These tools are fundamental for developing scalable server-side applications and RESTful APIs. Node.js's non-blocking architecture and Express's simplicity are key for efficient backend development.
        
        Python: Widely recognized for its versatility and readability, Python is invaluable for scripting, automation, and data analysis. It also supports frameworks like Django and Flask for web development.
        
        Bootstrap: Essential for responsive design, Bootstrap's pre-built components and grid system help streamline the creation of mobile-first, visually appealing web pages.
        
        Cyber Security: Understanding security principles is crucial. Knowledge in this area helps in securing applications against vulnerabilities and protecting user data.
        
        Git & Version Control: Mastery of Git is crucial for managing code changes and collaborating with teams. Version control practices are fundamental to effective software development.
        
        RESTful APIs: Grasping RESTful principles is key for designing and integrating APIs that allow different software systems to communicate seamlessly.
        
        Full-Stack Development: Combining front-end and back-end skills enables you to build complete web applications from scratch, providing a holistic understanding of the development process.
        
        UI/UX Design: Investing time in understanding user experience and design principles will significantly enhance the usability and aesthetic appeal of your applications.
        
        Project Management Tools: Familiarity with tools like JIRA, Trello, or Asana can improve project organization and facilitate better team collaboration.
        
        These areas of focus will not only enhance your technical skills but also prepare you for a successful career in software development.</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      <TabsWrapper>
        <Tab active={activeTab === 'about'} onClick={() => setActiveTab('about')}>About Me</Tab>
        <Tab active={activeTab === 'experiences'} onClick={() => setActiveTab('experiences')}>Experiences</Tab>
        <Tab active={activeTab === 'recommended'} onClick={() => setActiveTab('recommended')}>Recommended</Tab>
      </TabsWrapper>
      <Content>{renderContent()}</Content>
    </div>
  );
}
