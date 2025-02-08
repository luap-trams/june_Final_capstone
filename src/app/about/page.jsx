import { FaUsers, FaBullseye, FaBriefcase, FaHandHoldingUsd, FaPhone } from 'react-icons/fa';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className='main-container'>
    {/* <div className="bg-cover bg-center bg-no-repeat h-full"
  style={{ backgroundImage: "url('/background_cover.jpeg')" }}> */}
   
   
      <div className="text-center text-black p-10">
        <h2 className="mt-12 text-2xl md:text-4xl font-bold mb-4 md:mt-6 ">About Us</h2>
        <p className="text-lg">
          Welcome to <strong>SmartOptions Property Solutions Limited!</strong>
        </p>
        <p>
          At SmartOptions Property Solutions Limited, we pride ourselves on providing top-notch real estate management services tailored to meet the unique needs of our clients. With a commitment to excellence, transparency, and innovation, we strive to deliver unparalleled value in every property we manage.
        </p>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5">
      <div className='bg-blue-400 bg-opacity-100 hover:bg-opacity-80 p-5 rounded-md'>
      <div className="flex items-center mb-4">
            <FaUsers className="text-7xl mr-4 text-blue-700" />
        <h3 className="text-2xl font-semibold">Who We Are</h3>
      </div>
          <p>
            SmartOptions Property Solutions Limited is a dynamic real estate management company dedicated to optimizing the potential of your real estate investments. Whether you're an individual property owner, an investor, or a commercial enterprise, our team of experienced professionals is here to ensure your properties are managed efficiently and profitably.
          </p>
        </div>

        <div className='bg-blue-400 bg-opacity-100 hover:bg-opacity-80 p-5 rounded-md'>
          <div className="flex items-center mb-4">
            <FaBullseye className="text-7xl mr-4 text-blue-700" />
            <h3 className="text-2xl font-semibold">Our Mission</h3>
          </div>
          <p>
            Our mission is simple: to offer smart, effective solutions that enhance the value of every property under our care. We believe in building lasting relationships with our clients by providing personalized service, expert advice, and a proactive approach to property management.
          </p>
        </div>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5">
        <div className='bg-blue-400 bg-opacity-100 hover:bg-opacity-80 p-5 rounded-md'>
          <div className="flex items-center mb-4">
            <FaBriefcase className="text-7xl mr-4 text-blue-700" />
            <h3 className="text-2xl font-semibold">What We Offer</h3>
          </div>
          <ul className="list-disc pl-6">
            <li>
              <strong>Comprehensive Property Management:</strong> From tenant relations and lease administration to maintenance and financial reporting, we handle every aspect of property management so you don't have to.
            </li>
            <li>
              <strong>Customized Solutions:</strong> We understand that every property and client is unique. That's why we tailor our services to meet your specific needs and goals.
            </li>
            <li>
              <strong>Expertise and Innovation:</strong> Our team stays ahead of industry trends, utilizing the latest technologies and best practices to maximize the performance and value of your properties.
            </li>
          </ul>
        </div>

        <div className='bg-blue-400 bg-opacity-100 hover:bg-opacity-80 p-5 rounded-md'>
          <div className="flex items-center mb-4">
            <FaHandHoldingUsd className="text-7xl mr-4 text-blue-700" />
            <h3 className="text-2xl font-semibold">Why Choose Us?</h3>
          </div>
          <p>
          At SmartOptions Property Solutions Limited, we don't just manage properties, we maximize their value. Our expert team ensures seamless tenant relations, proactive maintenance, and strategic investment growth, giving you peace of mind and higher returns. With a commitment to professionalism and attention to detail, we handle every aspect of your property with care. <br /><br />
Partner with us today and experience hassle-free property management that delivers real results. <br />
<br /><Link href={'/contact'} className='bg-blue-900 text-white p-2 rounded-sm'>Contact Us</Link> now to get started!
{/* <Link href={'/about'}>  */}
          </p>
        </div>
      </div>

   
      <div className="text-center mt-8">
        {/* <div className="flex justify-center items-center mb-4">
          <FaPhone className="text-3xl mr-4 text-blue-500" />
          <h3 className="text-2xl font-semibold">Contact Us</h3>
        </div> */}
        {/* <p>
          Ready to experience the SmartOptions difference? Contact us today to learn more about how we can help you achieve your real estate goals. We look forward to partnering with you in managing your properties with intelligence, integrity, and a commitment to excellence.
        </p> */}
      </div>
    </div>
  );
};

export default AboutUs;
