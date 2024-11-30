const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;


const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;


const nav = document.querySelector("#navMenu");
const navList = document.querySelector("#navList");
const open = document.querySelector("#hamburger");
const close = document.querySelector("#close-hamburger");
const hideCloseButton = document.querySelector("#close-hamburger");


open.addEventListener("click", () => {
    nav.classList.add("open");
    navList.classList.add("open");
    hideCloseButton.classList.add("open");
});

close.addEventListener("click", () => {
    nav.classList.remove("open");
    navList.classList.remove("open");
    hideCloseButton.classList.remove("open");
});


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January, 17",
        area: 1112,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/800x500/buenos-airies-argentina-temple-1009069-wallpaper.jpg"
    },
    {
        templeName: "Cordoba Argentina",
        location: "Cordoba, Argentina",
        dedicated: "2015, May, 17",
        area: 3000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cordoba-argentina/800x500/cordoba-argentina-temples-buildings-1436934-wallpaper.jpg"
    },
    {
        templeName: "Madrid España",
        location: "Madrid, España",
        dedicated: "1999, March, 21",
        area: 23000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/800x500/madrid-spain-mormon-temple-1075592-wallpaper.jpg"
    }    
  ];


  const figureGrid = document.querySelector('.figure-grid');
  const navList2 = document.getElementById('navList');
  
  // Displayer Function
  function displayTemples(filteredTemples) {
      
      figureGrid.innerHTML = '';
  
      filteredTemples.forEach(temple => {
          const card = document.createElement('div');
          card.classList.add('card');
  
          const img = document.createElement('img');
          img.src = temple.imageUrl;
          img.alt = temple.templeName;
          img.loading = "lazy";
          card.appendChild(img);
  
          const content = document.createElement('div');
          content.classList.add('card-content');
          content.innerHTML = `
              <h3>${temple.templeName}</h3>
              <p><strong>Location:</strong> ${temple.location}</p>
              <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
              <p><strong>Area:</strong> ${temple.area} sq ft</p>
          `;
          card.appendChild(content);
          figureGrid.appendChild(card);
      });
  }
  
  // Event Listener
  navList2.addEventListener('click', (event) => {
      event.preventDefault();
      const filter = event.target.textContent;
      let filteredTemples = [];
  
      switch (filter) {
          case 'Old':
              filteredTemples = temples.filter(temple => {
                  const year = parseInt(temple.dedicated.split(', ')[0]);
                  return year < 1900;
              });
              break;
          case 'New':
              filteredTemples = temples.filter(temple => {
                  const year = parseInt(temple.dedicated.split(', ')[0]);
                  return year > 2000;
              });
              break;
          case 'Large':
              filteredTemples = temples.filter(temple => temple.area > 90000);
              break;
          case 'Small':
              filteredTemples = temples.filter(temple => temple.area < 10000);
              break;
          case 'Home':
              filteredTemples = temples;
              break;
      }
  
      displayTemples(filteredTemples);
  });
  
  displayTemples(temples);