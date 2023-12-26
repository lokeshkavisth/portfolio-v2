import React from "react";
import data from "@/data/data.json";
import Button from "@/components/ui/Button";
import CardOne from "@/components/ui/CardOne";
import FSWDC_AlmaBetter from "@/assets/images/FSWDC_AlmaBetter.png";
import FSWDC_Udemy from "@/assets/images/FSWDC_Udemy.jpg";

export const metadata = {
  title: "Lokesh Sharma's Credentials",
  description:
    "Explore a showcase of my validated skills and achievements, spanning MERN stack, full-stack web development, and beyond. Discover the certifications that demonstrate my dedication to continuous learning and professional growth, ensuring I stay at the forefront of web development trends.",
};

const Certificates = () => {
  const certificateImages = [FSWDC_AlmaBetter, FSWDC_Udemy];

  const { certificates } = data;

  const myCertificates = certificates?.map(
    ({ id, title, description, stack, path }, index) => (
      <li key={id} className="relative">
        <CardOne
          src={certificateImages[index]}
          title={`${index < 10 ? `0${index + 1}` : index + 1} ${title}`}
          description={description}
          stack={stack}
          width={"auto"}
          height={"auto"}
          cardClass={"flex flex-col pb-24 gap-10"}
          cardImgClass={"aspect-video object-cover w-full"}
        />
        <div className="absolute bottom-8 left-6 ">
          <Button href={path} target={"_blank"} text={"learn more"} />
        </div>
      </li>
    )
  );

  return (
    <div>
      <div className="space-y-6">
        <h1 className="text-5xl capitalize">Certificates</h1>
        <p>
          As a committed MERN stack developer, I&#39;ve earned certifications
          across diverse domains, complementing my hands-on experience. Explore
          my validated skills and qualifications on this page, showcasing a
          concise collection of certifications.
        </p>
      </div>
      <hr />

      <div>
        <ul className="space-y-14">{myCertificates}</ul>
      </div>
    </div>
  );
};

export default Certificates;
