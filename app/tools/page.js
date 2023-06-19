// import ProjectCard from "@/components/ui/cards/CardOne";
// import React from "react";
// import dummy from "../../assets/images/Logo 500x500 px (1).jpeg";
// import data from "../../data/data.json";

// const Tools = () => {
//   const skillsLogo = [
//     [dummy, dummy, dummy, dummy, dummy, dummy, dummy, dummy],
//     [dummy, dummy, dummy, dummy],
//     [dummy, dummy, dummy, dummy],
//   ];

//   const imgDIV =
//     "bg-my_black_60 bg-opacity-60 border-b border-b-my_black_20 p-6";

//   const appsAndServices = data[4][0].map(
//     ({ id, title, description }, index) => (
//       <li key={id} className="w-80">
//         <ProjectCard
//           src={skillsLogo[0][index]}
//           title={title}
//           description={description}
//           width={100}
//           height={100}
//           cardClass={"flex flex-col gap-5 p-0"}
//           cardImgClass={"mx-auto"}
//           imgDiv={imgDIV}
//           textDiv={"px-6 pb-6 pt-2"}
//         />
//       </li>
//     )
//   );
//   const mySetup = data[4][1].map(({ id, title, description }, index) => (
//     <li key={id} className="w-80">
//       <ProjectCard
//         src={skillsLogo[1][index]}
//         title={title}
//         description={description}
//         width={100}
//         height={100}
//         cardClass={"flex flex-col gap-5 p-0"}
//         cardImgClass={"mx-auto"}
//         imgDiv={imgDIV}
//         textDiv={"px-6 pb-6 pt-2"}
//       />
//     </li>
//   ));
//   const everyDay = data[4][2].map(({ id, title, description }, index) => (
//     <li key={id} className="w-80">
//       <ProjectCard
//         src={skillsLogo[2][index]}
//         title={title}
//         description={description}
//         width={100}
//         height={100}
//         cardClass={"flex flex-col gap-5 p-0"}
//         cardImgClass={"mx-auto"}
//         imgDiv={imgDIV}
//         textDiv={"px-6 pb-6 pt-2"}
//       />
//     </li>
//   ));

//   return (
//     <div>
//       <div className="space-y-6">
//         <h1 className="text-5xl">Tools</h1>
//         <p>
//           Unleashing Innovation with Cutting-Edge Tools: Exploring the Depths of
//           my Tech Stack Expertise
//         </p>
//       </div>
//       <hr />

//       <section className="space-y-20">
//         {/* Apps & services */}
//         <div className="space-y-10">
//           <div>
//             <h2 className="text-xl mb-3">Apps & services</h2>
//             <p>
//               Some of the apps & services I use to get work done and keep track
//               of my personal life
//             </p>
//           </div>

//           <div>
//             <ul className="grid grid-cols-3 gap-5">{appsAndServices}</ul>
//           </div>
//         </div>

//         {/* Setup */}
//         <div className="space-y-10">
//           <div>
//             <h2 className="text-xl mb-3">Setup</h2>
//             <p>My primary setup used to design, code and make awesome stuff</p>
//           </div>
//           <div>
//             <ul className="grid grid-cols-3 gap-5">{mySetup}</ul>
//           </div>
//         </div>

//         {/* Everyday */}
//         <div className="space-y-10">
//           <div>
//             <h2 className="text-xl mb-3">Everyday</h2>
//             <p>Things that I keep with me, wherever I go</p>
//           </div>
//           <div>
//             <ul className="grid grid-cols-3 gap-5">{everyDay}</ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Tools;
