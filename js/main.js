//scroll based animation
(() => {

  const canvas = document.querySelector("#explode-view");
  const context = canvas.getContext("2d");

  canvas.width = 1920;
  canvas.height = 1080;

  const frameCount = 450; //how many frames do we have

  const images = []; //array to hold all of our images

  //create an object called buds to hold the current frame
  const buds = {
      frame: 0 
  }

//run a for loop to populate our images array
for(let i=0; i < frameCount; i++) {
  const img = new Image();
  img.src= `images/explode_${(i+1).toString().padStart(4, '0')}.webp`;
  images.push(img)
}

//console.log(images); 

gsap.to(buds, {
  frame: 449,
  snap: "frame",
  scrollTrigger: {
      trigger: "#explode-view",
      pin: true,
      scrub: 1, 
      markers: true,
      start: "top top"
  },
  onUpdate: render
})

images[0].addEventListener("load", render)


function render() {
  context.clearRect(0,0, canvas.width, canvas.height);
  //console.log(buds.frame);
  console.log(images[buds.frame]);
  context.drawImage(images[buds.frame], 0, 0);
}

})();


//3d model viewer
(() => {

  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      title: 'Play/Pause Button',
      text: 'press this to pause and play music, double tapping it.',
      image: 'images/hotspot-1.jpg'
    },
    {
      title: 'High Fidelity Speaker',
      text: 'a small yet powerful high fidelity speaker.',
      image: 'images/hotspot-2.jpg'
    },
    {
      title: 'Pressure Equalizer',
      text: 'a port that allows airflow for the speaker, reducing background noise.',
      image: 'images/hotspot-3.jpg'
    },
    {
      title: 'Quick Charge Power Jacks',
      text: 'high powered charging jacks that charge the headphones in minutes.',
      image: 'images/hotspot-4.jpg'
    },
    {
      title: 'Extra Power Jacks',
      text: 'an alternate powrt for charging your headphones that works with a variety of containers.',
      image: 'images/hotspot-5.jpg'
    },
  ]

  //functions
  function modelLoaded() {
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      console.log(index);
      console.log(index+1);
      let selected = document.querySelector(`#hotspot-${index+1}`);
      console.log(selected);

      boxTitle = document.createElement('h2');
      boxTitle.textContent = infoBox.title;

      boxInfo = document.createElement('p');
      boxInfo.textContent = infoBox.text;

      boxImage = document.createElement('img');
      boxImage.src = infoBox.image;

      //hey #hotspot-1, we are going to dump content in you
      selected.appendChild(boxTitle);
      selected.appendChild(boxInfo);
      selected.appendChild(boxImage);
    });
  }
  loadInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

//   Event listeners
// model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();


//x-ray slider
(() => {
  
  const divisor = document.querySelector("#divisor");
  const slider = document.querySelector("#slider");

  function moveDivisor() {
      console.log(slider.value); //reads slider value
      divisor.style.width = slider.value+"%" //reads slider and sets CSS width of the conatiner with the divisor id
  }

  slider.addEventListener("input", moveDivisor);

})();

