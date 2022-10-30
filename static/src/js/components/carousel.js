const Carousel = () => {
  console.log('Carousel')
  const carousel = document.getElementById('product-carousel')
  if (carousel) {
    return new Flickity(carousel, {
      cellAlign: 'center',
      resize: true,
      prevNextButtons: false,
      contain: true
    })
  }
}

Carousel()
