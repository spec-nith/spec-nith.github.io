const resizeObserver = new ResizeObserver(entries => {
    for (const { target } of entries) {
      if (target) refreshPerspective(target);
    }
  });
  
  function initSlideshow(slideshow) {
    // Fade in
    slideshow.classList.add("in");
    
    // Observe for changes to slideshow's dimensions
    resizeObserver.observe(slideshow);
  
    // Auto scroll slideshow
    setInterval(() => {
      const firstImage = [...slideshow.children].reduce((prev, current) => (Number(prev.style.order) < Number(current.style.order)) ? prev : current);
      
      // Move the first image back in queue when it's out of view
      if (firstImage.width < slideshow.scrollLeft) {
        slideshow.scrollLeft = slideshow.scrollLeft - firstImage.width;
        firstImage.style.order = slideshow.children.length;
        for (const image of [...slideshow.children]) {
          if (image != firstImage) image.style.order = image.style.order-1;
        }
      } else {
        slideshow.scrollLeft += 1;
      }    
    }, 20);
  }
  
  function refreshPerspective(slideshow) {
    const perspective = slideshow.getBoundingClientRect().width / 2;
    slideshow.style.perspective = `${perspective}px`;
  
    // Translate each image accordingly
    {
      let perspectiveThreshold = perspective / 4;
      let prevZ = -1;
      for (const [i, image] of [...slideshow.children].entries()) {
        image.dataset.y = image.dataset.y || Math.random();
        image.dataset.z = image.dataset.z || Math.random();
  
        let [y, z] = [
          Math.floor(image.dataset.y * perspectiveThreshold) - (perspectiveThreshold / 2), 
          Math.floor(image.dataset.z * perspectiveThreshold)
        ];
  
        // Readjust z-translation if it's to close.
        while (perspective > 100 && Math.abs(prevZ - z) < (perspectiveThreshold * 0.2)) {
          image.dataset.z = Math.random();
          z = Math.floor(image.dataset.z * perspectiveThreshold);
        }
  
        prevZ = z;
        image.style.cssText = `
          order: ${i};
          transform: translate3d(0, ${y}px, ${z}px);
          z-index: ${z};
        `;
      }
    }
  
    slideshow.scrollLeft = 0;
    return perspective;
  }
  
  (async () => {
    // Using a for..of loop in case you want more slideshows on page.
    for (const slideshow of [...document.querySelectorAll(".slideshow")]) {
      // Wait for all images to load before initializing the slideshow
      for (const image of [...slideshow.children]) {
        await new Promise(resolve => {
          if (image.complete) resolve();
          else image.onload = resolve;
        });
      }
      
      // Let's go
      initSlideshow(slideshow);
    }
  })();