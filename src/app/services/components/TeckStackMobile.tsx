import React from "react";
import { TechIcons } from "@/data/tech";
import {
  Angular,
  Aws,
  Azure,
  Django,
  Docker,
  Github,
  GoogleCloud,
  Java,
  Jenkins,
  Kubernetes,
  MongoDB,
  Mysql,
  NextJs,
  NodeJS,
  OpenAI,
  postgress,
  Python,
  PyTorch,
  ReactJS,
  ScikitLearn,
  TensorFlow,
  Typescript,
  VueJS,
} from "@/assets/icons/TECHSTACK";
import Label from "@/components/Label";

interface TechDataMobile {
  id: number;
  label: string;
  icon: [];
}

const tectStackDataMobile = [
  {
    id: 1,
    label: "Frontend",
    icons: [
      { name: "react", image: ReactJS },
      { name: "angular", image: Angular },
      { name: "typescript", image: Typescript },
      { name: "vue", image: VueJS },
      { name: "NextJs", image: NextJs },
    ],
  },
  {
    id: 2,
    label: "Backend",
    icons: [
      { name: "python", image: Python },
      { name: "django", image: Django },
      { name: "nodejs", image: NodeJS },
      { name: "java", image: Java },
    ],
  },
  {
    id: 3,
    label: "AI & Machine Learning",
    icons: [
      { name: "tensorflow", image: TensorFlow },
      { name: "pytorch", image: PyTorch },
      { name: "scikitlearn", image: ScikitLearn },
      { name: "OpenAI", image: OpenAI },
    ],
  },
  {
    id: 4,
    label: "Databases",
    icons: [
      { name: "postgres", image: postgress },
      { name: "mongodb", image: MongoDB },
      { name: "mysql", image: Mysql },
    ],
  },
  {
    id: 4,
    label: "Cloud Platforms",
    icons: [
      { name: "aws", image: Aws },
      { name: "azure", image: Azure },
      { name: "googlecloud", image: GoogleCloud },
    ],
  },
  {
    id: 4,
    label: "Devops Tools",
    icons: [
      { name: "kubernetes", image: Kubernetes },
      { name: "docker", image: Docker },
      { name: "jenkins", image: Jenkins },
      { name: "github", image: Github },
    ],
  },
];

const TeckStackMobile = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col justify-center gap-10">
        {tectStackDataMobile.map((item, idx) => {
          return (
            <div key={idx} className="flex flex-col gap-5">
              <div className="flex border-l-3 border-l-[#4C96D7] w-fit px-10 bg-white shadow-[0_10px_10px_-10px_rgba(33,35,38,0.1)] p-2 items-center">
                <span className={`text-sm font-medium text-gray-800 w-full `}>
                  {item.label}
                </span>
              </div>
              <div className="w-full flex gap-10">
                {item.icons.map((icon, idx) => {
                  return (
                    <div className="relative h-[100px] w-[172px]  overflow-hidden flex items-center justify-center">
                      <div className="tech-icon h-10 w-full flex items-center justify-center">
                        <img src={icon.image.src} alt={icon.name} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeckStackMobile;
