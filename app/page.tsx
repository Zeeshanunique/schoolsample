"use client"
import { FaGraduationCap, FaRunning, FaPalette, FaNewspaper } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import About from './about/page';
import AdmissionsPage from './admissions/page';
import ContactPage from './contact/page';

export default function Home() {
  const [imageError, setImageError] = useState(false);

  const features = [
    {
      icon: <FaGraduationCap className="text-3xl text-blue-800" />,
      title: "Academic Excellence",
      description: "Comprehensive curriculum focused on holistic development"
    },
    {
      icon: <FaRunning className="text-3xl text-blue-800" />,
      title: "Sports Facilities",
      description: "State-of-the-art sports infrastructure"
    },
    {
      icon: <FaPalette className="text-3xl text-blue-800" />,
      title: "Cultural Activities",
      description: "Rich cultural programs and events"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[70vh] mb-16">
          {!imageError ? (
            <Image
              src="/images/school-hero.jpg"
              alt="School Building"
              fill
              className="object-cover brightness-50"
              priority
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gray-800" />
          )}
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white animate-fadeIn bg-black bg-opacity-50">
            <h1 className="text-5xl font-bold mb-4 text-center px-4">
              Welcome to ONEX GREY RESIDENTIAL PUBLIC SCHOOL
            </h1>
            <p className="text-xl mb-8 text-center px-4">
              Nurturing Excellence, Building Future Leaders
            </p>
            <button className="bg-blue-800 px-8 py-3 rounded-full hover:bg-blue-700 transition-all hover:scale-105 active:scale-95">
              Apply Now
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  {feature.icon}
                  <h2 className="text-xl font-bold text-blue-800">{feature.title}</h2>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Image Gallery */}
        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative h-48 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={`/images/school-${i}.jpg`}
                  alt={`School Image ${i}`}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/fallback.jpg';
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <About  />
      <AdmissionsPage />
      <ContactPage />
    </div>
  );
}