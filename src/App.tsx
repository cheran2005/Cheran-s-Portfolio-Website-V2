import './App.css';
import myface from './assets/IMG_9690.jpg';
import { Github, Mail, Linkedin, MapPin, FolderGit2 } from "lucide-react";
import SimpleButton from './components/simple_button';
import KumonLogo from './assets/unnamed.jpg';
import CatalyicTutors from './assets/9Qzn2YlE_400x400.png'
import TMULogo from './assets/tmu-updates-logo-v0-w0oidcb6yv191.jpg'
function App() {

  const personalInfo = {

    name: "Hi, I'm Cheran!",
    title:"Computer Engineering @ Toronto Metropolitan University(Previously Ryerson University)",
    bio:"Passionate in software development and machine learning",
    email:"cheran.balakrishnan@torontomu.ca",
    github: "https://github.com/cheran2005",
    linkedin:"https://www.linkedin.com/in/cheran-balakrishnan-a2b8ab2b1/",
    location:"Toronto, ON",

  }

  const projects = [
    {
      id: 1,
      title: "Gradify (In Progress)",
      description:
        "Secure Academic Grade Management Platform enabling university students to securely track grades and GPA",
      tags: ["C#","Python", "ASP.NET Core","React", "SQL Server Express", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/cheran2005/Gradify",
    },
    {
      id: 2,
      title: "Housify",
      description:
        "An interactive house price prediction web app for Canadian home buyers",
      tags: ["React", "Flask","Numpy","Pandas"],
      link: "https://github.com/cheran2005/Housify/tree/main",
      
    },
    {
      id: 3,
      title: "Bookstore Applicaiton",
      description:
        "A java project built in NetBeans that simulates a basic online bookstore applicaiton",
      tags: ["Java", "Java FX"],
      link: "https://github.com/cheran2005/Java-FX-bookstore-application",
    },

    {

      id: 4,
      title: "GridLock",
      description:
        "A fun browser-based mind game where you memorize emoji patterns in a grid and answer questions based on them",
      tags: ["JavaScript", "HTML5", "CSS"],
      link: "https://github.com/cheran2005/GridLock",
    },

    {

      id: 5,
      title: "Mini Shell - Custom UNIX Shell In C",
      description:
        "A custom-built mini shell implemented in C that mocks basic shell behaviour such as redirection, piping, background processes and more",
      tags: ["C"],
      link: "https://github.com/cheran2005/Mini_Shell",
    },

    {

      id: 6,
      title: "Chat App - A Multi-Client Chat Application",
      description:
        "Multi-client chat application is written in C using sockets and POSIX threads. It allows multiple clients to connect and send messages in real time, demonstrating key concepts in network programming and concurrency",
      tags: ["C"],
      link: "https://github.com/cheran2005/Chat-App",
    },
    {

      id: 7,
      title: "Multi-Threaded File Downloader",
      description:
        "Multi-threaded file downloader built in C using pthreads and libcurl. It reads URLs from a file (downloads.txt by default), spawns multiple threads, and downloads each file concurrently",
      tags: ["C"],
      link: "https://github.com/cheran2005/Mutlithread-downloader",
    },

    {

      id: 8,
      title: "Custom Malloc",
      description:
        "A custom implementation of malloc, free, calloc, and realloc written in C. It demonstrates low-level heap memory management, including block allocation, deallocation, and reuse",
      tags: ["C"],
      link: "https://github.com/cheran2005/Custom_Malloc/tree/main",
    },

  ]

  const Experinces = [
    {
      id: 1,
      title: "Physics Instructor",
      description:
        "Personalized tutoring for grade 11-12 physics students",
      tags: ["Catalytic Tutors", "Feb 2024 - Present"],
      link: "https://www.catalytictutors.com/",
      image:CatalyicTutors
    },
    {
      id: 2,
      title: "Math Instructor",
      description:
        "Taught and asssesed students across Grades 1-12 in mathematics",
      tags: ["Kumon", "Jan 2022 - May 2023"],
      link: "https://www.kumon.com/vaughan-rutherford-islington/?utm_source=local&utm_medium=gmb&utm_campaign=vaughan-rutherford-islington",
      image:KumonLogo

    }
  ]

  const Education = [
    {
      id: 1,
      title: "Computer Engineering",
      tags: ["Toronto Metropolitan University(Previously Ryerson University)", "Sept 2023 - Apr 2028"],
      link: "https://www.torontomu.ca/programs/undergraduate/computer-engineering/",
      image:TMULogo
    }
  ]

  return (
    <>
    
    <div className="fixed inset-0 bg-fade "/>
        {/*Header*/}
      
        <div className= " relative rounded-xl bg-white shadow max-w-5xl mx-4 md:mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] my-15 ">
          
            <div className="pt-10 flex justify-center">
              <img 
                src={myface} 
                alt="Description of the image" 
                className="w-55 h-60 md:w-55 md:h-60 rounded-xl" 
              />
            </div>
    
          <div className= "flex justify-start md:items-start items-center flex-col gap-5 py-7 ">
            <div className="text-3xl md:text-5xl font-bold text-left">{personalInfo.name}</div>
            <div className="text-base md:text-lg md:text-left text-center text-[rgb(44,42,42)] md:pr-4 " >{personalInfo.title}</div>
            <div className="text-base md:text-lg  md:text-left text-center text-[rgb(100,96,96)]">{personalInfo.bio}</div>

            <div className=" flex items-center justify-center gap-1 text-base text-left text-[rgb(100,99,99)]">
              <MapPin size={14} className="text-gray-400" /> 
              {personalInfo.location}
            </div>
            
            <div className = "flex flex-wrap gap-2">
              <SimpleButton info_link = {`mailto:${personalInfo.email}`}>
                  <Mail  size={15}  />
                  Mail
              </SimpleButton>

              <SimpleButton info_link = {personalInfo.github}>
                  <Github  size={15}  />
                  Github
              </SimpleButton>

              <SimpleButton info_link = {personalInfo.linkedin}>
                  <Linkedin  size={15}  />
                  Linkedin
              </SimpleButton>
            </div>
          </div>
        </div>

        {/*Personal Projects*/}
        <section className = "relative py-5 text-left max-w-5xl mx-4 md:mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900">
            Personal Projects
          </h2>
          <div className = "max-w-5xl mx-4 md:mx-auto ">
            {projects.map((project) => (
              <div key={project.id} className="group flex items-start gap-3 py-3">
                <div className="shrink-0 mt-1">
                  <FolderGit2 className="w-10 h-10 object-contain text-black group-hover:text-blue-500 transition-colors" />
                </div>
                <div className="flex-1 ">
                  <h3 className="text-lg mb-2">
                    <a href={project.link} target="_blank"
                      className="text-gray-900 font-medium underline decoration-transparent decoration-2 underline-offset-4 hover:decoration-blue-500 hover:text-blue-600 transition-all"
                    >
                      {project.title}
                    </a>
                    </h3>
                      <p className="text-[rgb(44,43,43)] mb-3 leading-relaxed">
                        {project.description}
                      </p>
                      <p className="text-[rgb(3,66,148)] text-sm">
                        {project.tags.join(" • ")}
                      </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/*Experiences*/}
        <section className = "relative py-5 text-left max-w-5xl mx-4 md:mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900">
            Experiences
          </h2>
          <div className = "max-w-5xl mx-4 md:mx-auto ">
            {Experinces.map((Experinces) => (
              <div key={Experinces.id} className="group flex items-start gap-3 py-3">
                <div className="shrink-0 mt-1">
                  <img 
                    src={Experinces.image} 
                    alt="Description of the image" 
                    className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-xl" 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-2">
                    <a href={Experinces.link} target="_blank"
                      className="text-gray-900 font-medium underline decoration-transparent decoration-2 underline-offset-4 hover:decoration-blue-500 hover:text-blue-600 transition-all"
                    >
                      {Experinces.title}
                    </a>
                    </h3>
                      <p className="text-[rgb(44,43,43)] mb-3 leading-relaxed">
                        {Experinces.description}
                      </p>
                      <p className="text-[rgb(3,66,148)] text-sm">
                        {Experinces.tags.join(" • ")}
                      </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/*Education*/}
        <section className = "relative py-5 text-left max-w-5xl mx-4 md:mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900">
            Education
          </h2>
          <div className = "max-w-5xl mx-4 md:mx-auto ">
            {Education.map((Education) => (
              <div key={Education.id} className="group flex items-start gap-3 py-3">
                <div className="shrink-0 mt-1">
                  <img 
                    src={Education.image} 
                    alt="Description of the image" 
                    className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-xl" 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-2">
                    <a href={Education.link} target="_blank"
                      className="text-gray-900 font-medium underline decoration-transparent decoration-2 underline-offset-4 hover:decoration-blue-500 hover:text-blue-600 transition-all"
                    >
                      {Education.title}
                    </a>
                  </h3>
                      <p className="text-[rgb(3,66,148)] text-sm">
                        {Education.tags.join(" • ")}
                      </p>
                </div>
              </div>
            ))}
          </div>
        </section>

             
  </>
  );
}

export default App
