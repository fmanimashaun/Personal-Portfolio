//Toggle search bar for mobile

//create variables
const nav = document.querySelector('#nav');
const navBar = document.querySelector('.nabvar');
const searchBar = document.querySelector('#search_bar');
const searchButton = document.querySelector('#search_btn');
const logoImg = document.querySelector('#logo');
const menuButton = document.querySelector('#menu_btn');
const closeButton = document.querySelector('#close_btn');
const secondaryMenu = document.querySelector('#secondary_nav');
const bodyWidth = window.innerWidth;
const sourcesList = document.querySelector('picture.slider_img');
const rightArrow = document.querySelector('#right_arrow');
const leftArrow = document.querySelector('#left_arrow');
const sliderPictureSource1 = document.querySelector('#source1');
const sliderPictureSource2 = document.querySelector('#source2');
const sliderPictureSource3 = document.querySelector('#source3');
const sliderPictureImgSource = document.querySelector('#img_source');




//Slider1 files path
const slider1 = {
    folder: "slider1_set",
    source1: ["digital_solution_d6clej_ar_1_1,c_fill,g_auto__c_scale,w_300.jpg 300w", "digital_solution_d6clej_ar_1_1,c_fill,g_auto__c_scale,w_440.jpg 440w"],
    source2: ["digital_solution_d6clej_ar_4_3,c_fill,g_auto__c_scale,w_586.jpg 586w"],
    source3: ["digital_solution_d6clej_ar_16_9,c_fill,g_auto__c_scale,w_781.jpg 781w"],
    img_srcset: ["digital_solution_d6clej_ar_16_9,c_fill,g_auto__c_scale,w_781-1.jpg 781w"],
    img_src: ["digital_solution_d6clej_ar_16_9,c_fill,g_auto__c_scale,w_781.jpg"]
}

//Slider2 files path
const slider2 = {
    folder: "slider2_set",
    source1: ["Scan2BIM_chywhr_ar_1_1,c_fill,g_auto__c_scale,w_300.jpg 300w", "Scan2BIM_chywhr_ar_1_1,c_fill,g_auto__c_scale,w_407.jpg 407w", "Scan2BIM_chywhr_ar_1_1,c_fill,g_auto__c_scale,w_440.jpg 440w"],
    source2: ["Scan2BIM_chywhr_ar_4_3,c_fill,g_auto__c_scale,w_586.jpg 586w"],
    source3: ["Scan2BIM_chywhr_ar_16_9,c_fill,g_auto__c_scale,w_781.jpg 781w"],
    img_srcset: ["Scan2BIM_chywhr_ar_16_9,c_fill,g_auto__c_scale,w_781.jpg 781w"],
    img_src: ["Scan2BIM_chywhr_ar_16_9,c_fill,g_auto__c_scale,w_781.jpg"]
}

//Slider3 files path
const slider3 = {
    folder: "slider3_set",
    source1: ["training-coaching_xcjcan_ar_1_1,c_fill,g_auto__c_scale,w_300.jpg 300w", "training-coaching_xcjcan_ar_1_1,c_fill,g_auto__c_scale,w_440.jpg 440w"],
    source2: ["training-coaching_xcjcan_ar_4_3,c_fill,g_auto__c_scale,w_586.jpg 586w"],
    source3: ["training-coaching_xcjcan_ar_16_9,c_fill,g_auto__c_scale,w_781.jpg 781w"],
    img_srcset: ["training-coaching_xcjcan_ar_16_9,c_fill,g_auto__c_scale,w_781.jpg 781w"],
    img_src: ["training-coaching_xcjcan_ar_16_9,c_fill,g_auto__c_scale,w_781.jpg"]
}

//Creating a filepatth function
const sliderSourcePath = {
    path: "resources/slider-imgs/",
    slider_sources: function (source, folderName) {
        let sourcePath = "";
        for (let i = 0; i < source.length; i++) {
            if(i === 0) {
                sourcePath += this.path + folderName + "/" + source[i];
            } else {
                sourcePath += ", " + this.path + folderName + "/" + source[i];
            }
            
        }
        return sourcePath;
    }
}


//add event listener for slider arrows
let count = 1;
//right arrow
rightArrow.addEventListener('click', function () {
    count++;
    if (count === 1) {
        count = 1;
        console.log(count);
        console.log("count not reset");
        sliderPictureSource1.srcset = sliderSourcePath.slider_sources(slider1.source1, slider1.folder);
        sliderPictureSource2.srcset = sliderSourcePath.slider_sources(slider1.source2, slider1.folder);
        sliderPictureSource3.srcset = sliderSourcePath.slider_sources(slider1.source3, slider1.folder);
        sliderPictureImgSource.srcset = sliderSourcePath.slider_sources(slider1.img_srcset, slider1.folder);
        sliderPictureImgSource.src = sliderSourcePath.slider_sources(slider1.img_src, slider1.folder);
        console.log("picture changed");
    } else if (count === 2) {
        console.log(count);
        console.log("count not reset");
        sliderPictureSource1.srcset = sliderSourcePath.slider_sources(slider2.source1, slider2.folder);
        sliderPictureSource2.srcset = sliderSourcePath.slider_sources(slider2.source2, slider2.folder);
        sliderPictureSource3.srcset = sliderSourcePath.slider_sources(slider2.source3, slider2.folder);
        sliderPictureImgSource.srcset = sliderSourcePath.slider_sources(slider2.img_srcset, slider2.folder);
        sliderPictureImgSource.src = sliderSourcePath.slider_sources(slider2.img_src, slider2.folder);
        console.log("picture changed");
    } else if (count === 3) {
        console.log(count);
        console.log("count not reset");
        sliderPictureSource1.srcset = sliderSourcePath.slider_sources(slider3.source1, slider3.folder);
        sliderPictureSource2.srcset = sliderSourcePath.slider_sources(slider3.source2, slider3.folder);
        sliderPictureSource3.srcset = sliderSourcePath.slider_sources(slider3.source3, slider3.folder);
        sliderPictureImgSource.srcset = sliderSourcePath.slider_sources(slider3.img_srcset, slider3.folder);
        sliderPictureImgSource.src = sliderSourcePath.slider_sources(slider3.img_src, slider3.folder);
        console.log("picture changed");
    } else {
        count = 1;
        console.log(count);
        console.log("count reset");
        sliderPictureSource1.srcset = sliderSourcePath.slider_sources(slider1.source1, slider1.folder);
        sliderPictureSource2.srcset = sliderSourcePath.slider_sources(slider1.source2, slider1.folder);
        sliderPictureSource3.srcset = sliderSourcePath.slider_sources(slider1.source3, slider1.folder);
        sliderPictureImgSource.srcset = sliderSourcePath.slider_sources(slider1.img_srcset, slider1.folder);
        sliderPictureImgSource.src = sliderSourcePath.slider_sources(slider1.img_src, slider1.folder);
        console.log("picture changed");

    }
});

//left arrow
leftArrow.addEventListener('click', function () {
    count--;
    if (count === 1) {
        count = 1;
        console.log(count);
        console.log("count not reset");
        sliderPictureSource1.srcset = sliderSourcePath.slider_sources(slider1.source1, slider1.folder);
        sliderPictureSource2.srcset = sliderSourcePath.slider_sources(slider1.source2, slider1.folder);
        sliderPictureSource3.srcset = sliderSourcePath.slider_sources(slider1.source3, slider1.folder);
        sliderPictureImgSource.srcset = sliderSourcePath.slider_sources(slider1.img_srcset, slider1.folder);
        sliderPictureImgSource.src = sliderSourcePath.slider_sources(slider1.img_src, slider1.folder);
        console.log("picture changed");
    } else if (count === 2) {
        console.log(count);
        console.log("count not reset");
        sliderPictureSource1.srcset = sliderSourcePath.slider_sources(slider2.source1, slider2.folder);
        sliderPictureSource2.srcset = sliderSourcePath.slider_sources(slider2.source2, slider2.folder);
        sliderPictureSource3.srcset = sliderSourcePath.slider_sources(slider2.source3, slider2.folder);
        sliderPictureImgSource.srcset = sliderSourcePath.slider_sources(slider2.img_srcset, slider2.folder);
        sliderPictureImgSource.src = sliderSourcePath.slider_sources(slider2.img_src, slider2.folder);
        console.log("picture changed");
    } else if (count === 3) {
        console.log(count);
        console.log("count not reset");
        sliderPictureSource1.srcset = sliderSourcePath.slider_sources(slider3.source1, slider3.folder);
        sliderPictureSource2.srcset = sliderSourcePath.slider_sources(slider3.source2, slider3.folder);
        sliderPictureSource3.srcset = sliderSourcePath.slider_sources(slider3.source3, slider3.folder);
        sliderPictureImgSource.srcset = sliderSourcePath.slider_sources(slider3.img_srcset, slider3.folder);
        sliderPictureImgSource.src = sliderSourcePath.slider_sources(slider3.img_src, slider3.folder);
        console.log("picture changed");
    } else {
        count = 3;
        console.log(count);
        console.log("count reset");
        sliderPictureSource1.srcset = sliderSourcePath.slider_sources(slider3.source1, slider3.folder);
        sliderPictureSource2.srcset = sliderSourcePath.slider_sources(slider3.source2, slider3.folder);
        sliderPictureSource3.srcset = sliderSourcePath.slider_sources(slider3.source3, slider3.folder);
        sliderPictureImgSource.srcset = sliderSourcePath.slider_sources(slider3.img_srcset, slider3.folder);
        sliderPictureImgSource.src = sliderSourcePath.slider_sources(slider3.img_src, slider3.folder);
        console.log("picture changed");

    }
});



//add event listener for search button
searchButton.addEventListener('click', function () {
    searchBar.style.display = 'block';
    closeButton.style.display = 'inline-block';
    menuButton.style.display = 'none';
    navBar.style.flexBasis = '100%';
    logoImg.style.flexBasis = '100%';
    nav.style.flexWrap = "wrap";
    logoImg.style.textAlign = "center";
    if (secondaryMenu.style.display === 'block') {
        secondaryMenu.style.display = 'none';
    }
});

//add event listener for close button
closeButton.addEventListener('click', function () {
    searchBar.style.display = 'none';
    closeButton.style.display = 'none';
    menuButton.style.display = 'inline-block';
    navBar.style.flexBasis = '74.5%';
    logoImg.style.flexBasis = '23.5%';
    nav.style.flexWrap = "nowrap";
    logoImg.style.textAlign = "left";
    if (secondaryMenu.style.display === 'block') {
        secondaryMenu.style.display = 'none';
    }
});

//add event listener for menu button 
menuButton.addEventListener('click', function () {
    secondaryMenu.style.display = 'block';
    menuButton.style.display = 'none';
    closeButton.style.display = 'inline-block';
});

//restore the menu when the window is resized

/*
window.addEventListener("resize", function() {
    if(bodyWidth < 1024){
        secondaryMenu.style.display = 'block';
    } else {
        secondaryMenu.style.display = 'none';
    }
});

*/
