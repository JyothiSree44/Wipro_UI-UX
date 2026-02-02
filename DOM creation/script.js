// STEP 2: Access DOM Objects
const eventList = document.getElementById("eventList");
const detailsDiv = document.getElementById("details");
const registerBtn = document.getElementById("registerBtn");
const newEventInput = document.getElementById("newEvent");

// STEP 3: Event Data
let events = [
  { id: 1, name: "Tech Talk", seats: 5 },
  { id: 2, name: "Workshop", seats: 3 }
];

let selectedEvent = null;

// STEP 4: Display Events
function displayEvents() {
  eventList.innerHTML = "";
  events.forEach(event => {
    let li = document.createElement("li");
    li.textContent = event.name;
    li.onclick = () => selectEvent(event);
    eventList.appendChild(li);
  });
}

displayEvents();

// STEP 5: Handle Event Selection
function selectEvent(event) {
  selectedEvent = event;
  detailsDiv.innerText =
    `Event: ${event.name} | Seats Available: ${event.seats}`;
}

// STEP 6: Register for Event
registerBtn.addEventListener("click", function () {
  if (!selectedEvent) {
    alert("Please select an event");
    return;
  }

  if (selectedEvent.seats > 0) {
    selectedEvent.seats--;
    detailsDiv.innerText += " | Registered";
  } else {
    alert("No seats available");
  }
});

// STEP 7: Unregister
function unregister() {
  if (!selectedEvent) {
    alert("No event selected");
    return;
  }

  selectedEvent.seats++;
  detailsDiv.innerText =
    `Event: ${selectedEvent.name} | Seats Available: ${selectedEvent.seats}`;
}

// STEP 8 & 9: Add Event + Validation
function addNewEvent() {
  let name = newEventInput.value.trim();

  if (name === "") {
    alert("Event name is required");
    return;
  }

  events.push({
    id: events.length + 1,
    name: name,
    seats: 5
  });

  newEventInput.value = "";
  displayEvents();
}
