// Calendar Start
today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

monthAndYear = document.getElementById("monthAndYear");
document.getElementById("monthAndYear").innerHTML = 20;
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay();
    tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement("td");

                if (month === 0 && year === 2024) {
                    document.getElementById("previous").style.display = "none";
                } else {
                    document.getElementById("previous").style.display = "block";
                }
                //Game 5 in the D
            if(month === 0 && date === 20 && year === 2024) {
                // Example link with image
                let link = document.createElement("a");
                link.href = "https://www.start.gg/tournament/game-5-in-the-d/details";
                link.target = "_blank";

                let image = document.createElement("img");
                image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/game5In.png?raw=true";

                image.classList.add("calendarImg");


                link.appendChild(image);
                cell.appendChild(link);

                //Vortex
            } else if (month === 0 && date === 28 && year === 2024) {
                    // Example link with image
                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/vortex-gallery-at-frosty-faustings-xvi/event/project-wii/standings";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/vortex.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);
                    
                // The Cure
                 } else if(month === 1 && date === 9 && year === 2024) {
                    // Example link with image
                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/the-cure-100-pot-bonus-p-invitational/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/the%20cure.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);
                    
                    // Smashing Grounds
                } else if (month === 1 && date === 10 && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/smashing-grounds-10th-anniversary-celebration-a-melee-and-project-regional/details";
                    link.target = "_blank";
                
                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/10th%20aniv.png?raw=true";
                    image.classList.add("calendarImg");
                
                    link.appendChild(image);
                    cell.appendChild(link);

                    // Exodus
                } else if (month === 1 && date === 17 && year === 2024) {
                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/exodus-2024/details";
                    link.target = "_blank";
                
                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/exodus.png?raw=true";
                
                    image.classList.add("calendarImg");
                
                    // Assigning an ID to the image
                    image.setAttribute('id', 'newImageId');
                
                    // Adding hover event listener
                    image.addEventListener('mouseenter', function() {
                        // Function to run when hovered
                        console.log('Image hovered!');
                        // Call your function here
                        addElement();
                    });
                
                    link.appendChild(image);
                    cell.appendChild(link);
                
                
                function addElement() {

                    // Create a new element
                    let sideCalendarDiv = document.createElement("div");
                    let paragraph = document.createElement("p");

                    sideCalendarDiv.setAttribute('id', 'sideCalendarDiv');
                                
                    // Append the new element to the document body
                    document.body.appendChild(sideCalendarDiv);
                    sideCalendarDiv.appendChild(paragraph);
                    
                    paragraph.classList.add("article-head");
                    let articleHead = "Exodus 2024";

                    paragraph.document.innerHTML("");
                }
                
            
                    //Full Bloom, Perfect pivot, The Truce
                } else if (month === 1 && (date === 24 || date === 25) && year === 2024) {

                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/full-bloom-2024/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/fullbloom.png?raw=true"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/perfect-pivot/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/pp.png?raw=true"
                        }, 
                        {
                            link: "https://www.start.gg/tournament/the-truce/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/truce.png?raw=true"
                        }
                    ];
                    let currentIndex = 0; // Initialize current index

                    let link = document.createElement("a");
                    link.target = "_blank";

                    let image = document.createElement("img");

                    image.classList.add("calendarImg");

                    link.appendChild(image);
                    cell.appendChild(link);

                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events


                    //mutiny
                } else if (month === 2 && date === 2 && year === 2024) {
                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/college-park-mutiny-blossom-feat-eve-kevin-maples-mvlvchi-200/details";
                    link.target = "_blank";
                
                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/mutiny.png?raw=true";
                
                    image.classList.add("calendarImg");
                
                    // Assigning an ID to the image
                    image.setAttribute('id', 'newImageId');
                
                    // Adding hover event listener
                    image.addEventListener('mouseenter', function() {
                        // Function to run when hovered
                        console.log('Image hovered!');
                        // Call your function here
                        addElement();
                    });
                
                    link.appendChild(image);
                    cell.appendChild(link);
                
                
                    //Northstar
                } else if (month === 2 && date === 10 && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/northstar-ii-at-cloud-con/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/northstar.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    //aftershock
                } else if (month === 2 && date === 15 && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/aftershock-p-hdr-2/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/aftershock.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);


                    //Storm
                } else if (month === 2 && date === 16 && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/storm-viii-1/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/storm.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);


                    //ETSU-Con, Titans, Game5in, cascade
                } else if (month === 2 && date === 23 && year === 2024) {

                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/smash-of-the-titans-8-1/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/titans.png?raw=true"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/game-5-in-the-d-2-yuko-s-bday-edition/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/game5In.png?raw=true"
                        }, 
                        {
                            link: "https://www.start.gg/tournament/etsu-con-2024/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/etsu.png?raw=true"
                        },
                        {
                            link: "https://www.start.gg/tournament/cascade-clash-a-best-in-texas-league-event-1/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/cascade.png?raw=true"
                        }
                    ];


                    let currentIndex = 0; // Initialize current index
                    let link = document.createElement("a");
                    link.target = "_blank";

                    let image = document.createElement("img");

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events




                       //sakura-con
                } else if (month === 2 && (date === 29 || date === 31) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/sakura-con-2024/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/sakura.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);
                    
                    //Metal Tavern, Sakura-con
                } else if (month === 2 && date === 30 && year === 2024) {

                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/sakura-con-2024/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/sakura.png?raw=true"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/metal-tavern/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/metal-tavern.png?raw=true"
                        }
                    ];


                    let currentIndex = 0; // Initialize current index
                    let link = document.createElement("a");
                    link.target = "_blank";

                    let image = document.createElement("img");

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events

                    //action 2,  somniov
                } else if (month === 3 && date === 6 && year === 2024) {

                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/the-action-2-action-replay/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/replay.png?raw=true"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/somnio-5/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/somniov.png?raw=true"
                        }
                    ];


                    let currentIndex = 0; // Initialize current index
                    let link = document.createElement("a");
                    link.target = "_blank";

                    let image = document.createElement("img");

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events

                    
                    //The Action 2
                } else if (month === 3 && (date === 5 || date === 7) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/the-action-2-action-replay/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/replay.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    //Thunder
                } else if (month === 3 && (date === 13 || date === 14) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/thunder-throwdown-a-best-in-texas-league-event/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/thunder.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);


                    //THE BIGGER MILE HIGH CLUB
                } else if (month === 3 && (date === 21) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/the-bigger-mile-high-club/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/milehigh.jpg?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

          //THE BIGGER MILE HIGH CLUB & scarlet
                } else if (month === 3 && (date === 20) && year === 2024) {

                    const events = [

                        {   
                            link: "https://www.start.gg/tournament/the-bigger-mile-high-club/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/milehigh.jpg?raw=true"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/scarlet-classic-ix-1/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/scarletix.png?raw=true"
                        }
                    ];

              
                    let currentIndex = 0; // Initialize current index
                    let link = document.createElement("a");
                    link.target = "_blank";
    
                    let image = document.createElement("img");
    
                    image.classList.add("calendarImg");
    
    
                    link.appendChild(image);
                    cell.appendChild(link);
    
                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events

                    //Ledge 6
                } else if (month === 3 && date === 27 && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/who-s-on-ledge-6-melee-and-p-edition/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/ledge6.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);



                    //Rainbow Rodeo
                } else if (month === 4 && (date === 4) && year === 2024) {


                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/rainbow-rodeo-a-best-in-texas-league-event/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/rainbow.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);


                    //Ghost Town and creed
                } else if (month === 4 && (date === 11) && year === 2024) { 
                    
                    const events = [

                    {   
                        link: "https://www.start.gg/tournament/ghost-town-2-call-of-the-lloyd-ft-zamu-spark/details",
                        imageSrc: "https://raw.githubusercontent.com/pkzstar/plus-side/main/images/past-events/ghost-town.png"
                        
                    },
                    {
                        link: "https://www.start.gg/tournament/creed-iii/details",
                        imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/creed.png?raw=true"
                    }
                ];


                let currentIndex = 0; // Initialize current index
                let link = document.createElement("a");
                link.target = "_blank";

                let image = document.createElement("img");

                image.classList.add("calendarImg");


                link.appendChild(image);
                cell.appendChild(link);

                // Function to fade in/out the image and link
                function fadeInOut(element) {
                    let opacity = 0;
                    let increasing = true;
                    let interval = setInterval(function() {
                        if (increasing) {
                            opacity += 0.05;
                        } else {
                            opacity -= 0.05;
                        }
                        element.style.opacity = opacity;
                        if (opacity >= 1) {
                            increasing = false;
                            setTimeout(() => {
                                increasing = true;
                                updateLinkAndImage(); // Update link and image after fully visible
                            }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                        } else if (opacity <= 0) {
                            clearInterval(interval);
                            fadeInOut(element); // Restart the fading animation
                        }
                    }, 100); // Adjust the timing as needed
                }
            
                // Function to update the link and image
                function updateLinkAndImage() {
                    link.href = events[currentIndex].link;
                    image.src = events[currentIndex].imageSrc;
                    currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                }
            
                updateLinkAndImage(); // Initially update link and image
                fadeInOut(image); // Start fade-in/out animation // Start cycling events

   //Get Out of My Venue & Game 5 in the D
} else if (month === 4 && (date === 18) && year === 2024) {

    const events = [
        {   
            link: "https://www.start.gg/tournament/game-5-in-the-d/details",
            imageSrc: "https://raw.githubusercontent.com/pkzstar/plus-side/main/images/past-events/game5In.png"
            
        },
        {
            link: "https://www.start.gg/tournament/get-out-of-my-venue/details",
            imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F653520%2Fimage-26823721265eaac67b492375dd61d58c-optimized.png&ehk=wPnJ7gk4QYPmNh4K607NYyXo4pJfEwRcPlzUymJMUVU%3D&w=280&h=280&r=0"
        }
    ];
    let currentIndex = 0; // Initialize current index

    let link = document.createElement("a");
    link.target = "_blank";

    let image = document.createElement("img");

    image.classList.add("calendarImg");

    link.appendChild(image);
    cell.appendChild(link);

    // Function to fade in/out the image and link
    function fadeInOut(element) {
        let opacity = 0;
        let increasing = true;
        let interval = setInterval(function() {
            if (increasing) {
                opacity += 0.05;
            } else {
                opacity -= 0.05;
            }
            element.style.opacity = opacity;
            if (opacity >= 1) {
                increasing = false;
                setTimeout(() => {
                    increasing = true;
                    updateLinkAndImage(); // Update link and image after fully visible
                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
            } else if (opacity <= 0) {
                clearInterval(interval);
                fadeInOut(element); // Restart the fading animation
            }
        }, 100); // Adjust the timing as needed
    }

    // Function to update the link and image
    function updateLinkAndImage() {
        link.href = events[currentIndex].link;
        image.src = events[currentIndex].imageSrc;
        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
    }

    updateLinkAndImage(); // Initially update link and image
    fadeInOut(image); // Start fade-in/out animation // Start cycling events


                    //SuperTps
                } else if (month === 4 && (date === 24) && year === 2024) {


                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/tripoint-smash-presents-super-tps-iii/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/past-events/supertps.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    
                    //Soul Showdown
                } else if (month === 4 && (date === 25) && year === 2024) {


                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/soul-showdown-a-best-in-texas-league-event/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F666183%2Fimage-ebee1a8d2cb6ce2cc050fed8580769a2-optimized.jpg&ehk=8%2BM4zWeTJnVDqCcizmN3VspAdm7p6pNJmU1px2KyESk%3D&w=280&h=280&r=0";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    //Smash Camp
                } else if ( (month === 4 && date === 31 && year === 2024) ) {
                    
                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/smash-camp-new-lands-2024/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/smashcamp.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);


                    //invincible and smashcamp crossover
                } else if (month === 5 && (date === 1) && year === 2024) {
                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/smash-camp-new-lands-2024/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/smashcamp.png?raw=true"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/invincible-viii/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/invincible8.png?raw=true"
                        }
                    ];


                    let currentIndex = 0; // Initialize current index
                    let link = document.createElement("a");
                    link.target = "_blank";

                    let image = document.createElement("img");

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events


                } else if (month === 5 && (date === 2) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/invincible-viii/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/invincible8.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    //Mass Madness 47
                } else if (month === 5 && (date === 8) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/mass-madness-47-a-new-england-melee-and-project-event/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F668782%2Fimage-f46841adb07e246ca977f2ebb36cdf7d-optimized.png&ehk=ktORfrKbxTMuLt%2FfCTZ5o32wj%2FgWtpvPfByFbDBAQOA%3D&w=280&h=280&r=0";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                    //Ripped off
                } else if (month === 5 && (date === 14) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/ripped-off-1/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/ripped.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);
                
                    //stoke
                } else if (month === 5 && (date === 16) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/untitled-stoke-tournament/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F661701%2Fimage-fd4e28a68d3eef0eda541bef36e01a0f-optimized.png&ehk=1k8V3O4JFqIok2XJzcUdVsy4uG1NQMISoCxy%2Fg%2BnAxA%3D&w=280&h=280&r=0";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);
                                    //SUPER CLOUDY SCUFFLE & Black Market & mineral melee & natufest
            } else if(month === 5 &&  date === 22 && year === 2024) {

                const events = [
                    {   
                        link: "https://www.start.gg/tournament/super-cloudy-scuffle-a-durham-regional/details",
                        imageSrc: "https://github.com/pkzstar/HDReport/blob/main/images/upcoming%20events/super%20cloudy%20scuffle.png?raw=true"
                        
                    },
                    {
                        link: "https://www.start.gg/tournament/the-black-market/details",
                        imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/blackmarket.png?raw=true"
                    },
                    {
                        link: "https://www.start.gg/tournament/mineral-melee-a-best-in-texas-league-event/details",
                        imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F674411%2Fimage-a6eb8cdb1ecb9ff623700df120a6d0da-optimized.png&ehk=vC2efFJcqrX9OoFYOhe%2FewrublZOliZQgSSMSmH%2B33U%3D&w=280&h=280&r=0"
                    },
                    {
                        link: "https://www.start.gg/tournament/natufest-5-the-reawakening-no-venue-fee-melee-singles-p/details",
                        imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F660623%2Fimage-bdb14521bb3d3ce57c4ffdd5793b3981-optimized.jpg&ehk=X19abGlB6SwZaY%2B9dMO0URVJQT3kafAP69Bni%2BfUM7s%3D&w=280&h=280&r=0"
                    }
                ];
                let currentIndex = 0; // Initialize current index

                let link = document.createElement("a");
                link.target = "_blank";

                let image = document.createElement("img");

                image.classList.add("calendarImg");

                link.appendChild(image);
                cell.appendChild(link);

                // Function to fade in/out the image and link
                function fadeInOut(element) {
                    let opacity = 0;
                    let increasing = true;
                    let interval = setInterval(function() {
                        if (increasing) {
                            opacity += 0.05;
                        } else {
                            opacity -= 0.05;
                        }
                        element.style.opacity = opacity;
                        if (opacity >= 1) {
                            increasing = false;
                            setTimeout(() => {
                                increasing = true;
                                updateLinkAndImage(); // Update link and image after fully visible
                            }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                        } else if (opacity <= 0) {
                            clearInterval(interval);
                            fadeInOut(element); // Restart the fading animation
                        }
                    }, 100); // Adjust the timing as needed
                }
            
                // Function to update the link and image
                function updateLinkAndImage() {
                    link.href = events[currentIndex].link;
                    image.src = events[currentIndex].imageSrc;
                    currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                }
            
                updateLinkAndImage(); // Initially update link and image
                fadeInOut(image); // Start fade-in/out animation // Start cycling events

                    //Phantom 2024
                } else if (month === 6 && (date === 6 || date === 7) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/phantom-2024/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/phantom.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);


                    //Glacier Gauntlet
                } else if (month === 6 && (date === 6 || date === 13) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tmgg";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F681727%2Fimage-d59c9aef0d5d77939939dbd970ef6c7d-optimized.png&ehk=AUUIFLk0Oiq1d3WhjesVORgtOMv3%2FhrahPeTbelbXa8%3D&w=280&h=280&r=0";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

       //Terminal Velocity & Sunset 2024
    } else if (month === 6 && (date === 14) && year === 2024) {
        const events = [
            {   
                link: "https://www.start.gg/tournament/terminal-velocity/details",
                imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/terminal.png?raw=true"
                
            },
            {
                link: "https://www.start.gg/tournament/sunset-2024/details",
                imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F674387%2Fimage-bd67f6a27e634d0fa71050cf01605081-optimized.jpg&ehk=vdl14TFJAjqPpTQ9MaYEu7eid%2BvknHYwSI%2FfNal95aY%3D&w=280&h=280&r=0"
            }
        ];


        let currentIndex = 0; // Initialize current index
        let link = document.createElement("a");
        link.target = "_blank";

        let image = document.createElement("img");

        image.classList.add("calendarImg");


        link.appendChild(image);
        cell.appendChild(link);

        // Function to fade in/out the image and link
        function fadeInOut(element) {
            let opacity = 0;
            let increasing = true;
            let interval = setInterval(function() {
                if (increasing) {
                    opacity += 0.05;
                } else {
                    opacity -= 0.05;
                }
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    increasing = false;
                    setTimeout(() => {
                        increasing = true;
                        updateLinkAndImage(); // Update link and image after fully visible
                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                } else if (opacity <= 0) {
                    clearInterval(interval);
                    fadeInOut(element); // Restart the fading animation
                }
            }, 100); // Adjust the timing as needed
        }
    
        // Function to update the link and image
        function updateLinkAndImage() {
            link.href = events[currentIndex].link;
            image.src = events[currentIndex].imageSrc;
            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
        }
    
        updateLinkAndImage(); // Initially update link and image
        fadeInOut(image); // Start fade-in/out animation // Start cycling events


                //Game 5 in the D #4
    } else if(month === 6 && date === 20 && year === 2024) {
                    // Example link with image
                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/game-5-in-the-d-4-the-canadian-invasion/details";
                    link.target = "_blank";
    
                    let image = document.createElement("img");
                    image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F675196%2Fimage-54ebffee07de2dd4d200af40c8df6987-optimized.jpg&ehk=6cxSKy3MqOJK%2FFkbqEGwYZdcBnEglYc1xpdIKB0zOBs%3D&w=280&h=280&r=0";
    
                    image.classList.add("calendarImg");
    
    
                    link.appendChild(image);
                    cell.appendChild(link);
    
                    //warehouse war
                } else if (month === 6 && (date === 26 || date === 27) && year === 2024) {

                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/warehouse-war-4/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/ww4.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                 //Carnival-clash + Glacier Gauntlet
                } else if (month === 7 && (date === 3) && year === 2024) {

                        const events = [
                            {   
                                link: "https://www.start.gg/tournament/carnival-clash-2/details",
                                imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/carnivalclash2.png?raw=true"
                                
                            },
                            {
                                link: "https://www.start.gg/tmgg",
                                imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F681727%2Fimage-d59c9aef0d5d77939939dbd970ef6c7d-optimized.png&ehk=AUUIFLk0Oiq1d3WhjesVORgtOMv3%2FhrahPeTbelbXa8%3D&w=280&h=280&r=0"
                            }
                        ];
                        let currentIndex = 0; // Initialize current index
                    
                        let link = document.createElement("a");
                        link.target = "_blank";
                    
                        let image = document.createElement("img");
                    
                        image.classList.add("calendarImg");
                    
                        link.appendChild(image);
                        cell.appendChild(link);
                    
                        // Function to fade in/out the image and link
                        function fadeInOut(element) {
                            let opacity = 0;
                            let increasing = true;
                            let interval = setInterval(function() {
                                if (increasing) {
                                    opacity += 0.05;
                                } else {
                                    opacity -= 0.05;
                                }
                                element.style.opacity = opacity;
                                if (opacity >= 1) {
                                    increasing = false;
                                    setTimeout(() => {
                                        increasing = true;
                                        updateLinkAndImage(); // Update link and image after fully visible
                                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                                } else if (opacity <= 0) {
                                    clearInterval(interval);
                                    fadeInOut(element); // Restart the fading animation
                                }
                            }, 100); // Adjust the timing as needed
                        }
                    
                        // Function to update the link and image
                        function updateLinkAndImage() {
                            link.href = events[currentIndex].link;
                            image.src = events[currentIndex].imageSrc;
                            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                        }
                    
                        updateLinkAndImage(); // Initially update link and image
                        fadeInOut(image); // Start fade-in/out animation // Start cycling events
  
                    // Storm IX + FW:TGA
                    } else if (month === 7 && (date === 17) && year === 2024) {

                        const events = [
                            {   
                                link: "https://www.start.gg/tournament/storm-ix/details",
                                imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F685889%2Fimage-93aa902db1980d230e1408e73e570b32-optimized.png&ehk=k0xKVQvVRrSRjoIXPf4YN4aPmQXvWKjwYTpH2OKTo0E%3D&w=280&h=280&r=0"
                                
                            },
                            {
                                link: "https://start.gg/fw",
                                imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F682493%2Fimage-3f77ea1166a44f5bb47bd76086aca4f0-optimized.png&ehk=Ihr%2FiITlMPIj3eGoJ8rx7jp8LU9d0zM47PLNNfo3S3E%3D&w=280&h=280&r=0"
                            }
                        ];
                        let currentIndex = 0; // Initialize current index
                    
                        let link = document.createElement("a");
                        link.target = "_blank";
                    
                        let image = document.createElement("img");
                    
                        image.classList.add("calendarImg");
                    
                        link.appendChild(image);
                        cell.appendChild(link);
                    
                        // Function to fade in/out the image and link
                        function fadeInOut(element) {
                            let opacity = 0;
                            let increasing = true;
                            let interval = setInterval(function() {
                                if (increasing) {
                                    opacity += 0.05;
                                } else {
                                    opacity -= 0.05;
                                }
                                element.style.opacity = opacity;
                                if (opacity >= 1) {
                                    increasing = false;
                                    setTimeout(() => {
                                        increasing = true;
                                        updateLinkAndImage(); // Update link and image after fully visible
                                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                                } else if (opacity <= 0) {
                                    clearInterval(interval);
                                    fadeInOut(element); // Restart the fading animation
                                }
                            }, 100); // Adjust the timing as needed
                        }
                    
                        // Function to update the link and image
                        function updateLinkAndImage() {
                            link.href = events[currentIndex].link;
                            image.src = events[currentIndex].imageSrc;
                            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                        }
                    
                        updateLinkAndImage(); // Initially update link and image
                        fadeInOut(image); // Start fade-in/out animation // Start cycling events


                    // Garden Brawl + Condo of Blood
                    } else if (month === 7 && (date === 24) && year === 2024) {

                        const events = [
                            {   
                                link: "https://www.start.gg/tournament/garden-brawl/details",
                                imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F673156%2Fimage-0a6f4b065a1ae1c4d91d5756129d7bb8-optimized.png&ehk=ba6JikL4X%2Frf5t3o54c5h95%2BdgVUtm66bGi3H2jzZV8%3D&w=280&h=280&r=0"
                                
                            },
                            {
                                link: "https://www.start.gg/tournament/condo-of-blood/details",
                                imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F695366%2Fimage-69b08d9c6872b4db4d2ffa1374652983-optimized.png&ehk=4bF4qUThMtweHMe%2ByEqvxnBepEhxvTi95m0CU5Lh5Q0%3D&w=280&h=280&r=0"
                            }
                        ];
                        let currentIndex = 0; // Initialize current index
                    
                        let link = document.createElement("a");
                        link.target = "_blank";
                    
                        let image = document.createElement("img");
                    
                        image.classList.add("calendarImg");
                    
                        link.appendChild(image);
                        cell.appendChild(link);
                    
                        // Function to fade in/out the image and link
                        function fadeInOut(element) {
                            let opacity = 0;
                            let increasing = true;
                            let interval = setInterval(function() {
                                if (increasing) {
                                    opacity += 0.05;
                                } else {
                                    opacity -= 0.05;
                                }
                                element.style.opacity = opacity;
                                if (opacity >= 1) {
                                    increasing = false;
                                    setTimeout(() => {
                                        increasing = true;
                                        updateLinkAndImage(); // Update link and image after fully visible
                                    }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                                } else if (opacity <= 0) {
                                    clearInterval(interval);
                                    fadeInOut(element); // Restart the fading animation
                                }
                            }, 100); // Adjust the timing as needed
                        }
                    
                        // Function to update the link and image
                        function updateLinkAndImage() {
                            link.href = events[currentIndex].link;
                            image.src = events[currentIndex].imageSrc;
                            currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                        }
                    
                        updateLinkAndImage(); // Initially update link and image
                        fadeInOut(image); // Start fade-in/out animation // Start cycling events

                //Tech Zone 3 + DFW Fest Finale
                }  else if (month === 7 && (date === 31) && year === 2024) {

                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/tech-zone-3/details",
                            imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F685674%2Fimage-c4721066d975473bbb300c0cb9c6fba3-optimized.png&ehk=8hPucP15HYK%2BadyuKPEp36gjy6N9HFnZm5UZKxcINS8%3D&w=280&h=280&r=0"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/dfw-fest-finale/details",
                            imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F694863%2Fimage-566e5e5f63a5f87f94a87375509f61c9-optimized.png&ehk=CaWmVw9oqVniui2UvyVvvcfkhfGIJ9rEMmwP9AdBz9A%3D&w=280&h=280&r=0"
                        }
                    ];
                    let currentIndex = 0; // Initialize current index
                
                    let link = document.createElement("a");
                    link.target = "_blank";
                
                    let image = document.createElement("img");
                
                    image.classList.add("calendarImg");
                
                    link.appendChild(image);
                    cell.appendChild(link);
                
                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events

                //Undertow
                } else if (month === 8 && (date === 6 || date === 7 || date === 8) && year === 2024) {


                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/undertow-2024/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/undertow2024.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);


                //Rising Rumble
                } else if (month === 8 && (date === 14) && year === 2024) {


                let link = document.createElement("a");
                link.href = "https://www.start.gg/tournament/rising-rumble-a-best-in-texas-league-event/details";
                link.target = "_blank";

                let image = document.createElement("img");
                image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F696391%2Fimage-7685a90fa93f882994733553bd877bdb-optimized.png&ehk=J4kX1Hmj1QYyaSM6lqGDfNRXKJsBVr%2BD0j7R%2ByW%2B1aY%3D&w=280&h=280&r=0";

                image.classList.add("calendarImg");


                link.appendChild(image);
                cell.appendChild(link);


                //Infrared 2024
                } else if (month === 9 && (date === 6) && year === 2024) {


                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/infrared-2024/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F689857%2Fimage-beb293c506128370f03dbac8b3301b61-optimized.jpg&ehk=USndSOdl8bTgh1izawrAwxr2nxvNn%2FTpocJgAGqoDY0%3D&w=280&h=280&r=0";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);


                //G5itD #5 & baseline & finalwarning
                } else if (month === 8 && (date === 21) && year === 2024) {

                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/game-5-in-the-d-5-the-big-one/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/game5In.png?raw=true"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/baseline-2024/details",
                            imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F696951%2Fimage-774bc33fc7d897565f38748cc29f7e83-optimized.png&ehk=fy1oedzzzd2gQFlAnQqL8YbDk8cGiuxWg2oGGup6CJc%3D&w=280&h=280&r=0"
                        },
                        {
                            link: "https://www.start.gg/tournament/final-warning-the-golden-age-chapter-ii/details",
                            imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F701424%2Fimage-d681bf47d0ca7e37daf9b88631bea7c6-optimized.png&ehk=4%2FtFRi5qoGZRp6z7gv14YZMIgr%2BD171SAeuCN7Zxs90%3D&w=280&h=280&r=0"
                        }
                    ];
                    let currentIndex = 0; // Initialize current index
                
                    let link = document.createElement("a");
                    link.target = "_blank";
                
                    let image = document.createElement("img");
                
                    image.classList.add("calendarImg");
                
                    link.appendChild(image);
                    cell.appendChild(link);
                
                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events


                //G5itD #5 & baseline
                } else if (month === 8 && (date === 22) && year === 2024) {

                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/game-5-in-the-d-5-the-big-one/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/game5In.png?raw=true"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/baseline-2024/details",
                            imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F696951%2Fimage-774bc33fc7d897565f38748cc29f7e83-optimized.png&ehk=fy1oedzzzd2gQFlAnQqL8YbDk8cGiuxWg2oGGup6CJc%3D&w=280&h=280&r=0"
                        }
                    ];
                    let currentIndex = 0; // Initialize current index
                
                    let link = document.createElement("a");
                    link.target = "_blank";
                
                    let image = document.createElement("img");
                
                    image.classList.add("calendarImg");
                
                    link.appendChild(image);
                    cell.appendChild(link);
                
                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events

                      //Mock the Hill
                } else if (month === 8 && (date === 28) && year === 2024) {


                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/mock-the-hill/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F697791%2Fimage-39545909a658026a858498ec68a98ebb-optimized.jpg&ehk=ptFX7jG0LIcnP8be9NZVzkVsjHxCT4RTEsPKL%2BloJbw%3D&w=280&h=280&r=0";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);


                //Big Cheese
                } else if (month === 9 && (date === 11) && year === 2024) {


                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/big-cheese-5-south-australia-smash-fgc-major/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/bigcheese5.png?raw=true";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);

                //Big Cheese 5, FNAFingy's 2, & SOTT 9
                } else if(month === 9 &&  date === 12 && year === 2024) {

                const events = [
                    {   
                        link: "https://www.start.gg/tournament/big-cheese-5-south-australia-smash-fgc-major/details",
                        imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/bigcheese5.png?raw=true"
                        
                    },
                    {
                        link: "https://www.start.gg/tournament/five-nights-at-fingy-s-2/details",
                        imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/fnaf2.png?raw=true"
                    },
                    {
                        link: "https://www.start.gg/tournament/smash-of-the-titans-9-1/details",
                        imageSrc: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F694496%2Fimage-b405f84572aec93db03ff18f1390501d-optimized.jpg&ehk=oZVIfG8%2BqWSv47vhSJS3IF2MsZ%2FQ91A%2FGHI%2F4tT6UGg%3D&w=280&h=280&r=0"
                    }
                ];
                let currentIndex = 0; // Initialize current index

                let link = document.createElement("a");
                link.target = "_blank";

                let image = document.createElement("img");

                image.classList.add("calendarImg");

                link.appendChild(image);
                cell.appendChild(link);

                // Function to fade in/out the image and link
                function fadeInOut(element) {
                    let opacity = 0;
                    let increasing = true;
                    let interval = setInterval(function() {
                        if (increasing) {
                            opacity += 0.05;
                        } else {
                            opacity -= 0.05;
                        }
                        element.style.opacity = opacity;
                        if (opacity >= 1) {
                            increasing = false;
                            setTimeout(() => {
                                increasing = true;
                                updateLinkAndImage(); // Update link and image after fully visible
                            }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                        } else if (opacity <= 0) {
                            clearInterval(interval);
                            fadeInOut(element); // Restart the fading animation
                        }
                    }, 100); // Adjust the timing as needed
                }
            
                // Function to update the link and image
                function updateLinkAndImage() {
                    link.href = events[currentIndex].link;
                    image.src = events[currentIndex].imageSrc;
                    currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                }
            
                updateLinkAndImage(); // Initially update link and image
                fadeInOut(image); // Start fade-in/out animation // Start cycling events

                //Big Cheese + Fnaf 2
                } else if (month === 9 && (date === 13) && year === 2024) {

                    const events = [
                        {   
                            link: "https://www.start.gg/tournament/big-cheese-5-south-australia-smash-fgc-major/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/bigcheese5.png?raw=true"
                            
                        },
                        {
                            link: "https://www.start.gg/tournament/five-nights-at-fingy-s-2/details",
                            imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/fnaf2.png?raw=true"
                        }
                    ];
                    let currentIndex = 0; // Initialize current index
                
                    let link = document.createElement("a");
                    link.target = "_blank";
                
                    let image = document.createElement("img");
                
                    image.classList.add("calendarImg");
                
                    link.appendChild(image);
                    cell.appendChild(link);
                
                    // Function to fade in/out the image and link
                    function fadeInOut(element) {
                        let opacity = 0;
                        let increasing = true;
                        let interval = setInterval(function() {
                            if (increasing) {
                                opacity += 0.05;
                            } else {
                                opacity -= 0.05;
                            }
                            element.style.opacity = opacity;
                            if (opacity >= 1) {
                                increasing = false;
                                setTimeout(() => {
                                    increasing = true;
                                    updateLinkAndImage(); // Update link and image after fully visible
                                }, 2000); // Image and link will be fully visible for 2 seconds before fading out
                            } else if (opacity <= 0) {
                                clearInterval(interval);
                                fadeInOut(element); // Restart the fading animation
                            }
                        }, 100); // Adjust the timing as needed
                    }
                
                    // Function to update the link and image
                    function updateLinkAndImage() {
                        link.href = events[currentIndex].link;
                        image.src = events[currentIndex].imageSrc;
                        currentIndex = (currentIndex + 1) % events.length; // Move to the next event, looping back to the beginning if necessary
                    }
                
                    updateLinkAndImage(); // Initially update link and image
                    fadeInOut(image); // Start fade-in/out animation // Start cycling events



                //Bustered Out
            } else if (month === 9 && (date === 19) && year === 2024) {


                let link = document.createElement("a");
                link.href = "https://www.start.gg/tournament/bustered-out/details";
                link.target = "_blank";

                let image = document.createElement("img");
                image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F703739%2Fimage-37259456efe40fdef53a88c108f61736-optimized.png&ehk=BeB8DjJp5ZmXStsCqSKmFtIEfHIqDl7UUDZv2fdRuU4%3D&w=280&h=280&r=0";

                image.classList.add("calendarImg");


                link.appendChild(image);
                cell.appendChild(link);

                //Tussleopolis
                } else if (month === 9 && (date === 26) && year === 2024) {


                let link = document.createElement("a");
                link.href = "https://www.start.gg/tournament/tussleopolis/details";
                link.target = "_blank";

                let image = document.createElement("img");
                image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F694928%2Fimage-d570f648aa26ccea66517f31a2dccda5-optimized.png&ehk=wQJOmHo9Afn6nRwa%2FwDShMfftHg7tIqqjo%2BnGCznW8s%3D&w=280&h=280&r=0";

                image.classList.add("calendarImg");


                link.appendChild(image);
                cell.appendChild(link);


                 //Homecoming
} else if (month === 10 && (date === 9) && year === 2024) {


    let link = document.createElement("a");
    link.href = "https://smashboards.com/threads/homecoming-p-hdr-nov-9th-2024.523550/";
    link.target = "_blank";

    let image = document.createElement("img");
    image.src = "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/homecominglogo.png?raw=true";

    image.classList.add("calendarImg");


    link.appendChild(image);
    cell.appendChild(link);
} 

                //BL9
                 else if (month === 10 && (date === 16 || date === 17) && year === 2024) {


                    let link = document.createElement("a");
                    link.href = "https://www.start.gg/tournament/blacklisted-9-a-project-and-hdr-major/details";
                    link.target = "_blank";

                    let image = document.createElement("img");
                    image.src = "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F681909%2Fimage-7d4e0ff8435ebeb4a6ceb3cd129b1705-optimized.png&ehk=sQBjT2ATBqcPGXSXEzLSl2H8PYlq6I79X7ucG2mT4hU%3D&w=280&h=280&r=0";

                    image.classList.add("calendarImg");


                    link.appendChild(image);
                    cell.appendChild(link);
                }         
                else {
                    // Create and append the date text only if there is no image
                    cellText = document.createTextNode(date);
                    cell.appendChild(cellText);
                }

                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date

                row.appendChild(cell);
                date++;
            }
        }

        tbl.appendChild(row); // appending each row into calendar body.
    }
}



// check how many days in a month code from https://dzone.com/articles/determining-number-days-month
function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

document.addEventListener('DOMContentLoaded', function() {
    const hoverImage = document.getElementsById('calendarImg');
    const hoverContent = document.getElementsById('Exodus');
  
    hoverImage.addEventListener('mouseover', function() {
      // Change the URL to the page you want to load content from
      fetch('https://plusside.net/')
        .then(response => response.text())
        .then(html => {
          hoverContent.innerHTML = html;
          hoverContent.style.display = 'flex';
        })
        .catch(error => console.error('Error fetching HTML:', error));
    });
  
    hoverImage.addEventListener('mouseout', function() {
      hoverContent.style.display = 'none';
    });
  });

//Calendar End
