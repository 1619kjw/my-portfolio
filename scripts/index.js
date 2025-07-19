/* 디자인 모음 영역 스와이퍼 구조 */
//1. 배너 디자인 스와이퍼
const bnrSwiper = new Swiper('#bnr_swiper',{
    slidesPerView:'auto',/* 한화면에 보이는 개수 */
    spaceBetween:15,/* 사이간격 */
    autoplay:{delay:0,},
    speed:4000,/* 밀리초로 속도 적어주기 */
    loop:true,/* 무한반복 */
})
//2. SNS 디자인 스와이퍼
const snsSwiper = new Swiper('#sns_swiper',{
    slidesPerView:'auto',
    spaceBetween:15,
    autoplay:{delay:0},
    speed:4000,
    loop:true,
})
//3. 상세페이지 디자인 스와이퍼
const detailSwiper = new Swiper('#detail_swiper',{
    slidesPerView:1,
    spaceBetween:0,
    // autoplay:{delay:0},
    // speed:4000,
    loop:true,
    pagination:{
        el:'.swiper-pagination',
        type:'bullets',
        clickable: true,
    },
})