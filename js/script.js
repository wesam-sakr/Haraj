  $(document).ready(function () {
    // loading
    $("body").css("overflow-y", "auto");
    $("#loading").fadeOut(800);
    // ----- scroll top button ------
    var btn_top = $("#scroll-top");
    var btn_bottom = $(".scroll-bottom");
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn_top.addClass("show");
      } else {
        btn_top.removeClass("show");
      }
    });
    btn_top.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "300");
    });
    btn_bottom.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 730 }, "300");
    });
    $('select').niceSelect()
  });
  $(".btn-click").on("click", function () {
    $(".msg-reply").css("display") == "none"
      ? $(".msg-reply").css("display", "block")
      : $(".msg-reply").css("display", "none");
  });
  $(".fav").click(function () {
    $('.fav i' ).toggleClass('bi-heart bi-heart-fill');
  })
  // upload pic
  $("#imageUpload").change(function () {
    readImgUrlAndPreview(this);
    function readImgUrlAndPreview(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $("#photo").attr("src", e.target.result);
        };
      }
      reader.readAsDataURL(input.files[0]);
    }
  });
  $("#delete-img").click(function () {
    for (let i = 0; i < $("#photo").length; i++) {
      $("#photo")[i].src = "''";
    }
  });
  $(".contact .form-show").hide();
  $(".description-select").hide();
  $(".choose-option select ").change(function () {
    if ($(".choose-option select option").is(":selected")) {
      $(".contact .form-show").show();
      $(".contact .form-show select ").change(function () {
        if ($(".form-show select option").is(":selected")) {
          $(".description-select").show();
        } else {
          $(".description-select").hide();
        }
      });
    } else {
      $(".contact .form-show").hide();
    }
  });
  jQuery(document).ready(function () {
    ImgUpload();
  });
  function ImgUpload() {
    var imgWrap = "";
    var imgArray = [];
    $('.upload__inputfile').each(function () {
      $(this).on('change', function (e) {
        imgWrap = $(this).closest('.upload__box').find('.upload__img-wrap');
        var maxLength = $(this).attr('data-max_length');
  
        var files = e.target.files;
        var filesArr = Array.prototype.slice.call(files);
        var iterator = 0;
        filesArr.forEach(function (f, index) {
  
          if (!f.type.match('image.*')) {
            return;
          }
  
          if (imgArray.length > maxLength) {
            return false
          } else {
            var len = 0;
            for (var i = 0; i < imgArray.length; i++) {
              if (imgArray[i] !== undefined) {
                len++;
              }
            }
            if (len > maxLength) {
              return false;
            } else {
              imgArray.push(f);
  
              var reader = new FileReader();
              reader.onload = function (e) {
                var html = "<div class='upload__img-box'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' class='img-bg'><div class='upload__img-close'></div></div></div>";
                imgWrap.append(html);
                iterator++;
              }
              reader.readAsDataURL(f);
            }
          }
        });
      });
    });
  
    $('body').on('click', ".upload__img-close", function (e) {
      var file = $(this).parent().data("file");
      for (var i = 0; i < imgArray.length; i++) {
        if (imgArray[i].name === file) {
          imgArray.splice(i, 1);
          break;
        }
      }
      $(this).parent().parent().remove();
    });
  }
  function myFunction() {
    var checkinput = document.getElementById("myInput");
    checkinput.type === "password"?checkinput.type = "text":checkinput.type = "password";
  }

  var $slider = $("#slider");
  var $fill = $(".bar .fill");
  function setBar() {
    $fill.css("width", $slider.val() + "%");
    $slider.attr("value" , $slider.val())
    $('.middle p').html(($slider.val())+ ' ك ')
  }
  $slider.on("input", setBar);
  setBar();

  let followersCount = Number($('.followers-count').attr('data-bs-target'))
  $('.followers-count span').html(followersCount)
  console.log(followersCount);
  $('#follow').change(function(){
    if($(this).is(":checked")){
      $("label[for='follow']").html(`
        <i class="bi bi-check-lg"></i>
        <span>متابع</span>
      `)
      followersCount += 1
    }
    else{
      $("label[for='follow'").html(`
        <span>متابعة</span>
      `)
      followersCount -= 1
    }
    $('.followers-count span').html(followersCount)
  })
  var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  var loadCover = function (event) {
    var cover = document.getElementById("coverOutput");
    cover.src = URL.createObjectURL(event.target.files[0]);
  } 
  $('.category .owl-carousel').owlCarousel({
      stagePadding: 50,
      loop:false,
      autoWidth:true,
      margin:10,
      nav:false,
      dots:false,
      rtl:true,
  })
  $('.op-pro-filter').click(function () {
      $(this).toggleClass('active');
      $('.friends ').slideToggle();
  });
  $('.chat-side-menu').click(function () {
      $(this).toggleClass('active');
      $('.delete ').toggle();
  });
  $('.profile-setting').click(function () {
      $('.profile-setting .arrow' ).toggleClass('bi-caret-down-fill bi-caret-up-fill');
      $('.setting').toggle();
  });
  $('.merchant-profile .icon .bi-three-dots').click(function () {
      $('.setting-menu').toggle();
  });
  $('label[for="btn-check"]').click(function () {
      $(this).toggleClass('btn-light btn-primary');
  });
  if ($(".download-img").length > 0){
    let bd = document.querySelector(".download-img");
    let img = document.querySelector(".qr-code-image");
    bd.addEventListener("click", () => {
      let impath = img.getAttribute("src");
      let fn = getFileName(impath);
      saveAs(impath, fn);
    });
    function getFileName(str) {
      return str.substring(str.lastIndexOf("/") + 1);
    }
  }
  if ($(".print-img").length > 0){
    $(".print-img").click(function () {
      $(".qr-code-image").print();
    });
  }
  // replace text
  $.fn.toggleText = function(t1, t2){
      if(this.text() == t1){
      this.text(t2);
    }else{                   
      this.text(t1);
    }
      return this;
  };
  // change lang
  $('#lang').click(function(){
      $('#lang span').toggleText('Arabic','English');
  });
  // change password type
  if ($("#user-pass").length > 0){
      var pass = document.getElementById('user-pass')
      $('#showPass').click(
          function () {
              if( pass.type == "password"){
                  pass.setAttribute("type","text");
              }else{
                  pass.setAttribute("type","password");
              }
          }
      )
  }
  //  aos animation
  AOS.init();