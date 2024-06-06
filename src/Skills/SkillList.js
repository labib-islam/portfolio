import PythonLogo from '../assets/skills/python-logo.svg?react'
import ReactLogo from '../assets/skills/react-logo.svg?react'
import JavascriptLogo from '../assets/skills/javascript-logo.svg?react'
import NodejsLogo from '../assets/skills/nodejs-logo.svg?react'
import MysqlLogo from '../assets/skills/mysql-logo.svg?react'
import HtmlLogo from '../assets/skills/html-logo.svg?react'
import CSSLogo from '../assets/skills/css-logo.svg?react'
import MongodbLogo from '../assets/skills/mongodb-logo.svg?react'
import LaravelLogo from '../assets/skills/laravel-logo.svg?react'
import PhotoshopLogo from '../assets/skills/adobe-photoshop-logo.svg?react'
import PremiereProLogo from '../assets/skills/adobe-premiere-pro-logo.svg?react'
import XdLogo from '../assets/skills/adobe-xd-logo.svg?react'
import IllustratorLogo from '../assets/skills/adobe-illustrator-logo.svg?react'
import PowerpointLogo from '../assets/skills/microsoft-powerpoint-logo.svg?react'
import WordLogo from '../assets/skills/microsoft-word-logo.svg?react'
import ExcelLogo from '../assets/skills/microsoft-excel-logo.svg?react'


const skillList = [
  {
    type: "PROGRAMMING",
    skillItems: [
      { name: "Python", logo: PythonLogo },
    ]
  },
  {
    type: "FRAMEWORK / LIBRARY / RUNTIME ENV.",
    skillItems: [
      { name: "ReactJS", logo: ReactLogo },
      { name: "Laravel", logo: LaravelLogo },
      { name: "NodeJS", logo: NodejsLogo },
    ]
  },
  {
    type: "DEVELOPMENT",
    skillItems: [
      { name: "Javascript", logo: JavascriptLogo },
      { name: "HTML", logo: HtmlLogo },
      { name: "CSS", logo: CSSLogo },
    ]
  },
  {
    type: "DATABASE",
    skillItems: [
      { name: "MySQL", logo: MysqlLogo },
      { name: "MongoDB", logo: MongodbLogo },
    ]
  },
  {
    type: "ADDITIONALS",
    skillItems: [
      { name: "Illustrator", logo: IllustratorLogo },
      { name: "Photoshop", logo: PhotoshopLogo },
      { name: "XD", logo: XdLogo },
      { name: "Premiere Pro", logo: PremiereProLogo },
    ]
  },
  {
    type: "",
    skillItems: [
      { name: "Powerpoint", logo: PowerpointLogo },
      { name: "Word", logo: WordLogo },
      { name: "Excel", logo: ExcelLogo },
    ]
  }
];

export default skillList;