const navLeftTap = document.querySelectorAll('nav .left a');
console.log(navLeftTap[2]);
// 전체 수직 스크롤 스와이퍼
const wrap = new Swiper('#wrap',{
    direction:'vertical',
    mousewheel:true,
    on: {/* 스크롤 이동 시 해당 nav활성화 디자인 적용 */
        slideChangeTransitionEnd: function () {
            for(let i of nav) i.classList.remove('active')/* 모든 nav탭 active 제거 */
            const index = this.activeIndex; /* 각 활성화된 슬라이드를 나타내는 변수 */
            console.log(index);
            //1. 슬라이드 인덱스 2~5번일 경우: Web-Project 메뉴에 active
            if (index >= 2 && index <= 5) {
                navLeftTap[2].classList.add("active");
            }
            //2. 나머지 : 해당 index와 일치하는 메뉴에 active(if,else충돌되어 각각 작성함)
            if(index==0) {/* 인덱스0번 슬라이드위치일때, 0번메뉴에 활성화디자인 적용 */
                navLeftTap[0].classList.add("active");
            }if(index==1){
                navLeftTap[1].classList.add("active");
            }if(index==6){/* 인덱스6번 슬라이드위치일때, 3번메뉴에 활성화디자인 적용 */
                navLeftTap[3].classList.add("active");
            }
            setTimeout(() => {
                ScrollTrigger.refresh(); // ★ Swiper 로드 후 강제 새로고침 ★
            }, 0);
        }
    },
})

/* nav 탭 클릭 시 활성화디자인변경 */
// const navLeftTap = document.querySelectorAll('nav .left a');
navLeftTap.forEach((obj)=>{
    obj.addEventListener('click',()=>{
        navLeftTap.forEach(tap=>tap.classList.remove('active'));
        obj.classList.add('active');
    })
})


/* 웹프로젝트 영역 스와이퍼 구조 */
/* const webSwiper = new Swiper('.web',{
    direction:'horizon',
    slidesPerView:1,
    pagination:'.swiper-pagination',
    navigation:{
        prevEl:'.web .swiper-button-prev',
        nextEl:'.web .swiper-button-next',
    },
}) */


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



/* 팝업 */
//디자인 프로젝트 클릭 시 팝업 실행(클릭한 이미지가 팝업 이미지로 교체)
const designProject = document.querySelectorAll('.design .container .swiper-slide');/* 배너, sns, 상세디자인 슬라이드 모두 잡기 */
const popup = document.querySelector('.popup_bg');
const popupImg = document.querySelector('.popup img');
for(let design of designProject){
    design.addEventListener('click',()=>{
        popup.style.display='block';/* 클릭시팝업보이기 */
        popupImg.src = design.querySelector('img').src;/* 슬라이드에서 img태그를 찾아서 src경로를 바꾸기 */
        //팝업 실행 시 전체 수직 Swiper 스크롤 기능 막기
        wrap.mousewheel.disable();//스크롤 풀기 enable()
    })
}
/* 팝업배경 클릭 시 팝업 사라지기 */
popup.addEventListener('click',()=>{
    popup.style.display='none';
    wrap.mousewheel.enable();//스크롤 풀기 enable()
})



/* 내비게이션 클릭 시 해당 위치 수직 스와이프로 이동 */
const nav = document.querySelectorAll('nav a');
// 원하는 슬라이드 인덱스를 배열로 지정 (Intro, Profile, Web-Project, Design 순서)
/* nav메뉴 4개가 어느 슬라이드로 향할건지 mapping해주었다 */
const slideMap = [0, 1, 2, 6, 7]; // 여기서 2는 Web-Project의 첫 페이지, 6은 Design 페이지

//수직 스와이프 이동 함수
//수직스와이프명.slideTo(이동인덱스값, 지속시간)
nav.forEach((obj, idx)=>{
    console.log(obj, idx);
    obj.addEventListener('click',(e)=>{
        e.preventDefault();//a의 href기본기능막기
        wrap.slideTo(slideMap[idx], 1000); // 지정된 인덱스로 이동
    })
})
