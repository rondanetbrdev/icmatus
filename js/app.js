document.addEventListener("deviceready", onDeviceReady, false);

////// onDeviceReady START
function onDeviceReady() {
  window.open = cordova.InAppBrowser.open;



//document.querySelector('.btn_link').addEventListener('touchend', loadVideo1,false);

//document.querySelector('#btn_video').addEventListener('touchend', loadVideo1,false);

//document.querySelector('#btn_link').addEventListener('touchend', loadLink1,false);

//document.querySelector('#btn_img').addEventListener('touchend', loadImg1,false);

    //$('#btn_video').on('click', function(){
    //    loadVideo1();
    //});
var div = document.getElementById('splash');

//setTimeout(function() {
//    div.style.display = 'none';
//    //$('#splash').hide(slow);
//}, 3000);
   


}

////// onDeviceReady END


///// FUNCTIONS


  
function abrirIndex() {
  javascript:location.reload();
  div.style.display = 'none';
}


function openExternalFile(elem) {
    //window.open(elem.href, "_system")
    console.log('Acesso externo');
    var ref = cordova.InAppBrowser.open(elem.href, '_blank', 'location=no');
    return false;
}

function openExternalLink(elem) {
    //window.open(elem.href, "_system")
    console.log('Acesso externo');
    var ref = cordova.InAppBrowser.open(elem.href, '_system', 'location=no');
    return false;
}









//open('file:/storage/sdcard/DCIM/Camera/1404177327783.jpg', success, error);




// APP SCRIPTS ###########################################


// FRAMEWORK 7 ###########################################

// Initialize your app
var myApp = new Framework7();



// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}

// 1 Slide Per View, 50px Between
var mySwiper = $$('.swiper-container')[0].swiper;

// Now you can use all slider methods like
mySwiper.slideNext();

// #######################################################

