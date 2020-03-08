// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['I am a first generation college student!', 'I speak 2 and a half languages!', 'I have a cat named Simba!', 'I have 5 siblings!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function getMessage() {	
    var i;	
    fetch('/data').then(response => response.json()).then((json) => {	
        const messagesListElement = document.getElementById('messages-container');	
        messagesListElement.innerHTML = '';	
        for (i = 0; i < json.length; i++) {	
            messagesListElement.appendChild(createListElement(json[i]));	
        }	
    });	
}	


function createListElement(text) {	
  const liElement = document.createElement('li');	
  liElement.innerText = text;	
  return liElement;	
}

function createMap() {
  var map = new google.maps.Map(
      document.getElementById('map'),
      {center: {lat: 39.8097343, lng: -98.5556199}, zoom: 3.5});
}

