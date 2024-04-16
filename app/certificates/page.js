import React from "react";
import { certificates } from "@/data/data.json";
import FSWDC_AlmaBetter from "@/assets/images/FSWDC_AlmaBetter.png";
import FSWDC_Udemy from "@/assets/images/FSWDC_Udemy.jpg";
import Card from "@/components/ui/Card";

export const metadata = {
  title: "Lokesh Sharma's Credentials",
  description:
    "Explore a showcase of my validated skills and achievements, spanning MERN stack, full-stack web development, and beyond. Discover the certifications that demonstrate my dedication to continuous learning and professional growth, ensuring I stay at the forefront of web development trends.",
};

const Certificates = () => {
  const certificateImages = [FSWDC_AlmaBetter, FSWDC_Udemy];

  const myCertificates = certificates?.map(({ id, title, ...props }, index) => (
    <li key={id}>
      <Card
        src={certificateImages[index]}
        title={`${index < 10 ? `0${index + 1}` : index + 1} ${title}`}
        {...props}
        cardClass={"flex-col md:flex-row"}
        cardImgClass={"aspect-video object-cover md:max-w-md"}
      />
    </li>
  ));

  return (
    <div>
      <div className="space-y-6">
        <h1>Certificates</h1>
        <p>
          As a committed MERN stack developer, I&#39;ve earned certifications
          across diverse domains, complementing my hands-on experience. Explore
          my validated skills and qualifications on this page, showcasing a
          concise collection of certifications.
        </p>
      </div>
      <hr />

      <div>
        <ul className="space-y-6">{myCertificates}</ul>
      </div>
    </div>
  );
};

export default Certificates;
