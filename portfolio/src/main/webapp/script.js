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

  var infowindow = new google.maps.InfoWindow({
    content: 'I was born and raised in Grand Rapids, MI.'
  });

  var infowindow1 = new google.maps.InfoWindow({
    content: 'I attend the University of Michigan in Ann Arbor, MI.'
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: 'I drove 18 hours to Orlando with my family for Spring Break. I also flew to Orlando before but only for Disney World.'
  });
  var marker = new google.maps.Marker({position: {lat: 42.9634 , lng: -85.6681}, map: map, title: 'Grand Rapids, MI'});
  marker.addListener('click', function() {
      infowindow.open(map, marker);
  });
  var marker1 = new google.maps.Marker({position: {lat: 42.2808 , lng: -83.7430}, map: map, title: 'Ann Arbor, MI'});
  marker1.addListener('click', function() {
      infowindow1.open(map, marker1);
  });
  var marker2 = new google.maps.Marker({position: {lat: 42.3314 , lng: -83.0458}, map: map, title: 'Detroit, MI'});
  var marker3 = new google.maps.Marker({position: {lat: 42.7325 , lng: -84.5555}, map: map, title: 'Lansing, MI'});
  var marker4 = new google.maps.Marker({position: {lat: 28.5383 , lng: -81.3792}, map: map, title: 'Orlando, FL'});
  marker4.addListener('click', function() {
      infowindow2.open(map, marker4);
  });
  var marker5 = new google.maps.Marker({position: {lat: 37.7749 , lng: -122.4194}, map: map, title: 'San Francisco, CA'});
  var marker6 = new google.maps.Marker({position: {lat: 32.7157 , lng: -117.1611}, map: map, title: 'San Diego, CA'});
  var marker7 = new google.maps.Marker({position: {lat: 34.0522 , lng: -118.2437}, map: map, title: 'Los Angeles, CA'});
  var marker8 = new google.maps.Marker({position: {lat: 42.3601 , lng: -71.0589}, map: map, title: 'Boston, MA'});
  var marker9 = new google.maps.Marker({position: {lat: 40.7128 , lng: -74.0060}, map: map, title: 'New York City, NY'});
  var marker10 = new google.maps.Marker({position: {lat: 39.7392 , lng: -104.9903}, map: map, title: 'Denver, CO'});
  var marker11 = new google.maps.Marker({position: {lat: 39.0997 , lng: -94.5786}, map: map, title: 'Kansis City, MO'});
  var marker12 = new google.maps.Marker({position: {lat: 41.8781 , lng: -87.6298}, map: map, title: 'Chicago, IL'});
  var marker13 = new google.maps.Marker({position: {lat: 38.9072 , lng: -77.0369}, map: map, title: 'Washington, DC'});
  var marker14 = new google.maps.Marker({position: {lat: 39.1157 , lng: -77.5636}, map: map, title: 'Leesburg, VA'});
  var marker15 = new google.maps.Marker({position: {lat: 36.1627 , lng: -86.7816}, map: map, title: 'Nashville, TN'});
  var marker16 = new google.maps.Marker({position: {lat: 44.9778 , lng: -93.2650}, map: map, title: 'Minneapolis, MN'});
  var marker17 = new google.maps.Marker({position: {lat: 39.9612 , lng: -82.9988}, map: map, title: 'Columbus, OH'});
}
