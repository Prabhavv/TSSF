import React from 'react';
import '../LandingPage.css';
import titleImage from '../TSSLF Title Page.png';
import landscapeImage from '../Cohort 2020 14.jpg'; // Use the correct path for the landscape image

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Title */}
      <h1 className="landing-title">The Sanjeeth Shetty Leaders Fellowship</h1>
      
      {/* Landscape Image */}
      <div className="landscape-section">
        <img src={landscapeImage} alt="Landscape" className="landscape-image" />
      </div>

      {/* White Box with Letter Content */}
      <div className="content-box">
        <div className="text-section">
          <p>Greetings. My name is Vivek Vishwanathan, and I work with the Sanjeeth Shetty Foundation, and serve as part of The Sanjeeth Shetty Leaders Fellowship (TSSLF). I am also an alumnus of NMAM Institute of Technology (NMAMIT), having pursued my degree in Mechanical Engineering between the years 2013-2017. Additionally, I have had the privilege of being part of this Fellowship (Cohort 2017), and can personally attest to its transformative impact on my journey.</p>
          <p>The Sanjeeth Shetty Leaders Fellowship (TSSLF) is a flagship initiative of the Sanjeeth Shetty Foundation, dedicated to fostering leadership excellence among aspiring young graduates. Founded by Mr. Sanjeeth Shetty in 2013, and established at NMAM Institute of Technology (NMAMIT), Karnataka, the Fellowship is now in its 13th year. Since its inception, TSSLF has recognised 86 Fellows for their contributions to college and the wider community. In its initial 02 years, the Fellowship honoured the distinguished achievements of graduates in select engineering disciplines at NMAMIT. The Fellowship has since evolved to include all engineering disciplines, as well as Computer Applications; with Fellows receiving the Awards of Distinguished Achievement and Awards of Outstanding Achievement, each year.</p>
          <p>Starting this year, the Fellowship aims to broaden its reach by engaging a wider base of emerging and potential leaders, ensuring that every deserving student is recognised. To this end, the Fellowship has been expanded to include students from Justice KS Hegde Institute of Management (JKSHIM), Karnataka. In line with its commitment to service, the Foundation has introduced an additional award - the Abhyuday Award for Collaborative Excellence - to acknowledge students’ contributions to Abhyuday.</p>
          <p>Why do we exist? In a world increasingly defined by complex challenges - from political instability, climate change, economic inequality, social injustice and technological disruption - the need for visionary leadership has never been more critical. As we navigate unprecedented changes in our environment, in our economies, in society, and across industries, it is essential to cultivate leaders who can think critically, act decisively, and inspire themselves to work towards a more fair, equitable and sustainable future.</p>
          <p>Young leaders must redefine their leadership by embracing empathy, innovation and collaboration. They must also advocate for inclusive policies that address inequality and sustainability. Above all, young leaders must combat mistrust and misinformation and re-build faith in institutions - global and local.</p>
          <p>It is necessary for these young leaders to understand the world’s problems, including from a global perspective; and understand how each of their actions can impact the broader world. We believe that through grassroots movements, entrepreneurial ventures, and by holding established leaders accountable, young people can drive systemic change. The Sanjeeth Shetty Leaders Fellowship is dedicated to developing such leaders by equipping them with the skills, knowledge, and above all, the mindset needed to confront these challenges.</p>
          <p>We do not believe that we can play an extraordinary global role like some of the world’s biggest and most impactful nonprofits; we are very aware of our size and our limitations. However, we are betting on a pool of young leaders, some of whom may go on to become principled and impactful leaders of the future. One or two of them may go on to impact the world in a big way; and if such an event actually occurs, we will have fulfilled our little purpose. That is all we seek to achieve in whatever we are doing.</p>
          {/* Add the rest of the letter content here */}
          <div className="signature">
            <p>With best wishes,</p>
            <p>Vivek Vishwanathan (Fellow Cohort 2017)</p>
            <p>Program Director - The Sanjeeth Shetty Leaders Fellowship</p>
            <p>Sanjeeth Shetty Foundation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;