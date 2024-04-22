export const TEXTS = {
  profile: {
    name: 'Erik Ülavere',
    introduction: "Hi, I'm Erik.",
    nameShort: 'Erik',
    profilePic:
      'https://media.licdn.com/dms/image/C4E03AQEn0_2rhIZUrA/profile-displayphoto-shrink_800_800/0/1635500254981?e=1719446400&v=beta&t=YKrC2fm9FUXFVe-P6yKQOnvRynlq0N1MeGXHupkuFvc',
    linkedIn: 'https://www.linkedin.com/in/erik-ülavere-935949220',
    githubLink: 'https://github.com/Erikyy',
    aboutMe:
      "I'm a Fullstack software developer and student. My main skill set at my work is Java, Spring Boot and Kubernetes. Currently working at Registrite ja Infosüsteemide Keskus.",
    skills: [],
    hobbies: [],
  },
  general: {
    skills: 'My skills',
    workExperience: 'My work experience',
    projects: 'Projects that I have worked on during my career',
  },
};

export type WorkExperience = {
  place: string;
  title: string;
  description: string;
  start: string;
  end: string;
  link: string;
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    place:
      'Registrite ja Infosüsteemide Keskus // Centre of Registers and Information Systems',
    title: 'Software Developer',
    description:
      'During november with my work experience and the success of "Pdf-varundaja" desktop application, moved my Software Developer career to next level. Currently continuing working on "Pdf-varunadaja", maintaining current Riigi Teataja and now continuing the development the new Riigi Teataja.',
    start: 'Nov 2023',
    end: 'Present',
    link: 'https://www.rik.ee/',
  },
  {
    place:
      'Registrite ja Infosüsteemide Keskus // Centre of Registers and Information Systems',
    title: 'Junior Software Developer',
    description:
      'Landed my second Junior Software Developer Job. Joined a team called Avaliku Õigusteabe tiim. Projects that I worked on was maintaining current Riigi Teataja, overseeing development, technical and non-functional side of new Riigi Teataja with the help of Main Software Architect, developing "Pdf-varundaja", a desktop application that collects all valid acts from Riigi Teataja and downloads to users computer.',
    start: 'Dec 2022',
    end: 'Nov 2023',
    link: 'https://www.rik.ee/',
  },
  {
    place: 'Keila Teraapiakeskus',
    title: 'IT support specialist',
    description:
      'For a while, I Worked as an IT support in my local town. Main tasks were checking computer security, uptdating software, etc.',
    start: 'Aug 2021',
    end: 'Aug 2022',
    link: 'https://teraapiamaja.ee/',
  },
  {
    place: 'Hansab Eesti',
    title: 'Junior Software Developer',
    description:
      'After student internship, I continued working as a Junior Software developer. Same projects.',
    start: 'Mar 2021',
    end: 'Jun 2021',
    link: 'https://www.hansab.ee/',
  },
  {
    place: 'Hansab Eesti',
    title: 'Student Intern',
    description:
      'My first experience as a intern in Hansab. Developed android app called Nali24.ee and maintained web service called Moya, switched Java build systems from Maven to Gradle.',
    start: 'Sep 2020',
    end: 'Mar 2021',
    link: 'https://www.hansab.ee/',
  },
];

export type Project = {
  name: string;
  description: string;
  image: string;
  link?: string;
};

export const PROJECTS: Project[] = [
  {
    name: 'Kasutajasõbralik Riigi Teataja',
    description:
      "This project is continuation and newer version of Riigi Teataja. One of it's goals is to be more modern and user friendly. From technical side this project is slowly moving towards microservice architecture on kubernetes, older Riigi Teataja is a monolithic web service, making it incompatible running in kubernetes environment and we consider it a Legacy System. Currently I'm being one of the developers working on all parts of the service: Updating versions, frontend development, splitting into microservices and service development, using Spring Batch to build kubernetes jobs that process large datasets, etc.",
    image: 'https://www.riigiteataja.ee/gfx/logo.png',
    link: 'https://riigiteataja.ee',
  },
  {
    name: 'Riigi Teataja ajakohased terviktekstid (Pdf-varundaja)',
    description:
      "During my first year of working in Registrite ja Infosüsteemide Keskus, I was tasked to develop a desktop application that could collect all valid acts from Riigi Teataja and store those in Pdf format on users computer. This project also won one of the Project of the year award and helped me move my career to next level. Currently it's in final testing phase.",
    image: 'https://www.riigiteataja.ee/gfx/logo.png',
  },
  {
    name: 'Riigi Teataja',
    description:
      'I only developed and maintained only small parts of this whole web service. For example swapped out Google analytics with an internal one.',
    image: 'https://www.riigiteataja.ee/gfx/logo.png',
    link: 'https://riigiteataja.ee',
  },
  {
    name: 'Moya RVM systems',
    description:
      'This project was also part of my internship programme. I was mainly tasked developing some new UI features and improving some User experience. One of my best features was an Excel spreadsheet generator that generated from the data. This feature saved our clients hours of work, spreadsheet with data was generated within minutes.',
    image:
      'https://www.rmel.ee/wp-content/uploads/2018/06/Moya_logo_blue-copy1.png',
    link: 'https://www.rmel.ee/staff/moya-ou/',
  },
  {
    name: 'Nali24.ee mobile app',
    description:
      'During my internship at Hansab Eesti, this was my first real project. The idea of this app was that a user could read jokes from mobile app. I was the sole developer of this application. Currently this app only supports Android only.',
    image: 'https://nali24.ee/images/nali.png',
    link: 'https://nali24.ee/',
  },
];
