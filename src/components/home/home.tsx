import React from "react";
import CaroselVideo from "./caroselVideo";
import Stats from "./stats";
import About from "./about";

const videoData = [
  {
    video: "path/to/video1.mp4",
    title: "Amazing Video 1",
    description: "Description for video 1",
  },
  {
    video: "path/to/video2.mp4",
    title: "Amazing Video 2",
    description: "Description for video 2",
  },
  {
    video: "path/to/video3.mp4",
    title: "Amazing Video 3",
    description: "Description for video 3",
  },
];

const statsData = [
    { name: 'Projects', number: 50, description: 'Completed successfully' },
    { name: 'Clients', number: 120, description: 'Worldwide clients' },
    { name: 'Awards', number: 8, description: 'Recognized excellence' },
    { name: 'Team Members', number: 200, description: 'Experienced professionals' },
  ];
  
  const aboutUsText = "Meygham Partners is a diverse group of service and solution providers, specializing in various areas such as digital transformation, cloud migration, cyber security, and medical healthcare billing. With their expertise in RCM (revenue cycle management) services, they are dedicated to helping businesses and organizations navigate the complex landscape of modern technology and security. Their focus on digital transformation and cloud migration indicates a commitment to staying at the forefront of technological advancements, while their specialization in cyber security and healthcare billing demonstrates their understanding of the specific needs and challenges faced by different industries. By offering a comprehensive range of services, Meygham Partners aims to be a one-stop solution for all their clients' digital and technological needs.";

  const rightSectionsData = [
    { title: 'Our Mission', description: 'To deliver quality solutions.' },
    { title: 'Our Vision', description: 'To be a leading service provider.' },
  ];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <CaroselVideo data={videoData} />
      <Stats aboutUsText={aboutUsText} statsData={statsData} />
      <About
      leftImage="https://example.com/image.jpg"
      leftTitle="About Us"
      leftDescription="We are a dedicated team focused on delivering exceptional solutions to our clients."
      rightSections={rightSectionsData}
    />

    </div>
  );
};

export default Home;
