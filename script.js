// Obtenha os elementos DOM para o carrossel de imagens
const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.querySelectorAll("img"),
  buttons = document.querySelectorAll(".button");

let imageIndex = 1,
    intervalId;

// Defina a função para iniciar o controle deslizante de imagem automático
const autoSlide = () => {
    //Inicie a apresentação de slides chamando slideImage() a cada 2 segundos
    intervalId = setInterval (() => slideImage(++imageIndex), 2000)
};
//Call autoSlide function on page load
autoSlide();

    // A function that updates the carousel display to show the specified image
    const  slideImage = () => {
        //Calculate the updated image index
        imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
//Update the carousel displau to show the specified image
carousel.style.transform = `translate(-${imageIndex *100}%)`;
    };

    //A fuction that updates the carousel display to show the next or prev image
const updateClick = (e) => {
    //Stop the automatic slideshow
    clearInterval(intervalId)
    //Calculate the updated image index based on button clicked
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex)
    // Restart the automatic slidesshow
    autoSlide();
    
}
//Add event listener to the navigation buttons
buttons.forEach((button) => button.addEventListener("click", updateClick));

//Add mouseover event listener to wrapper element to stop auto sliding
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));

//Add mouseover event listener to wrapper element to stop auto sliding again
wrapper.addEventListener("mouseleave", autoSlide);

