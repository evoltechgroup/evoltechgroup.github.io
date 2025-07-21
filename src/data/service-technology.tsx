import {
  TechnologyCardImg1,
  TechnologyCardImg2,
  TechnologyCardImg3,
  TechnologyCardImg4,
  TechnologyCardImg5,
  TechnologyCardImg6,
} from "@/assets/images/technology";
import { CardData } from "./service-consulting";

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
