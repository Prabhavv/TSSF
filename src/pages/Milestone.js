import React, { useState } from 'react';
import '../Milestone.css';

function Milestone() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index); // Toggle open/close
  };

  // Define the content for each milestone
  const milestones = [
    { title: "Milestone 1: Fellowship Aptitude Test", content: <div className="container scrollable-content">
        <div className="content">
          <h1>Milestone 01: Fellowship Aptitude Test</h1>
          <hr />
          <h2>Overview</h2>
          <p>
            The Fellowship Aptitude Test (FAT) shall serve as an initial assessment, providing a baseline
            evaluation of the applicants’ general aptitude and foundational proficiency. It shall assess
            skills in language, numeracy, logical reasoning, and comprehension of fundamental concepts.
          </p>
          <hr />
          <h2>Assessment Criteria</h2>
          <p>
            The FAT is a 90-minute test comprising 40 multiple-choice questions. Applicants can
            achieve a maximum score of 120 in the Fellowship Aptitude Test. Each correct answer shall
            earn 03 marks, while 01 mark shall be deducted for each incorrect response.
          </p>
          <ul>
            <li><strong>Section 01 - Verbal Reasoning & Analytical Writing:</strong> This section shall assess
            applicants’ language proficiency through questions focusing on: (01) Reading
            Comprehension; (02) Sentence Correction; and (03) Paragraph Ordering</li>
            <li><strong>Section 02 - Quantitative Reasoning:</strong> This section shall test quantitative aptitude
            through questions covering: (01) Basic Business Mathematics; (02) Percentages;
            (03) Arithmetic; (04) Geometry; (05) Time & Work; (06) Probability; and (07)
            Speed & Distance</li>
            <li><strong>Section 03 - Data Insights:</strong> This section shall assess reasoning abilities through: (01)
            Logical puzzles; and (02) Analytical questions</li>
            <li><strong>Section 04 - Domain Proficiency:</strong> This section focuses on fundamental concepts
            relevant to the applicant’s field of study
              <ul>
                <li>Fundamentals of Science: Applicable to applicants from NMAMIT
                engineering and Computer Applications disciplines, this section evaluates
                foundational concepts in Science and Engineering</li>
                <li>Fundamentals of Business Management: Applicable to applicants from
                JKSHIM, this section covers essential concepts in Management</li>
              </ul>
            </li>
            <li><strong>Section 05 - State of the World:</strong> This section gauges applicants’ knowledge of
            national and global affairs</li>
          </ul>
          <table className="criteria-table">
            <thead>
              <tr>
                <th>Sl #</th>
                <th>Assessment Criteria</th>
                <th>No. of Questions</th>
                <th>Maximum Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Verbal Reasoning & Analytical Writing</td>
                <td>08</td>
                <td>24</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Quantitative Reasoning</td>
                <td>10</td>
                <td>30</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Data Insights</td>
                <td>06</td>
                <td>18</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Domain Proficiency</td>
                <td>08</td>
                <td>24</td>
              </tr>
              <tr>
                <td>5</td>
                <td>State of the World</td>
                <td>08</td>
                <td>24</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <h2>Key Guidelines for Candidates</h2>
          <ul>
            <li>All official communications, including schedules, venue assignments, and results, shall be shared via email. Important FAT communications will also be posted on NMAMIT information boards.</li>
            <li>Applicants must adhere strictly to the test schedule. Rescheduling requests will not be accommodated.</li>
            <li>The FAT will be conducted in designated on-campus technology centers at NMAMIT. Attendance at the assigned technology center is mandatory.</li>
            <li>Applicants must report to their assigned technology center 30 minutes prior to the scheduled test start time for identity verification, seat allocation, and pre-test instructions.</li>
            <li>Applicants must bring their original, college-issued identification card for entry into the technology center. Applicants who have misplaced their identification card may bring a letter from the Head of Department attesting to their identity.</li>
            <li>Permissible items: A blue or black ballpoint pen and a clear water bottle with no visible writing. No other items will be permitted in the technology center.</li>
            <li>Prohibited items: Electronic devices, study materials, and communication devices (including mobile phones, smartwatches, and calculators) are strictly prohibited.</li>
            <li>Applicants are responsible for ensuring that their assigned seat does not contain any unauthorized materials before the test begins. Applicants must remain in the technology center for the full duration of the test.</li>
          </ul>
          <hr />
          <h2>Outcome of the Milestone</h2>
          <p>
            Based on their performance in the Fellowship Aptitude Test, 96 Fellowship-Candidates - 08
            candidates from each engineering discipline - totaling to 80 candidates from the
            engineering disciplines of NMAMIT, and 08 each from JKSHIM and the NMAMIT
            Computer Applications discipline, shall proceed to Milestone 02: Leadership Labs.
            Shortlisted applicants shall be notified through: (01) Email communications from the
            Foundation; and (02) Telegram.
          </p>
        </div>
      </div> },
    { 
        title: "Milestone 2: Leadership Labs", 
        content: 
          <div className="container scrollable-content">
            <div className="content">
              <h1>Milestone 02: Leadership Labs</h1>
              <hr />
              <h2>Overview</h2>
              <p>
                The Leadership Labs are the new heart of the Fellowship. The Foundation has put in a lot
                of thought and effort in designing these labs in the hope that they add significant value to
                the lives of the Fellowship-Candidates. The Leadership Labs shall consist of three
                programs: Command Control, The Innovator’s Blueprint, and Mastering the Self. Each
                program includes courses led by distinguished leaders in their respective fields.
              </p>
              <p>
                The 05 courses under Command Control are designed to expose Fellowship-Candidates
                to leadership across 05 distinct environments: the global corporate world, where the
                focus is on revenue and growth; the startup and entrepreneurial sector, centred on
                problem-solving and scalability; the nonprofit sphere, dedicated to driving social impact;
                the realm of public service, including government, where leadership is shaped by civic
                responsibility; and the military, where the emphasis is on maintaining territorial integrity
                and security.
              </p>
              <p>
                The 06 courses under The Innovator’s Blueprint are designed to equip
                Fellowship-Candidates with the essential skills for incubating startups, nonprofits, or any
                innovation-driven initiative. The curriculum covers Design Thinking, pioneered by IDEO
                and Stanford University, to foster creative problem-solving; Digital Transformation to
                leverage technology for growth; and Business Model Generation to develop scalable
                business strategies. Fellowship-Candidates are also introduced to Emerging Technologies
                and taught strategies for fostering innovation. The program concludes with a primer on
                Brand Building, providing insights into crafting a strong and resonant brand identity.
                Together, these courses prepare Fellowship-Candidates to lead and innovate effectively
                in any environment.
              </p>
              <p>
                Over the years, it has become clear to many of us that a strong body and a resilient mind
                are essential foundations for any meaningful achievement. Additionally, critical life skills
                such as managing money and relationships - including the challenging art of parenting -
                are often overlooked in traditional education. While some may navigate these areas
                successfully, most of us learn through trial and error, if at all. The 06 courses under
                Mastering the Self are designed to introduce Fellowship-Candidates to these vital subjects,
                providing them with the tools to build a balanced and fulfilling life. The Leadership Labs
                culminate in a course on Spiritual Journeys: Exploring Inner Peace, guiding participants
                towards a deeper understanding of themselves and their inner well-being. The courses
                offered in each program of the Leadership Labs are outlined as follows.
              </p>
              <hr />
              <h2>Programs and Courses</h2>
              <h3>Program 01: Command Control</h3>
              <ul>
                <li>Corporate Leadership: Strategies for Success</li>
                <li>Entrepreneurial Leadership: Start-up and Scale-up</li>
                <li>Non-Profit Leadership: Strategies for Impact</li>
                <li>Leadership in Public Service: Strategies for Change</li>
                <li>Strength and Strategy: Military Leadership</li>
              </ul>
              <h3>Program 02: The Innovator’s Blueprint</h3>
              <ul>
                <li>Design Thinking</li>
                <li>Digital Transformation</li>
                <li>Business Model Generation</li>
                <li>Emerging Technologies</li>
                <li>Strategy is Innovation</li>
                <li>Brand Building</li>
              </ul>
              <h3>Program 03: Mastering the Self</h3>
              <ul>
                <li>Strong Body, Strong Mind: The Power of Fitness</li>
                <li>Secure your Future: Effective Money Management Techniques</li>
                <li>Harmony in Relationships: Balancing Bonds and Boundaries</li>
                <li>Spiritual Journeys: Exploring Inner Peace</li>
              </ul>
              <hr />
              <h2>Assessment Criteria</h2>
              <p>
                Each Fellowship-Candidate shall be awarded 01 mark for attending a course; with a
                maximum score of 15 marks. To remain eligible for the Fellowship, each
                Fellowship-Candidate must attend a minimum of 12 courses during the Leadership Labs to
                avoid potential disqualification.
              </p>
              <hr />
              <h2>Key Guidelines for Candidates</h2>
              <ul>
                <li>Each of the courses of the Leadership Labs shall be delivered by experts - ‘Course
                Leaders’ from around the world; and each course shall be conducted via Zoom,
                lasting a total of 90 minutes (Introductions: 05 minutes | Course Delivery: 65
                minutes | Q&A: 20 minutes).</li>
                <li>The calendar for the Leadership Labs shall be shared with the
                Fellowship-Candidates via email and Telegram. The Foundation is mindful of
                Fellowship-Candidates’ demanding academic commitments, and shall ensure to
                schedule the Leadership Labs in alignment with their academic calendars.</li>
                <li>Fellowship-Candidates shall be required to log into their respective Zoom
                accounts 15 minutes prior to the commencement of each course; video-cameras
                must be turned on for the entire duration of the course.</li>
                <li>Attendance of all Fellowship-Candidates shall be monitored through the entire
                duration of each course. A cumulative absence of more than 05 minutes shall
                result in the reduction of 01 mark.</li>
                <li>The microphone feature on Zoom shall remain muted through the course;
                Fellowship-Candidates may utilise the chat box to submit their queries and
                clarifications to the Course Leaders via moderators.</li>
                <li>Post completion of the Leadership Labs, Fellowship-Candidates shall be provided
                with additional reading references for each course, to help gain a deeper
                understanding of the subjects discussed in the Leadership Labs.</li>
              </ul>
            </div>
          </div> 
      },
      { 
        title: "Milestone 3: Group Discussions", 
        content: 
          <div className="container scrollable-content">
            <div className="content">
              <h1>Milestone 03: Group Discussions</h1>
              <hr />
              <h2>Overview</h2>
              <p>
                The Group Discussions are designed to assess a Fellowship-Candidate’s ability to articulate ideas with clarity, 
                collaborate seamlessly within diverse teams, and demonstrate critical thinking under pressure. 
                A total of 96 Fellowship-Candidates shall participate in the Group Discussions, divided into 12 groups of 08 candidates each. 
                To ensure that assessments are focused solely on the merit of ideas, Fellowship-Candidates may express themselves in English, Hindi, Kannada, or Tulu.
              </p>
              <hr />
              <h2>Consistency Measures</h2>
              <ul>
                <li>Fellowship-Candidates shall be evaluated using consistent criteria. All assessors shall follow the established scoring rubric to minimise subjective interpretation and maintain consistency in evaluating candidates.</li>
                <li>The Group Discussions shall be evaluated by 04 neutral assessors, reducing individual bias or outlier judgments. Assessors shall independently record their scores before engaging in discussions amongst each other.</li>
                <li>The final score for each candidate shall be calculated as the average of the individual scores provided by each of the 04 assessors.</li>
                <li>If there are significant discrepancies in assessors' scores for the same candidate, the panel shall review the rationale behind each score to ensure alignment and consistency.</li>
              </ul>
              <hr />
              <h2>Assessment Criteria</h2>
              <ul>
                <li>
                  <strong>Communication Skills</strong>
                  <ul>
                    <li><strong>Clarity of Thought:</strong> This criterion measures the ability to express ideas in a logical and coherent manner. It reflects how well the Fellowship-Candidate organises thoughts and presents them without confusion, ensuring the message is easily understood by others.</li>
                    <li><strong>Articulation:</strong> This refers to how effectively the Fellowship-Candidate conveys ideas verbally. It assesses pronunciation, tone, pace, and clarity of speech. A candidate who articulates well ensures that their message is heard clearly and without ambiguity.</li>
                    <li><strong>Language Proficiency:</strong> This criterion evaluates the Fellowship-Candidate's command over language used during the discussion. It includes grammar, vocabulary, and sentence structure, determining how effectively the candidate communicates within the given language framework.</li>
                    <li><strong>Listening Skills:</strong> Listening skills measure the Fellowship-Candidate’s ability to attentively hear and process others' viewpoints. Active listening also involves acknowledging and responding appropriately to inputs from other participants, demonstrating engagement and comprehension.</li>
                  </ul>
                </li>
                <li>
                  <strong>Content Knowledge</strong>
                  <ul>
                    <li><strong>Relevance:</strong> This criterion evaluates whether the Fellowship-Candidate's contributions are pertinent to the topic being discussed. It reflects the ability to stay focused on the subject matter and avoid deviating into unrelated areas.</li>
                    <li><strong>Depth of Knowledge:</strong> This assesses how well the Fellowship-Candidate understands the topic. A higher depth of knowledge is demonstrated by detailed, well-informed contributions that go beyond surface-level observations.</li>
                    <li><strong>Factual Accuracy:</strong> This criterion measures the correctness of the information presented by the Fellowship-Candidate. It checks whether facts, statistics, and examples provided during the discussion are accurate and reliable.</li>
                  </ul>
                </li>
                <li>
                  <strong>Interpersonal Skills</strong>
                  <ul>
                    <li><strong>Empathy:</strong> Empathy evaluates the Fellowship-Candidate's ability to understand and consider the emotions and perspectives of others during the discussion. It reflects a sensitivity to the group's dynamics and an ability to engage with others respectfully.</li>
                    <li><strong>Respectfulness:</strong> This criterion assesses the degree to which a Fellowship-Candidate demonstrates respect for other participants' opinions, ideas, and contributions. It reflects politeness, patience, and a willingness to engage in constructive dialogue without hostility or aggression.</li>
                    <li><strong>Body Language:</strong> Body language measures the non-verbal communication displayed during the discussion, such as eye contact, posture, facial expressions, and gestures. Positive body language indicates confidence and engagement, while negative body language may suggest disinterest or discomfort.</li>
                  </ul>
                </li>
              </ul>
              <h2>Scoring Guidelines</h2>
              <p>
                Each Fellowship-Candidate shall be evaluated on each of the aforementioned criteria, and scored on a scale of 0 to 4, with the scale corresponding to the following: 0 - Poor, 1 - Average, 2 - Good, 3 - Excellent, and 4 - Outstanding.
              </p>
              <table className="assessment-table">
                <thead>
                  <tr>
                    <th>Sl. #</th>
                    <th>Assessment Criteria</th>
                    <th>Scale</th>
                    <th>Maximum Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='highlight'>
                    <td>1</td>
                    <td>Communication Skills</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>1.1</td>
                    <td>Clarity of Thought</td>
                    <td>0 - 4</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>1.2</td>
                    <td>Articulation</td>
                    <td>0 - 4</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>1.3</td>
                    <td>Language Proficiency</td>
                    <td>0 - 4</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>1.4</td>
                    <td>Listening Skills</td>
                    <td>0 - 4</td>
                    <td>4</td>
                  </tr>
                  <tr className='highlight'>
                    <td>2</td>
                    <td>Content Knowledge</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2.1</td>
                    <td>Relevance</td>
                    <td>0 - 4</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>2.2</td>
                    <td>Depth of Knowledge</td>
                    <td>0 - 4</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>2.3</td>
                    <td>Factual Accuracy</td>
                    <td>0 - 4</td>
                    <td>4</td>
                  </tr>
                  <tr className='highlight'>
                    <td>3</td>
                    <td>Interpersonal Skills</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>3.1</td>
                    <td>Empathy</td>
                    <td>0 - 4</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>3.2</td>
                    <td>Respectfulness</td>
                    <td>0 - 4</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>3.3</td>
                    <td>Body Language</td>
                    <td>0 - 4</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td colSpan="3"><strong>Total Marks</strong></td>
                    <td>40</td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <h2>Key Guidelines for Candidates</h2>
              <ul>
                <li>Fellowship-Candidates shall be randomly assigned to teams of 08, forming a total of 12 groups for the Group Discussions. The grouping shall be conducted by a Foundation representative in the presence of 02 neutral observers to ensure fairness.</li>
                <li>Fellowship-Candidates shall be notified of their group assignments, schedule, and venue of the Group Discussions in advance via email and Telegram.</li>
                <li>Fellowship-Candidates must arrive at the venue at least 15 minutes prior to the scheduled start of the Group Discussions.</li>
                <li>A physical attendance sheet shall be provided at the venue. Signing the sheet upon arrival is mandatory to confirm participation.</li>
                <li>The discussion room shall be set up in a semicircular seating arrangement to encourage smooth interaction. Fellowship-Candidates must follow the prescribed seating arrangement.</li>
                <li>Candidates must adhere to the prescribed dress code - national or formal attire.</li>
                <li>Group Discussions shall run for 30 minutes each, preceded by a 05-minute preparation period for candidates to organise their thoughts. Each group discussion shall be organised as follows:
                  <ul>
                    <li>Preparatory Segment: The discussion topic shall be provided, and candidates shall have 05 minutes to prepare before the discussion begins.</li>
                    <li>Discussion Segment: The group discussion itself shall last for 30 minutes.</li>
                    <li>Transition Segment: A 15-minute buffer shall be scheduled between discussions to allow for group transitions and for assessors to finalise their scores.</li>
                  </ul>
                </li>
                <li>Fellowship-Candidates missing their scheduled Group Discussions without prior notice or a valid reason shall be disqualified from the rest of the Fellowship process.</li>
              </ul>
              <hr />
              <h2>Outcome of the Milestone</h2>
              <p>
                Upon finalisation of the Group Discussions' scores, the top 24 Fellowship-Candidates, based on their cumulative scores from Milestones 01 through 03, 
                shall advance to the next stage of the Fellowship process: the ‘Leadership Integrity Assessment’ and the ‘Leadership Capability Interviews’. 
                This group of Fellowship-Candidates shall comprise 02 candidates from each engineering discipline - totaling to 20 candidates from NMAMIT, 
                and 02 candidates each from JKSHIM and NMAMIT Computer Applications discipline.
              </p>
            </div>
          </div> 
      },
      { 
        title: "Milestone 4: Leadership Integrity Assessment", 
        content: 
          <div className="container scrollable-content">
            <div className="content">
              <h1>Milestone 04: Leadership Integrity Assessment</h1>
              <hr />
              <h2>Overview</h2>
              <p>
                The Leadership Integrity Assessment evaluates a Fellowship-Candidate's demonstrable
                achievements across academics, extracurricular activities, and industry experiences. Each
                Fellowship-Candidate shall be required to support their claims with verifiable evidence.
                This can include academic transcripts, certificates of achievement, project reports, letters
                of recommendation, or documented proof of their contributions in professional projects.
              </p>
              <hr />
              <h2>Consistency Measures</h2>
              <p>The Foundation has implemented measures to ensure a transparent and accountable
              assessment process for the Fellowship. These measures include the following.</p>
              <ul>
                <li>Fellowship-Candidates shall be evaluated using consistent criteria. All assessors
                shall follow the established scoring rubric to minimise subjective interpretation and
                maintain consistency in evaluating candidates.</li>
                <li>The Leadership Integrity Assessment shall comprise neutral assessors, reducing the
                risk of individual bias or outlier judgments.</li>
              </ul>
              <hr />
              <h2>Assessment Criteria</h2>
              <p>
                Fellowship-Candidates shall be evaluated and scored on each of the following criteria, in the Leadership Integrity Assessment.
              </p>
              <ul>
                <li>
                  <strong>Academic Excellence:</strong> This criterion measures a Fellowship-Candidate’s academic performance. Fellowship-Candidates are awarded marks on a scale of 01 to 10 based on their CGPA.
                </li>
                <li>
                  <strong>Excellence Beyond Academics:</strong>
                  <ul>
                    <li><strong>Excellence in Sports:</strong> This criterion assesses a Fellowship-Candidate’s involvement and achievements in sports or athletics, whether at the district, state, national, or international level. It considers both participation and recognition (awards, titles, etc.), indicating physical discipline and teamwork.</li>
                    <li><strong>Youth Service & Student Leadership Corps:</strong> This measures a Fellowship-Candidate’s contributions to youth service organisations or student leadership roles, such as being part of student councils, youth bodies, or leading activities aimed at community or school improvement. It reflects responsibility, leadership, and a commitment to service.</li>
                    <li><strong>Leadership in the Arts & Culture:</strong> This criterion evaluates leadership roles and accomplishments in artistic and cultural activities, such as performing arts, visual arts, literature, or cultural events. It includes organising or leading artistic projects, performances, or exhibitions.</li>
                    <li><strong>Leadership in Religious Work:</strong> This assesses leadership within religious communities or organisations. It includes participation in faith-based initiatives, guiding others in religious practices, or contributing to interfaith activities, demonstrating moral and ethical leadership.</li>
                    <li><strong>Leadership in Political Work & Nation Building:</strong> This criterion measures involvement in political or civic activities that contribute to the development of society. It includes leading or participating in youth parliaments, political campaigns, government initiatives, or movements aimed at nation-building.</li>
                    <li><strong>Leadership in Community Service:</strong> This evaluates leadership in service projects aimed at improving the local or broader community. It includes organising or actively participating in social welfare initiatives, charity work, or environmental campaigns that bring positive change.</li>
                    <li><strong>Any other special demonstrable achievement:</strong> This provides flexibility for candidates to highlight any unique achievements or leadership roles that do not fit into the previous categories but still demonstrate excellence beyond academics. It could include innovations, entrepreneurship, or contributions to non-conventional fields.</li>
                  </ul>
                </li>
                <li>
                  <strong>Industry Experience:</strong> This criterion assesses practical exposure and hands-on experience in a professional or industrial setting. It includes internships, part-time work, or formal employment, reflecting the candidate's ability to apply academic learning to real-world situations, develop skills, and understand industry dynamics.
                </li>
              </ul>
              <h2>Scoring Guidelines</h2>
              <p>Each Fellowship-Candidate shall be evaluated on each of the aforementioned criterion,
      and scored on a scale of 0 to 4, with the scale corresponding to the following: 0 - Poor, 1 -
      Average, 2 - Good, 3 - Excellent, and 4 - Outstanding.</p>
              <table className="assessment-table">
                <thead>
                  <tr>
                    <th>Sl. #</th>
                    <th>Assessment Criteria</th>
                    <th>Scale</th>
                    <th>Maximum Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='highlight'>
                    <td>1</td>
                    <td>Excellence in Academics</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>1.1</td>
                    <td>Academic Scores</td>
                    <td>0 - 4</td>
                    <td>4</td>
                  </tr>
                  <tr className='highlight'>
                    <td>2</td>
                    <td>Excellence Beyond Academics</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2.1</td>
                    <td>Excellence in Sports</td>
                    <td>0 - 4</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>2.2</td>
                    <td>Youth Service & Student Leadership Corps</td>
                    <td>0 - 4</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>2.3</td>
                    <td>Leadership in the Arts & Culture</td>
                    <td>0 - 4</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>2.4</td>
                    <td>Leadership in Religious Work</td>
                    <td>0 - 4</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>2.5</td>
                    <td>Leadership in Political Work & Nation Building</td>
                    <td>0 - 4</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>2.6</td>
                    <td>Leadership in Community Service</td>
                    <td>0 - 4</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>2.7</td>
                    <td>Any other special demonstrable achievement</td>
                    <td>0 - 4</td>
                    <td>4</td>
                  </tr>
                  <tr className='highlight'>
                    <td>3</td>
                    <td>Experience in Industry</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>3.1</td>
                    <td>Internships / Work Experience</td>
                    <td>0 - 2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td colSpan="3"><strong>Total Marks</strong></td>
                    <td>40</td>
                  </tr>
                </tbody>
              </table>
              <p>Total Marks: 40</p>
              <hr />
              <h2>Key Guidelines for Candidates</h2>
              <ul>
                <li>The Leadership Integrity Assessment shall be conducted at specific venues in NMAMIT; details shall be communicated to the Fellowship-Candidates in advance through email and Telegram.</li>
                <li>Each Fellowship-Candidate shall have an individual assessment lasting approximately 30 minutes. A buffer of 10 minutes between assessments shall allow assessors time to finalise their evaluations and prepare for the next Fellowship-Candidate.</li>
                <li>Fellowship-Candidates must carry hard-copies of all their supporting documentation - academic records, certificates, letters of participation, letters of recognition, and citations. Failure to submit necessary evidence may result in disqualification or lower scores.</li>
                <li>Candidates shall be required to submit scanned copies of all their documentation. All digital evidence must be emailed to the prescribed email of the Sanjeeth Shetty Foundation.</li>
                <li>Fellowship-Candidates who arrive late shall be disqualified from both the Leadership Integrity Assessment and the remainder of the Fellowship process.</li>
                <li>If a Fellowship-Candidate is unable to attend their scheduled assessment, they must inform the Fellowship administration at least 72 hours in advance. Rescheduling shall only be considered under exceptional circumstances. Fellowship-Candidates who miss their assessments without prior notice shall be disqualified from the Fellowship.</li>
              </ul>
              <hr />
              <h2>Outcome of the Milestone</h2>
              <p>At the end of the Leadership Integrity Assessment, all 24 Fellowship-Candidates shall proceed to the Leadership Capability Interviews.</p>
            </div>
          </div> 
      },
      { 
        title: "Milestone 5: Leadership Capability Interviews", 
        content: 
          <div className="container scrollable-content">
            <div className="content">
              <h1>Milestone 05: Leadership Capability Interviews</h1>
              <hr />
              <h2>Overview</h2>
              <p>
                The Leadership Capability Interviews are designed to evaluate each Fellowship-Candidate's ability to think critically, articulate ideas effectively, and demonstrate leadership potential under challenging scenarios. This milestone is a key part of the Fellowship evaluation process and provides insight into each Fellowship-Candidate’s communication skills, problem-solving abilities, and leadership qualities.
              </p>
              <hr />
              <h2>Consistency Measures</h2>
              <p>
                The Foundation has implemented measures to ensure a transparent and accountable assessment process for the Fellowship. These measures include the following:
              </p>
              <ul>
                <li>Fellowship-Candidates shall be evaluated using consistent criteria. All assessors shall follow the established scoring rubric to minimise subjective interpretation and maintain consistency in evaluating candidates.</li>
                <li>Each interview shall be assessed by 02 external assessors; each assessor shall independently score candidates without conferring with the other assessor during the interview. This minimises individual bias and ensures that scores reflect diverse perspectives.</li>
                <li>Up to 04 neutral observers shall be present to monitor the interview process. Their role shall be to ensure that all assessors follow the guidelines, ask fair and unbiased questions, and maintain consistency across interviews. Observers shall not participate in scoring the Fellowship-Candidates.</li>
                <li>Questions presented to all Fellowship-Candidates shall be at comparable levels of complexity. The final score for each Fellowship-Candidate shall be calculated as the average of the individual scores provided by each of the 02 assessors.</li>
                <li>If there are significant discrepancies in assessors' scores for the same candidate, the panel shall review the rationale behind each score to ensure consistency.</li>
              </ul>
              <hr />
              <h2>Assessment Criteria</h2>
              <p>Each interview shall last for 20 minutes and shall consist of 03 parts.</p>
              <ul>
                <li>
                  <strong>Part 01: Assessor Questions 01 and 02</strong> - These questions aim to evaluate the Fellowship-Candidate’s ability to respond quickly and clearly to an inquiry related to decision-making, ethical dilemmas, team management, or a leadership challenge. The Fellowship-Candidate is expected to:
                  <ul>
                    <li>Offer a thoughtful, well-considered response</li>
                    <li>Demonstrate clarity of thought in articulating their answer</li>
                    <li>Exhibit leadership insight through their response to the question posed</li>
                    <li>Demonstrate an understanding of complex leadership challenges</li>
                  </ul>
                </li>
                <li>
                  <strong>Part 02: Leadership Case Study</strong> - The Fellowship-Candidate shall be presented with a case study outlining a leadership scenario; to interpret the situation, identify key leadership issues, and provide a clear, logical solution. Candidates shall have 06 minutes to answer the question. The Fellowship-Candidate is expected to:
                  <ul>
                    <li>Analyse the case study and identify key leadership issues</li>
                    <li>Provide a clear, logical solution to the problem presented</li>
                    <li>Demonstrate strategic thinking, problem-solving skills, and decision-making ability</li>
                    <li>Reflect on their personal leadership experiences</li>
                  </ul>
                </li>
                <li>
                  <strong>Part 03: Additional Discussion</strong> - After the questions, the final 10 minutes shall be used for further discussion between the assessors and the candidate. Assessors may ask for clarification or elaboration on the candidate’s earlier responses, explore their leadership experiences in more depth, or engage in broader discussions about the candidate’s leadership approach.
                </li>
              </ul>
              <hr />
              <h2>Scoring Guidelines</h2>
              <p>Each Fellowship-Candidate shall be evaluated on each of the aforementioned criterion, and scored on a scale of 0 to 4, with the scale corresponding to the following: 0 - Poor, 1 - Average, 2 - Good, 3 - Excellent, and 4 - Outstanding.</p>
              <table className="criteria-table">
                <thead>
                  <tr>
                    <th>Sl.#</th>
                    <th>Assessment Criteria</th>
                    <th>No. of Questions</th>
                    <th>Maximum Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Assessor's Question 01</td>
                    <td>01</td>
                    <td>04</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Assessor's Question 02</td>
                    <td>01</td>
                    <td>04</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Assessor's Question 03</td>
                    <td>01</td>
                    <td>04</td>
                  </tr>
                  <tr>
                    <td colSpan="2"><strong>Total</strong></td>
                    <td>03</td>
                    <td>12</td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <h2>Key Guidelines for Candidates</h2>
              <ul>
                <li>The interviews shall be conducted on a single day. Fellowship-Candidates shall be informed of their designated interview slots and venue in advance, via email and Telegram. Candidates must confirm their attendance upon receiving the notification.</li>
                <li>Each interview shall last for 20 minutes, with a 05-minute buffer between interviews to allow assessors to finalize scores and prepare for the next candidate.</li>
                <li>Fellowship-Candidates are required to arrive at the designated venue at least 15 minutes before the start of their interview slot to sign the attendance sheet and complete any necessary preparations. Fellowship-Candidates shall be required to remain seated in designated waiting areas until their turn for the interview.</li>
                <li>Each venue shall be set up with seating for the Fellowship-Candidate, assessors, and neutral observers. The seating arrangement shall be designed to facilitate clear communication between the candidate and the interview panel.</li>
                <li>Fellowship-Candidates are expected to wear formal or national attire. It is a part of the overall evaluation, as presentability shall contribute to a candidate’s leadership image.</li>
                <li>Fellowship-Candidates who arrive late shall be disqualified from both the Leadership Capability Interviews and the remainder of the Fellowship process.</li>
                <li>In exceptional cases, rescheduling may be considered, but only for candidates with valid reasons. All rescheduling requests shall be reviewed on a case-by-case basis.</li>
                <li>All interview records, including scores, assessor comments, and feedback, shall be securely archived for future reference. Photographs of candidates may also be taken during the interview for record-keeping purposes.</li>
              </ul>
              <hr />
              <h2>Outcome of the Milestone</h2>
              <p>Based on cumulative scores across Milestones 01 through 05 of the Fellowship, a cohort of 12 Fellowship-Candidates - 01 Fellow from each engineering discipline, totaling to 10 Fellows from the engineering disciplines of NMAMIT, and 01 Fellow each from JKSHIM and the NMAMIT Computer Applications discipline - shall be shortlisted for The Sanjeeth Shetty Leaders Fellowship - Fellowship Awards.</p>
            </div>
          </div> 
      },
      { 
        title: "Milestone 6: The Sanjeeth Shetty Leaders Fellowship Awards", 
        content: 
          <div className="container scrollable-content">
            <div className="content">
              <h1>Milestone 06: The Sanjeeth Shetty Leaders Fellowship Awards</h1>
              <hr />
              <p>
                The 10 Fellows from engineering disciplines of NMAMIT shall be awarded Awards of Distinguished Achievement, and 01 Fellow with the highest score amongst these 10 Fellows shall be awarded the Award for Outstanding Achievement. 01 Fellow each from JKSHIM and the NMAMIT Computer Applications discipline (again, the highest scorers) shall be awarded the Award for Outstanding Achievement. These awards shall be presented at The Sanjeeth Shetty Leaders Fellowship Awards.
              </p>
              <p>
                List of award winners and the schedule of The Sanjeeth Shetty Leaders Fellowship - Fellowship Awards shall be released through Instagram, Telegram, and email communications. The Fellowship Awards shall be scheduled on a suitable day, potentially coinciding with the Annual College Day celebrations. All Fellows must be present on the day of the Fellowship Awards and for an additional day following the Fellowship Awards for a round of media interviews.
              </p>
            </div>
          </div>
      },
      { 
        title: "Milestone 7: Afternoon Tea with Patron", 
        content: 
          <div className="container">
            <div className="content">
              <h1>Milestone 07: Afternoon Tea with the Patron</h1>
              <hr />
              <p>
                The Fellowship concludes with Afternoon Tea with the Patron, a specially curated afternoon that provides Fellows with the unique opportunity to engage closely with Mr. Sanjeeth Shetty in an intimate setting. This gathering fosters meaningful discussions on topics dear to Mr. Shetty’s heart, including self-mastery, ethical leadership, and the deeper search for meaning in life.
              </p>
              <p>
                This event is tentatively scheduled to take place at the Taj by Vivanta in Mangaluru from 1500 to 1930 hours. It shall be divided into 02 segments: a photography segment from 1500 to 1530 hours, during which Fellows shall have their individual and group photos captured, followed by interactions with Mr. Sanjeeth Shetty from 1530 to 1930 hours. Details of the event shall be communicated with the Fellows as the event draws closer.
              </p>
            </div>
          </div>
      },
  ];

  return (
    <div className="milestone-container">
      <h1 className="milestone-title">Milestones</h1>
      <div className="accordion">
        {milestones.map((milestone, i) => (
          <div key={i} className="accordion-item">
            <button
              className={`accordion-title ${activeIndex === i ? 'active' : ''}`}
              onClick={() => handleAccordionClick(i)}
            >
              {milestone.title}
            </button>
            <div className={`accordion-content ${activeIndex === i ? 'open' : ''}`}>
              {milestone.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Milestone;