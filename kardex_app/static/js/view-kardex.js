const updateKardexForm = document.querySelector('#updateKardexForm');
const nameOfWardInput = document.querySelector('#nameOfWardInput');
const ivfInput = document.querySelector('#ivfInput');
const laboratoryWorkUps = document.querySelector('#laboratoryWorkUpsInput');
const medicationsInput = document.querySelector('#medicationsInput');
const sideDripInput = document.querySelector('#sideDripInput');
const specialNotationsInput = document.querySelector('#specialNotationsInput');
const referralsInput = document.querySelector('#referralsInput');

const nameInput = document.querySelector('#nameInput');
nameInput.addEventListener('keyup', (e) => e.target.value = e.target.value.replace(/\s{2}/g, ' '));

const ageSexInput = document.querySelector('#ageSexInput');
const dateTimeInput = document.querySelector('#dateTimeInput');
const hospitalNumInput = document.querySelector('#hospitalNumInput');
const dxInput = document.querySelector('#dxInput');
const drsInput = document.querySelector('#drsInput');
const dietInput = document.querySelector('#dietInput');

const ageInput = document.querySelector('#ageInput');
const sexInput = document.querySelector('#sexInput');
const extraFieldsInput = document.querySelector('#extraFieldsInput');
const extraFieldValuesInput = document.querySelector('#extraFieldValuesInput');
const labelMarkersInput = document.querySelector('#labelMarkersInput');
const labelValuesInput = document.querySelector('#labelValuesInput');

const inputs = document.querySelectorAll('input');
const showInfoToast = () => {
  console.log('test');
  // const infoToast = document.querySelector('.info-toast');
  // new bootstrap.Toast(infoToast).show();
};
document.querySelectorAll('.form-control').forEach((el) => el.addEventListener('click', (e) => console.log(e.target)));

const versionModals = Array.from(document.querySelectorAll('[id^="comparisonModal"]'));
const closeModal = (e) => {
  const closedModal = e.target;

  const closedModalBody = closedModal.querySelector('.modal-body');
  closedModalBody.querySelector('#modalContainerCurr')
    && closedModalBody.querySelector('#modalContainerCurr').remove();
  closedModalBody.querySelector('#modalContainerPrev')
    && closedModalBody.querySelector('#modalContainerPrev').remove();
  
  Array.from(closedModal
    .querySelector('[id^="modalContainer"]')
    .querySelectorAll('.change-span'))
    .forEach((el) => el.classList.add('d-none'));
};
versionModals
  .forEach((el) => el.addEventListener('hidden.bs.modal', closeModal));

const compareCurrLinks = document.querySelectorAll('[id^="compareCurr"][id$="Link"]');
const compareWCurr = (idx) => {
  const versionModal = versionModals[idx - 1];

  const currVersionModalContainer = versionModal
    .querySelector('[id^="modalContainer"]').cloneNode(true);
  currVersionModalContainer.id = 'modalContainerCurr';

  // const existingCurrVersionModalContainer = document.querySelector('#modalContainerCurr');
  // existingCurrVersionModalContainer
  //   && existingCurrVersionModalContainer.replaceWith(currVersionModalContainer);

  const currVersionTitle = currVersionModalContainer.querySelector('[id^="modalCardTitle"]');
  currVersionTitle.id = 'modalCardTitleCurr';
  currVersionTitle.getElementsByTagName('span')[0].textContent = nameInput.value.trim();
  currVersionTitle.getElementsByTagName('span')[1].textContent = '(Your Current Version)';

  const currVersionBody = currVersionModalContainer.querySelector('[id^="modalCardBody"]');
  currVersionBody.id = 'modalCardBodyCurr';

  const currNameOfWard = currVersionBody.querySelector('[id^="nameOfWard"]');
  currNameOfWard.id = 'nameOfWardCurr';
  currNameOfWard.getElementsByTagName('span')[1].textContent = nameOfWardInput.value.trim();

  const currIvf = currVersionBody.querySelector('[id^="ivf"]');
  currIvf.id = 'ivfCurr';
  currIvf.getElementsByTagName('span')[1].textContent = ivfInput.value.trim();

  const currLaboratoryWorkUps = currVersionBody.querySelector('[id^="laboratoryWorkUps"]');
  currLaboratoryWorkUps.id = 'laboratoryWorkUpsCurr';
  currLaboratoryWorkUps.getElementsByTagName('span')[1].textContent = laboratoryWorkUps.value.trim();

  const currMedications = currVersionBody.querySelector('[id^="medications"]');
  currMedications.id = 'medicationsCurr';
  currMedications.getElementsByTagName('span')[1].textContent = medicationsInput.value.trim();

  const currSideDrip = currVersionBody.querySelector('[id^="sideDrip"]');
  currSideDrip.id = 'sideDripCurr';
  currSideDrip.getElementsByTagName('span')[1].textContent = sideDripInput.value.trim();

  const currSpecialNotations = currVersionBody.querySelector('[id^="specialNotations"]');
  currSpecialNotations.id = 'specialNotationsCurr';
  currSpecialNotations.getElementsByTagName('span')[1].textContent = specialNotationsInput.value.trim();

  const currReferrals = currVersionBody.querySelector('[id^="referrals"]');
  currReferrals.id = 'referralsCurr';
  currReferrals.getElementsByTagName('span')[1].textContent = referralsInput.value.trim();

  const currName = currVersionBody.querySelector('[id^="name"]:not([id^="nameOfWard"]');
  currName.id = 'nameCurr';
  currName.getElementsByTagName('span')[1].textContent = nameInput.value.trim();

  const currAgeSex = currVersionBody.querySelector('[id^="ageSex"]');
  currAgeSex.id = 'ageSexCurr';
  currAgeSex.getElementsByTagName('span')[1].textContent = ageSexInput.value.trim();

  const currDateTime = currVersionBody.querySelector('[id^="dateTime"]');
  currDateTime.id = 'dateTimeCurr';
  currDateTime.getElementsByTagName('span')[1].textContent = dateTimeInput.value.trim();

  const currHospitalNum = currVersionBody.querySelector('[id^="hospital#"]');
  currHospitalNum.id = 'hospitalNumCurr';
  currHospitalNum.getElementsByTagName('span')[1].textContent = hospitalNumInput.value.trim();

  const currDx = currVersionBody.querySelector('[id^="dx"]');
  currDx.id = 'dxCurr';
  currDx.getElementsByTagName('span')[1].textContent = dxInput.value.trim();

  const currDrs = currVersionBody.querySelector('[id^="drs"]');
  currDrs.id = 'drsCurr';
  currDrs.getElementsByTagName('span')[1].textContent = drsInput.value.trim();

  const currDiet = currVersionBody.querySelector('[id^="diet"]');
  currDiet.id = 'dietCurr';
  currDiet.getElementsByTagName('span')[1].textContent = dietInput.value.trim();

  versionModal
    .querySelector('.modal-body')
    .appendChild(currVersionModalContainer);
  const activatedVersionModal = new bootstrap.Modal(versionModal);
  activatedVersionModal.show();
};
compareCurrLinks.forEach((el) => {
  el.addEventListener('click', (e) => compareWCurr(e.target.id.replace(/\D/g, '')))
});

const comparePrevLinks = document.querySelectorAll('[id^="comparePrev"][id$="Link"]');
const compareWPrev = (idx) => {
  if (idx == versionModals.length)
    return;

  const targetModal = versionModals[idx - 1];
  Array.from(targetModal
    .querySelector('[id^="modalContainer"]')
    .querySelectorAll('.change-span'))
    .forEach((el) => el.classList.remove('d-none'));
  
  const prevModal = versionModals[idx];
  const prevVersionModalContainer = prevModal
    .querySelector('[id^="modalContainer"]').cloneNode(true);
  prevVersionModalContainer.id = 'modalContainerPrev';

  targetModal
    .querySelector('.modal-body')
    .insertBefore(prevVersionModalContainer, targetModal.querySelector('[id^="modalContainer"]'));
  const activatedVersionModal = new bootstrap.Modal(targetModal);
  activatedVersionModal.show();
};
comparePrevLinks.forEach((el) => {
  el.addEventListener('click', (e) => compareWPrev(e.target.id.replace(/\D/g, '')))
});
