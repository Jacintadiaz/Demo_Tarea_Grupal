new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "ENERO",
          artist: "Ignorantes-Bad Bunny",
          cover: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/img/1.jpeg?raw=true",
          source: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/mp3/2.mp3?raw=true",
          url: "https://youtu.be/PC0GvyEIXfk",
          favorited: true
        },
        {
          name: "FEBRERO",
          artist: "Muero De Amor-Damas Gratis",
          cover: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/img/2.jpeg?raw=true",
          source: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/mp3/1.mp3?raw=true",
          url: "https://youtu.be/4iAC7Fc44rg",
          favorited: true
        },
        {
          name: "MARZO",
          artist: "It´s The End Of The World As We Know It-R.E.M",
          cover: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/img/3.jpeg?raw=true",
          source: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/mp3/3.mp3?raw=true",
          url: "https://youtu.be/Z0GFRcFm-aY",
          favorited: false
        },
        {
          name: "ABRIL",
          artist: "The Final Countdown-Europe",
          cover: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/img/4.jpeg?raw=true",
          source: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/mp3/4.mp3?raw=true",
          url: "https://youtu.be/9jK-NcRmVcw",
          favorited: false
        },
        {
          name: "MAYO",
          artist: "Everyday Is Like Sunday-Morrisay",
          cover: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/img/5.jpeg?raw=true",
          source: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/mp3/5.mp3?raw=true",
          url: "https://youtu.be/d0LeL9BUPtA",
          favorited: false
        },
        {
          name: "JUNIO",
          artist: "So Lonly-The Police",
          cover: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/img/6.jpeg?raw=true",
          source: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/mp3/6.mp3?raw=true",
          url: "https://youtu.be/MX6MvV8cbh8",
          favorited: false
        },
        {
          name: "JULIO",
          artist: "Resistiré-Dúo Dinámico",
          cover: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/img/7.jpeg?raw=true",
          source: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/mp3/7.mp3?raw=true",
          url: "https://youtu.be/K1rKj6XMt4Q",
          favorited: false
        },
        {
          name: "AGOSTO",
          artist: "I Will Survive-Gloria Gaynor",
          cover: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/img/8.jpeg?raw=true",
          source: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/mp3/8.mp3?raw=true",
          url: "https://youtu.be/ARt9HV9T0w8",
          favorited: false
        },
        {
          name: "SEPTIEMBRE",
          artist: "Sobreviviré-Mónica Naranjo",
          cover: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/img/9.jpeg?raw=true",
          source: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/mp3/9.mp3?raw=true",
          url: "https://youtu.be/xErS7G3-tCQ",
          favorited: false
        },
        {
          name: "OCTUBRE",
          artist: "Codo Con Codo-Jorge Drexler",
          cover: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/img/10.jpeg?raw=true",
          source: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/mp3/10.mp3?raw=true",
          url: "https://youtu.be/_fYKg-ssHt0",
          favorited: true
        },
        {
          name: "NOVIEMBRE",
          artist: "Here Comes The Sun-The Beatles",
          cover: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/img/11.jpeg?raw=true",
          source: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/mp3/11.mp3?raw=true",
          url: "https://youtu.be/KQetemT1sWc",
          favorited: true
        },
        {
          name: "DICIEMBRE",
          artist: "Viva La Vida-Coldplay",
          cover: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/img/12.jpeg?raw=true",
          source: "https://github.com/Jacintadiaz/Demo_Tarea_Grupal/blob/main/mp3/12.mp3?raw=true",
          url: "https://youtu.be/dvgZkm1xWPE",
          favorited: true
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
