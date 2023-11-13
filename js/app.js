
function loadPage() {
    loadContent(data);
}
loadPage();

// POPUP
function showPopup() {
    const popup = document.querySelector('.popup');
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hidePopup() {
    const popup = document.querySelector('.popup');
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
}

const regBtn = document.querySelector('.auth-btn').addEventListener('click', showPopup);
const closeBtn = document.querySelector('.close-btn').addEventListener('click', hidePopup);

// SEARCHBAR

function showSearchBar() {
    const search = document.querySelector('.search-bar');
    search.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideSearchBar() {
    const search = document.querySelector('.search-bar');
    search.style.display = 'none';
    document.body.style.overflow = 'auto';
}

const searchBtn = document.querySelector('.search-btn').addEventListener('click', showSearchBar);

document.addEventListener('keydown', (e) => {
    if(e.target === 'Escape'){
        hideSearchBar();
    };
});
// SLIDER

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        390: {
            slidesPerView: 1
        },
        1020: {
            slidesPerView: 3
        }
    }
    // And if we need scrollbar
});

// POST PREV
function loadContent(datas) {
    const blogContainers = document.querySelectorAll('.blog-container');

    blogContainers.forEach((container, index) => {
        const data = datas[index];

        if (data) {
            container.innerHTML = `
            <a href = "posts.html">
                <div class="blog-img">
                    <img src="${data.img}" alt="">
                </div>
                <div class="blog-title blog-title-small">
                    <h3 class="post_title">${data.title}</h3>
                    <span>${data.theme}</span>
                </div>
            </a>
            `;
        }
    });
}

// POST CONTENT

// function loadPost(datas) {
//     const postContainer = document.querySelector('.post-container');
//     postContainer.innerHTML = `<div class="post_img">
//     <img src="https://www.yosemite.com/wp-content/uploads/2023/04/yosemite-facts.jpg" alt="">
// </div>
// <div class="post-content">
//     <div class="post_description">
//         <h5>By John Doe</h5>
//         <span class="content_theme">Theme: Travel</span>
//         <span class="content_date">Date: September 5, 2023</span>
//         <div class="post-title"><h1>Visit Yosemite National Park</h1></div>
//     </div>
//     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto odio alias distinctio, dolore eos blanditiis eaque deserunt minus totam nostrum nisi magni eveniet libero necessitatibus unde, exercitationem voluptatum porro enim!
//     Aliquid quos voluptatem, unde hic, debitis aliquam corrupti atque tempore exercitationem consectetur mollitia nostrum nisi perspiciatis distinctio fugiat aperiam! Deleniti dolor quam incidunt esse laboriosam debitis quod labore molestiae quisquam </p>
//     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto odio alias distinctio, dolore eos blanditiis eaque deserunt minus totam nostrum nisi magni eveniet libero necessitatibus unde, exercitationem voluptatum porro enim!
//     Aliquid quos voluptatem, unde hic, debitis aliquam corrupti atque tempore exercitationem consectetur mollitia nostrum nisi perspiciatis distinctio fugiat aperiam! Deleniti dolor quam incidunt esse laboriosam debitis quod labore molestiae quisquam </p>
//     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto odio alias distinctio, dolore eos blanditiis eaque deserunt minus totam nostrum nisi magni eveniet libero necessitatibus unde, exercitationem voluptatum porro enim!
//     Aliquid quos voluptatem, unde hic, debitis aliquam corrupti atque tempore exercitationem consectetur mollitia nostrum nisi perspiciatis distinctio fugiat aperiam! Deleniti dolor quam incidunt esse laboriosam debitis quod labore molestiae quisquam </p>
// </div>
//     `
// }

