import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

const experiencesData = [
  {
    id: 1,
    company: "UI Health",
    role: "Graduate Research Assistant",
    employmentType: "Part-time",
    duration: "May 2024 - Present (10 mos)",
    location: "Chicago, IL",
    bulletPoints: [
      "Developed predictive models using supervised and unsupervised machine learning algorithms, improving fracture detection accuracy by 13%.",
      "Developed and optimized YOLO-based machine learning models for medical image analysis.",
      "Led data exploration, cleaning, and feature extraction from biomechanical datasets, increasing data processing efficiency by 20%.",
      "Designed real-time data visualization dashboards using Python, MATLAB, and Plotly, enhancing analysis by 30%.",
      "Collaborated with an interdisciplinary team to ensure real-world applicability of research outcomes.",
    ]
  },
  {
    id: 2,
    company: "University of Illinois Chicago",
    role: "Web Developer",
    employmentType: "Part-time",
    duration: "Apr 2024 - Present (11 mos)",
    location: "Chicago, IL (Hybrid)",
    bulletPoints: [
      "Designed and built responsive web applications using React.js and Node.js, improving page load times by 25%.",
      "Integrated enterprise-level databases like PostgreSQL, enabling real-time data access and reducing query response times by 30%.",
      "Managed project workflows with Jira, cutting issue resolution times by 30% and boosting team efficiency.",
      "Customized WordPress plugins and themes, leading to a 15% increase in user retention.",
    ]
  },
  {
    id: 3,
    company: "Microsoft TEALS Program",
    role: "CS Teaching Assistant",
    employmentType: "Part-time",
    duration: "Jun 2024 - Present (9 mos)",
    location: "Wisconsin, United States (Remote)",
    bulletPoints: [
      "Teach Java to high school students at Cedar High School, WI."
    ]
  },
  {
    id: 4,
    company: "Intel Corporation",
    role: "Intel OneAPI Student Ambassador",
    employmentType: "Part-time",
    duration: "Mar 2024 - Present (1 yr)",
    location: "Chicago, IL",
    bulletPoints: [
      "Conducted multiple hands-on workshops on Intel OneAPI tools, demonstrating real-world applications and optimizing computing tasks.",
      "Fostered a thriving community of developers and students by organizing hackathons and coding competitions.",
      "Led technical projects showcasing OneAPI’s capabilities for heterogeneous computing."
    ]
  },
  {
    id: 5,
    company: "Confetti",
    role: "Machine Learning Intern",
    employmentType: "Internship",
    duration: "May 2024 - Aug 2024 (4 mos)",
    location: "Tampa, FL (Remote)",
    bulletPoints: [
      "Developed and optimized machine learning models to automate job application processes, increasing efficiency by 30%.",
      "Implemented NLP techniques to match job seekers to relevant postings, improving relevancy scores by 25%.",
      "Built data preprocessing pipelines for cleaning unstructured job posting datasets, reducing processing time by 50%."
    ]
  },
  {
    id: 6,
    company: "University of Illinois System",
    role: "Student Outreach Representative",
    employmentType: "Part-time",
    duration: "Mar 2024 - Jul 2024 (5 mos)",
    location: "Chicago, IL (On-site)",
    bulletPoints: [
      "Engaged with over 200+ alumni to foster relationships and solicit funding for UIC initiatives.",
      "Raised over $2500+ in donations, contributing to university development goals.",
      "Developed and executed outreach strategies to increase alumni participation and support.",
      "Coordinated with the fundraising team to maximize impact, achieving a 20% increase in overall donations."
    ]
  },
  {
    id: 7,
    company: "LTIMindtree",
    role: "Software Engineer",
    employmentType: "Full-time",
    duration: "Mar 2023 - Aug 2023 (6 mos)",
    location: "India (Remote)",
    bulletPoints: [
      "Designed scalable web applications, leading to 15% faster data visualization for business insights.",
      "Collaborated with agile teams to deliver end-to-end features, including backend APIs for cross-platform data handling.",
      "Deployed back-end solutions using AWS Lambda and S3 for scalable data preprocessing and storage.",
      "Developed mobile-responsive, WCAG-compliant UIs to enhance user accessibility."
    ]
  },
  {
    id: 8,
    company: "LTIMindtree",
    role: "Software Engineer",
    employmentType: "Full-time",
    duration: "Jan 2023 - Mar 2023 (3 mos)",
    location: "Chennai (Hybrid)",
    bulletPoints: [
      "Worked on agile methodology, improving communication and sprint planning efficiency.",
      "Enhanced JavaScript-based front-end features, boosting user engagement by 10%.",
      "Implemented CI/CD pipelines for faster, more reliable deployments."
    ]
  },
  {
    id: 9,
    company: "Perpetuuiti Technosoft PTE",
    role: "Developer Intern",
    employmentType: "Internship",
    duration: "Nov 2022 - Dec 2022 (2 mos)",
    location: "Chennai, India",
    bulletPoints: [
      "Developed Python-based data integration solutions, reducing manual processes by 15%.",
      "Worked with Red Hat Linux and Anaconda for debugging and troubleshooting, improving system stability by 30%.",
      "Improved RPA workflows to automate routine tasks."
    ]
  },
  {
    id: 10,
    company: "IBM",
    role: "Data Analyst Intern",
    employmentType: "Internship",
    duration: "Aug 2022 - Nov 2022 (4 mos)",
    location: "Chennai, India (Remote)",
    bulletPoints: [
      "Developed real-time data pipelines using Kafka and Apache Spark, reducing processing delays by 50%.",
      "Optimized database architecture with indexing and partitioning, improving query performance by 40%.",
      "Enhanced system performance through advanced caching strategies."
    ]
  },
  {
    id: 11,
    company: "Salesforce",
    role: "Salesforce Intern",
    employmentType: "Part-time",
    duration: "Apr 2022 - Jul 2022 (4 mos)",
    location: "N/A",
    bulletPoints: [
      "Assisted in configuring Salesforce CRM solutions for client projects.",
      "Developed custom Apex triggers to automate business logic, reducing manual tasks by 25%.",
      "Collaborated with cross-functional teams to improve data quality and migration processes."
    ]
  }
];

export default function ExperiencesTimeline() {
  return (
    <Timeline position="alternate">
      {experiencesData.map(exp => (
        <TimelineItem key={exp.id}>
          {/* Duration on the opposite side */}
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {exp.duration}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot variant="outlined" sx={{ borderColor: '#5c4033' }}>
              <Typography variant="caption" color="#5c4033">
                {exp.role.charAt(0)}
              </Typography>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 20, rotation: 10, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, rotation: 0, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* First row: role - employment type */}
              <Typography variant="h6" component="div" color="#5c4033">
                {exp.role} {exp.employmentType && <span> - {exp.employmentType}</span>}
              </Typography>
              {/* Second row: company, location */}
              <Typography variant="subtitle2" color="#5c4033">
                {exp.company}, {exp.location}
              </Typography>
              {/* Bullet points (left-aligned) */}
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem', textAlign: 'left', color: '#5c4033' }}>
                {exp.bulletPoints.map((point, index) => (
                  <li key={index}>
                    <Typography variant="body2">{point}</Typography>
                  </li>
                ))}
              </ul>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
