// script.js

// Event listener for submitting the biography form
document.getElementById('biographyForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  generateBiography(name);
  updateTitle(name);
});

function generateBiography(name) {
  const biographyOutput = document.getElementById('biographyOutput');
  biographyOutput.innerHTML = '';

  // Generate the biography based on the provided information
  const basicInfo = {
    age: document.getElementById('age').value,
    gender: document.getElementById('gender').value,
    physicalDescription: document.getElementById('physicalDescription').value
  };

  const background = {
    birthplace: document.getElementById('birthplace').value,
    family: document.getElementById('family').value,
    education: document.getElementById('education').value,
    occupation: document.getElementById('occupation').value,
    socialStatus: document.getElementById('socialStatus').value
  };

  const personalityTraits = {
    positiveTraits: document.getElementById('positiveTraits').value,
    negativeTraits: document.getElementById('negativeTraits').value,
    quirksOrHabits: document.getElementById('quirksOrHabits').value,
    strengths: document.getElementById('strengths').value,
    weaknesses: document.getElementById('weaknesses').value
  };

  const motivationsAndGoals = {
    shortTermGoals: document.getElementById('shortTermGoals').value,
    longTermGoals: document.getElementById('longTermGoals').value,
    whatDrivesCharacter: document.getElementById('whatDrivesCharacter').value
  };

  const relationships = {
    significantRelationships: document.getElementById('significantRelationships').value,
    friends: document.getElementById('friends').value,
    enemies: document.getElementById('enemies').value,
    romanticInterests: document.getElementById('romanticInterests').value
  };

  const pastExperiences = {
    majorLifeEvents: document.getElementById('majorLifeEvents').value,
    traumasOrChallenges: document.getElementById('traumasOrChallenges').value,
    turningPoints: document.getElementById('turningPoints').value
  };

  const beliefsAndValues = {
    religiousOrSpiritualViews: document.getElementById('religiousOrSpiritualViews').value,
    politicalViews: document.getElementById('politicalViews').value,
    moralCode: document.getElementById('moralCode').value
  };

  const innerConflict = {
    ego: document.getElementById('ego').value,
    id: document.getElementById('id').value,
    superego: document.getElementById('superego').value,
    defenseMechanisms: document.getElementById('defenseMechanisms').value
  };

  const externalConflict = {
    obstaclesOrConflicts: document.getElementById('obstaclesOrConflicts').value
  };

  const characterArc = {
    evolution: document.getElementById('evolution').value,
    keyMoments: document.getElementById('keyMoments').value
  };

  const symbolismOrThemes = {
    symbolism: document.getElementById('symbolism').value,
    themes: document.getElementById('themes').value
  };

  const writingNotes = {
    additionalNotes: document.getElementById('additionalNotes').value
  };

  // Build the biography template
   let template = `
     <h3>Basic Information:</h3>
     <div class="section">
       <div class="field">
         <span class="field-label">Name:</span>
         <span class="field-value">${name}</span>
       </div>
       <div class="field">
         <span class="field-label">Age:</span>
         <span class="field-value">${basicInfo.age}</span>
       </div>
       <div class="field">
         <span class="field-label">Gender:</span>
         <span class="field-value">${basicInfo.gender}</span>
       </div>
       <div class="field">
         <span class="field-label">Physical Description:</span>
         <span class="field-value">${basicInfo.physicalDescription}</span>
       </div>
     </div>

     <h3>Background:</h3>
     <div class="section">
       <div class="field">
         <span class="field-label">Birthplace:</span>
         <span class="field-value">${background.birthplace}</span>
       </div>
       <div class="field">
         <span class="field-label">Family:</span>
         <span class="field-value">${background.family}</span>
       </div>
       <div class="field">
         <span class="field-label">Education:</span>
         <span class="field-value">${background.education}</span>
       </div>
       <div class="field">
         <span class="field-label">Occupation:</span>
         <span class="field-value">${background.occupation}</span>
       </div>
       <div class="field">
         <span class="field-label">Social Status:</span>
         <span class="field-value">${background.socialStatus}</span>
       </div>
     </div>

     <h3>Personality Traits:</h3>
     <div class="section">
       <div class="field">
         <span class="field-label">Positive Traits:</span>
         <span class="field-value">${personalityTraits.positiveTraits}</span>
       </div>
       <div class="field">
         <span class="field-label">Negative Traits:</span>
         <span class="field-value">${personalityTraits.negativeTraits}</span>
       </div>
       <div class="field">
         <span class="field-label">Quirks or Habits:</span>
         <span class="field-value">${personalityTraits.quirksOrHabits}</span>
       </div>
       <div class="field">
         <span class="field-label">Strengths:</span>
         <span class="field-value">${personalityTraits.strengths}</span>
       </div>
       <div class="field">
         <span class="field-label">Weaknesses:</span>
         <span class="field-value">${personalityTraits.weaknesses}</span>
       </div>
     </div>

     <h3>Motivations and Goals:</h3>
     <div class="section">
       <div class="field">
         <span class="field-label">Short-term Goals:</span>
         <span class="field-value">${motivationsAndGoals.shortTermGoals}</span>
       </div>
       <div class="field">
         <span class="field-label">Long-term Goals:</span>
         <span class="field-value">${motivationsAndGoals.longTermGoals}</span>
       </div>
       <div class="field">
               <span class="field-label">What drives the character?</span>
               <span class="field-value">${motivationsAndGoals.whatDrivesCharacter}</span>
             </div>
           </div>

           <h3>Relationships:</h3>
           <div class="section">
             <div class="field">
               <span class="field-label">Significant Relationships:</span>
               <span class="field-value">${relationships.significantRelationships}</span>
             </div>
             <div class="field">
               <span class="field-label">Friends:</span>
               <span class="field-value">${relationships.friends}</span>
             </div>
             <div class="field">
               <span class="field-label">Enemies:</span>
               <span class="field-value">${relationships.enemies}</span>
             </div>
             <div class="field">
               <span class="field-label">Romantic Interests:</span>
               <span class="field-value">${relationships.romanticInterests}</span>
             </div>
           </div>

           <h3>Past Experiences:</h3>
           <div class="section">
             <div class="field">
               <span class="field-label">Major Life Events:</span>
               <span class="field-value">${pastExperiences.majorLifeEvents}</span>
             </div>
             <div class="field">
               <span class="field-label">Traumas or Challenges:</span>
               <span class="field-value">${pastExperiences.traumasOrChallenges}</span>
             </div>
             <div class="field">
               <span class="field-label">Turning Points:</span>
               <span class="field-value">${pastExperiences.turningPoints}</span>
             </div>
           </div>

           <h3>Beliefs and Values:</h3>
           <div class="section">
             <div class="field">
               <span class="field-label">Religious or Spiritual Views:</span>
               <span class="field-value">${beliefsAndValues.religiousOrSpiritualViews}</span>
             </div>
             <div class="field">
               <span class="field-label">Political Views:</span>
               <span class="field-value">${beliefsAndValues.politicalViews}</span>
             </div>
             <div class="field">
               <span class="field-label">Moral Code:</span>
               <span class="field-value">${beliefsAndValues.moralCode}</span>
             </div>
           </div>

           <h3>Inner Conflict:</h3>
           <div class="section">
             <div class="field">
               <span class="field-label">Ego:</span>
               <span class="field-value">${innerConflict.ego}</span>
             </div>
             <div class="field">
               <span class="field-label">Id:</span>
               <span class="field-value">${innerConflict.id}</span>
             </div>
             <div class="field">
               <span class="field-label">Superego:</span>
               <span class="field-value">${innerConflict.superego}</span>
             </div>
             <div class="field">
               <span class="field-label">Defense Mechanisms:</span>
               <span class="field-value">${innerConflict.defenseMechanisms}</span>
             </div>
           </div>

           <h3>External Conflict:</h3>
           <div class="section">
             <div class="field">
               <span class="field-label">Obstacles or Conflicts:</span>
               <span class="field-value">${external
        <span class="field-label">Obstacles or Conflicts:</span>
        <span class="field-value">${externalConflict.obstaclesOrConflicts}</span>
      </div>
    </div>

    <h3>Character Arc:</h3>
    <div class="section">
      <div class="field">
        <span class="field-label">Evolution:</span>
        <span class="field-value">${characterArc.evolution}</span>
      </div>
      <div class="field">
        <span class="field-label">Key Moments:</span>
        <span class="field-value">${characterArc.keyMoments}</span>
      </div>
    </div>

    <h3>Symbolism or Themes:</h3>
    <div class="section">
      <div class="field">
        <span class="field-label">Symbolism:</span>
        <span class="field-value">${symbolismOrThemes.symbolism}</span>
      </div>
      <div class="field">
        <span class="field-label">Themes:</span>
        <span class="field-value">${symbolismOrThemes.themes}</span>
      </div>
    </div>

    <h3>Writing Notes:</h3>
    <div class="section">
      <div class="field">
        <span class="field-label">Additional Notes:</span>
        <span class="field-value">${writingNotes.additionalNotes}</span>
      </div>
    </div>
  `;

  // Display the generated biography
  const biographyOutput = document.getElementById('biographyOutput');
  biographyOutput.innerHTML = template;
}
        <span class="field-label">Obstacles or Conflicts:</span>
        <span class="field-value">${externalConflict.obstaclesOrConflicts}</span>
      </div>
    </div>

    <h3>Character Arc:</h3>
    <div class="section">
      <div class="field">
        <span class="field-label">Evolution:</span>
        <span class="field-value">${characterArc.evolution}</span>
      </div>
      <div class="field">
        <span class="field-label">Key Moments:</span>
        <span class="field-value">${characterArc.keyMoments}</span>
      </div>
    </div>

    <h3>Symbolism or Themes:</h3>
    <div class="section">
      <div class="field">
        <span class="field-label">Symbolism:</span>
        <span class="field-value">${symbolismOrThemes.symbolism}</span>
      </div>
      <div class="field">
        <span class="field-label">Themes:</span>
        <span class="field-value">${symbolismOrThemes.themes}</span>
      </div>
    </div>

    <h3>Writing Notes:</h3>
    <div class="section">
      <div class="field">
        <span class="field-label">Additional Notes:</span>
        <span class="field-value">${writingNotes.additionalNotes}</span>
      </div>
    </div>
  `;

  // Display the generated biography
  const biographyOutput = document.getElementById('biographyOutput');
  biographyOutput.innerHTML = template;
}
