// src/app/education/page.tsx
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const EducationPage = () => {
  // defensively ensure education is an array and flatten nested structure
  const educationList = Array.isArray(portfolioConfig.education)
    ? portfolioConfig.education.map(item => item.education || item.postgraduate)
    : [(portfolioConfig.education as any)?.education || (portfolioConfig.education as any)?.postgraduate];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Briefcase className="h-4 w-4" />
        Education
      </Badge>

      <div className="flex flex-col gap-3 w-full">
        <Heading>My Education</Heading>
      </div>

      <div className="w-full h-fit flex flex-col gap-4">
        {educationList.filter(Boolean).map((edu, index) => (
          <div className="w-full h-fit flex items-start gap-4" key={index}>
            <FramerWrapper
              y={0}
              x={-100}
              delay={index * 0.05}
              className="w-1/4 font-rubik flex items-center justify-start text-lg max-sm:text-sm"
            >
              <div className="text-sm text-muted-foreground">{edu.period}</div>
            </FramerWrapper>

            <FramerWrapper
              y={0}
              x={100}
              delay={index * 0.05}
              className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
            >
              <div className="text-2xl font-rubik max-sm:text-lg">
                {edu.degree}
                <span className="block text-base font-medium mt-1">{edu.institution}</span>
                <span className="block text-sm text-muted-foreground mt-1">{edu.location}</span>
              </div>

              <p className="font-poppins text-base text-primary max-sm:text-sm mt-3">
                {edu.description}
              </p>

              {/* optional cgpa */}
              {edu.cgpa && (
                <div className="mt-2 text-sm text-muted-foreground">CGPA: {edu.cgpa}</div>
              )}
            </FramerWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
