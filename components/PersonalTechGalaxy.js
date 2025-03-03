import React, { useState, useEffect } from 'react';
import styles from '../styles/PersonalTechGalaxy.module.css';

const PersonalTechGalaxy = () => {
  const educationTimeline = [
  ];

  // Your custom skills organized by category
  const mySkills = [
    // Languages
    { name: "Java", category: "Languages", level: 92, color: "#f89820", icon: "☕" },
    { name: "Python", category: "Languages", level: 97, color: "#3776AB", icon: "🐍" },
    { name: "C", category: "Languages", level: 75, color: "#A8B9CC", icon: "©️" },
    { name: "Bash", category: "Languages", level: 80, color: "#4EAA25", icon: "🐚" },
    { name: "SQL", category: "Languages", level: 85, color: "#e38c00", icon: "🗃️" },
    { name: "jQuery", category: "Languages", level: 70, color: "#0769AD", icon: "🌊" },
    { name: "PHP", category: "Languages", level: 65, color: "#777BB4", icon: "🐘" },
    { name: "JavaScript", category: "Languages", level: 88, color: "#F7DF1E", icon: "📜" },
    { name: "Scala", category: "Languages", level: 70, color: "#DC322F", icon: "🧮" },
    { name: "HiveQL", category: "Languages", level: 75, color: "#FDEE21", icon: "🐝" },
    
    // Tools & Areas
    { name: "MongoDB", category: "Tools & Areas", level: 80, color: "#47A248", icon: "🍃" },
    { name: "AWS S3", category: "Tools & Areas", level: 85, color: "#FF9900", icon: "📦" },
    { name: "AWS Lambda", category: "Tools & Areas", level: 80, color: "#FF9900", icon: "λ" },
    { name: "AWS Redshift", category: "Tools & Areas", level: 75, color: "#FF9900", icon: "🔄" },
    { name: "Kubernetes", category: "Tools & Areas", level: 78, color: "#326CE5", icon: "🎮" },
    { name: "LLMs", category: "Tools & Areas", level: 85, color: "#10B981", icon: "🧠" },
    { name: "Docker", category: "Tools & Areas", level: 92, color: "#2496ED", icon: "🐳" },
    { name: "Terraform", category: "Tools & Areas", level: 75, color: "#7B42BC", icon: "🏗️" },
    { name: "PostgreSQL", category: "Tools & Areas", level: 83, color: "#336791", icon: "🐘" },
    { name: "Snowflake", category: "Tools & Areas", level: 77, color: "#29B5E8", icon: "❄️" },
    { name: "Selenium", category: "Tools & Areas", level: 72, color: "#43B02A", icon: "🧪" },
    { name: "Git", category: "Tools & Areas", level: 88, color: "#F05032", icon: "📂" },
    { name: "Redis", category: "Tools & Areas", level: 75, color: "#DC382D", icon: "📊" },
    { name: "RabbitMQ", category: "Tools & Areas", level: 73, color: "#FF6600", icon: "🐇" },
    { name: "Message Queues", category: "Tools & Areas", level: 78, color: "#00ADEF", icon: "📨" },
    { name: "Vertex AI", category: "Tools & Areas", level: 80, color: "#4285F4", icon: "🔺" },
    { name: "CI/CD", category: "Tools & Areas", level: 85, color: "#16A75C", icon: "🔄" },
    { name: "Ansys", category: "Tools & Areas", level: 70, color: "#FFB71B", icon: "🔧" },
    { name: "Anybody", category: "Tools & Areas", level: 68, color: "#00A4E4", icon: "👤" },
    
    // Frameworks & Libraries
    { name: "Next.js", category: "Frameworks & Libraries", level: 88, color: "#000000", icon: "⬛" },
    { name: "React.js", category: "Frameworks & Libraries", level: 90, color: "#61DAFB", icon: "⚛️" },
    { name: "Node.js", category: "Frameworks & Libraries", level: 85, color: "#339933", icon: "🟢" },
    { name: "Django", category: "Frameworks & Libraries", level: 80, color: "#092E20", icon: "🎸" },
    { name: "FastAPI", category: "Frameworks & Libraries", level: 82, color: "#009688", icon: "⚡" },
    { name: "Flask", category: "Frameworks & Libraries", level: 83, color: "#000000", icon: "🧪" },
    { name: "Express.js", category: "Frameworks & Libraries", level: 85, color: "#000000", icon: "🚂" },
    { name: "TailwindCSS", category: "Frameworks & Libraries", level: 87, color: "#38B2AC", icon: "🎨" },
    { name: "Apache Spark", category: "Frameworks & Libraries", level: 78, color: "#E25A1C", icon: "⚡" },
    { name: "Hadoop", category: "Frameworks & Libraries", level: 75, color: "#FFDE57", icon: "🐘" },

    
    // Machine Learning
    { name: "PyTorch", category: "Machine Learning", level: 82, color: "#EE4C2C", icon: "🔥" },
    { name: "TensorFlow", category: "Machine Learning", level: 84, color: "#FF6F00", icon: "📊" },
    { name: "OpenCV", category: "Machine Learning", level: 80, color: "#5C3EE8", icon: "👁️" },
    { name: "Scikit-learn", category: "Machine Learning", level: 88, color: "#F7931E", icon: "🧮" },
    { name: "NLTK", category: "Machine Learning", level: 80, color: "#3492FF", icon: "📝" },
    { name: "Pandas", category: "Machine Learning", level: 90, color: "#150458", icon: "🐼" },
    { name: "NumPy", category: "Machine Learning", level: 92, color: "#4DABCF", icon: "🔢" },
    { name: "Hugging Face", category: "Machine Learning", level: 83, color: "#FFD21E", icon: "🤗" },
    { name: "MLflow", category: "Machine Learning", level: 75, color: "#0194E2", icon: "📈" },
    { name: "Computer Vision", category: "Machine Learning", level: 85, color: "#FF4B4B", icon: "📷" },
    { name: "NLP", category: "Machine Learning", level: 87, color: "#00A4EF", icon: "💬" },
    { name: "Deep Learning", category: "Machine Learning", level: 83, color: "#764ABC", icon: "🧠" }
  ];

  const [selectedSkill, setSelectedSkill] = useState(null);
  const [animate, setAnimate] = useState(true);
  const categories = [...new Set(mySkills.map(item => item.category))];
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState("galaxy"); // galaxy or timeline
  
  const filteredSkills = filter === "all" 
    ? mySkills 
    : mySkills.filter(skill => skill.category === filter);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [filter, view]);

  // Generate galaxy-style coordinates with orbital patterns - adjusted for larger canvas
  const generateGalaxyPositions = (items) => {
    const positions = [];
    
    // Create orbital rings
    const orbits = 3;
    const itemsPerOrbit = Math.ceil(items.length / orbits);
    
    items.forEach((item, index) => {
      // Determine which orbit this item belongs to
      const orbitIndex = Math.floor(index / itemsPerOrbit);
      // Calculate radius based on orbit - increased radius for larger view
      const orbitRadius = 20 + (orbitIndex * 22);
      // Calculate position in current orbit
      const orbitPosition = index % itemsPerOrbit;
      // Calculate angle based on position in orbit
      const angle = (orbitPosition / itemsPerOrbit) * 2 * Math.PI;
      
      // Add some randomness to make it look more natural
      const radiusVariation = (Math.random() * 6) - 3;
      const angleVariation = (Math.random() * 0.2) - 0.1;
      
      // Calculate final position (as percentages)
      const x = 50 + ((orbitRadius + radiusVariation) * Math.cos(angle + angleVariation));
      const y = 50 + ((orbitRadius + radiusVariation) * Math.sin(angle + angleVariation));
      
      positions.push({ x, y, item, orbit: orbitIndex });
    });
    
    return positions;
  };

  const galaxyPositions = generateGalaxyPositions(filteredSkills);

  // Calculate skill count by category for the pie chart
  const categoryData = {};
  categories.forEach(category => {
    categoryData[category] = mySkills.filter(skill => skill.category === category).length;
  });

  return (
    <div className={styles.personalTechGalaxy}>
      <div className={styles.headerSection}>
        <h2 className={styles.universeTitle}>My Tech Stack</h2>
        <div className={styles.underline}></div>
        
        <div className={styles.timelineContainer}>
          {educationTimeline.map((edu, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelinePeriod}>{edu.period}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* View toggle */}
      <div className={styles.viewToggle}>
        <button
          onClick={() => setView("galaxy")}
          className={view === "galaxy" ? styles.activeToggle : styles.inactiveToggle}
        >
          Galaxy View
        </button>
        <button
          onClick={() => setView("timeline")}
          className={view === "timeline" ? styles.activeToggle : styles.inactiveToggle}
        >
          Stats View
        </button>
      </div>
      
      {/* Category filters */}
      <div className={styles.categoryFilters}>
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? styles.activeFilter : styles.inactiveFilter}
        >
          All Skills
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={filter === category ? styles.activeFilter : styles.inactiveFilter}
          >
            {category}
          </button>
        ))}
      </div>
      
      {view === "galaxy" ? (
        /* Galaxy Visualization */
        <div className={styles.galaxyView}>
          {/* Star background */}
          <div className={styles.starBackground}>
            {Array.from({ length: 150 }).map((_, i) => ( // Increased number of stars
              <div 
                key={i}
                className={styles.star}
                style={{
                  width: `${Math.random() * 3 + 1}px`, // Increased star size
                  height: `${Math.random() * 3 + 1}px`, // Increased star size
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.8 + 0.2,
                  animation: `twinkle ${Math.random() * 8 + 2}s ease-in-out infinite`
                }}
              />
            ))}
          </div>
          
          {/* Skills nodes */}
          <div className={styles.galaxyNodes}>
            {galaxyPositions.map(({ x, y, item, orbit }, index) => (
              <div
                key={item.name}
                className={`${styles.node} ${animate ? styles.nodeAnimate : styles.nodeVisible}`}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transitionDelay: `${index * 30}ms`,
                  zIndex: selectedSkill === item.name ? 10 : 1,
                  animation: `orbit ${10 + orbit * 5}s linear infinite`
                }}
                onClick={() => setSelectedSkill(selectedSkill === item.name ? null : item.name)}
              >
                <div className="group">
                  <div 
                    className={styles.skillCircle}
                    style={{ 
                      // Increase the base size by 20% and adjust the scaling factor
                      width: `${(item.level / 100) * 48 + 20}px`,
                      height: `${(item.level / 100) * 48 + 20}px`,
                      backgroundColor: item.color,
                      boxShadow: `0 0 12px ${item.color}aa, 0 0 24px ${item.color}44`,
                    }}
                  >
                    <div className={styles.skillIcon}>
                      <span>{item.icon}</span>
                    </div>
                  </div>
                  <div 
                    className={`${styles.skillNameOverlay} ${selectedSkill === item.name ? styles.overlayVisible : styles.overlayHidden}`}
                  >
                    {item.name}
                  </div>
                  
                  {selectedSkill === item.name && (
                    <div className={styles.skillDetails}>
                      <div className={styles.detailName}>{item.name}</div>
                      <div className={styles.detailBarContainer}>
                        <div 
                          className={styles.detailBar}
                          style={{ 
                            width: `${item.level}%`,
                            backgroundColor: item.color
                          }}
                        ></div>
                      </div>
                      <div className={styles.detailCategory}>{item.category}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Central node */}
            <div className={styles.centralNode}>
              <div className={styles.centralContent}>
                <span>ME</span>
              </div>
            </div>
          </div>
          
          {/* Bottom info */}
          <div className={styles.bottomInfo}>
            Skills size represents proficiency level • Click for details
          </div>
        </div>
      ) : (
        /* Stats View */
        <div className={styles.statsView}>
          {/* Category Distribution */}
          <div className={styles.statsCard}>
            <h3 className={styles.statsTitle}>Skill Distribution</h3>
            <div className={styles.statsChart}>
              {categories.map((category, index) => {
                const count = mySkills.filter(skill => skill.category === category).length;
                const percentage = Math.round((count / mySkills.length) * 100);
                // Updated color options to match website color scheme
                const colorOptions = [
                  'linear-gradient(180deg, #8d6e63, #a1887f)',
                  'linear-gradient(180deg, #795548, #8d6e63)',
                  'linear-gradient(180deg, #5d4037, #795548)',
                  'linear-gradient(180deg, #6d4c41, #8d6e63)'
                ];
                return (
                  <div key={category} className={styles.statsBarContainer}>
                    <div className={styles.statsBar} style={{ 
                      height: `${percentage * 1.2}%`,
                      background: colorOptions[index % colorOptions.length]
                    }}></div>
                    <div className={styles.statsPercentage}>{percentage}%</div>
                  </div>
                );
              })}
            </div>
            <div className={styles.statsFooter}>
              <div className={styles.statsFooterItem}>
                <span>Total Skills</span>
                <span>{mySkills.length}</span>
              </div>
              {categories.map(category => (
                <div key={category} className={styles.statsFooterItem}>
                  <span>{category.split(' ')[0]}</span>
                  <span>{mySkills.filter(skill => skill.category === category).length}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Top Skills */}
          <div className={styles.statsCard}>
            <h3 className={styles.statsTitle}>Top Skills</h3>
            <div className={styles.topSkills}>
              {mySkills
                .sort((a, b) => b.level - a.level)
                .slice(0, 8)
                .map(skill => (
                  <div key={skill.name} className={styles.topSkillItem}>
                    <div 
                      className={styles.topSkillIcon}
                      style={{ 
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}80`
                      }}
                    >
                      {skill.icon}
                    </div>
                    <div className={styles.topSkillInfo}>
                      <div className={styles.topSkillName}>{skill.name}</div>
                      <div className={styles.topSkillBarContainer}>
                        <div 
                          className={styles.topSkillBar}
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundColor: skill.color
                          }}
                        ></div>
                      </div>
                      <div className={styles.topSkillLevel}>{skill.level}%</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Legend section has been removed */}
    </div>
  );
};

export default PersonalTechGalaxy;