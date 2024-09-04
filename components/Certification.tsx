// import React from 'react';
// import Image from 'next/image';

// interface Certification {
//   title: string;
//   image: string;
//   issuedYear: number;
// }

// const certifications: Certification[] = [
//   {
//     title: 'Tableau Desktop Specialist',
//     image: '/path/to/tableau-desktop-specialist-logo.png', // Replace with the actual path
//     issuedYear: 2023,
//   },
//   {
//     title: 'Microsoft Certified Power BI Data Analyst (PL-300)',
//     image: '/path/to/microsoft-certified-power-bi-data-analyst-logo.png', // Replace with the actual path
//     issuedYear: 2024,
//   },
// ];

// const CertificationsSection = () => {
//   return (
//     <section className="certifications-section">
//       {/* ... rest of the section */}
//       <div className="certifications-list">
//         {certifications.map((certification) => (
//           <div className="certification-item" key={certification.title}>
//             <a href={certification.certificateLink} target="_blank" rel="noopener noreferrer">
//               <Image
//                 src={certification.image}
//                 alt={certification.title}
//                 width={100}
//                 height={100}
//               />
//             </a>
//             <div className="certification-details">
//               <h3>{certification.title}</h3>
//               <p>Issued {certification.issuedYear}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };


// export default CertificationsSection;