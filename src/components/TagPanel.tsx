import Tag from "./Tag";
import styles from "./tagpanel.module.css";
import { FaRegClock } from "react-icons/fa6";
const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Typescript",
  "NextJs",
  "Vite",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "Python",
  "Django",
  "Flask",
  "TailwindCSS",
  "Bootstrap",
  "Git",
  "Docker",
  "Kubernetes",
  "AWS",
  "Jest",
  "Cypress",
  "GraphQL",
  "REST APIs",
  "Redux",
  "WebSockets",
  "Webpack",
  "ESLint",
];
export default function Tagpanel() {
  return (
    <div>
      <h3>SKILLS</h3>
      <div className={styles.skillsPanel}>
        {skills.map((skill) => (
          <Tag skill={skill} />
        ))}
      </div>
      <div className={styles.jobContainer}>
        <FaRegClock />
        <p className={styles.joindate}>Joined on Jan 2, 2025</p>
      </div>
    </div>
  );
}
