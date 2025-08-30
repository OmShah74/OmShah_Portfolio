import { useState, useEffect, useRef } from 'react';

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false);
    const skillsSectionRef = useRef(null);

    const skills = [
        { icon: "devicon-cplusplus-plain",name: "C++" },
        { icon: "devicon-java-plain", name: "Java" },
        { icon: "devicon-python-plain", name: "Python" },
        { icon: "devicon-html5-plain", name: "HTML5" },
        { icon: "devicon-css3-plain", name: "CSS3" },
        { icon: "devicon-javascript-plain", name: "JavaScript" },
        { icon: "devicon-react-original", name: "React" },
        { icon: "devicon-nodejs-plain", name: "Node.js" },
        { icon: "devicon-express-original", name: "Express" },
        { icon: "devicon-mongodb-plain", name: "MongoDB" },
        { icon: "devicon-mysql-plain", name: "MySQL" },
        { icon: "devicon-django-plain", name: "Django" },
        { icon: "devicon-flask-original", name: "Flask" },
        { icon: "devicon-git-plain", name: "Git" },
        { icon: "fas fa-brain", name: "AI/ML" }
    ];

    // --- THIS IS THE CORRECTED LOGIC ---
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // THE FIX: Directly set the visibility based on whether it's intersecting or not.
                // This handles both appearing and disappearing.
                setIsVisible(entry.isIntersecting);
            },
            { 
                threshold: 0.2 // Trigger when 20% of the section is visible
            }
        );

        const currentRef = skillsSectionRef.current; // Capture ref for cleanup

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            // Clean up by unobserving the ref when the component unmounts
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []); // The empty dependency array is correct

    return (
        <section 
            id="skills" 
            className={`content-section skills-section ${isVisible ? 'skills-visible' : ''}`}
            ref={skillsSectionRef}
        >
            <div className="section-header">
                <h2 className="section-title" data-text="Core Technologies">Core Technologies</h2>
                <div className="tech-stats">
                    <div className="stat-item">
                        <span className="stat-number">15+</span>
                        <span className="stat-label">Technologies</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">5+</span>
                        <span className="stat-label">Categories</span>
                    </div>
                </div>
            </div>

            <div className="skills-container">
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div 
                            key={skill.name}
                            className="skill-card"
                            style={{ transitionDelay: `${index * 0.05}s` }}
                        >
                            <div className="skill-icon-container">
                                <i className={skill.icon}></i>
                            </div>
                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}