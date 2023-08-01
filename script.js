function showGlowingHand() {
    const acupuncturePoint = document.getElementById('acupuncturePoint').value;
    const glowingPoint = document.getElementById('glowingPoint');
    const downloadLink = document.getElementById('downloadLink');
  
    // Assuming you have a mapping of acupuncture points to their coordinates on the hand image
    const acupuncturePointsMap = {
      'LI4': { top: '59px', left: '95px' },
      'SF4': { top: '50px', left: '175px' },
      'SF7': { top: '79px', left: '175px' },
      'SF9': { top: '110px', left: '175px' },
      'SF12': { top: '147px', left: '195px' },

      // Add more acupuncture points here as needed
    };
  
    if (acupuncturePoint in acupuncturePointsMap) {
      const coordinates = acupuncturePointsMap[acupuncturePoint];
      glowingPoint.style.top = coordinates.top;
      glowingPoint.style.left = coordinates.left;
      glowingPoint.style.display = 'block';
  
      // Display download link
      downloadLink.style.display = 'block';
    } else {
      alert('Acupuncture point not found!');
    }
  }
  