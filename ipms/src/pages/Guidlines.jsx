import React, { useState } from 'react';

const Guidelines = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleCheckboxChange = () => {
    setIsAgreed(!isAgreed);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Submission Guidelines</h1>
      
      <p className="text-gray-700 mb-4">
        Read the guidelines and click the box in agreement to comply with the guidelines.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction to IPMS JEET</h2>
        <p className="text-gray-700">
          The Journal of Engineering Education Transformations (JEET) is a forum to facilitate conversations among engineering educators who would like to showcase their transformational work as publications reviewed by expert educators and education researchers from across the world.
        </p>
        <p className="text-gray-700 mt-2">
          JEET publishes papers that contribute to Engineering Education Research (EER). Engineering education research is a field of inquiry that adopts a scholarly approach to the education of engineers. As a result, EER reports on studies that contribute to ongoing conversations that influence the education of engineers and the role of educators and institutions in this process. As a result, papers that aim to join this conversation are welcomed to JEET.
        </p>
        <p className="text-gray-700 mt-2">
          JEET does not, however, publish technical papers or papers that report on engineering research in general. Engineering research, even if it is conducted by a student or a teacher at a university, does not qualify as engineering education research. For instance, a paper describing a new algorithm that sorts a list of elements efficiently compared to the existing algorithms is not a good fit for JEET. Although an educator's use of specific pedagogical techniques and tools, derived from the relevant literature, to teach (existing) algorithms in a computer science and engineering classroom, along with some evaluations of how these techniques and tools helped students learn better, will be an excellent JEET paper.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Contact Details</h2>
        <p className="text-gray-700">
          For queries related to submissions, please send an email to <a href="mailto:submission.jeet@ritindia.edu" className="text-blue-600">submission.jeet@ritindia.edu</a>.
        </p>
        <p className="text-gray-700">
          To submit a manuscript on the online submission system, please see the guidelines below.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Categories of Papers</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Practice Papers</li>
          <li>Research Papers</li>
          <li>Op-Ed articles (by invitation only)</li>
        </ul>
        <p className="text-gray-700 mt-2">
          Quantitative, qualitative, and mixed methods research designs are accepted.
        </p>
      </section>

      <div className="flex items-center">
        <input 
          type="checkbox" 
          id="agreement" 
          className="mr-2" 
          checked={isAgreed} 
          onChange={handleCheckboxChange} 
        />
        <label htmlFor="agreement" className="text-gray-700">
          I agree to comply with the guidelines.
        </label>
      </div>

      <button
        className={`mt-4 px-6 py-2 rounded-lg text-white ${isAgreed ? 'bg-blue-600 hover:bg-blue-500' : 'bg-gray-400 cursor-not-allowed'}`}
        disabled={!isAgreed}
      >
        Submit
      </button>
    </div>
  );
};

export default Guidelines;
