// src/pages/Home.js

import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}>
        <h1 className="text-5xl font-bold mb-4">Get Fit, Stay Healthy</h1>
        <p className="text-lg mb-8">Join us in the journey to a healthier, happier you.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </section>

      {/* Introduction to Fitness */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Why Fitness Matters</h2>
        <p className="text-lg mb-8">Fitness is not just about hitting the gym; it’s about an active lifestyle. Learn the benefits of staying fit and how you can get started.</p>
        <div className="flex flex-wrap justify-center">
          <div className="w-1/3 p-4">
            <img src="/path/to/icon1.png" alt="Icon 1" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Improved Mood</h3>
            <p>Exercise boosts your mood and overall mental health.</p>
          </div>
          <div className="w-1/3 p-4">
            <img src="/path/to/icon2.png" alt="Icon 2" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Increased Energy</h3>
            <p>Regular physical activity increases your energy levels.</p>
          </div>
          <div className="w-1/3 p-4">
            <img src="/path/to/icon3.png" alt="Icon 3" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Better Sleep</h3>
            <p>Exercise can help you fall asleep faster and enjoy deeper sleep.</p>
          </div>
        </div>
      </section>

      {/* Key Fitness Concepts */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center mb-6">Key Fitness Concepts</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-1/2 p-4 md:w-1/4">
            <img src="/path/to/cardio.png" alt="Cardio" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Cardio</h3>
            <p>Cardio exercises improve your heart health and endurance.</p>
          </div>
          <div className="w-1/2 p-4 md:w-1/4">
            <img src="/path/to/strength.png" alt="Strength" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Strength Training</h3>
            <p>Build muscle and increase your metabolic rate with strength training.</p>
          </div>
          <div className="w-1/2 p-4 md:w-1/4">
            <img src="/path/to/flexibility.png" alt="Flexibility" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Flexibility</h3>
            <p>Improve your flexibility and reduce the risk of injuries.</p>
          </div>
          <div className="w-1/2 p-4 md:w-1/4">
            <img src="/path/to/balance.png" alt="Balance" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Balance</h3>
            <p>Enhance your stability and coordination with balance exercises.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 text-center bg-gray-100">
        <h2 className="text-4xl font-bold mb-6">What Our Members Say</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <img src="/path/to/testimonial1.jpg" alt="Testimonial 1" className="rounded-full w-24 h-24 mx-auto mb-4" />
            <p className="italic mb-2">"This fitness program has changed my life. I'm healthier and happier!"</p>
            <p className="font-bold">- Alex Johnson</p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <img src="/path/to/testimonial2.jpg" alt="Testimonial 2" className="rounded-full w-24 h-24 mx-auto mb-4" />
            <p className="italic mb-2">"I love the variety of workouts and the supportive community."</p>
            <p className="font-bold">- Jamie Lee</p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <img src="/path/to/testimonial3.jpg" alt="Testimonial 3" className="rounded-full w-24 h-24 mx-auto mb-4" />
            <p className="italic mb-2">"The trainers are amazing and really help you achieve your goals."</p>
            <p className="font-bold">- Taylor Smith</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="py-6 bg-gray-800 text-white text-center">
        <div className="mb-4">
          <a href="/about" className="mx-2">About</a>
          <a href="/contact" className="mx-2">Contact</a>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-500"><i className="fab fa-facebook fa-2x"></i></a>
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-300"><i className="fab fa-twitter fa-2x"></i></a>
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-500"><i className="fab fa-instagram fa-2x"></i></a>
        </div>
        <p>&copy; 2024 Fitness Pro. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Home;
