document.addEventListener('DOMContentLoaded', function() {
  // 여기에 필요한 JavaScript 코드를 추가합니다.
  console.log('Wedding invitation site loaded!');

  // 예: 갤러리 이미지 클릭 시 모달 표시
  const galleryImages = document.querySelectorAll('.gallery-section img');
  galleryImages.forEach(img => {
      img.addEventListener('click', function() {
          // 모달 표시 로직
          console.log('Image clicked:', this.src);
      });
  });

  // 예: 스크롤에 따른 애니메이션
  window.addEventListener('scroll', function() {
      // 스크롤 애니메이션 로직
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // 음악 재생 버튼 기능
    const musicButton = document.querySelector('.music-off-png');
    let isPlaying = false;
    const audio = new Audio('path/to/your/audio/file.mp3');

    musicButton.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            musicButton.style.backgroundImage = "url('./img/music-01-off-png.png')";
        } else {
            audio.play();
            musicButton.style.backgroundImage = "url('./img/music-01-on-png.png')";
        }
        isPlaying = !isPlaying;
    });

    // 갤러리 기능
    // 여기에 갤러리 슬라이드 쇼 기능 구현

    // RSVP 폼 제출 기능
    // 여기에 RSVP 폼 제출 처리 구현

    // 축하 메시지 기능
    // 여기에 축하 메시지 제출 및 표시 기능 구현
});