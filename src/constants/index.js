import { faBasketball, faBowlingBall, faChess, faDesktop, faDumbbell } from '@fortawesome/free-solid-svg-icons';

export const skills = [
    {
        name: 'Nodejs',
        proficiency: 60,
        picture: 'nodejs2.png'
    },
    {
        name: 'React, Angular, Vue',
        proficiency: [80, 60, 20],
        picture: ['react2.png', 'angular2.png', 'vue2.png']
    },
    {
        name: 'Bootstrap, Sass',
        proficiency: [80, 60],
        picture: ['bootstrap2.png', 'sass2.png']
    },
    {
        name: 'REST API, GraphQL',
        proficiency: [70, 40],
        picture: ['rest2.png', 'graphql2.png']
    },
    {
        name: 'CodeIgniter',
        proficiency: 60,
        picture: ['codeigniter2.png']
    },
    {
        name: 'Django, Flask',
        proficiency: [30, 20],
        picture: 'python2.png'
    },
    {
        name: 'ASP.NET',
        proficiency: 20,
        picture: 'csharp.png'
    },
    {
        name: 'Git',
        proficiency: 50,
        picture: 'git.png'
    },
    {
        name: 'MySQL, Oracle, MSSQL',
        proficiency: [70, 20, 20],
        picture: ['mysql.png', 'oracle.png', 'mssql.png']
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

export const experiences = [
    {
        company: 'EF Software Pte Ltd',
        position: 'Software Engineer',
        period: 'Oct 2023 - Present',
        skill: ['Net Core', 'PostgreSQL', 'AI Models'],
        skillImg: ['php2.png', 'react2.png', 'angular2.png', 'nodejs2.png'],
        experienceImg: 'efs.png',
        description: [
            'Build web app to track the live truck location',
            'Implement new modern frontend UI'
        ],
        url: 'https://www.tiongnam.com/'
    },
    {
        company: 'Ounch Sdn Bhd',
        position: 'Software Engineer',
        period: 'Sep 2022 - May 2023',
        skill: ['JavaScript', 'React', 'Nodejs', '3D Modeling'],
        skillImg: ['javascript2.png', 'react2.png', 'nodejs2.png', '3d2.png'],
        experienceImg: 'ounch.png',
        description: [
            'Update functionality to fulfill latest client\'s need',
            'Render new 3D map given by client'
        ],
        url: 'https://ounch.com/'
    },
    {
        company: 'Ounch Sdn Bhd',
        position: 'Software Engineer Intern',
        period: 'May 2022 - Aug 2022',
        skill: ['JavaScript', 'React', 'Nodejs', 'GraphQL'],
        skillImg: ['javascript2.png', 'react2.png', 'nodejs2.png', 'graphql2.png'],
        experienceImg: 'ounch.png',
        description: [
            'R&D on new alternatives like GraphQL',
            'Analyze user behaviours on digital signage with machine learning',
            'Build a dashboard to visualize the analysis result'
        ],
        url: 'https://ounch.com/'
    },
    {
        company: 'Multimedia University',
        position: 'Research Assistant',
        period: 'Nov 2021 - Dec 2021',
        skill: ['PHP', 'CodeIgniter'],
        skillImg: ['php.png', 'codeigniter2.png'],
        experienceImg: 'mmu.png',
        description: [
            'Implement new modern UI',
            'Debugging and find new solution'
        ],
        url: 'https://www.mmu.edu.my/'
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

export const educations = [
    {
        school: 'Multimedia University',
        level: "Bachelor's Degree",
        tag: 'primary',
        course: 'Bachelor of Computer Science Hons Artificial Intelligence',
        location: 'Malacca, Malaysia',
        period: '2020 - 2023',
        result: 'CGPA: 3.89'
    },
    {
        school: 'Multimedia University',
        level: "Foundation",
        tag: 'secondary',
        course: 'Foundation in Information Technology',
        location: 'Malacca, Malaysia',
        period: '2019 - 2020',
        result: 'CGPA: 3.91'
    },
    {
        school: 'SMK Taman Universiti',
        level: "Secondary",
        tag: 'danger',
        course: 'SPM',
        location: 'Johor Bahru, Malaysia',
        period: '2014 - 2018',
        result: 'Result: 5A+ 5A'
    },
    {
        school: 'SJK(C) Pu Sze',
        level: "Primary",
        tag: 'info',
        course: 'UPSR',
        location: 'Johor Bahru, Malaysia',
        period: '2008 - 2013',
        result: 'Result: 6A'
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
