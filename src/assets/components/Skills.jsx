import { FaReact, FaHtml,FaCss3Alt, FaJsSquare, faGitAlt, FaNpm} from "react-icons/fa";

const skills = [
    {name: "HTML5", icon: <FaHtml className="text-5xl text-orange-600" />},
    {name: "CSS3", icon: <FaCss3Alt className="text-5xl text-blue-600" />},
    {name: "JavaScript", icon: <FaJsSquare className="text-5xl text-yellow-500" />},
    {name: "React", icon: <FaReact className="text-5xl text-cyan-500" />},
    {name: "Git", icon: <FaGitAlt className="text-5xl text-red-600" />},
    {name: "npm", icon: <FaNpm className="text-5xl text-red-500" />},
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Technical Skills</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center space-y-2">
                        {skill.icon} 
                        <span className="text-lg font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
}