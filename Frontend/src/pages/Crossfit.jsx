import React, { useState } from 'react';
import PurchaseForm from '../components/PurchaseForm';
import murphImage from '../assets/homePageImage/happybaby.jpg';
import franImage from '../assets/homePageImage/happybaby.jpg';
import cindyImage from '../assets/homePageImage/happybaby.jpg';
import helenImage from '../assets/homePageImage/happybaby.jpg';

const Crossfit = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const handlePurchaseClick = (program) => {
    setSelectedProgram(program);
    setShowModal(true);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-gray-100 to-gray-200">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Introduction to CrossFit</h2>
      <div className="max-w-4xl mx-auto mb-10 ">
        <p className="text-lg mb-6 text-gray-700">
          CrossFit is a high-intensity fitness program incorporating elements from several sports and types of exercise. It is designed to improve overall fitness and includes a wide variety of functional movements performed at high intensity.
        </p>
        <p className="text-lg text-gray-700">
          CrossFit workouts are known as WODs (Workouts of the Day) and can include exercises such as weightlifting, running, rowing, and gymnastics. Here are some popular CrossFit workouts:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative">
          {/* <img src={murphImage} alt="Murph Workout" className="rounded-lg mb-4" /> */}
          <h3 className="text-2xl font-bold mb-4 text-blue-800">Murph</h3>
          <p className="text-lg text-gray-700 mb-4">
            "Murph" is a classic CrossFit Hero WOD named after Navy Lieutenant Michael Murphy. It consists of:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>1-mile run</li>
            <li>100 pull-ups</li>
            <li>200 push-ups</li>
            <li>300 squats</li>
            <li>1-mile run</li>
          </ul>
          <p className="text-lg text-gray-700 mt-4">
            The workout is done wearing a 20-pound vest or body armor.
          </p>
          <button className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors" onClick={() => handlePurchaseClick('Murph')}>Purchase</button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative">
          {/* <img src={franImage} alt="Fran Workout" className="rounded-lg mb-4" /> */}
          <h3 className="text-2xl font-bold mb-4 text-blue-800">Fran</h3>
          <p className="text-lg text-gray-700 mb-4">
            "Fran" is one of the most famous CrossFit benchmarks. It consists of:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>21-15-9 reps of:</li>
            <li>Thrusters (95 lbs for men, 65 lbs for women)</li>
            <li>Pull-ups</li>
          </ul>
          <button className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors" onClick={() => handlePurchaseClick('Fran')}>Purchase</button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative">
          {/* <img src={cindyImage} alt="Cindy Workout" className="rounded-lg mb-4" /> */}
          <h3 className="text-2xl font-bold mb-4 text-blue-800">Cindy</h3>
          <p className="text-lg text-gray-700 mb-4">
            "Cindy" is a simple yet brutal AMRAP (As Many Rounds As Possible) workout. In 20 minutes, complete as many rounds as possible of:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>5 pull-ups</li>
            <li>10 push-ups</li>
            <li>15 air squats</li>
          </ul>
          <button className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors" onClick={() => handlePurchaseClick('Cindy')}>Purchase</button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative">
          {/* <img src={helenImage} alt="Helen Workout" className="rounded-lg mb-4" /> */}
          <h3 className="text-2xl font-bold mb-4 text-blue-800">Helen</h3>
          <p className="text-lg text-gray-700 mb-4">
            "Helen" is another popular CrossFit benchmark workout. It consists of three rounds for time:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>400-meter run</li>
            <li>21 kettlebell swings (53 lbs for men, 35 lbs for women)</li>
            <li>12 pull-ups</li>
          </ul>
          <button className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors" onClick={() => handlePurchaseClick('Helen')}>Purchase</button>
        </div>
      </div>
      {showModal && <PurchaseForm program={selectedProgram} onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default Crossfit;
