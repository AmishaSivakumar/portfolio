function my_portfolio_modalbox() {
  "use strict";
  jQuery(".my_portfolio_all_wrap").prepend(
    '<div class="my_portfolio_modalbox"><div class="box_inner"><div class="close"><a href="#"><i class="icon-cancel"></i></a></div><div class="description_wrap"></div></div></div>'
  );
}
function my_portfolio_page_transition() {
  "use strict";

  var section = jQuery(".my_portfolio_section");
  var allLi = jQuery(".transition_link li");
  var button = jQuery(".transition_link a");
  var wrapper = jQuery(".my_portfolio_all_wrap");
  var enter = wrapper.data("enter");
  var exit = wrapper.data("exit");

  button.on("click", function () {
    var element = jQuery(this);
    var href = element.attr("href");
    if (element.parent().hasClass("my_portfolio_button")) {
      jQuery('.menu .transition_link a[href="' + href + '"]').trigger("click");
      hashtag();
      return false;
    }
    var sectionID = jQuery(href);
    var parent = element.closest("li");
    if (!parent.hasClass("active")) {
      allLi.removeClass("active");
      wrapper.find(section).removeClass("animated " + enter);
      if (wrapper.hasClass("opened")) {
        wrapper.find(section).addClass("animated " + exit);
      }
      parent.addClass("active");
      wrapper.addClass("opened");
      wrapper
        .find(sectionID)
        .removeClass("animated " + exit)
        .addClass("animated " + enter);
      jQuery(section).addClass("hidden");
      jQuery(sectionID).removeClass("hidden").addClass("active");
    }
    return false;
  });
}
function my_portfolio_trigger_menu() {
  "use strict";
  var e = jQuery(".my_portfolio_topbar .trigger .hamburger"),
    a = jQuery(".my_portfolio_mobile_menu"),
    i = jQuery(".my_portfolio_mobile_menu ul li a");
  e.on("click", function () {
    var e = jQuery(this);
    return (
      e.hasClass("is-active")
        ? (e.removeClass("is-active"), a.removeClass("opened"))
        : (e.addClass("is-active"), a.addClass("opened")),
      !1
    );
  }),
    i.on("click", function () {
      return (
        jQuery(".my_portfolio_topbar .trigger .hamburger").removeClass(
          "is-active"
        ),
        a.removeClass("opened"),
        !1
      );
    });
}
function my_portfolio_my_progress() {
  "use strict";
  jQuery(".progress_inner").each(function () {
    var e = jQuery(this),
      a = parseInt(e.data("value"), 10),
      i = e.data("color"),
      t = e.find(".bar");
    e.find(".bar_in").css({ width: a + "%", backgroundColor: i }),
      setTimeout(function () {
        t.addClass("open");
      });
  });
}
function my_portfolio_circular_progress() {
  "use strict";
  var e,
    a = jQuery(window).width();
  (e = a > 1400 ? 120 : a >= 768 ? 100 : 80),
    jQuery(".circular_progress_bar .myCircle").each(function () {
      var a = jQuery(this);
      a.append('<span class="number"></span>');
      var i = a.data("value");
      a
        .circleProgress({
          size: e,
          value: 0,
          animation: { duration: 1400 },
          thickness: 3,
          fill: "#7d7789",
          emptyFill: "rgba(0,0,0,0)",
          startAngle: -Math.PI / 2,
        })
        .on("circle-animation-progress", function (e, i, t) {
          a.find(".number").text(parseInt(100 * t.toFixed(2)) + "%");
        }),
        a.circleProgress("value", 1),
        setTimeout(function () {
          a.circleProgress("value", i);
        }, 1400);
    });
}
function my_portfolio_portfolio_popup() {
  "use strict";
  var e = jQuery(".my_portfolio_modalbox"),
    a = jQuery(".my_portfolio_portfolio .portfolio_popup"),
    i = e.find(".close");
  a.off().on("click", function () {
    var a = jQuery(this).closest(".list_inner"),
      i = a.find(".hidden_content").html(),
      t = a.find(".image .main").data("img-url"),
      n = a.find(".details").html();
    return (
      e.addClass("opened"),
      e.find(".description_wrap").html(i),
      e
        .find(".popup_details")
        .prepend(
          '<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' +
            t +
            '"></div></div>'
        ),
      e
        .find(".popup_details .top_image")
        .after('<div class="portfolio_main_title">' + n + "<div>"),
      my_portfolio_data_images(),
      !1
    );
  }),
    i.on("click", function () {
      return e.removeClass("opened"), e.find(".description_wrap").html(""), !1;
    });
}
function my_portfolio_news_popup() {
  "use strict";
  var e = jQuery(".my_portfolio_modalbox"),
    a = jQuery(".my_portfolio_news .news_list > ul > li .post_title h3 a"),
    i = e.find(".close");
  a.on("click", function () {
    var a = jQuery(this).closest("li"),
      i = a.find(".news_hidden_details").html(),
      t = a.data("img"),
      n = a.find(".extra_metas").html(),
      r = a.find(".post_title a").text();
    return (
      e.addClass("opened"),
      e.find(".description_wrap").html(i),
      e
        .find(".news_popup_informations")
        .prepend(
          '<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' +
            t +
            '"></div></div>'
        ),
      e
        .find(".news_popup_informations .image")
        .after(
          '<div class="details"><div class="meta">' +
            n +
            '</div><div class="title"><h3>' +
            r +
            "</h3></div><div>"
        ),
      my_portfolio_data_images(),
      !1
    );
  }),
    i.on("click", function () {
      return e.removeClass("opened"), e.find(".description_wrap").html(""), !1;
    });
}
function my_portfolio_service_popup() {
  "use strict";
  var e = jQuery(".my_portfolio_modalbox"),
    a = jQuery(
      ".my_portfolio_service .service_list ul li .my_portfolio_full_link"
    ),
    i = e.find(".close");
  a.on("click", function () {
    var a = jQuery(this).closest(".list_inner"),
      i = a.find(".popup_service_image").attr("src"),
      t = a.find(".title").html(),
      n = a.find(".service_hidden_details").html();
    return (
      e.addClass("opened"),
      e.find(".description_wrap").html(n),
      e
        .find(".service_popup_informations")
        .prepend(
          '<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' +
            i +
            '"></div></div>'
        ),
      my_portfolio_data_images(),
      e
        .find(".service_popup_informations .image")
        .after('<div class="main_title"><h3>' + t + "</h3></div>"),
      !1
    );
  }),
    i.on("click", function () {
      return e.removeClass("opened"), e.find(".description_wrap").html(""), !1;
    });
}
function my_portfolio_preloader() {
  "use strict";
  var e = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    ),
    a = $("#preloader");
  e
    ? a.remove()
    : (setTimeout(function () {
        a.addClass("preloaded");
      }, 800),
      setTimeout(function () {
        a.remove();
      }, 2e3));
}
function my_portfolio_my_load() {
  "use strict";
  setTimeout(function () {
    my_portfolio_preloader();
  }, 500);
}
function my_portfolio_cursor() {
  "use strict";
  if (jQuery(".mouse-cursor").length && $("body")) {
    const e = document.querySelector(".cursor-inner"),
      a = document.querySelector(".cursor-outer");
    let i,
      t = 0,
      n = !1;
    (window.onmousemove = function (r) {
      n ||
        (a.style.transform =
          "translate(" + r.clientX + "px, " + r.clientY + "px)"),
        (e.style.transform =
          "translate(" + r.clientX + "px, " + r.clientY + "px)"),
        (i = r.clientY),
        (t = r.clientX);
    }),
      $("body").on(
        "mouseenter",
        "a,.my_portfolio_topbar .trigger, .cursor-pointer",
        function () {
          e.classList.add("cursor-hover"), a.classList.add("cursor-hover");
        }
      ),
      $("body").on(
        "mouseleave",
        "a,.my_portfolio_topbar .trigger, .cursor-pointer",
        function () {
          ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
            (e.classList.remove("cursor-hover"),
            a.classList.remove("cursor-hover"));
        }
      ),
      (e.style.visibility = "visible"),
      (a.style.visibility = "visible");
  }
}
function my_portfolio_imgtosvg() {
  "use strict";
  jQuery("img.html").each(function () {
    var e = jQuery(this),
      a = e.attr("class"),
      i = e.attr("src");
    jQuery.get(
      i,
      function (i) {
        var t = jQuery(i).find("svg");
        void 0 !== a && (t = t.attr("class", a + " replaced-svg")),
          (t = t.removeAttr("xmlns:a")),
          e.replaceWith(t);
      },
      "xml"
    );
  });
}
function my_portfolio_popup() {
  "use strict";
  jQuery(".gallery_zoom").each(function () {
    jQuery(this).magnificPopup({
      delegate: "a.zoom",
      type: "image",
      gallery: { enabled: !0 },
      removalDelay: 300,
      mainClass: "mfp-fade",
    });
  }),
    jQuery(".popup-youtube, .popup-vimeo").each(function () {
      jQuery(this).magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1,
      });
    }),
    jQuery(".soundcloude_link").magnificPopup({
      type: "image",
      gallery: { enabled: !0 },
    });
}
function my_portfolio_portfolio() {
  "use strict";
  if (jQuery().isotope) {
    var e = jQuery(".my_portfolio_portfolio .portfolio_filter ul");
    e.length &&
      e.find("a").on("click", function () {
        var a = jQuery(this),
          i = a.attr("data-filter");
        return (
          a
            .closest(".my_portfolio_portfolio")
            .find(".portfolio_list")
            .children("ul")
            .isotope({
              filter: i,
              animationOptions: { duration: 750, easing: "linear", queue: !1 },
            }),
          e.find("a").removeClass("current"),
          a.addClass("current"),
          !1
        );
      });
  }
}
function my_portfolio_data_images() {
  "use strict";
  jQuery("*[data-img-url]").each(function () {
    var e = jQuery(this),
      a = e.data("img-url");
    e.css({ backgroundImage: "url(" + a + ")" });
  });
}
function my_portfolio_contact_form() {
  "use strict";
  jQuery(".contact_form #send_message").on("click", function () {
    var e = jQuery(".contact_form #name").val(),
      a = jQuery(".contact_form #email").val(),
      i = jQuery(".contact_form #message").val(),
      t = jQuery(".contact_form #subject").val(),
      n = jQuery(".contact_form .returnmessage").data("success");
    return (
      jQuery(".contact_form .returnmessage").empty(),
      "" === e || "" === a || "" === i
        ? jQuery("div.empty_notice").slideDown(500).delay(2e3).slideUp(500)
        : jQuery.post(
            "modal/contact.html",
            { ajax_name: e, ajax_email: a, ajax_message: i, ajax_subject: t },
            function (e) {
              jQuery(".contact_form .returnmessage").append(e),
                jQuery(".contact_form .returnmessage span.contact_error").length
                  ? jQuery(".contact_form .returnmessage")
                      .slideDown(500)
                      .delay(2e3)
                      .slideUp(500)
                  : (jQuery(".contact_form .returnmessage").append(
                      "<span class='contact_success'>" + n + "</span>"
                    ),
                    jQuery(".contact_form .returnmessage")
                      .slideDown(500)
                      .delay(4e3)
                      .slideUp(500)),
                "" === e && jQuery("#contact_form")[0].reset();
            }
          ),
      !1
    );
  });
}
function my_portfolio_mycarousel() {
  "use strict";
  jQuery(".my_portfolio_about .testimonials .owl-carousel").owlCarousel({
    loop: !0,
    items: 2,
    lazyLoad: !1,
    margin: 30,
    autoplay: !0,
    autoplayTimeout: 2500,
    dots: !1,
    nav: !1,
    navSpeed: !1,
    responsive: { 0: { items: 1 }, 768: { items: 2 } },
  });
}
function hashtag() {
  "use strict";
  var e = $(".my_portfolio_header .menu .ccc"),
    a = $(".my_portfolio_header .menu .active a");
  $(".my_portfolio_header .menu a").on("mouseenter", function () {
    var a = $(this);
    currentLink(e, a);
  }),
    $(".my_portfolio_header .menu").on("mouseleave", function () {
      (a = $(".my_portfolio_header .menu .active a")),
        currentLink(e, a),
        a.parent().siblings().removeClass("mleave");
    }),
    currentLink(e, a);
}
function currentLink(e, a) {
  "use strict";
  if (!a.length) return !1;
  var i = a.offset().left,
    t = a.outerWidth(),
    n = $(".my_portfolio_header .menu").offset().left;
  a.parent().removeClass("mleave"),
    a.parent().siblings().addClass("mleave"),
    e.css({ left: i - n + "px", width: t + "px" });
}
function my_portfolio_ripple() {
  "use strict";
  jQuery("#ripple").ripples({
    resolution: 500,
    dropRadius: 20,
    perturbance: 0.04,
  });
}
function my_portfolio_moving_box() {
  "use strict";
  var e = $(".my_portfolio_news").find(".news_list > ul > li");
  $(".cavani_fn_moving_box").length ||
    $("body").append('<div class="cavani_fn_moving_box"></div>');
  var a = $(".cavani_fn_moving_box");
  e.on("mouseenter", function () {
    var e = $(this),
      i = e.data("img"),
      t = e.offset().top;
    if ("" === i) return a.removeClass("opened"), !1;
    a.addClass("opened"),
      a.css({ backgroundImage: "url(" + i + ")", top: t + "px" });
  }).on("mouseleave", function () {
    a.removeClass("opened");
  });
}
jQuery(document).ready(function () {
  "use strict";
  my_portfolio_modalbox(),
    my_portfolio_page_transition(),
    my_portfolio_trigger_menu(),
    my_portfolio_my_progress(),
    my_portfolio_circular_progress(),
    my_portfolio_portfolio_popup(),
    my_portfolio_news_popup(),
    my_portfolio_service_popup(),
    my_portfolio_cursor(),
    my_portfolio_imgtosvg(),
    my_portfolio_popup(),
    my_portfolio_portfolio(),
    my_portfolio_data_images(),
    my_portfolio_contact_form(),
    my_portfolio_mycarousel(),
    hashtag(),
    my_portfolio_ripple(),
    my_portfolio_moving_box(),
    jQuery(window).load("body", function () {
      my_portfolio_my_load();
    });
}),
  $(".glitch").mgGlitch({
    destroy: !1,
    glitch: !0,
    scale: !0,
    blend: !0,
    blendModeType: "hue",
    glitch1TimeMin: 200,
    glitch1TimeMax: 400,
    glitch2TimeMin: 10,
    glitch2TimeMax: 100,
  });
