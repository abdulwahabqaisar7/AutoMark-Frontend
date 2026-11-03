const vehicles = {
  corolla: {
    title: "Toyota Corolla Grande",
    make: "Toyota",
    model: "Corolla Grande",
    year: "2021",
    variant: "1.8L CVT",
    city: "Karachi",
    mileage: "45,000 km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "PKR 65 Lakh",
    image: "assets/vehicle-corolla.png",
    imageAlt: "Exterior view of a Toyota Corolla Grande sedan",
  },
  civic: {
    title: "Honda Civic Oriel",
    make: "Honda",
    model: "Civic Oriel",
    year: "2020",
    variant: "1.8 i-VTEC CVT",
    city: "Islamabad",
    mileage: "32,000 km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "PKR 58 Lakh",
    image: "assets/vehicle-civic.png",
    imageAlt: "Exterior view of a Honda Civic Oriel sedan",
  },
  alto: {
    title: "Suzuki Alto VXL",
    make: "Suzuki",
    model: "Alto VXL",
    year: "2022",
    variant: "660cc AGS",
    city: "Lahore",
    mileage: "12,000 km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "PKR 29 Lakh",
    image: "assets/vehicle-alto.png",
    imageAlt: "Exterior view of a red Suzuki Alto VXL hatchback",
  },
  yaris: {
    title: "Toyota Yaris ATIV",
    make: "Toyota",
    model: "Yaris ATIV",
    year: "2021",
    variant: "1.3L CVT",
    city: "Faisalabad",
    mileage: "28,000 km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "PKR 42 Lakh",
    image: "assets/vehicle-yaris.png",
    imageAlt: "Exterior view of a Toyota Yaris ATIV sedan",
  },
};

const requestedVehicle = new URLSearchParams(window.location.search).get("car");
const vehicle = vehicles[requestedVehicle] || vehicles.corolla;

document.title = `${vehicle.title} | AutoMark`;
document.querySelector("#detail-title").textContent = vehicle.title;
document.querySelector("#detail-breadcrumb-name").textContent = vehicle.title;
document.querySelector("#detail-year-variant").textContent = `${vehicle.year} · ${vehicle.variant}`;
document.querySelector("#detail-city").textContent = vehicle.city;
document.querySelector("#detail-year").textContent = vehicle.year;
document.querySelector("#detail-mileage").textContent = vehicle.mileage;
document.querySelector("#detail-transmission").textContent = vehicle.transmission;
document.querySelector("#detail-fuel").textContent = vehicle.fuel;
document.querySelector("#detail-price").textContent = vehicle.price;
document.querySelector("#detail-make").textContent = vehicle.make;
document.querySelector("#detail-model").textContent = vehicle.model;
document.querySelector("#detail-year-spec").textContent = vehicle.year;
document.querySelector("#detail-variant").textContent = vehicle.variant;
document.querySelector("#detail-mileage-spec").textContent = vehicle.mileage;
document.querySelector("#detail-transmission-spec").textContent = vehicle.transmission;
document.querySelector("#detail-fuel-spec").textContent = vehicle.fuel;
document.querySelector("#detail-city-spec").textContent = vehicle.city;
document.querySelector("#detail-photo").src = vehicle.image;
document.querySelector("#detail-photo").alt = vehicle.imageAlt;
document.querySelector("#detail-thumbnail").src = vehicle.image;
document.querySelector("#detail-thumbnail").alt = `Thumbnail showing ${vehicle.title} exterior`;
for (const name of document.querySelectorAll("[data-car-name]")) {
  name.textContent = vehicle.title;
}
for (const city of document.querySelectorAll("[data-city-name]")) {
  city.textContent = vehicle.city;
}
document.querySelector("#enquiry-message").value =
  `I’m interested in the ${vehicle.year} ${vehicle.title}, ${vehicle.variant}. Please share availability and viewing details.`;

document.querySelector("#enquiry-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#enquiry-status").textContent =
    "This page is a front-end prototype. Connect the form to your enquiry service to send your message.";
});
