import { useRef } from 'react';
import Navbar from '../Components/Navbar';
import QuickRidesCmp from '../Components/QuickRidesCmp';
import BookCmp from '../Components/BookCmp';
import AboutCmp from '../Components/AboutCmp';
import ContactCmp from '../Components/ContactCmp';
import Menubar from '../Components/Menubar';
import Footer from '../Components/Footer';
import WhyQuickRide from '../Components/WhyQuickRide';


function Home() {
  const aboutRef =useRef(null)
  const contactRef =useRef(null)
  const refs ={
    about:aboutRef,
    contact:contactRef,
  }
  const scrollToSection=(section)=>{
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  }
  

  return (
    <>
    <Navbar scrollToSection={scrollToSection} hover="text-[#000000be] hover:text-[#000000] " />
        <QuickRidesCmp/>
        <div className='flex flex-col md:flex-row gap-7 md:gap-4 px-7 md:px-16 py-14'>
            <BookCmp head="Book Now Your Ride" para="Experience the ease of hiring a professional driver with QuickRide’s simple and efficient booking process." btn="Book Now" />
            <BookCmp head="Reserve Your Ride" para="Plan ahead and secure a professional driver for your specific needs with our Reserve Booking option." btn="Reserve Ride" />
            <BookCmp head="Haven’t you vehicle" para="Need a vehicle along with a professional driver for your trip?" btn="Book Now" />
        </div>
        <AboutCmp aboutRef={aboutRef} />
        <WhyQuickRide/>
        <ContactCmp contactRef={contactRef} />
        <Menubar/>
       <Footer/>

    </>
  )
}

export default Home