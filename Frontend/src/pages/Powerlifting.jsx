import React, { useState } from 'react';
import PurchaseForm from '../components/PurchaseForm';

const Powerlifting = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');


  // Function to handle purchase button click
  const handlePurchaseClick = (programName) => {
    setSelectedProgram(programName); // Set the selected program name
    setShowModal(true); // Show the purchase form modal
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-gray-100 to-gray-200">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Introduction to Powerlifting</h2>
      <div className="max-w-3xl mx-auto mb-10">
        <p className="text-lg mb-6 text-gray-700">
          Powerlifting is a strength sport that consists of three attempts at maximal weight on three lifts: squat, bench press, and deadlift. It requires a combination of strength, technique, and mental toughness.
        </p>
        <p className="text-lg text-gray-700">
          Whether you are a beginner or an advanced lifter, structured programs can help you progressively overload and achieve your strength goals. Below are some popular powerlifting programs:
        </p>
      </div>

      <div className="flex flex-wrap justify-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">5/3/1 Program</h3>
            <p className="text-lg text-gray-700 mb-4">
              The 5/3/1 program, created by Jim Wendler, focuses on building strength through four primary lifts: squat, bench press, deadlift, and overhead press. Each cycle lasts four weeks, with increasing intensity and volume.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Week 1: 3 sets of 5 reps</li>
              <li>Week 2: 3 sets of 3 reps</li>
              <li>Week 3: 1 set of 5 reps, 1 set of 3 reps, 1 set of 1 rep</li>
              <li>Week 4: Deload week</li>
            </ul>
            <button className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors" onClick={() => handlePurchaseClick("5/3/1 Program")}>Purchase</button>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">5x5 Program</h3>
            <p className="text-lg text-gray-700 mb-4">
              The 5x5 program, popularized by Reg Park and later by Bill Starr, involves performing five sets of five reps for compound lifts like squat, bench press, and deadlift. It's great for beginners and intermediates to build foundational strength.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Focuses on progressive overload</li>
              <li>Typically performed three times a week</li>
              <li>Alternates between two main workouts: Workout A and Workout B</li>
              <li>Includes accessory lifts for balanced development</li>
            </ul>
            <button className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors" onClick={() => handlePurchaseClick("5x5 Program")}>Purchase</button>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Texas Method</h3>
            <p className="text-lg text-gray-700 mb-4">
              The Texas Method is a weekly training protocol that alternates between high-volume and high-intensity days to drive progress in the squat, bench press, and deadlift. It is effective for intermediate lifters.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Monday: Volume Day (5x5 at 90% of 5RM)</li>
              <li>Wednesday: Light Day (2-3 sets of 5 reps at 80% of Monday's weight)</li>
              <li>Friday: Intensity Day (1 set of 5 reps at new 5RM)</li>
            </ul>
            <button className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors" onClick={() => handlePurchaseClick("Texas Method")}>Purchase</button>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Smolov Squat Routine</h3>
            <p className="text-lg text-gray-700 mb-4">
              The Smolov Squat Routine is an intense and advanced program designed to rapidly increase your squat strength over a short period of time. It is split into several phases with varying volume and intensity.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Introductory Microcycle: 3 weeks of gradually increasing volume</li>
              <li>Base Mesocycle: 4 weeks of high volume squatting</li>
              <li>Switching Phase: 2 weeks of low volume, high intensity</li>
              <li>Intense Mesocycle: 4 weeks of peaking intensity</li>
            </ul>
            <button className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"  onClick={() => handlePurchaseClick("Smolov Squat Routine")}>Purchase</button>
          </div>
        </div>
      </div>
      {showModal && <PurchaseForm onClose={() => setShowModal(false)} program={selectedProgram} />}
    </section>
  );
};

export default Powerlifting;




