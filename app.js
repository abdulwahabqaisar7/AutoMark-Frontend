const yearSelect = document.querySelector("#year");
const uploadZone = document.querySelector("#upload-zone");
const photoInput = document.querySelector("#photos");
const uploadStatus = document.querySelector("#upload-status");
const sellForm = document.querySelector("#sell-form");
const formStatus = document.querySelector("#form-status");

for (let year = new Date().getFullYear(); year >= 1990; year -= 1) {
  const option = document.createElement("option");
  option.value = String(year);
  option.textContent = String(year);
  yearSelect.append(option);
}

function updateSelectedPhotos(fileList) {
  const acceptedFiles = [];
  const rejectedFiles = [];

  for (const file of fileList) {
    if (!["image/jpeg", "image/png"].includes(file.type)) {
      rejectedFiles.push(`${file.name}: use a JPG or PNG image.`);
    } else if (file.size > 5 * 1024 * 1024) {
      rejectedFiles.push(`${file.name}: each photo must be 5 MB or less.`);
    } else if (acceptedFiles.length === 10) {
      rejectedFiles.push(`${file.name}: you can add up to 10 photos.`);
    } else {
      acceptedFiles.push(file);
    }
  }

  const transfer = new DataTransfer();
  acceptedFiles.forEach((file) => transfer.items.add(file));
  photoInput.files = transfer.files;

  if (rejectedFiles.length > 0) {
    uploadStatus.textContent = rejectedFiles.join(" ");
    uploadStatus.setAttribute("role", "alert");
  } else {
    uploadStatus.removeAttribute("role");
    uploadStatus.textContent = acceptedFiles.length
      ? `${acceptedFiles.length} photo${acceptedFiles.length === 1 ? "" : "s"} added`
      : "No photos added";
  }
}

uploadZone.addEventListener("click", (event) => {
  if (event.target === photoInput) {
    return;
  }

  if (event.target.closest(".choose-photos") || !event.target.closest("button")) {
    photoInput.click();
  }
});

photoInput.addEventListener("change", () => updateSelectedPhotos(photoInput.files));

uploadZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  uploadZone.classList.add("is-dragging");
});

uploadZone.addEventListener("dragleave", () => {
  uploadZone.classList.remove("is-dragging");
});

uploadZone.addEventListener("drop", (event) => {
  event.preventDefault();
  uploadZone.classList.remove("is-dragging");
  updateSelectedPhotos(event.dataTransfer.files);
});

sellForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent =
    "This page is a front-end prototype. Connect the form to your submission service to send these details.";
});
