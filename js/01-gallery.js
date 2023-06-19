import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryPic=document.querySelector("ul.gallery");
console.log(galleryPic);

galleryItems.forEach((item) => {
    const galleryNew = document.createElement("li");
    const galleryNewLink = document.createElement ("a");
    const img = document.createElement ("img");

    galleryNew.classList.add("gallery__item");
    galleryNewLink.classList.add("gallery__link");
    galleryNewLink.href = item.original; 

    img.classList.add("gallery__image");
    img.src = item.preview;
    img.alt = item.description;
    img.setAttribute("data-source",item.original);

    galleryNewLink.append(img);
    galleryNew.append(galleryNewLink);
    galleryPic.append(galleryNew);
});

    galleryPic.addEventListener('click', event => {
        event.preventDefault();
        if (event.target.nodeName !== 'IMG') {
            return
        }
        const selectedImage = event.target.getAttribute('data-source')
        const instance = basicLightbox.create
        (`<img src="${selectedImage}">`)
    
        instance.show();
        
        galleryPic.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                instance.close();
            }
        })
    })