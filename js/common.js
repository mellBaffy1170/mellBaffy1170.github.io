$('.slider').slick({
    slidesToShow: 4,
    autoplay: true,
    dots: true,
    infinite: true,
    responsive: [
        {
          breakpoint: 1820,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1444,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 1, 
          }
        }
      ]
})


parser = new DOMParser();
xmlDoc = parser.parseFromString(text,"text/xml");

document.getElementById("demo").innerHTML =
xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;