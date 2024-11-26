export default function About() {
  return (
    <div className="py-8 container mx-auto px-4">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-4">
          Established in 1990, Indian Public School has been a center of academic excellence
          and holistic development for over three decades.
        </p>

        <h2 className="text-2xl font-bold text-blue-800 mt-6 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          To provide quality education that nurtures creativity, critical thinking,
          and character development in our students.
        </p>

        <h2 className="text-2xl font-bold text-blue-800 mt-6 mb-4">Our Vision</h2>
        <p className="text-gray-600 mb-4">
          Our vision is to be a leading educational institution that empowers students to achieve their full potential and become responsible global citizens.
        </p>

        <h2 className="text-2xl font-bold text-blue-800 mt-6 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Integrity: Upholding the highest standards of honesty and strong moral principles.</li>
          <li>Excellence: Striving for the highest quality in all aspects of education and personal development.</li>
          <li>Respect: Fostering a culture of mutual respect and understanding among students, staff, and the community.</li>
          <li>Innovation: Encouraging creativity and innovation in teaching and learning.</li>
          <li>Community: Building a strong sense of community and collaboration within and beyond the school.</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-800 mt-6 mb-4">Our History</h2>
        <p className="text-gray-600 mb-4">
          Indian Public School was founded in 1990 with the aim of providing high-quality education to students in the region. Over the years, the school has grown and evolved, embracing modern teaching methods and technologies while maintaining a strong focus on traditional values and holistic development.
        </p>
        <p className="text-gray-600 mb-4">
          Our alumni have gone on to achieve great success in various fields, and we continue to be committed to nurturing the next generation of leaders and innovators.
        </p>
      </div>
    </div>
  );
}