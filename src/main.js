"use strict"

import avenue_de_lindependance from '../public/avenue-de-lindependance.jpg';
import jardin_rova from '../public//rova-manjakamiadana.jpg';
import zoo_tsimbazaza from '../public/zoo-tsimbazaza.jpg';
import jardin_ambohijatovo from '../public/jardin-ambohijatovo.jpg';

const itemsToShow = 3;
var currentIndex = 0,
    dataTourist = [
        {
            name: "Avenue de l'indépendance",
            img: avenue_de_lindependance,
            link: ""
        },
        {
            name: "Jardin du Rova",
            img: jardin_rova,
            link: "https://www.youtube.com/embed/WVOl1393IHo?si=_sT4QmS1YjgT-Ph51"
        },
        {
            name: "Zoo de Tsimbazaza",
            img: zoo_tsimbazaza,
            link: "https://www.youtube.com/embed/ELnpR5p6bUk?si=NxUNC44t8fmgG6TF"
        },
        {
            name: "Jardin d'Ambohijatovo",
            img: jardin_ambohijatovo,
            link: "https://www.youtube.com/embed/9qQr5mJJMew?si=ZnRhRRHb9fVlU015"
        }
    ];

let selectedLink = null;
let selectedIndex = null;

window.onload = () => {
    function displayItems() {
        const tourristList = document.getElementById("tourrist");
        tourristList.innerHTML = "";

        for (let i = 0; i < itemsToShow; i++) {
            const index = (currentIndex + i) % dataTourist.length;
            tourristList.innerHTML +=
                `<li class="img">
                    <div class="link-img">
                        <img src="${dataTourist[index].img}" alt="${dataTourist[index].name}" class="img-link">
                        <p class="txt">${dataTourist[index].name}</p>
                    </div>
                </li>`;
        }
        updateLinkEvents();

        if (selectedIndex !== null) {
            const newSelectedIndex = (selectedIndex - currentIndex + dataTourist.length) % dataTourist.length;
            const linkElements = Array.from(document.getElementsByClassName("link-img"));
            if (linkElements[newSelectedIndex]) {
                selectedLink = linkElements[newSelectedIndex];
                let img = selectedLink.querySelector(".img-link");
                let text = selectedLink.querySelector(".txt");

                if (img) img.classList.add("check-img");
                if (text) text.classList.add("check-txt");
            }
        }
    }

    function updateLinkEvents() {
        const links = Array.from(document.getElementsByClassName("link-img"));

        links.forEach((link, index) => {
            link.addEventListener("mouseover", function() {
                if (link !== selectedLink) {
                    let img = link.querySelector(".img-link"),
                        text = link.querySelector(".txt");

                    if (img) img.classList.add("check-img");
                    if (text) text.classList.add("check-txt");
                }
            });

            link.addEventListener("mouseout", function() {
                if (link !== selectedLink) {
                    let img = link.querySelector(".img-link"),
                        text = link.querySelector(".txt");

                    if (img) img.classList.remove("check-img");
                    if (text) text.classList.remove("check-txt");
                }
            });

            link.addEventListener("click", function() {
                if (link === selectedLink) {
                    let img = link.querySelector(".img-link"),
                        text = link.querySelector(".txt");

                    if (img) img.classList.remove("check-img");
                    if (text) text.classList.remove("check-txt");

                    selectedLink = null;
                    selectedIndex = null;
                } else {
                    if (selectedLink) {
                        let prevImg = selectedLink.querySelector(".img-link"),
                            prevText = selectedLink.querySelector(".txt");

                        if (prevImg) prevImg.classList.remove("check-img");
                        if (prevText) prevText.classList.remove("check-txt");
                    }

                    let img = link.querySelector(".img-link"),
                        text = link.querySelector(".txt");

                    if (img) img.classList.add("check-img");
                    if (text) text.classList.add("check-txt");

                    selectedLink = link;
                    selectedIndex = currentIndex + index;
                }
            });
        });
    }

    document.getElementById("next-left").addEventListener("click", function() {
        currentIndex = (currentIndex - itemsToShow + dataTourist.length) % dataTourist.length;
        displayItems();
    });

    document.getElementById("next-right").addEventListener("click", function() {
        currentIndex = (currentIndex + itemsToShow) % dataTourist.length;
        displayItems();
    });

    let link360 = document.getElementById("btn-start");
    link360.addEventListener("click", function() {
        if (selectedLink) {
            let selectedIndex = Array.from(document.getElementsByClassName("link-img")).indexOf(selectedLink),
                selectedItem = dataTourist[(currentIndex + selectedIndex) % dataTourist.length];
            
            localStorage.setItem('userChoice', JSON.stringify(selectedItem));
            window.location.href = "https://madaexplore-360.onrender.com/360.html";
        } else {
            let popup = document.getElementById("custom-popup");
            popup.style.display = "flex";
        }
    });

    document.getElementById("close").addEventListener("click", function() {
        let popup = document.getElementById("custom-popup");
        popup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        let popup = document.getElementById("custom-popup");
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    displayItems();
};
