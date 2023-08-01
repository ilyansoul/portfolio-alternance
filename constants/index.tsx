
interface NavItem {
    label: string
    page: string
  }

export const NAV_ITEMS: Array<NavItem> = [
    {
      label: "Home",
      page: "home",
    },
    {
      label: "About",
      page: "about",
    },
    {
      label: "Projects",
      page: "projects",
    },
  ]


  export const projects = [
    {
      name: "",
      description:
        ".",
      image: "/kk.png",
      github: "",
      link: "",
    },
    {
      name: "",
      description: "",
      image: "/kk.png",
      github: "",
      link: "",
    },
    {
      name: "",
      description:
        "",
      image: "/kk.png",
      github: "",
      link: "",
    },
  ]


 export const techSkillsData = [
    { image: '/development.png', title: 'Frontend Development', description: 'I bring ideas to life in the browser, coding from scratch' },
    { image: '/api.png', title: 'API Development', description: 'Crafting robust APIs, turning ideas into functional solutions' },
    { image: '/back-end.png', title: 'Backend Development ', description: 'Building powerful server-side systems , coding from sratch' },
    { image: '11.png', title: 'Web Applications ', description: 'Creating dynamic and intuitive web experiences' },
    { image: '/telephone-intelligent.png', title: 'Mobile Applications ', description: 'Developing innovative mobile apps with seamless user experiences with react native' },
    { image: '/cloud-computing.png', title: 'Deployments & Hostings ', description: 'Ensuring smooth deployments and reliable hosting for web applications' },
    // Ajoutez les autres données pour les compétences techniques
  ];

  export const softSkillsData = [
    { image: '/path/to/soft-skill-1.png', title: 'Soft Skill 1', description: 'Description 1' },
    { image: '/path/to/soft-skill-2.png', title: 'Soft Skill 2', description: 'Description 2' },
    { image: '/path/to/soft-skill-3.png', title: 'Soft Skill 3', description: 'Description 3' },
    { image: '/path/to/soft-skill-3.png', title: 'Soft Skill 3', description: 'Description 3' },
    { image: '/path/to/soft-skill-3.png', title: 'Soft Skill 3', description: 'Description 3' },
    { image: '/path/to/soft-skill-3.png', title: 'Soft Skill 3', description: 'Description 3' },
    // Ajoutez les autres données pour les compétences douces
  ];

  export const Button = ({ onClick, label }: { onClick: () => void; label: string }) => (
    <button
      className="bg-teal-600 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
  
  export const Container = ({ image, title, description }: { image: string, title: string, description: string }) => (
    <div className="bg-teal-600 p-4 my-4 rounded-lg hover:bg-black hover:text-white sm:flex-col">
      <img src={image} alt={title} className="w-16 h-16 mx-auto mb-4 " />
      <br /><br /><br />
      <h2 className="text-lg font-bold text-grey text-center ">{title}</h2>
      <br />
      <p className="text-center">{description}</p>
    </div>
  );
  
  