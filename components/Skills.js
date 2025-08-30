import { useState, useEffect, useRef } from 'react';

export default function Skills() {
    const [visibleSkills, setVisibleSkills] = useState(new Set());
    const skillsRef = useRef(null);

    const skills = [
        { icon: "devicon-cplusplus-plain",name: "C++", level: 90 },
        { icon: "devicon-java-plain", name: "Java",  level: 85 },
        { icon: "devicon-python-plain", name: "Python", level: 95 },
        { icon: "devicon-html5-plain", name: "HTML5",level: 90 },
        { icon: "devicon-css3-plain", name: "CSS3",  level: 88 },
        { icon: "devicon-javascript-plain", name: "JavaScript",  level: 92 },
        { icon: "devicon-react-original", name: "React",  level: 88 },
        { icon: "devicon-nodejs-plain", name: "Node.js", level: 85 },
        { icon: "devicon-express-original", name: "Express",level: 82 },
        { icon: "devicon-mongodb-plain", name: "MongoDB", level: 80 },
        { icon: "devicon-mysql-plain", name: "MySQL",  level: 78 },
        { icon: "devicon-django-plain", name: "Django",  level: 75 },
        { icon: "devicon-flask-original", name: "Flask", level: 80 },
        { icon: "devicon-git-plain", name: "Git", level: 85 },
        { icon: "fas fa-brain", name: "AI/ML",  level: 88 }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setVisibleSkills(prev => new Set([...prev, index]));
                        }, index * 100);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (skillsRef.current) {
            const skillCards = skillsRef.current.querySelectorAll('.skill-card');
            skillCards.forEach(card => observer.observe(card));
        }

        return () => observer.disconnect();
    }, []);

    const getCategoryColor = (category) => {
        const colors = {
            'Programming': 'rgba(0, 245, 255, 0.2)',
            'Frontend': 'rgba(139, 92, 246, 0.2)',
            'Backend': 'rgba(245, 158, 11, 0.2)',
            'Database': 'rgba(34, 197, 94, 0.2)',
            'Tools': 'rgba(239, 68, 68, 0.2)',
            'AI': 'rgba(168, 85, 247, 0.2)'
        };
        return colors[category] || 'rgba(0, 245, 255, 0.2)';
    };

    return (
        <section id="skills" className="content-section">
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

            <div className="skills-container" ref={skillsRef}>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div 
                            key={skill.name}
                            className={`skill-card ${visibleSkills.has(index) ? 'skill-visible' : ''}`}
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                '--category-color': getCategoryColor(skill.category),
                                '--skill-level': `${skill.level}%`
                            }}
                        >
                            <div className="skill-icon-container">
                                <i className={skill.icon}></i>
                                <div className="skill-ring">
                                    <div className="skill-progress"></div>
                                </div>
                            </div>
                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-category">{skill.category}</span>
                                <div className="skill-level-bar">
                                    <div className="skill-level-fill"></div>
                                </div>
                            </div>
                            <div className="skill-hover-effect"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}