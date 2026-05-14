// ========================================================
// PORTFOLIO DATA — Replace this with your real info!
// ========================================================


export const personalInfo = {
  name: "Sebastian Bustamante",
  title: "Full Stack Developer",
  subtitle: "& UI/UX Designer",
  tagline: "Convierto ideas en experiencias digitales que impactan.",
  email: "sbprog1@gmail.com",
  location: "Merida, Venezuela",
  availability: "Disponible para proyectos freelance",
  bio: [
    "Tengo 15 años y más de 1 año construyendo productos digitales reales. Me especializo en crear experiencias web modernas, escalables y centradas en el usuario con React, Node.js y PostgreSQL.",
    "Trabajo tanto en el frontend como en el backend, lo que me permite tener una visión completa del producto y entregar soluciones integrales de principio a fin.",
  ],
  social: {
    github: "https://github.com/Sbprog1",
    instagram: "https://instagram.com/seba_sgtrz",
    twitter: "https://twitter.com/seba_sgtrz",
  },
  stats: [
    { value: "1+", label: "Año de experiencia" },
    { value: "3+", label: "Proyectos reales completados" },
    { value: "3+", label: "Clientes satisfechos" },
    { value: "∞", label: "Ganas de aprender mas" },
  ],
  traits: ["Creativo", "Apasionado", "Detallista", "Team Player", "Autodidacta"],
};

// ========================================================
export const technologies = [
  // Frontend
  { name: "HTML5", icon: "SiHtml5", category: "Frontend", color: "#E34F26" },
  { name: "CSS3", icon: "SiCss", category: "Frontend", color: "#1572B6" },
  { name: "JavaScript", icon:"FaJs", category: "Frontend", color:"#e8f904ff" }, 
  { name: "React", icon: "SiReact", category: "Frontend", color: "#61DAFB" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", category: "Frontend", color: "#06B6D4" },
  //Mobile
  { name:"React Native", icon:"SiReact", category:"Mobile", color:"#61DAFB"},

  // Backend
  { name: "Node.js", icon: "SiNodedotjs", category: "Backend",color: "#339933" },
  { name: "Express", icon: "SiExpress", category: "Backend",  color: "#ffffff" },
  // Databases
  { name: "PostgreSQL", icon: "SiPostgresql", category: "Databases",  color: "#4169E1" },
  // Tools & DevOps
  { name: "Git", icon: "SiGit", category: "Tools", level: 95, color: "#F05032" },
  { name: "Github", icon: "FaGithub", category: "Tools", color: "#ffffffff"},
  { name: "VsCode", icon:"VscVscode", category:"Tools", color:"#285fccff"},
  { name: "Firebase", icon:"SiFirebase", category:"Tools", color:"#F05032"},
  { name: "Supabase", icon:"SiSupabase", category:"Tools", color:"#146d14ff"},
  {name: "Render", icon:"SiRender", category:"Tools", color:"#ffffffff"},
];

// ========================================================
export const learningTechnologies = [
  { name: "TypeScript", icon: "SiTypescript", status: "Aprendiendo", color: "#3178C6" },
  { name: "Next.js", icon: "SiNextdotjs", status: "Por aprender", color: "#ffffff" },
  { name: "Vue.js", icon: "SiVuedotjs", status: "Por aprender", color: "#4FC08D" },
  { name: "N8N", icon: "SiN8N", status: "Por aprender", color: "#ed2929ff" },
  { name: "Python", icon: "SiPython", status: "Por aprender", color: "#3776AB" },
  { name: "Rust", icon: "SiRust", status: "Por aprender" , color: "#DEA584"},
];

// ========================================================
export const projects = [
  {
    id: 1,
    title: "YNSURE (Proyecto propio)",
    description: "SaaS completo para gestión de pólizas de seguros con panel de administración, reportes, e importación masiva por Excel.",
    image: "/Ynsure.png",
    gradient: "linear-gradient(135deg, #7c3aed, #4f46e5)",
    tags: ["JavaScript", "Tailwindcss", "PostgreSQL", "Node.Js", "Express"],
    category: "Full Stack",
    github: "https://github.com/Sbprog1/ynsure-ve",
    demo: "https://ynsure.online",
    featured: true,
  },
  {
    id: 2,
    title: "Vouchers Agencia de Viajes",
    description: "Sistema de generación y exportación de vouchers en PDF para agencia de viajes, con QR dinámico y diseño responsivo.",
    image: "/viajes.png",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    tags: ["JavaScript", "Tailwindcss", "PostgreSQL", "Node.Js", "Express"],
    category: "Full Stack",
    github: "https://github.com/Skarleth-Zerpa/Agencia-Viajes",
    featured: false,
  },
  {
    id: 3,
    title: "KALESI_ve",
    description: "Landing page para tienda de bolsos personalizados con catálogo de productos, cubo 3D CSS y enlace directo a WhatsApp.",
    image: "/Kalesi.png",
    gradient: "linear-gradient(135deg, #d97706, #b45309)",
    tags: ["HTML", "CSS3", "JavaScript"],
    category: "Frontend",
    github: "https://github.com/Sbprog1/Kalesi",
    demo: "https://kalesi.onrender.com",
    featured: false,
  },
];


