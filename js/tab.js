import { peopleData } from "./peopleData.js"

document.addEventListener('DOMContentLoaded', () => {



    const dep2Tab = document.querySelectorAll('.tab li')
    const dep2slider = document.querySelectorAll('.dep2-slider-wrap .swiper ')
    const prevBtn = document.querySelector('.depth2 .swiper-button-prev')
    const nextBtn = document.querySelector('.depth2 .swiper-button-next')

    let crt = 0
    let crtSwiper = null




    init(crt)
    updateSlider(crt)

    dep2Tab.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault()

            init(index)
            updateSlider(index)

        })
    })


    function init(index) {

        dep2Tab.forEach((tab) => tab.classList.remove('On'))
        dep2slider.forEach((slider) => slider.classList.remove('Active'))


        dep2Tab[index].classList.add('On')
        dep2slider[index].classList.add('Active')
    }
    function updateSlider(index) {

        const activeSlider = dep2slider[index] || []
        const wrapper = activeSlider.querySelector('.swiper-wrapper')


        if (!wrapper) {
            console.error('Swiper wrapper not found for slider')
        }

        wrapper.innerHTML = ''

        const filteredData = peopleData[`tab-${index}`] || []
        console.log(activeSlider, filteredData)

        if (filteredData.length === 0) {
            wrapper.innerHTML = '해당 카테고리의 데이터가 없습니다.'
        }
        else {
            filteredData.forEach((person) => {

                const slide = document.createElement('div')
                slide.classList.add('swiper-slide')

                slide.innerHTML = `
                <a href="${person.profile_link}">
                    <div class="img-wrap">
                        <img src="${person.image}" alt="${person.name}">
                    </div>
                    <div class="txt-wrap">
                        <h3>${person.name}</h3>
                        <p class="date">${person.birth_date}~${person.death_date}</p>
                        <p class="txt">${person.title}</p>
                        <div class="detailview">자세히보기</div>
                    </div>
                </a>
                      `
                wrapper.append(slide)

            })
        }


        if (crtSwiper) {
            crtSwiper.destroy(true, true)
            crtSwiper = null
        }

        crtSwiper = new Swiper(activeSlider, {
            slidesPerView: 5,
            // autoplay: { delay: 3000 },
            autoplay:false,
            loop: true,
            initialSlide: 0,
            centeredSlides: true,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn
            },
            breakpoints: {
                0: {

                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,

                },
                1024: {
                    slidesPerView: 3,

                },
                1400: {
                    slidesPerView: 4,

                },
                1600: {
                    slidesPerView: 5,

                },
            }
        })




    }


})