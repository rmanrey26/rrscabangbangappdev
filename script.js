const image = document.querySelector('.image');

let isDragging = false;
let startX, startY, scrollLeft, scrollTop;

image.addEventListener('mousedown', (e) => {
  isDragging = true;
  image.classList.add('dragging');
  startX = e.pageX - image.offsetLeft;
  startY = e.pageY - image.offsetTop;
  scrollLeft = image.scrollLeft;
  scrollTop = image.scrollTop;
});

image.addEventListener('mouseup', () => {
  isDragging = false;
  image.classList.remove('dragging');
});

image.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - image.offsetLeft;
  const y = e.pageY - image.offsetTop;
  const walkX = x - startX;
  const walkY = y - startY;
  image.scrollLeft = scrollLeft - walkX;
  image.scrollTop = scrollTop - walkY;
});

image.addEventListener('wheel', (e) => {
  e.preventDefault();
  const scale = e.deltaY > 0 ? 1.1 : 0.9;
  const { left, top, width, height } = image.getBoundingClientRect();
  const x = e.pageX - left;
  const y = e.pageY - top;
  const dx = (x / width) * (image.scrollWidth - width);
  const dy = (y / height) * (image.scrollHeight - height);
  image.style.transformOrigin = `${x}px ${y}px`;
  image.scrollLeft = dx + scale * (image.scrollLeft - dx);
  image.scrollTop = dy + scale * (image.scrollTop - dy);
});

const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close");
const buildingTitle = document.getElementById("building-title");

const buildingNames = {
  martin: "Martin Hall",
  finster: "Finster Hall",
  catwalk: "Laudato Si",
  chapel: "Chapel",
  canisius: "Canisius Hall",
  thibault: "Thibault Hall",
  ccfc: "Community Center of the First Companions Building",
  jubilee: "Jubilee Hall",
  weiman: "Weiman Hall",
  pool: "Swimming Pool",
  bellarmine: "Bellarmine Hall",
  gisbert: "Gisbert Hall",
  delrosario: "Del Rosario Hall",
  dotterweich: "Dotterweich Hall"
};

function openModal(title, photoURL, rooms) {
  modal.style.display = "block";

  const properTitle = buildingNames[title.toLowerCase()];
  buildingTitle.textContent = properTitle || title;

  const buildingPhoto = document.querySelector(".building-photo");
  buildingPhoto.style.backgroundImage = `url(${photoURL})`;

  const buildingInfo = document.querySelector(".building-info");
  buildingInfo.innerHTML = "";

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  let firstPhoto;
  if (properTitle.toLowerCase() === "martin hall") {
    firstPhoto = document.createElement("img");
    firstPhoto.src = "IMAGES/C4%20-%20MARTIN.jpg";
  } else if (properTitle.toLowerCase() === "finster hall") {
    firstPhoto = document.createElement("img");
    firstPhoto.src = "IMAGES/C5%20-%20CAFE.jpg";
  } else if (properTitle.toLowerCase() === "jubilee hall") {
    firstPhoto = document.createElement("img");
    firstPhoto.src = "IMAGES/D6%20-%20JUBILEE.jpg";
  }

  if (firstPhoto) {
    firstPhoto.style.width = "250px";
    firstPhoto.style.height = "250px";
    imageContainer.appendChild(firstPhoto);
  }

  let secondPhoto;
  if (properTitle.toLowerCase() === "martin hall") {
    secondPhoto = document.createElement("img");
    secondPhoto.src = "IMAGES/C3%20-%20OSA.jpg";
  } else if (properTitle.toLowerCase() === "finster hall") {
    secondPhoto = document.createElement("img");
    secondPhoto.src = "IMAGES/C6%20-%20BRIDGE.jpg";
  } else if (properTitle.toLowerCase() === "laudato si") {
    secondPhoto = document.createElement("img");
    secondPhoto.src = "IMAGES/C8%20-%20LAUDATO.png";
  } else if (properTitle.toLowerCase() === "swimming pool") {
    secondPhoto = document.createElement("img");
    secondPhoto.src = "IMAGES/D0%20-%20POOL.png";
  } else if (properTitle.toLowerCase() === "chapel") {
    secondPhoto = document.createElement("img");
    secondPhoto.src = "IMAGES/D2%20-%20CHAPEL.png";
  } else if (properTitle.toLowerCase() === "thibault hall") {
    secondPhoto = document.createElement("img");
    secondPhoto.src = "IMAGES/D3%20-%20THIBAULT.png";
  } else if (properTitle.toLowerCase() === "jubilee hall") {
    secondPhoto = document.createElement("img");
    secondPhoto.src = "IMAGES/D7%20-%20JUBILEE.jpg";
  } else if (properTitle.toLowerCase() === "del rosario hall") {
    secondPhoto = document.createElement("img");
    secondPhoto.src = "IMAGES/E2%20-%20DELROSARIO.jpg";
  }

  if (secondPhoto) {
    secondPhoto.style.width = "250px";
    secondPhoto.style.height = "250px";
    imageContainer.appendChild(secondPhoto);
  }
  if (
    properTitle.toLowerCase() === "laudato si" ||
    properTitle.toLowerCase() === "swimming pool" ||
    properTitle.toLowerCase() === "del rosario hall" ||
    properTitle.toLowerCase() === "chapel" ||
    properTitle.toLowerCase() === "thibault hall"
  ) {
    secondPhoto.style.width = "600px";
    secondPhoto.style.height = "600px";
  }

  buildingInfo.appendChild(imageContainer);

  rooms.forEach(room => {
    const row = document.createElement("tr");
    row.innerHTML = `<td><strong>${room.name}</strong></td><td>${room.floors}</td>`;
    buildingInfo.appendChild(row);
  });
}

const overlayImages = document.querySelectorAll(".overlay-image");
overlayImages.forEach(image => {
  image.addEventListener("click", () => {
    const buildingTitle = image.id.split("-").pop();
    let photoURL = "";

    if (buildingTitle.toLowerCase() === "martin") {
      photoURL = "IMAGES/B8%20-%20MARTIN.jpg";
    } else if (buildingTitle.toLowerCase() == "finster") {
      photoURL = "IMAGES/C1%20-%20FINSTER.jpg";
    } else if (buildingTitle.toLowerCase() == "catwalk") {
      photoURL = "IMAGES/C2%20-%20LAUDATO.jpg";
    } else if (buildingTitle.toLowerCase() == "pool") {
      photoURL = "IMAGES/C9%20-%20POOL.jpg";
    } else if (buildingTitle.toLowerCase() == "ccfc") {
      photoURL = "IMAGES/C7%20-%20CCFC.jpg";
    } else if (buildingTitle.toLowerCase() == "chapel") {
      photoURL = "IMAGES/D1%20-%20CHAPEL.jpg";
    } else if (buildingTitle.toLowerCase() == "canisius") {
      photoURL = "IMAGES/D3%20-%20CANISIUS.jpg";
    } else if (buildingTitle.toLowerCase() == "thibault") {
      photoURL = "IMAGES/D4%20-%20THIBAULT.jpg";
    } else if (buildingTitle.toLowerCase() == "jubilee") {
      photoURL = "IMAGES/D5%20-%20JUBILEE.jpg";
    } else if (buildingTitle.toLowerCase() == "bellarmine") {
      photoURL = "IMAGES/D8%20-%20BELLARMINE.jpg";
    } else if (buildingTitle.toLowerCase() == "gisbert") {
      photoURL = "IMAGES/D9%20-%20GISBERT.jpg";
    } else if (buildingTitle.toLowerCase() == "dotterweich") {
      photoURL = "IMAGES/E0%20-%20DOTTERWEICH.jpg";
    } else if (buildingTitle.toLowerCase() == "delrosario") {
      photoURL = "IMAGES/E1%20-%20DELROSARIO.jpg";
    } else if (buildingTitle.toLowerCase() == "weiman") {
      photoURL = "IMAGES/E3%20-%20WEIMAN.jpg";
    }

    const rooms = getBuildingRooms(buildingTitle);
    openModal(buildingTitle, photoURL, rooms);
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

function getBuildingRooms(buildingTitle) {
  if (buildingTitle === "martin") {
    return [
      { name: " ", floors: "" },
      { name: "Room ", floors: "Floor" },
      { name: "ATM Booth", floors: "Ground" },
      { name: "Arrupe Hall", floors: "Ground" },
      { name: "Office of the Student Affairs", floors: "Middle-Ground" },
      { name: "Bookstore", floors: "Middle-Ground" },
      { name: "Carparks", floors: "2-3" },
      { name: "Basketball Courts", floors: "4 (M400)" },
      { name: "Fitness & Well Center", floors: "5 (M500)" },
      { name: "Volleyball Courts", floors: "7 (M700)" }
    ];
  } else if (buildingTitle === "finster") {
    return [
      { name: " ", floors: "" },
      { name: "Room ", floors: "Floor" },
      { name: "Canteen", floors: "Lower Ground" },
      { name: "Career Center and Alumni Hub", floors: "Ground" },
      { name: "Bridge to CCFC", floors: "5" },
      { name: "Computer Studies Lobby", floors: "6" }
    ];
  } else if (buildingTitle === "ccfc") {
    return [
      { name: " ", floors: "" },
      { name: "Room ", floors: "Floor" },
      { name: "Mezzanine", floors: "1" },
      { name: "Miguel Pro Learning Commons", floors: "2" },
      { name: "Ricci Hall", floors: "3" },
      { name: "Pignatelli Hall (Faculty)", floors: "4" },
      { name: "Bridge to Martin, Finster", floors: "4" },
      { name: "Campion Hall (Faculty)", floors: "5" },
      { name: "De la Costa Hall (Faculty)", floors: "6" },
      { name: "Regis Hall (Faculty)", floors: "7" },
      { name: "Xavier Hall", floors: "8" },
      { name: "Faber Hall", floors: "9" },
      { name: "Ignatius Hall", floors: "10" },
      { name: "Calungsod-San Vitores Center", floors: "11" }
    ];
  } else if (buildingTitle === "canisius") {
    return [
      { name: " ", floors: "" },
      { name: "Room ", floors: "Floor" },
      { name: "University Registrar ", floors: "Ground" },
      { name: "Office of the President ", floors: "Ground" }
    ];
  } else if (buildingTitle === "jubilee") {
    return [
      { name: " ", floors: "" },
      { name: "Room ", floors: "Floor" },
      { name: "Admission Office Center", floors: "Ground" },
      { name: "HRM & Development Office", floors: "2" },
      { name: "Transfer Students Counter", floors: "3 (J301)" },
      { name: "ISFO Development Initiatives ", floors: "4 (J401)" }
    ];
  } else if (buildingTitle === "bellarmine") {
    return [
      { name: " ", floors: "" },
      { name: "Room ", floors: "Floor" },
      { name: "Finance Office", floors: "Ground" }
    ];
  } else if (buildingTitle === "gisbert") {
    return [
      { name: " ", floors: "" },
      { name: "Room ", floors: "Floor" },
      { name: "Bapa Benny Tudtud Auditorium", floors: "Ground" },
      { name: "Fr. Mateo Gisbert, SJ Library", floors: "2-5" }
    ];
  } else if (buildingTitle === "dotterweich") {
    return [
      { name: " ", floors: "" },
      { name: "Room ", floors: "Floor" },
      { name: "Physical Plant Office", floors: "Ground" },
      { name: "Legal Services Office", floors: "2" }
    ];
  } else if (buildingTitle === "weiman") {
    return [
      { name: " ", floors: "" },
      { name: "Room ", floors: "Floor" },
      { name: "Guidance Center", floors: "Ground" },
      { name: "University Clinic", floors: "Ground" }
    ];
  } else {
    return [];
  }
}

const buttonImage = document.getElementById('button-left-image');
const entryExitPoints = document.getElementById('entry-exit-points');
const mapImage = document.querySelector('.container');

// Add click event listener to the button image
buttonImage.addEventListener('click', function() {
  // Toggle the visibility of entry-exit-points container
  entryExitPoints.classList.toggle('show');
  
  // Toggle grayscale filter on the main map image
  mapImage.classList.toggle('grayscale');
});
