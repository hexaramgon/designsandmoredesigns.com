import React from 'react';
import $ from 'jquery';

import pic1 from '../imgs_svgs/frontend.jpg';
import pic2 from '../imgs_svgs/pic2.jpg';
import pic3 from '../imgs_svgs/pic3.jpg';
import pic4 from '../imgs_svgs/pic4.jpg';
import pic5 from '../imgs_svgs/pic5.jpg';





/* This is Jquery slideshow I got from internet */

class lideshow {
    constructor() {
      this.initSlides()
      this.initSlideshow()
    }

    initSlides() {
        this.container = $('[data-slideshow]');
        this.slides = this.container.find('img');
        this.slides.each((idx, slide) => $(slide).attr('data-slide', idx));
      }
    
      initSlideshow() {
        this.imagesLoaded = 0;
        this.currentIndex = 0;
        this.setNextSlide();
        this.slides.each((idx, slide) => {
          $('<img>').on('load', $.proxy(this.loadImage, this)).attr('src', $(slide).attr('src'));
        });
      }


      loadImage() {
        this.imagesLoaded++;
        if (this.imagesLoaded >= this.slides.length) { this.playSlideshow() }
      }

      setNextSlide() {
        this.nextSlide = this.container.find(`[data-slide="${this.currentIndex}"]`).first();
        this.nextSlide.addClass('next');
      }

      playSlideshow() {
        this.slideshow = window.setInterval(() => { this.performSlide() }, 3500);
      }

      performSlide() {
        if (this.prevSlide) { this.prevSlide.removeClass('prev fade-out') }
      
        this.nextSlide.removeClass('next');
        this.prevSlide = this.nextSlide;
        this.prevSlide.addClass('prev');
      
        this.currentIndex++;
        if (this.currentIndex >= this.slides.length) { this.currentIndex = 0 }
      
        this.setNextSlide();
      
        this.prevSlide.addClass('fade-out');
      }

  }
  
  $(document).ready(function () {
    new lideshow()
  })



class Slideshow extends React.Component {



    
    render() {
      return (
        <div class="img-container" data-slideshow>
        <img
            src={pic1}
        />
        <img
            src={pic2}
        />
        <img
            src={pic3}
        />
        <img
            src={pic4}
        />
        <img
            src={pic5}
        />
        </div>
      );
    }
  }


  export default Slideshow;








