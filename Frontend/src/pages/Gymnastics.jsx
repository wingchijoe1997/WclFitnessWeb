// src/pages/Gymnastics.jsx
import React, { useState } from 'react';
import PurchaseForm from '../components/PurchaseForm';

const Gymnastics = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const handlePurchaseClick = (program) => {
    setSelectedProgram(program);
    setShowModal(true);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-gray-100 to-gray-200">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Introduction to Gymnastics</h2>
      <div className="max-w-3xl mx-auto mb-10">
        <p className="text-lg mb-6 text-gray-700">
          Gymnastics is a sport that combines strength, flexibility, balance, and coordination. It includes various disciplines such as artistic gymnastics, rhythmic gymnastics, and trampoline.
        </p>
        <p className="text-lg text-gray-700">
          Structured programs can help you improve your skills and achieve your gymnastics goals. Below are some popular gymnastics programs:
        </p>
      </div>

      <div className="flex flex-wrap justify-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Beginner Gymnastics</h3>
            <p className="text-lg text-gray-700 mb-4">
              This program is designed for beginners to learn the basics of gymnastics, including flexibility exercises, basic tumbling, and strength training.
            </p>
            <button className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors" onClick={() => handlePurchaseClick('Beginner Gymnastics')}>Purchase</button>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Intermediate Gymnastics</h3>
            <p className="text-lg text-gray-700 mb-4">
              This program is for intermediate gymnasts who want to improve their skills and learn more advanced techniques.
            </p>
            <button className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors" onClick={() => handlePurchaseClick('Intermediate Gymnastics')}>Purchase</button>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Advanced Gymnastics</h3>
            <p className="text-lg text-gray-700 mb-4">
              This program is for advanced gymnasts who are looking to compete and perform at a high level.
            </p>
            <button className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors" onClick={() => handlePurchaseClick('Advanced Gymnastics')}>Purchase</button>
          </div>
        </div>
      </div>
      {showModal && <PurchaseForm program={selectedProgram} onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default Gymnastics;
