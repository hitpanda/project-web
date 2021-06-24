/**
 * 1. Render song => ok
 * 2. Scroll top => ok
 * 3. Play / pause / seek => ok
 * 4. CD rotate => ok
 * 5. Next / prev
 * 6. Random
 * 7. Next / Repeat when ended
 * 8. Active song
 * 9. Scroll active song into view
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

const app = {
   currentIndex: 0,
   isPlaying: false,
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
      const htmls = this.songs.map(song => {
         return `
            <div class="song">
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
      $('.playlist').innerHTML = htmls.join('')
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
         _this.nextSong()
         audio.play()
      }

      // when prev song
      prevBtn.onclick = function() {
         _this.prevSong()
         audio.play()
      }
   },
   loadCurrentSong: function() {
      heading.textContent = this.currentSong.name
      cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
      audio.src = this.currentSong.path
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