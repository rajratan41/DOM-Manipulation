const browse = document.querySelector(".accordion-homepage");

const faq = `<h3 role="button">
                    My New FAQ
                </h3>`;

const section = document.createElement("section");

section.classList.add("parent");

section.innerHTML = faq;

browse.appendChild(section);
