import craftersCorner1 from '../assets/projects/craftersCorner/crafters-corner-a.png'
import craftersCorner2 from '../assets/projects/craftersCorner/crafters-corner-b.png'
import craftersCorner3 from '../assets/projects/craftersCorner/crafters-corner-c.png'
import craftersCorner4 from '../assets/projects/craftersCorner/crafters-corner-d.png'
import craftersCorner5 from '../assets/projects/craftersCorner/crafters-corner-e.png'

import eLibrary1 from '../assets/projects/eLibrary/e-library-1.png'
import eLibrary2 from '../assets/projects/eLibrary/e-library-2.png'
import eLibrary3 from '../assets/projects/eLibrary/e-library-3.png'
import eLibrary4 from '../assets/projects/eLibrary/e-library-4.png'
import eLibrary5 from '../assets/projects/eLibrary/e-library-5.png'
import eLibrary6 from '../assets/projects/eLibrary/e-library-6.png'

const projectList = [
  {
    id: 'crafters-corner',
    title: "Crafters Corner",
    link: "https://github.com/labib-islam/Crafters-Corner-MERN",
    description: `A place for artisans and craft enthusiasts to browse, purchase and sell handmade and manufactured goods as well as learn and share craft knowledge through dedicated courses by professionals. Establish vibrant community building connections and sharing knowledge. Your one-stop site for everything craft related.`,
    imageList: [craftersCorner1, craftersCorner2, craftersCorner3, craftersCorner4, craftersCorner5],
    accentColor: "#29b1d6",
  },
  // {
  //   id: 'vaccination-management-system',
  //   title: "Vaccination Management System",
  //   link: "https://github.com/labib-islam/Vaccination_Management_System-PHP-HTML-CSS",
  //   description: `A complete online based Vaccination Management System to make the vaccination process easier for users and administrators alike. Users can easily book an appointment at their favourite hospital and choose a date of their convenience. Admins oversee the entire system and can easily add, update or remove vaccines and hospitals depending on the availability and accessibility to guarantee smoother operation.`,
  //   imageList: [craftersCorner4, craftersCorner5],
  //   accentColor: "#13a89e",
  // },
  {
    id: 'e-library',
    title: "E-Library",
    link: "https://github.com/labib-islam/E-library_PHP-HTML-CSS",
    description: `E-Library is an online platform that provides a book subscription service. Users can easily navigate and search through the website and read a wide range of books as well as keep track of their transaction history. Publishers can add books to the library collection by just uploading them to the system.`,
    imageList: [eLibrary1, eLibrary2, eLibrary3, eLibrary4, eLibrary5, eLibrary6],
    accentColor: "#fc9342",
  },
];

export default projectList;