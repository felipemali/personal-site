export const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 20,

  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,

  arrows: false,
  cssEase: 'ease-in-out',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 12,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};
