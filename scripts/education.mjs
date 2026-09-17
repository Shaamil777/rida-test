// Public education, not a treatment programme or a diagnostic instrument.
export const lessons = [
  {
    id: 'the-role', title: 'What does a clinical psychologist do?', short: 'Understand the role',
    takeaway: 'They work with you to understand difficulties and consider ways forward.',
    body: `<p>Clinical psychology brings psychological knowledge into assessment and care. A psychologist asks about your concerns, experiences and daily life. They may use interviews or questionnaires, develop an understanding with you, offer psychological therapy, or recommend other support.</p>
    <div class="learn-three"><div><h3>Understand</h3><p>Explore what has been happening, what matters to you and what already helps.</p></div><div><h3>Make sense</h3><p>Connect patterns, experiences and circumstances. This shared explanation is sometimes called a <em>formulation</em>.</p></div><div><h3>Work together</h3><p>Discuss a suitable approach, agree goals and review what changes.</p></div></div>
    <p>A diagnosis may be part of an assessment when appropriate. It does not describe everything about a person. The clinician’s training and local professional rules determine the work they can offer.</p>`,
    sources: [
      ['Oxford Health NHS · Who’s who?', 'https://oxfordhealth.nhs.uk/carers/handbook/glossary/roles/'],
      ['NHS Scotland · Formulation', 'https://www.rightdecisions.scot.nhs.uk/personality-disorder-integrated-care-pathway/assessment-diagnosis-and-formulation/formulation/']
    ],
    question: 'Is a psychologist’s job to tell you what kind of person you are?',
    options: ['Yes — an assessment defines the whole person.', 'No — the aim is to understand concerns in the context of your life.'], correct: 1,
    explanation: 'Assessment explores concerns and context. A questionnaire result or diagnosis does not define your identity.'
  },
  {
    id: 'when-support-helps', title: 'Do I need a diagnosis before I ask for help?', short: 'Know when to ask',
    takeaway: 'You can ask about support before you know what to call the difficulty.',
    body: `<p>Talking therapies can help with difficulties such as anxiety, low mood and coping with a long-term health condition. You do not need to arrive with a diagnosis. The right service depends on your needs and what the clinician is trained to provide.</p>
    <p>Consider asking for professional support when difficulties persist, become distressing or interfere with sleep, relationships, work, study or everyday tasks. You can also ask earlier if you are concerned. You do not have to wait for a crisis.</p>
    <div class="learn-example"><p class="eyebrow">AN EVERYDAY EXAMPLE</p><p>“I’m managing my responsibilities, but worry is taking up a lot of my day. I would like help understanding it.” That is something you can bring to a first conversation.</p></div>
    <p>A primary-care doctor can help when symptoms may have a physical cause or you are unsure which service you need. Sudden, severe or unsafe situations need prompt help, rather than waiting for a routine appointment.</p>`,
    sources: [
      ['NHS · Talking therapies', 'https://www.nhs.uk/tests-and-treatments/talking-therapies/'],
      ['NIMH · Caring for your mental health', 'https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health'],
      ['NIMH · Psychotherapies', 'https://www.nimh.nih.gov/health/topics/psychotherapies']
    ],
    question: 'Must you wait until things become a crisis before asking about support?',
    options: ['No — you can ask when something concerns you.', 'Yes — therapy is only for emergencies.'], correct: 0,
    explanation: 'You can seek help before a crisis. A routine therapy appointment is not an emergency service.'
  },
  {
    id: 'different-professionals', title: 'Psychologist, psychiatrist or counsellor?', short: 'Know the differences',
    takeaway: 'Different professionals can help in different ways, and their work can overlap.',
    body: `<dl class="learn-roles"><div><dt>Clinical psychologist</dt><dd>Works with psychological assessment, understanding difficulties and psychological treatment, within their training and registration.</dd></div><div><dt>Psychiatrist</dt><dd>A medical doctor specialising in mental health. Their work can include medical assessment, medication and psychological treatment.</dd></div><div><dt>Counsellor or psychotherapist</dt><dd>Provides talking therapy within their training. These titles, qualifications and registration arrangements vary between countries.</dd></div><div><dt>Primary-care doctor</dt><dd>Can assess physical health, discuss mental health concerns and help you find an appropriate service.</dd></div></dl>
    <p>Titles alone do not tell you whether someone is right for your concern. Ask about their recognised registration, relevant experience and approach. Prescribing authority depends on professional qualifications and local rules; do not assume a therapist prescribes medication.</p>
    <p>You may benefit from professionals working together. Needing a referral is not a failure.</p>`,
    sources: [
      ['Oxford Health NHS · Who’s who?', 'https://oxfordhealth.nhs.uk/carers/handbook/glossary/roles/'],
      ['NIMH · Psychotherapies', 'https://www.nimh.nih.gov/health/topics/psychotherapies']
    ],
    question: 'Does the word “therapist” by itself tell you that someone can prescribe medication?',
    options: ['Yes — all therapists prescribe medication.', 'No — check their qualifications and prescribing authority.'], correct: 1,
    explanation: 'Professional roles overlap, but prescribing requires the relevant authority. Ask the clinician rather than relying on a title alone.'
  },
  {
    id: 'the-first-conversation', title: 'What happens in a first conversation?', short: 'Feel more prepared',
    takeaway: 'You can bring questions as well as concerns.',
    body: `<p>A first meeting usually explores why you have come, what you would like help with and what a useful next step might be. There may be questions about your history and everyday life. The process varies with the service and your needs.</p>
    <ul class="learn-list"><li>Ask how confidentiality works and when information may need to be shared.</li><li>Discuss the proposed approach, its evidence and any concerns you have.</li><li>Ask how goals and progress will be reviewed, and what happens if the approach is not helping.</li></ul>
    <p>You can say that a topic is difficult to discuss and ask for an explanation before proceeding. For a child, couple or family, ask how consent and private information will be handled.</p>
    <div class="learn-example"><p class="eyebrow">A QUESTION TO BRING</p><p>“What would we work on together, and how would we know whether it is helping?”</p></div>
    <a class="text-link" href="/first-visit/">Read the practical first-session guide ↗</a>`,
    sources: [
      ['APA Dictionary · Initial interview', 'https://dictionary.apa.org/initial-interview'],
      ['NIMH · Psychotherapies', 'https://www.nimh.nih.gov/health/topics/psychotherapies']
    ],
    question: 'Can you ask how the therapy works before agreeing to a plan?',
    options: ['Yes — questions and preferences belong in the conversation.', 'No — you should agree without asking.'], correct: 0,
    explanation: 'Understanding the approach, confidentiality and next steps helps you make an informed decision.'
  },
  {
    id: 'occasional-visits', title: 'Can an occasional visit be useful?', short: 'Understand follow-ups',
    takeaway: 'A useful visit has a purpose that you and the clinician discuss.',
    body: `<p>An occasional consultation may help you explore a concern or review skills learned in earlier therapy. You do not have to wait for a crisis to ask about a follow-up.</p>
    <p>Not everyone needs a monthly or yearly appointment. Discuss frequency around your needs and goals. Ask whether a brief consultation, a course of therapy or another service is appropriate.</p>
    <div class="learn-example"><p class="eyebrow">POSSIBLE REASONS TO RECONNECT</p><p>“My circumstances have changed.”<br>“I want to review the skills I learned.”<br>“A familiar difficulty has returned.”</p></div>
    <p>A session may offer understanding or relief. It may also bring up difficult feelings. Talk about these with the clinician. Feeling refreshed or resolving a problem in one visit cannot be guaranteed.</p>`,
    sources: [['American Psychological Association · Understanding psychotherapy', 'https://www.apa.org/topics/psychotherapy/understanding']],
    question: 'Is there one recommended appointment frequency for everyone?',
    options: ['Yes — everyone should attend monthly.', 'No — frequency should follow the person’s needs and agreed goals.'], correct: 1,
    explanation: 'There is no universal schedule proposed here. Follow-up and treatment frequency should be discussed for your circumstances.'
  },
  {
    id: 'everyday-wellbeing', title: 'What can I do for my wellbeing today?', short: 'Take something with you',
    takeaway: 'Small, realistic actions can support wellbeing alongside appropriate care.',
    body: `<p>Everyday support can include connecting with someone you trust, moving in a way that is accessible to you, learning something you enjoy, helping another person or noticing your surroundings. Choose something that fits your energy, health and circumstances.</p>
    <div class="learn-pause"><p class="eyebrow">A MOMENT FOR YOURSELF</p><h3>Notice. Choose. Make room.</h3><ol><li>Notice one thing that has been taking your energy.</li><li>Choose one manageable action: a short break, a gentle activity or a conversation with someone safe.</li><li>Decide when you could try it. It is okay to start small.</li></ol><p>These are optional reflection prompts. You do not need to type or submit anything.</p></div>
    <p>Self-care is personal; it is not a test of effort or a substitute for treatment you need. If distress is worsening or making daily life difficult, seek professional help. If you cannot stay safe or there is immediate danger, contact local emergency services or go to the nearest emergency department.</p>`,
    sources: [
      ['NHS · Five steps to mental wellbeing', 'https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/five-steps-to-mental-wellbeing/'],
      ['NIMH · Caring for your mental health', 'https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health']
    ],
    question: 'Does finding self-care difficult mean you are failing?',
    options: ['No — needs and circumstances differ, and additional help may be needed.', 'Yes — wellbeing depends only on trying harder.'], correct: 0,
    explanation: 'Wellbeing is affected by many circumstances. Small actions may support you, and needing help is not a personal failure.'
  }
];
