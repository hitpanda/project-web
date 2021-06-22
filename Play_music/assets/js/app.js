/**
 * 1. Render song
 * 2. Scroll top
 * 3. Play / pause / seek
 * 4. CD rotate
 * 5. Next / prev
 * 6. Random
 * 7. Next / Repeat when ended
 * 8. Active song
 * 9. Scroll active song into view
 * 10. Play song when click
 */

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = {
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
   handleEvents: function() {
      const cd = $('.cd')
      const cdWidth = cd.offsetWidth

      document.onscroll = function() {
         const scrollTop = window.scrollY || document.documentElement.scrollTop
         const newCdWidth = cdWidth - scrollTop
         cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
      }
   },
   start: function() {
      this.handleEvents()
      this.render()
   }
}

app.start()