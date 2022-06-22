// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


//selecting the elements that need to be dynamic
let img = document.querySelector('#person-img');
let job = document.querySelector('#job');
let author = document.querySelector('#author');
let info = document.querySelector('#info');

//set starting value
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', updateReview(currentItem)); //the DOMContentLoaded event occurs when the entire html document is completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading
    


//show person based on item
function updateReview(person) {
    const item = reviews[person];
    img.src = item.img;
    job.textContent = item.job;
    author.textContent = item.name;
    info.textContent = item.text;
}

//adding event listeners to all the buttons

const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let triggered = e.currentTarget.classList;
        if (triggered.contains('prev-btn')){
            currentItem--;
            if (currentItem < 0){
                currentItem = reviews.length - 1;
            }
            updateReview(currentItem);
        } else if (triggered.contains('next-btn')){
            currentItem++;
            if (currentItem > reviews.length - 1){
                currentItem = 0;
            }
            updateReview(currentItem);
        } else {
            let randomReview = Math.floor(Math.random() * reviews.length);
            updateReview(randomReview);
        }
    })
})