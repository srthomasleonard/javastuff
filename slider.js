//SLIDER 1

(function () {
  var sliderId = "MultiImageSlider";
  var collectionListWrapperId = "MultiImageCollectionWrapper";
  var slideClass = "w-slide";
  var leftArrowClass = "w-slider-arrow-left";
  var rightArrowClass = "w-slider-arrow-right";
  var slideNavClass = "w-slider-nav";
  var collectionItemClass = "w-dyn-item";

  var $slider = $("#" + sliderId);
  var $slides = $slider.find("." + slideClass);
  var $collectionWrapper = $("#" + collectionListWrapperId);
  var $images = $collectionWrapper.find("." + collectionItemClass);
  if ($slider && $collectionWrapper) {
    $slider.css("opacity", 0);
    if (!$images || !$images.length) {
      $slider.remove();
    } else {
      var imgCount = $images.length;
      var slideCount = $slides.length;
      if (imgCount > slideCount) imgCount = slideCount;
      for (var i = 0; i < imgCount; i++) {
        $slides[i].style.backgroundImage = $images[i].style.backgroundImage;
      }
      for (var i = slideCount; i > imgCount; i--) {
        $slides[i - 1].remove();
      }

      if (imgCount < 2) {
        $slider
          .find(
            "." +
              leftArrowClass +
              ", ." +
              rightArrowClass +
              ", ." +
              slideNavClass
          )
          .remove();
      }
      $slider.css("opacity", 1);
    }
    $collectionWrapper.remove();
  }
})();

//SLIDER 2

(function () {
  var sliderId = "MultiImageSlider2";
  var collectionListWrapperId = "MultiImageCollectionWrapper2";
  var slideClass = "w-slide";
  var leftArrowClass = "w-slider-arrow-left";
  var rightArrowClass = "w-slider-arrow-right";
  var slideNavClass = "w-slider-nav";
  var collectionItemClass = "w-dyn-item";

  var $slider = $("#" + sliderId);
  var $slides = $slider.find("." + slideClass);
  var $collectionWrapper = $("#" + collectionListWrapperId);
  var $images = $collectionWrapper.find("." + collectionItemClass);
  if ($slider && $collectionWrapper) {
    $slider.css("opacity", 0);
    if (!$images || !$images.length) {
      $slider.remove();
    } else {
      var imgCount = $images.length;
      var slideCount = $slides.length;
      if (imgCount > slideCount) imgCount = slideCount;
      for (var i = 0; i < imgCount; i++) {
        $slides[i].style.backgroundImage = $images[i].style.backgroundImage;
      }
      for (var i = slideCount; i > imgCount; i--) {
        $slides[i - 1].remove();
      }

      if (imgCount < 2) {
        $slider
          .find(
            "." +
              leftArrowClass +
              ", ." +
              rightArrowClass +
              ", ." +
              slideNavClass
          )
          .remove();
      }
      $slider.css("opacity", 1);
    }
    $collectionWrapper.remove();
  }
})();

//SLIDER 3

(function () {
  var sliderId = "MultiImageSlider3";
  var collectionListWrapperId = "MultiImageCollectionWrapper3";
  var slideClass = "w-slide";
  var leftArrowClass = "w-slider-arrow-left";
  var rightArrowClass = "w-slider-arrow-right";
  var slideNavClass = "w-slider-nav";
  var collectionItemClass = "w-dyn-item";

  var $slider = $("#" + sliderId);
  var $slides = $slider.find("." + slideClass);
  var $collectionWrapper = $("#" + collectionListWrapperId);
  var $images = $collectionWrapper.find("." + collectionItemClass);
  if ($slider && $collectionWrapper) {
    $slider.css("opacity", 0);
    if (!$images || !$images.length) {
      $slider.remove();
    } else {
      var imgCount = $images.length;
      var slideCount = $slides.length;
      if (imgCount > slideCount) imgCount = slideCount;
      for (var i = 0; i < imgCount; i++) {
        $slides[i].style.backgroundImage = $images[i].style.backgroundImage;
      }
      for (var i = slideCount; i > imgCount; i--) {
        $slides[i - 1].remove();
      }

      if (imgCount < 2) {
        $slider
          .find(
            "." +
              leftArrowClass +
              ", ." +
              rightArrowClass +
              ", ." +
              slideNavClass
          )
          .remove();
      }
      $slider.css("opacity", 1);
    }
    $collectionWrapper.remove();
  }
})();

//SLIDER 4

(function () {
  var sliderId = "MultiImageSlider4";
  var collectionListWrapperId = "MultiImageCollectionWrapper4";
  var slideClass = "w-slide";
  var leftArrowClass = "w-slider-arrow-left";
  var rightArrowClass = "w-slider-arrow-right";
  var slideNavClass = "w-slider-nav";
  var collectionItemClass = "w-dyn-item";

  var $slider = $("#" + sliderId);
  var $slides = $slider.find("." + slideClass);
  var $collectionWrapper = $("#" + collectionListWrapperId);
  var $images = $collectionWrapper.find("." + collectionItemClass);
  if ($slider && $collectionWrapper) {
    $slider.css("opacity", 0);
    if (!$images || !$images.length) {
      $slider.remove();
    } else {
      var imgCount = $images.length;
      var slideCount = $slides.length;
      if (imgCount > slideCount) imgCount = slideCount;
      for (var i = 0; i < imgCount; i++) {
        $slides[i].style.backgroundImage = $images[i].style.backgroundImage;
      }
      for (var i = slideCount; i > imgCount; i--) {
        $slides[i - 1].remove();
      }

      if (imgCount < 2) {
        $slider
          .find(
            "." +
              leftArrowClass +
              ", ." +
              rightArrowClass +
              ", ." +
              slideNavClass
          )
          .remove();
      }
      $slider.css("opacity", 1);
    }
    $collectionWrapper.remove();
  }
})();

//SLIDER 5

(function () {
  var sliderId = "MultiImageSlider5";
  var collectionListWrapperId = "MultiImageCollectionWrapper5";
  var slideClass = "w-slide";
  var leftArrowClass = "w-slider-arrow-left";
  var rightArrowClass = "w-slider-arrow-right";
  var slideNavClass = "w-slider-nav";
  var collectionItemClass = "w-dyn-item";

  var $slider = $("#" + sliderId);
  var $slides = $slider.find("." + slideClass);
  var $collectionWrapper = $("#" + collectionListWrapperId);
  var $images = $collectionWrapper.find("." + collectionItemClass);
  if ($slider && $collectionWrapper) {
    $slider.css("opacity", 0);
    if (!$images || !$images.length) {
      $slider.remove();
    } else {
      var imgCount = $images.length;
      var slideCount = $slides.length;
      if (imgCount > slideCount) imgCount = slideCount;
      for (var i = 0; i < imgCount; i++) {
        $slides[i].style.backgroundImage = $images[i].style.backgroundImage;
      }
      for (var i = slideCount; i > imgCount; i--) {
        $slides[i - 1].remove();
      }

      if (imgCount < 2) {
        $slider
          .find(
            "." +
              leftArrowClass +
              ", ." +
              rightArrowClass +
              ", ." +
              slideNavClass
          )
          .remove();
      }
      $slider.css("opacity", 1);
    }
    $collectionWrapper.remove();
  }
})();

//SLIDER 6

(function () {
  var sliderId = "MultiImageSlider6";
  var collectionListWrapperId = "MultiImageCollectionWrapper6";
  var slideClass = "w-slide";
  var leftArrowClass = "w-slider-arrow-left";
  var rightArrowClass = "w-slider-arrow-right";
  var slideNavClass = "w-slider-nav";
  var collectionItemClass = "w-dyn-item";

  var $slider = $("#" + sliderId);
  var $slides = $slider.find("." + slideClass);
  var $collectionWrapper = $("#" + collectionListWrapperId);
  var $images = $collectionWrapper.find("." + collectionItemClass);
  if ($slider && $collectionWrapper) {
    $slider.css("opacity", 0);
    if (!$images || !$images.length) {
      $slider.remove();
    } else {
      var imgCount = $images.length;
      var slideCount = $slides.length;
      if (imgCount > slideCount) imgCount = slideCount;
      for (var i = 0; i < imgCount; i++) {
        $slides[i].style.backgroundImage = $images[i].style.backgroundImage;
      }
      for (var i = slideCount; i > imgCount; i--) {
        $slides[i - 1].remove();
      }

      if (imgCount < 2) {
        $slider
          .find(
            "." +
              leftArrowClass +
              ", ." +
              rightArrowClass +
              ", ." +
              slideNavClass
          )
          .remove();
      }
      $slider.css("opacity", 1);
    }
    $collectionWrapper.remove();
  }
})();

//SLIDER 7

(function () {
  var sliderId = "MultiImageSlider7";
  var collectionListWrapperId = "MultiImageCollectionWrapper7";
  var slideClass = "w-slide";
  var leftArrowClass = "w-slider-arrow-left";
  var rightArrowClass = "w-slider-arrow-right";
  var slideNavClass = "w-slider-nav";
  var collectionItemClass = "w-dyn-item";

  var $slider = $("#" + sliderId);
  var $slides = $slider.find("." + slideClass);
  var $collectionWrapper = $("#" + collectionListWrapperId);
  var $images = $collectionWrapper.find("." + collectionItemClass);
  if ($slider && $collectionWrapper) {
    $slider.css("opacity", 0);
    if (!$images || !$images.length) {
      $slider.remove();
    } else {
      var imgCount = $images.length;
      var slideCount = $slides.length;
      if (imgCount > slideCount) imgCount = slideCount;
      for (var i = 0; i < imgCount; i++) {
        $slides[i].style.backgroundImage = $images[i].style.backgroundImage;
      }
      for (var i = slideCount; i > imgCount; i--) {
        $slides[i - 1].remove();
      }

      if (imgCount < 2) {
        $slider
          .find(
            "." +
              leftArrowClass +
              ", ." +
              rightArrowClass +
              ", ." +
              slideNavClass
          )
          .remove();
      }
      $slider.css("opacity", 1);
    }
    $collectionWrapper.remove();
  }
})();

//SLIDER 8

(function () {
  var sliderId = "MultiImageSlider8";
  var collectionListWrapperId = "MultiImageCollectionWrapper8";
  var slideClass = "w-slide";
  var leftArrowClass = "w-slider-arrow-left";
  var rightArrowClass = "w-slider-arrow-right";
  var slideNavClass = "w-slider-nav";
  var collectionItemClass = "w-dyn-item";

  var $slider = $("#" + sliderId);
  var $slides = $slider.find("." + slideClass);
  var $collectionWrapper = $("#" + collectionListWrapperId);
  var $images = $collectionWrapper.find("." + collectionItemClass);
  if ($slider && $collectionWrapper) {
    $slider.css("opacity", 0);
    if (!$images || !$images.length) {
      $slider.remove();
    } else {
      var imgCount = $images.length;
      var slideCount = $slides.length;
      if (imgCount > slideCount) imgCount = slideCount;
      for (var i = 0; i < imgCount; i++) {
        $slides[i].style.backgroundImage = $images[i].style.backgroundImage;
      }
      for (var i = slideCount; i > imgCount; i--) {
        $slides[i - 1].remove();
      }

      if (imgCount < 2) {
        $slider
          .find(
            "." +
              leftArrowClass +
              ", ." +
              rightArrowClass +
              ", ." +
              slideNavClass
          )
          .remove();
      }
      $slider.css("opacity", 1);
    }
    $collectionWrapper.remove();
  }
})();

//SLIDER 9

(function () {
  var sliderId = "MultiImageSlider9";
  var collectionListWrapperId = "MultiImageCollectionWrapper9";
  var slideClass = "w-slide";
  var leftArrowClass = "w-slider-arrow-left";
  var rightArrowClass = "w-slider-arrow-right";
  var slideNavClass = "w-slider-nav";
  var collectionItemClass = "w-dyn-item";

  var $slider = $("#" + sliderId);
  var $slides = $slider.find("." + slideClass);
  var $collectionWrapper = $("#" + collectionListWrapperId);
  var $images = $collectionWrapper.find("." + collectionItemClass);
  if ($slider && $collectionWrapper) {
    $slider.css("opacity", 0);
    if (!$images || !$images.length) {
      $slider.remove();
    } else {
      var imgCount = $images.length;
      var slideCount = $slides.length;
      if (imgCount > slideCount) imgCount = slideCount;
      for (var i = 0; i < imgCount; i++) {
        $slides[i].style.backgroundImage = $images[i].style.backgroundImage;
      }
      for (var i = slideCount; i > imgCount; i--) {
        $slides[i - 1].remove();
      }

      if (imgCount < 2) {
        $slider
          .find(
            "." +
              leftArrowClass +
              ", ." +
              rightArrowClass +
              ", ." +
              slideNavClass
          )
          .remove();
      }
      $slider.css("opacity", 1);
    }
    $collectionWrapper.remove();
  }
})();
