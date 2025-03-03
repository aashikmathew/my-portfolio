import React, { useState } from 'react';
import styles from '../styles/Publications.module.css';

export default function Publications() {
  const [expandedPublications, setExpandedPublications] = useState({});

  const togglePublication = (id) => {
    setExpandedPublications(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const publications = [
    {
        id: 'pediatric-fracture',
        title: 'Enhancing Pediatric Distal Radius Fracture Detection: Optimizing YOLOv8 with Advanced AI and Machine Learning Techniques',
        publisher: 'Under Review - BMC Conference',
        date: 'October 2024',
        paperLink: 'https://doi.org/10.21203/rs.3.rs-5306607/v1',
        details: [
          'Authors: Dr. Farid Amirouche, Aashik Mathew Prosper, Dr. Majd Mzeihem',
          'DOI: 10.21203/rs.3.rs-5306607/v1',
          'License: CC BY 4.0',
          'Developed an AI-driven approach for pediatric distal radius fracture detection using YOLOv8 and machine learning optimizations.',
          'Implemented feature engineering techniques and hyperparameter tuning to improve model accuracy and reduce false positives.',
          'Integrated clinical validation feedback to enhance real-world applicability in medical diagnostics.'
        ]
      },
    {
      id: 'precision-farming',
      title: 'Precision Farming Using Machine Learning and Data Analytics',
      publisher: 'IEEE',
      date: 'Mar 19, 2024',
      paperLink: 'https://ieeexplore.ieee.org/document/10465318', 
      details: [
        'Collaborated with a peer to collect and analyze extensive datasets of over 5,000+ samples, and trained a machine learning model to predict crops using advanced algorithms and developed a flask web application.',
        'Achieved an outstanding 99.31% accuracy rate by rigorously testing and comparing six different supervised learning algorithms, utilizing XGBoost algorithm for optimal results, and improved efficiency.',
        'Leveraged advanced data analytics and machine learning libraries, including Matplotlib, Seaborn, Pandas, NumPy, and Sci-kit learn, to build and refine the crop yield prediction model, resulting in enhanced performance of the web application.'
      ]
    },
    {
      id: 'license-plate',
      title: 'Realtime License Plate Detection Using YOLO V5 and ResNet50 CNN',
      publisher: 'IEEE',
      date: 'Mar 23, 2023',
      paperLink: 'https://ieeexplore.ieee.org/document/10105076', 
      details: [
        'Developed an advanced CCTV-based system for automatically detecting motorcyclists without helmets and identifying their license plates.',
        'Utilized cutting-edge techniques like Cascade R-CNN and Mask R-CNN, alongside a novel approach that employs Resnet50 for enhanced accuracy and speed.',
        'Achieved remarkable accuracy (mAP) of 98.89%, an F1-score of 94.6, and the ability to process 130 frames per second.',
        'Implemented comprehensive object detection workflow from background subtraction to license plate recognition for traffic violation enforcement.',
        'Led a team to a pivotal advancement in traffic safety technology for developing countries where motorcycle usage is prevalent.'
      ]
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Research Publications</h2>
        <div className={styles.underline}></div>

        <div className={styles.publicationsList}>
          {publications.map((pub) => (
            <div key={pub.id} className={styles.publicationCard}>
              <div className={styles.cardContent}>
                <h3 className={styles.publicationTitle}>{pub.title}</h3>
                <div className={styles.publicationMeta}>
                  {pub.status && (
                    <span className={styles.status}>{pub.status}</span>
                  )}
                  <span className={styles.publisher}>{pub.publisher}</span>
                  <span className={styles.date}>{pub.date}</span>
                </div>
                
                <div className={styles.actionsRow}>
                  <button 
                    className={styles.toggleButton}
                    onClick={() => togglePublication(pub.id)}
                    aria-expanded={expandedPublications[pub.id]}
                  >
                    <span>
                      {expandedPublications[pub.id] ? 'Hide' : 'Show'} publication
                    </span>
                    <span className={`${styles.arrow} ${expandedPublications[pub.id] ? styles.up : ''}`}>
                      ↓
                    </span>
                  </button>

                  {pub.paperLink && (
                    <a 
                      href={pub.paperLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.paperLink}
                    >
                      View Paper
                    </a>
                  )}
                </div>

                {expandedPublications[pub.id] && (
                  <div className={styles.publicationDetails}>
                    <ul className={styles.detailsList}>
                      {pub.details.map((detail, index) => (
                        <li key={index} className={styles.detailItem}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}