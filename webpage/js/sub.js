const dlBtn = document.querySelector(".download-btn");

dlBtn.addEventListener("click", function () {
    html2canvas(document.querySelector("#cap1")).then(canvas => {
        if(window.innerWidth < 1024) {
            document.querySelector("#cap1").setAttribute("style", "width=800px")
        }
        saveAs(canvas.toDataURL("image/png"), "static.png")
        //다운로드 되는 파일 이름 지정   
    })
    html2canvas(document.querySelector("#cap2")).then(canvas => {
        if(window.innerWidth < 1024) {
            document.querySelector("#cap2").setAttribute("style", "width=800px")
        }
        saveAs(canvas.toDataURL("image/png"), "dynamic.png")
        //다운로드 되는 파일 이름 지정   
    })
})

// 캡쳐된 파일을 이미지 파일로 내보냄
function saveAs(uri, filename) {
    const link = document.createElement("a");
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}



const dressupBtns = document.querySelectorAll(".dressup-btns > li")
const charaCustom = document.querySelector(".chara__custom__wrap");
const customTitle = document.querySelector(".chara__custom__title")
const hairBtn = document.querySelector(".hair_btn")
const charaParts = [...document.querySelectorAll(".chara-parts")];
const charaParts2 = [...document.querySelectorAll(".chara-parts2")];
let hairIndex = 1,
    clothIndex = 1,
    botIndex = 1,
    shoesIndex = 1,
    backIndex = 1;
let thumb = document.querySelector(".chara__custom__img > img")

//이미지의 링크를 바꾸는 함수
function partsImgChange(id, index) {
    const partsImg = charaParts.find(element => element.dataset.value == id)
    const partsImg2 = charaParts2.find(element => element.dataset.value == id)
    partsImg.src = `img/character/static/${id}/${id}_0${index}.png`
    partsImg2.src = `img/character/dynamic/${id}/${id}2_0${index}.png`
    thumb.src = `img/character/static/${id}/${id}_0${index}.png`
}
//커스텀 창의 다음 버튼을 눌렀을 때 다음 사진으로 바뀌는 함수
function nextPhoto(id) {
    if (id == "hair") {
        hairIndex++;
        hairIndex %= 2;
        if (hairIndex == 0) hairIndex = 1;
        partsImgChange(id, hairIndex);
    }
    if (id == "shoes") {
        shoesIndex++;
        shoesIndex %= 2;
        if (shoesIndex == 0) shoesIndex = 1;
        partsImgChange(id, shoesIndex);
    }
    if (id == "back") {
        backIndex++;
        backIndex %= 3;
        if (backIndex == 0) backIndex = 1;
        partsImgChange(id, backIndex);
    }
    if (id == "cloth") {
        clothIndex++;
        clothIndex %= 2;
        if (clothIndex == 0) clothIndex = 1;
        partsImgChange(id, clothIndex);
    }
    if (id == "bottom") {
        botIndex ++;
        botIndex  %= 2;
        if (botIndex  == 0) botIndex  = 1;
        partsImgChange(id, botIndex);
    }
}
//커스텀 창의 이전 버튼을 눌렀을 때 이전 사진으로 바뀌는 함수
function prevPhoto(id) {
    if (id == "hair") {
        hairIndex--;
        hairIndex %= 2;
        if (hairIndex == 0) hairIndex = 1;
        partsImgChange(id, hairIndex);
    }
    if (id == "shoes") {
        shoesIndex--;
        shoesIndex %= 2;
        if (shoesIndex == 0) shoesIndex = 1;
        partsImgChange(id, shoesIndex);
    }
    if (id == "back") {
        backIndex--;
        backIndex %= 3;
        if (backIndex == 0) backIndex = 1;
        partsImgChange(id, backIndex);
    }
    if (id == "cloth") {
        clothIndex--;
        clothIndex %= 2;
        if (clothIndex == 0) clothIndex = 1;
        partsImgChange(id, clothIndex);
    }
    if (id == "bottom") {
        botIndex --;
        botIndex  %= 2;
        if (botIndex  == 0) botIndex  = 1;
        partsImgChange(id, botIndex);
    }

}
//커스텀 창의 다음 버튼 클릭 이벤트
document.querySelector(".custom--next").addEventListener("click", () => {
    const id = charaCustom.id;
    nextPhoto(id);
})
//커스텀 창의 이전버튼 클릭 이벤트
document.querySelector(".custom--prev").addEventListener("click", () => {
    const id = charaCustom.id;
    prevPhoto(id)
})

//버튼 클릭 이벤트 : 커스텀 창이 뜨는 함수
dressupBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const partsName = e.target.dataset.parts;
        dressupBtns.forEach(btn => {
            if (btn.classList.contains("on")) {
                btn.classList.remove("on")
                charaCustom.classList.remove("visible")
            }
        })
        btn.classList.toggle("on");
        customVisible(partsName)
    })
    // 커스텀 창의 close 버튼을 눌렀을 때 창이 닫히고 li의 on 클래스를 빼는 함수 
    document.querySelector(".close-btn").addEventListener("click", () => {
        btn.classList.remove("on");
        charaCustom.classList.remove("visible")
    })
})



// 커스텀 창에 해당 파츠 데이터를 전달해서 보여주는 함수
function customVisible(partsName) {
    charaCustom.id = partsName
    const id = charaCustom.id;
    customTitle.innerHTML = id;
    thumbUrl(id);
    charaCustom.classList.toggle("visible")

}

function thumbUrl(id) {
    if (id == "hair") {
        thumb.src = `img/character/static/hair/${id}_0${hairIndex}.png`
    }
    if (id == "shoes") {
        thumb.src = `img/character/static/shoes/${id}_0${shoesIndex}.png`
    }
    if (id == "back") {
        thumb.src = `img/character/static/back/${id}_0${backIndex}.png`
    }
    if (id == "cloth") {
        thumb.src = `img/character/static/cloth/${id}_0${clothIndex}.png`
    }
    if (id == "bottom") {
        thumb.src = `img/character/static/bottom/${id}_0${botIndex}.png`
    }
}



// // sns 공유기능
// Kakao.init('60275652bb70080b75b0b61847ad6641');
// function shareSNS(sns) {
//     const sendText = "백신 접종하고 나만의 인증서 만들자! #함께일상 #코로나백신인증"
//     const sendUrl = "https://soonmac.github.io/vaccine_campaign/";
//     if (sns == "twitter") {
//         const url = "http://twitter.com/share?url=" + encodeURIComponent(sendUrl) + "&text=" + encodeURIComponent(sendText);
//         window.open(url, "tweetPop", "width=486, height=286,scrollbars=yes");
//     }
//     if (sns == "facebook") {
//         const url = "http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(sendUrl);
//         window.open(url, "", "width=486, height=286");
//     }
//     if (sns == "kakaotalk") {
//         Kakao.Link.sendCustom({
//             templateId:70191
//         })

//     }
// }


// //url 복사 
// const urlInput = document.querySelector(".sns_link__copyurl")
// const tooltip = document.querySelector(".tooltip")
// document.getElementById("btnUrl").addEventListener("click", (e) => {
//     e.preventDefault();
//     urlInput.classList.toggle("urlInput-show");
// })
// document.querySelector(".btn_urlCopy").addEventListener("click", copyUrl)
// function copyUrl() {
//     const url = document.querySelector(".urlInput")
//     url.select();
//     document.execCommand("copy");
//     tooltip.classList.add("tooltip--show");
//     setTimeout(() => {
//         tooltip.classList.remove("tooltip--show");
//     }, 1500)

// }


