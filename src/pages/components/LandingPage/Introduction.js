import Card from '../LandingPage/Card';

export default function Introduction  () {
  const cards = [
    {
      id: 1,
      title: 'Committee Purpose',
      description: 'Faculty members from across ULM\'s campus comprise the Pre-Medical Advisory Committee. The faculty members work with pre-medical students during their junior and senior year at ULM to prepare for the Medical School application process. Students from multiple disciplines can take advantage of the committee. Any student applying to Medical School, Dental School, Physician Assistant School, Physical Therapy, Occupational Therapy, Optometry School or Veterinary School can utilize the committee.',
    },
    {
      id: 2,
      title: 'How to Apply to the Committee',
      description: 'The committee is available to interview students during their application process. Each student that wishes to be interviewed by the committee must fill out a set of forms (available below) and then turn those into Dr. Wiedemeier, CNSB 326, to set up an interview. The faculty members asked to fill out the faculty evaluations for the committee should not be faculty who intend to send an individual letter for the student\'s application. The faculty opinions of the student are reflected in the committee letter.',
    },
    {
      id: 3,
      title: 'When to Apply to the Committee',
      description: 'Students that are applying early decision to medical school, dental school or physician assistant schools should interview in the Spring semester. Regular admission candidates for medical school should interview in the Fall semester.',
     
    },
    {
        id: 3,
        title: 'Interview',
        description: 'Each interview will last one hour. At the conclusion of the interview, the committee will meet with each candidate. A formal letter of evaluation will be written and can be used in support of each student\'s application. Many medical schools prefer committee letters of evaluation. It is the student\'s responsibility to determine if committee letters are preferred.',
      },
   
  ];
  

  return (
    <>
    <div>
        <div className=' mb-1 text-4xl text-red font-bold flex justify-center items-center '>University of Louisiana at Monroe Pre-Medical Advisory Committee</div>
        <div className='mb-5 font-bold text-sm text-red opacity-50 italic flex justify-center items-center'>Helping you get one step closer to your dream!</div>
    </div>
    
    <div >
    {cards.map((card) => (
      <Card key={card.id} title={card.title} description={card.description} />
    ))}
  </div>
  </>
   


    
  );
};


