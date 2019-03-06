$('.my-paroller').paroller();
    $('.my-paroller2').paroller();
    // Show hide menu
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".navbar").style.top = "0";
      } else {
        document.querySelector(".navbar").style.top = "-100px";
      }
    }

    $(document).ready(function () {
      // Animate scroll from top to about
      $("a.scrolltoabout").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $('#about').offset().top - 100 }, 1000);
      });
      $("a#aboutlinksection").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $('#about').offset().top - 100 }, 1000);
      });
      $("a#techlinksection").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $('#tech').offset().top - 90 }, 1000);
      });
      $("a#prolinksection").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $('#projects').offset().top - 100 }, 1000);
      });
      $("a#feedlinksection").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $('#feedback').offset().top - 100 }, 1000);
      });
      $("a#contactlinksection").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $('#contact').offset().top - 100 }, 1000);
      });
      $("a#contacttext").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $('#contact').offset().top - 100 }, 1000);
      });
      $("a#homelink").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $('#home').offset().top}, 1000);
      });

      $('.about').waypoint(function () {
        $("#feedbacklink").removeClass("active");
        $("#aboutlink").addClass("active");
        $("#techlink").removeClass("active");
        $("#projectlink").removeClass("active");
        $("#contactlink").removeClass("active");
      }, {
          offset: '50%'
        });

      $('#tech').waypoint(function () {
        $("#feedbacklink").removeClass("active");
        $("#techlink").addClass("active");
        $("#aboutlink").removeClass("active");
        $("#projectlink").removeClass("active");
        $("#contactlink").removeClass("active");
      }, {
          offset: '50%'
        });
      $('.projects').waypoint(function () {
        $("#feedbacklink").removeClass("active");
        $("#projectlink").addClass("active");
        $("#aboutlink").removeClass("active");
        $("#techlink").removeClass("active");
        $("#contactlink").removeClass("active");
      }, {
          offset: '50%'
        });
      $('#feedback').waypoint(function () {
        $("#feedbacklink").addClass("active");
        $("#projectlink").removeClass("active");
        $("#aboutlink").removeClass("active");
        $("#techlink").removeClass("active");
        $("#contactlink").removeClass("active");
      }, {
          offset: '50%'
        });
      $('.contact').waypoint(function () {
        $("#contactlink").addClass("active");
        $("#feedbacklink").removeClass("active");
        $("#projectlink").removeClass("active");
        $("#aboutlink").removeClass("active");
        $("#techlink").removeClass("active");
      }, {
          offset: '50%'
        });
    });
    document.getElementById("year").innerHTML = new Date().getFullYear();