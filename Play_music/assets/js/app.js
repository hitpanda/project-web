/**
 * 1. Render song => ok
 * 2. Scroll top => ok
 * 3. Play / pause / seek => ok
 * 4. CD rotate => ok
 * 5. Next / prev => ok
 * 6. Random => ok
 * 7. Next / Repeat when ended => ok
 * 8. Active song => ok
 * 9. Scroll active song into view => ok
 * 10. Play song when click
 */

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const player = $('.player')
const cd = $('.cd')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const prevBtn = $('.btn-prev')
const nextBtn = $('.btn-next')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')

const app = {
   currentIndex: 0,
   isPlaying: false,
   isRandom: false,
   isRepeat: false,
   songs: [
      {
         name: 'Sài Gòn Đau Lòng Quá',
         singer: 'Hứa Kim Tuyền, Hoàng Duyên',
         path: './assets/music/song1.mp3',
         image: './assets/img/song1.jpg'
      },
      {
         name: 'Nàng Thơ',
         singer: 'Hoàng Dũng',
         path: './assets/music/song2.mp3',
         image: './assets/img/song2.jpg'
      },
      {
         name: 'Câu Hẹn Câu Thề',
         singer: 'Đình Dũng,ACV',
         path: './assets/music/song3.mp3',
         image: './assets/img/song3.jpg'
      },
      {
         name: 'Níu Duyên',
         singer: 'Lê Bảo Bình',
         path: './assets/music/song4.mp3',
         image: './assets/img/song4.jpg'
      },
      {
         name: 'Phải Chăng Em Đã Yêu?',
         singer: 'Juky San,RedT',
         path: './assets/music/song5.mp3',
         image: './assets/img/song5.jpg'
      },
      {
         name: 'Anh Không Tha Thứ',
         singer: 'Đình Dũng,ACV',
         path: './assets/music/song6.mp3',
         image: './assets/img/song6.jpg'
      },
      {
         name: 'Trên Tình Bạn Dưới Tình Yêu',
         singer: 'MIN',
         path: './assets/music/song7.mp3',
         image: './assets/img/song7.jpg'
      },
      {
         name: 'Tháng Mấy Em Nhớ Anh?',
         singer: 'Hà Anh Tuấn',
         path: './assets/music/song8.mp3',
         image: './assets/img/song8.jpg'
      },
      {
         name: 'Người Lạ Từng Thương',
         singer: 'Như Việt,ACV',
         path: './assets/music/song9.mp3',
         image: './assets/img/song9.jpg'
      },
      {
         name: 'Cao Ốc 20',
         singer: 'B Ray,Đạt G',
         path: './assets/music/song10.mp3',
         image: './assets/img/song10.jpg'
      }
   ],
   render: function() {
      const htmls = this.songs.map((song, index) => {
         return `
            <div data-index="${index}" class="song ${index === this.currentIndex ? 'active' : ''}">
               <div class="thumb" style="background-image: url('${song.image}')">
               </div>
               <div class="body">
                  <h3 class="title">${song.name}</h3>
                  <p class="author">${song.singer}</p>
               </div>
               <div class="option">
                  <i class="fas fa-ellipsis-h"></i>
               </div>
            </div>
         `
      })
      playlist.innerHTML = htmls.join('')
   },
   defineProperties: function() {
      Object.defineProperty(this, 'currentSong', {
         get: function() {
            return this.songs[this.currentIndex]
         }
      })
   },
   handleEvents: function() {
      const _this = this
      const cdWidth = cd.offsetWidth

      // Xử lý CD quay / dừng
      const cdThumbAnimate = cdThumb.animate([
         {transform: 'rotate(360deg)'}
      ], {
         duration: 10000, // quay 10s
         iterations: Infinity
      })
      cdThumbAnimate.pause()

      // Xử lý phóng to thu nhỏ CD khi scroll
      document.onscroll = function() {
         const scrollTop = window.scrollY || document.documentElement.scrollTop
         const newCdWidth = cdWidth - scrollTop

         cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
         cd.style.opacity = newCdWidth / cdWidth
      }

      // Xử lý khi click play button
      playBtn.onclick = function() {
         if (_this.isPlaying) {
            audio.pause()
         } else {
            audio.play()
         }
      }

      // Khi play song
      audio.onplay = function() {
         _this.isPlaying = true
         player.classList.add('playing')
         cdThumbAnimate.play()
      }

      // Khi pause song
      audio.onpause = function() {
         _this.isPlaying = false
         player.classList.remove('playing')
         cdThumbAnimate.pause()
      }

      // Khi tiến độ bài hát thay đổi
      audio.ontimeupdate = function() {
         if (audio.duration) {
            const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
            progress.value = progressPercent
         }
      }

      // Khi tua bài hát
      progress.onchange = function(e) {
         const seekTime = e.target.value / 100 * audio.duration
         audio.currentTime = seekTime
      }

      // when next song
      nextBtn.onclick = function() {
         if (_this.isRandom) {
            _this.playRandomSong()
         } else {
            _this.nextSong()
         }
         _this.loadCurrentSong()
         _this.scrollToActiveSong()
         audio.play()
         // _this.render()
      }

      // when prev song
      prevBtn.onclick = function() {
         _this.prevSong()
         _this.loadCurrentSong()
         _this.scrollToActiveSong()
         audio.play()
         // _this.render()
      }

      // When random song
      randomBtn.onclick = function() {
         _this.isRandom = !_this.isRandom
         randomBtn.classList.toggle('active', _this.isRandom)
      }

      // When repeat song
      repeatBtn.onclick = function() {
         _this.isRepeat = !_this.isRepeat
         repeatBtn.classList.toggle('active', _this.isRepeat)
      }

      // Auto next song when song ended
      audio.onended = function() {
         if (_this.isRepeat) {
            audio.play()
         } else {
            nextBtn.click()
         }
      }

      // when click on playlist
      playlist.onclick = function(e) {
         const songNode = e.target.closest('.song:not(.active)')
         if (songNode || e.target.closest('.option')) {
            // Xử lý khi click vào song
            if (songNode) {
               _this.currentIndex = Number(songNode.dataset.index)
               _this.loadCurrentSong()
               audio.play()
            }
            // Xử lý khi click vào option
            if (e.target.closest('.option')) {

            }
         }
      }
   },
   loadCurrentSong: function() {
      heading.textContent = this.currentSong.name
      cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
      audio.src = this.currentSong.path

      if ($('.song.active')) {
         $('.song.active').classList.remove('active')
      }
      const list = $$('.song')
      list.forEach(song => {
         if (song.getAttribute('data-index') == this.currentIndex) {
            song.classList.add('active')
         }
      })
   },
   nextSong: function() {
      this.currentIndex++
      if (this.currentIndex >= this.songs.length) {
         this.currentIndex = 0
      }
      this.loadCurrentSong()
   },
   prevSong: function() {
      this.currentIndex--
      if (this.currentIndex < 0) {
         this.currentIndex = this.songs.length - 1
      }
      this.loadCurrentSong()
   },
   playRandomSong: function() {
      let newIndex
      do {
         newIndex = Math.floor(Math.random() * this.songs.length)
      } while (newIndex === this.currentIndex)
      
      this.currentIndex = newIndex
      this.loadCurrentSong()
   },
   scrollToActiveSong: function () {
      setTimeout(() => {
         if (this.currentIndex <= 2) {
            $('.song.active').scrollIntoView({
               behavior: 'smooth',
               block: 'end'
            })
         } else {
            $('.song.active').scrollIntoView({
               behavior: 'smooth',
               block: 'center'
            })
         }
      }, 200);
   },  
   start: function() {
      // Định nghĩa các thuộc tính cho Object
      this.defineProperties()

      // Lắng nghe / xử lý các sự kiện (DOM events)
      this.handleEvents()

      // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
      this.loadCurrentSong()

      // Render playlist
      this.render()
   }
}

app.start()