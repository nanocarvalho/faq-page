const sectionSelector1 = document.querySelector('[data-js="section-1-selector"]')
const sectionSelector2 = document.querySelector('[data-js="section-2-selector"]')

const sectionOne = document.querySelector('[data-js="section-1"]')
const sectionTwo = document.querySelector('[data-js="section-2"]')

const faqTitleContainer = Array.from(document.querySelectorAll('.faq-title'))
const faqTitleAnchor = document.querySelectorAll('.faq-title > a')

//There is a bug, because the way I did the title of the faq, the <a> tag is called no listener. So basically I need to redo everything haha. I'll leave to another time.

const openAccordion = event =>  {
    const text = event.target.querySelector('.faq-text')
    const arrowIcon = event.target.querySelector('img')
    arrowIcon.src = "./img/arrow-up.svg"
    text.classList.toggle('active')
    if(!text.classList.contains('active')) {
        arrowIcon.src = "./img/arrow-drop.svg"
    }
}

faqTitleContainer.forEach(container => {
    container.addEventListener('click', openAccordion)
})

const goToSectionOne = () => {
    sectionOne.style.display = 'block'
    sectionTwo.style.display = 'none'
}

const goToSectionTwo = () => {
    sectionOne.style.display = 'none'
    sectionTwo.style.display = 'block'
}

sectionSelector1.addEventListener('click', goToSectionOne)
sectionSelector2.addEventListener('click', goToSectionTwo)

