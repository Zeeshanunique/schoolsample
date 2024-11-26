const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} ONEX GREY RESIDENTIAL PUBLIC SCHOOL. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-300">Privacy Policy</a>
          <a href="#" className="hover:text-blue-300">Terms of Service</a>
          <a href="/contact" className="hover:text-blue-300">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;