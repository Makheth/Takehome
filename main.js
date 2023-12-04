const studentCardForm = document.getElementById('studentCardForm');
const generateCardButton = document.getElementById('generateCardButton');

generateCardButton.addEventListener('click', handleGenerateCard);

function handleGenerateCard() {
  const programOfStudy = studentCardForm.elements.programOfStudy.value.trim();
  const yearOfEntry = parseInt(studentCardForm.elements.yearOfEntry.value.trim());
  const fullName = studentCardForm.elements.fullName.value.trim();
  const studentNumber = parseInt(studentCardForm.elements.studentNumber.value.trim());

  if (!programOfStudy || !yearOfEntry || !fullName || !studentNumber) {
    alert('Please fill in all required fields');
    return;
  }

  const studentCardTemplate = document.querySelector('.studentCard');
  const studentCard = studentCardTemplate.cloneNode(true);
  studentCard.style.display = 'block';

  studentCard
    .querySelector('#programOfStudyDisplay')
    .textContent = programOfStudy;
  studentCard.querySelector('#yearOfEntryDisplay').textContent = yearOfEntry;
  studentCard.querySelector('#fullNameDisplay').textContent = fullName;
  studentCard.querySelector('#studentNumberDisplay').textContent = studentNumber;

  const studentPhotoInput = studentCardForm.elements.studentPhoto;
  const file = studentPhotoInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = (event) => {
      const imageURL = event.target.result;
      const studentCardImage = studentCard.querySelector('#studentCardImage');
      studentCardImage.src = imageURL;
    };

    reader.readAsDataURL(file);
  }

  document.body.appendChild(studentCard);
}
