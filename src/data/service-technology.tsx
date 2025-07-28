import {
  TechnologyCardImg1,
  TechnologyCardImg2,
  TechnologyCardImg3,
  TechnologyCardImg4,
  TechnologyCardImg5,
  TechnologyCardImg6,
} from "@/assets/images/technology";
import { CardData } from "./service-consulting";
import {
  bulbIcon,
  codeIcon,
  deployIcon,
  maintainIcon,
  sketchIcon,
  testIcon,
} from "@/assets/svg";

export const technologyCard: CardData[] = [
  {
    id: 1,
    title: "Industry Experience",
    subtitle: "25+ Years of Industry Leadership",
    image: TechnologyCardImg1,
    description: [
      "Serving industries like FinTech, US Mortgage, Retail, Insurance, and Healthcare, we combine deep domain expertise with a robust tech stack to create user-friendly, scalable systems. Whether you need a new product, an intelligent application, or a cloud infrastructure, our technology services ensure your business thrives in a competitive landscape.",
    ],
  },
  {
    id: 2,
    title: "End-to-End Solutions",
    subtitle: "Comprehensive Tech for Your Business",
    image: TechnologyCardImg2,
    description: [
      "We provide end-to-end technology solutions tailored to your unique needs. From strategic planning to final deployment, our experts collaborate with you to build disruptive, user-friendly web applications that enhance customer experiences and business agility.",
      "Leveraging technologies like React for dynamic frontends, Django for robust backends, and AWS for scalable infrastructure, we ensure every component of your tech stack is optimized.",
      "Our SOC2-ready processes guarantee security and compliance, giving you peace of mind.",
    ],
  },
  {
    id: 3,
    title: "Product Development",
    subtitle: "From Concept to Market-Ready Launch",
    image: TechnologyCardImg3,
    description: [
      "Our product development process transforms your ideas into market-ready solutions with speed and precision. Using agile methodologies, we iterate rapidly to adapt to evolving requirements, ensuring high-quality deliverables.",
      "Our developers employ React for responsive interfaces, Django for secure backends, and TensorFlow for AI integrations, creating scalable applications for FinTech platforms, retail systems, or healthcare tools. From wireframing to testing, we prioritize collaboration to deliver products that meet your strategic goals.",
    ],
  },
  {
    id: 4,
    title: "AI-Driven Expertise",
    subtitle: "Full-Stack Development Powered by Artificial Intelligence",
    image: TechnologyCardImg4,
    description: [
      "Our full-stack development is powered by artificial intelligence, delivering intelligent applications that set you apart. We integrate AI technologies like TensorFlow and PyTorch to enable features such as predictive analytics, recommendation systems, and automated workflows.",
      "Whether it’s a chatbot for customer engagement or a fraud detection system for financial services, our AI-driven solutions provide personalized experiences and actionable insights, helping you stay ahead in a data-driven world.",
    ],
  },
  {
    id: 5,
    title: "UI/UX Design",
    subtitle: "Crafting Engaging and Intuitive User Experiences",
    image: TechnologyCardImg5,
    description: [
      "Great design drives user engagement, and our UI/UX team excels at creating intuitive, visually stunning interfaces. Using tools like Figma and Adobe XD, we craft wireframes, prototypes, and high-fidelity designs that are responsive across devices.",
      "Our user-centered approach ensures accessibility and usability, whether for a mobile banking app or an e-commerce platform. By prioritizing user feedback, we deliver experiences that boost satisfaction and conversions.",
    ],
  },
  {
    id: 6,
    title: "Cloud Engineering",
    subtitle: "Scalable Systems for Seamless Performance",
    image: TechnologyCardImg6,
    description: [
      "Our cloud engineering services build secure, scalable infrastructures on platforms like AWS, Azure, and Google Cloud. We design architectures that ensure high availability and performance, from serverless applications to hybrid cloud setups.",
      "Our experts handle migrations, set up CI/CD pipelines with Jenkins and GitHub Actions, and implement DevOps practices to streamline operations. With cost optimization and security at the core, we empower your business to scale effortlessly.",
    ],
  },
];

export const servicesCards = [
  {
    id: 1,
    title: "Software Engineers",
    description: [
      "Build full-stack web and mobile apps using React, Django, and Node.js.",
    ],
    bgColor: "#E4EFF8",
  },
  {
    id: 2,
    title: "Data Scientists",
    description: [
      "Analyze data and create predictive models for actionable insights.",
    ],
    bgColor: "#EBE9F9",
  },
  {
    id: 3,
    title: "AI/ML Engineers",
    description: [
      "Develop AI solutions for automation, NLP, and computer vision.",
    ],
    bgColor: "#E9F6E8",
  },
  {
    id: 4,
    title: "Cloud Architects",
    description: [
      "Design scalable cloud infrastructures on AWS, Azure, and Google Cloud.",
    ],
    bgColor: "#F8ECF9",
  },
  {
    id: 5,
    title: "DevOps Engineers",
    description: [
      "Automate CI/CD pipelines with Docker, Kubernetes, and Jenkins.",
    ],
    bgColor: "#FAF3EB",
  },
  {
    id: 6,
    title: "UI/UX Designers",
    description: ["Craft intuitive interfaces using Figma and Adobe XD."],
    bgColor: "#FAEBEB",
  },
  {
    id: 7,
    title: "Operations Specialists",
    description: [
      "Optimize processes with custom software for efficiency and cost savings.",
    ],
    bgColor: "#EDEDED",
  },
];

export const cloudServicesCards = [
  {
    id: 1,
    title: "Cloud Infrastructure Setup",
    description: [
      "Design scalable architectures on AWS, Azure, and Google Cloud using Terraform.",
    ],
    bgColor: "#E4EFF8",
  },
  {
    id: 2,
    title: "CI/CD Services",
    description: [
      "Automate pipelines with Jenkins, GitHub Actions, and AWS CodePipeline.",
    ],
    bgColor: "#EBE9F9",
  },
  {
    id: 3,
    title: "Custom Pipeline Development",
    description: ["Tailor workflows for microservices and serverless apps."],
    bgColor: "#E9F6E8",
  },
  {
    id: 4,
    title: "Cloud Migration",
    description: ["Seamlessly transition on-premises systems to the cloud."],
    bgColor: "#F8ECF9",
  },
  {
    id: 5,
    title: "Cost Optimization",
    description: [
      "Reduce costs with AWS Cost Explorer and Azure Cost Management.",
    ],
    bgColor: "#FAF3EB",
  },
];

export const processCards = [
  {
    id: 1,
    title: "Discovery",
    description: [
      "Conduct workshops using Miro to define user needs and project scope",
      " Align solutions with client goals in Banking, FinTech, and other industries.",
    ],
    bgColor: "#E4EFF8",
    icon: bulbIcon,
  },
  {
    id: 2,
    title: "Design",
    description: [
      "Create wireframes and prototypes with Figma and Adobe XD",
      " Focus on user-centric design for seamless experiences.",
    ],
    bgColor: "#EBE9F9",
    icon: sketchIcon,
  },
  {
    id: 3,
    title: "Development",
    description: [
      "Use agile Scrum with Jira for sprint management",
      " Employ Git for version control and collaboration.",
    ],
    bgColor: "#E9F6E8",
    icon: codeIcon,
  },
  {
    id: 4,
    title: "Testing",
    description: [
      "Perform automated testing with Selenium and Jest",
      "Ensure quality through manual testing and user feedback.",
    ],
    bgColor: "#F8ECF9",
    icon: testIcon,
  },
  {
    id: 5,
    title: "Deployment",
    description: [
      "Automate releases with CI/CD pipelines using Jenkins, GitHub Actions, or AWS CodePipeline.",
    ],
    bgColor: "#FAF3EB",
    icon: deployIcon,
  },
  {
    id: 6,
    title: "Maintenance",
    description: [
      "Monitor performance with New Relic and Datadog",
      "Provide ongoing updates to adapt to evolving needs.",
    ],
    bgColor: "#FAEBEB",
    icon: maintainIcon,
  },
];

export const LifeAtEvoltech = [
  {
    id: 1,
    title: "Innovate Fearlessly",
    description: ["Work on cutting-edge projects with global brands."],
    bgColor: "#E4EFF8",
  },
  {
    id: 2,
    title: "Grow Your Way",
    description: [
      "Tailored career paths with mentorship and learning opportunities.",
    ],
    bgColor: "#EBE9F9",
  },
  {
    id: 3,
    title: "Vibrant Culture",
    description: ["A collaborative, inclusive environment where ideas thrive."],
    bgColor: "#FAF3EB",
  },
  {
    id: 4,
    title: "Make an Impact",
    description: ["Your work will influence trends and drive results."],
    bgColor: "#E9F6E8",
  },
];

export const PerksandBenefits = [
  {
    id: 1,
    title: "Health Care Insurance",
    description: [
      "Comprehensive medical, dental, and vision coverage for you and your family.",
    ],
    bgColor: "#E4EFF8",
  },
  {
    id: 2,
    title: "Remote Work Option",
    description: ["Choose to work from home or office for work-life balance."],
    bgColor: "#EBE9F9",
  },
  {
    id: 3,
    title: "Spot Bonus",
    description: ["Immediate rewards for exceptional performance."],
    bgColor: "#FAF3EB",
  },
  {
    id: 4,
    title: "Provident Fund",
    description: ["Secure retirement planning for our India-based team."],
    bgColor: "#E9F6E8",
  },
  {
    id: 5,
    title: "Yearly Team Outing",
    description: ["Bond with colleagues through annual team-building events."],
    bgColor: "#E4EFF8",
  },
  {
    id: 6,
    title: "Monthly & Quarterly Awards",
    description: ["Regular recognition for outstanding contributions."],
    bgColor: "#EBE9F9",
  },
];
