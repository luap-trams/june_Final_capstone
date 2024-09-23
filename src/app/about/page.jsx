import { FaUsers, FaBullseye, FaBriefcase, FaHandHoldingUsd, FaPhone } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="gap-10 p-10 bg-blue-200">
      {/* About Us */}
      <div className="text-center text-black p-10" /*style={{ backgroundImage: "url('/images/PenthouseInLekki.jpeg') bg-cover" }}*/>
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg">
          Welcome to <strong>SmartOptions Property Solutions Limited!</strong>
        </p>
        <p>
          At SmartOptions Property Solutions Limited, we pride ourselves on providing top-notch real estate management services tailored to meet the unique needs of our clients. With a commitment to excellence, transparency, and innovation, we strive to deliver unparalleled value in every property we manage.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10 p-5">
      <div className='p-5 rounded-md h-full w-full bg-cover bg-center border-blue-400 border-4 ' style={{ backgroundImage: "url('/coder_b.jpeg')" }}>
          
        </div>

        {/* Who We Are */}
        <div className='bg-blue-400 bg-opacity-100 hover:bg-opacity-80 p-5 rounded-md'>
          <div className="items-center mb-4">
            <FaUsers className="text-7xl mr-4 text-blue-700" />
            <h3 className="text-2xl font-semibold flex place-items-center">Who We Are</h3>
          </div>
          <p>
            SmartOptions Property Solutions Limited is a dynamic real estate management company dedicated to optimizing the potential of your real estate investments. Whether you're an individual property owner, an investor, or a commercial enterprise, our team of experienced professionals is here to ensure your properties are managed efficiently and profitably.
          </p>
        </div>

        {/* Our Mission */}
        <div className='bg-blue-400 bg-opacity-100 hover:bg-opacity-80 p-5 rounded-md'>
          <div className="items-center mb-4">
            <FaBullseye className="text-7xl mr-4 text-blue-700" />
            <h3 className="text-2xl font-semibold">Our Mission</h3>
          </div>
          <p>
            Our mission is simple: to offer smart, effective solutions that enhance the value of every property under our care. We believe in building lasting relationships with our clients by providing personalized service, expert advice, and a proactive approach to property management.
          </p>
        </div>
      </div>

        {/* What We Offer */}
      <div className="grid grid-cols-2 gap-10 p-5">
        <div className='bg-blue-400 bg-opacity-100 hover:bg-opacity-80 p-5 rounded-md'>
          <div className="items-center mb-4">
            <FaBriefcase className="text-7xl mr-4 text-blue-700" />
            <h3 className="text-2xl font-semibold">What We Offer</h3>
          </div>
          <ul className="list-disc pl-6">
            <li>
              <strong>Comprehensive Property Management:</strong> From tenant relations and lease administration to maintenance and financial reporting, we handle every aspect of property management so you don’t have to.
            </li>
            <li>
              <strong>Customized Solutions:</strong> We understand that every property and client is unique. That’s why we tailor our services to meet your specific needs and goals.
            </li>
            <li>
              <strong>Expertise and Innovation:</strong> Our team stays ahead of industry trends, utilizing the latest technologies and best practices to maximize the performance and value of your properties.
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className='bg-blue-400 bg-opacity-100 hover:bg-opacity-80 p-5 rounded-md'>
          <div className="items-center mb-4">
            <FaHandHoldingUsd className="text-7xl mr-4 text-blue-700" />
            <h3 className="text-2xl font-semibold">Why Choose Us?</h3>
          </div>
          <p>
            At SmartOptions Property Solutions Limited, we go beyond traditional property management. We are committed to delivering results that exceed expectations, ensuring that your investment is in the best possible hands. With our expert team by your side, you can enjoy peace of mind knowing that your property is being managed with the utmost care and professionalism.
          </p>
        </div>
      </div>

      {/* Contact Us */}
      <div className="text-center mt-8">
        <div className="flex justify-center items-center mb-4">
          <FaPhone className="text-3xl mr-4 text-red-500" />
          <h3 className="text-2xl font-semibold">Contact Us</h3>
        </div>
        <p>
          Ready to experience the SmartOptions difference? Contact us today to learn more about how we can help you achieve your real estate goals. We look forward to partnering with you in managing your properties with intelligence, integrity, and a commitment to excellence.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
