import { faBasketball, faBowlingBall, faChess, faDesktop, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import react from "../asset/image/skill_image/react.png"
import angular from "../asset/image/skill_image/angular.png"
import bootstrap from "../asset/image/skill_image/bootstrap.png"
import tailwindcss from "../asset/image/skill_image/tailwindcss.png"
import sass from "../asset/image/skill_image/sass.png"
import html from "../asset/image/skill_image/html.png"
import javascript from "../asset/image/skill_image/javascript.png"
import css from "../asset/image/skill_image/css.png"
import typescript from "../asset/image/skill_image/typescript.png"
import netcore from "../asset/image/skill_image/net core.png"
import nodejs from "../asset/image/skill_image/nodejs.png"
import springboot from "../asset/image/skill_image/springboot.png"
import mysql from "../asset/image/skill_image/mysql.png"
import postgresql from "../asset/image/skill_image/postgresql.png"
import git from "../asset/image/skill_image/git.png"
import docker from "../asset/image/skill_image/docker.png"
import aws from "../asset/image/skill_image/aws.png"
import ubuntu from "../asset/image/skill_image/ubuntu.png"
import terraform from "../asset/image/skill_image/terraform.png"
import python from "../asset/image/skill_image/python.png"
import jupyter from "../asset/image/skill_image/jupyter.png"
import tensorflow from "../asset/image/skill_image/tensorflow.png"
import openai from "../asset/image/skill_image/openai.svg"
import vsc from "../asset/image/skill_image/vsc.png"
import vs from "../asset/image/skill_image/vs.png"
import postman from "../asset/image/skill_image/postman.jpg"
import chatgpt from "../asset/image/skill_image/chatgpt.webp"
import dbeaver from "../asset/image/skill_image/dbeaver.png"
import sourcetree from "../asset/image/skill_image/sourcetree.png"
import efs from "../asset/image/company_image/efs.png"
import tiongnam from "../asset/image/company_image/tiongnam.png"
import ounch from "../asset/image/company_image/ounch.png"

export const frontendSkills = [
    {
        name: 'React',
        picture: react
    },
    {
        name: 'Angular',
        picture: angular
    },
    {
        name: 'HTML',
        picture: html
    },
    {
        name: 'CSS',
        picture: css
    },
    {
        name: 'JavaScript',
        picture: javascript
    },
    {
        name: 'TypeScript',
        picture: typescript
    },
    {
        name: 'Bootstrap',
        picture: bootstrap
    },
    {
        name: 'TailwindCSS',
        picture: tailwindcss
    },
    {
        name: 'SASS',
        picture: sass
    },
]

export const backendSkills = [
    {
        name: 'Net Core',
        picture: netcore
    },
    {
        name: 'Nodejs',
        picture: nodejs
    },
    {
        name: 'Spring Boot',
        picture: springboot
    },
    {
        name: 'MySQL',
        picture: mysql
    },
    {
        name: 'PostgreSQL',
        picture: postgresql
    },
]

export const devopsSkills = [
    {
        name: 'Git',
        picture: git
    },
    {
        name: 'Docker',
        picture: docker
    },
    {
        name: 'AWS',
        picture: aws
    },
    {
        name: 'Ubuntu',
        picture: ubuntu
    },
    {
        name: 'Terraform',
        picture: terraform
    },
]

export const machineLearningSkills = [
    {
        name: 'Python',
        picture: python
    },
    {
        name: 'Jupyter Notebook',
        picture: jupyter
    },
    {
        name: 'Tensorflow',
        picture: tensorflow
    },
    {
        name: 'Open AI',
        picture: openai
    },
]

export const toolSkills = [
    {
        name: 'Visual Studio Code',
        picture: vsc
    },
    {
        name: 'Visual Studio',
        picture: vs
    },
    {
        name: 'Postman',
        picture: postman
    },
    {
        name: 'Chatgpt',
        picture: chatgpt
    },
    {
        name: 'Dbeaver',
        picture: dbeaver
    },
    {
        name: 'Sourcetree',
        picture: sourcetree
    },
]

export const professionalExperiences = [
    {
        company: 'EF Software Pte Ltd',
        location: 'Singapore',
        position: 'Software Engineer',
        period: 'Oct 2023 - Present',
        skill: ['.Net Core', 'PostgreSQL', 'AWS', 'Docker'],
        companyImage: efs,
        keyExperience: [
            'Contributed to the migration of web applications to a Software-as-a-Service (SaaS) model, enhancing the scalability and accessibility.',
            'Participated in version control management and the deployment pipeline, ensuring smooth integration and release in cloud environments.'
        ]
    },
    /*
    {
        company: 'Tiong Nam Logistics Holdings Berhad',
        location: 'Johor, Malaysia',
        position: 'Software Engineer',
        period: 'Oct 2023 - March 2024',
        skill: ['PHP', 'React', 'Angular', 'Nodejs'],
        companyImage: tiongnam,
        keyExperience: [
            'Develop web application to optimize logistics management, saving 40% of time cost',
            'Implement OCR solution to automate document data entry, reducing the cost of manpower'
        ]
    },
    */
    {
        company: 'Ounch Sdn Bhd',
        location: 'Kuala Lumpur, Malaysia',
        position: 'Software Engineer',
        period: 'Sep 2022 - May 2023',
        skill: ['JavaScript', 'React', 'Nodejs', '3D Modelling'],
        companyImage: ounch,
        keyExperience: [
            'Maintain and update software to meet the latest client requirements',
            'Render new 3D maps as per client specifications'
        ]
    },
    {
        company: 'Ounch Sdn Bhd',
        location: 'Kuala Lumpur, Malaysia',
        position: 'Software Engineer Intern',
        period: 'May 2022 - Aug 2022',
        skill: ['JavaScript', 'React', 'Nodejs', 'GraphQL'],
        companyImage: ounch,
        keyExperience: [
            'Analyze user behaviors on digital signage with machine learning and build a dashboard to visualize the analysis result'
        ]
    },
]

export const educations = [
    {
        school: 'Multimedia University',
        level: "Bachelor's Degree",
        course: 'Bachelor of Computer Science Hons Artificial Intelligence',
        location: 'Malacca, Malaysia',
        period: '2020 - 2023',
        result: 'CGPA: 3.89',
        background: 'bg-green-500',
        color: 'text-white'
    },
    {
        school: 'Multimedia University',
        level: "Foundation",
        course: 'Foundation in Information Technology',
        location: 'Malacca, Malaysia',
        period: '2019 - 2020',
        result: 'CGPA: 3.91',
        background: 'bg-red-500',
        color: 'text-white'
    },
    {
        school: 'SMK Taman Universiti',
        level: "Secondary",
        course: 'SPM',
        location: 'Johor Bahru, Malaysia',
        period: '2014 - 2018',
        result: 'Result: 5A+ 5A',
        background: 'bg-orange-500',
        color: 'text-white',
    },
    {
        school: 'SJK(C) Pu Sze',
        level: "Primary",
        course: 'UPSR',
        location: 'Johor Bahru, Malaysia',
        period: '2008 - 2013',
        result: 'Result: 6A',
        background: 'bg-blue-500',
        color: 'text-white',
    }
]

export const languages = [
    {
        name: 'Chinese',
        proficiency: '9/10'
    },
    {
        name: 'English',
        proficiency: '7/10'
    },
    {
        name: 'Malay',
        proficiency: '6/10'
    }
]


export const otherExperiences = [
    {
        company: 'IPG Realty',
        position: 'Property Agent',
        experienceImg: 'property.png'
    },
    {
        company: 'De Largo',
        position: 'Bartender',
        experienceImg: 'delargo.png'
    }
]

export const hobbies = [
    {
        name: 'Body building',
        icon: faDumbbell
    },
    {
        name: 'Chess',
        icon: faChess
    },
    {
        name: 'Bowling',
        icon: faBowlingBall
    },
    {
        name: 'Basketball',
        icon: faBasketball
    },
    {
        name: 'Programming',
        icon: faDesktop
    }
]

export const awards = [
    {
        name: 'First Class Honours',
        awardImg: 'firstclass.jpeg',
        description: 'First Class Honours admitted by Multimedia University to complete study of Bachelor\'s of Computer Science'
    },
    {
        name: 'Top Sales Award',
        awardImg: 'topsales.jpg',
        description: 'The award presented for the first closing as rookie agent'
    },
    {
        name: 'Huawei Certification - AI',
        awardImg: 'huawei.png',
        description: 'The certification presented for the successful completion of the Huawei AI exam'
    },
    {
        name: 'Chess Team L18 MSSD - Champion',
        awardImg: 'johan.jpg',
        description: 'The award presented as the champion team in Chess MSSD Johor Bahru'
    }
]
