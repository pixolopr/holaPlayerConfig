 var sliderInitArray = [];

 //function initFunc();

 function _nw18_holaplayerObj() {
     this.player = "";
     this.sources = [{
         src: "",
         type: '',
         label: '1080p',
        }];
     this.controls = true;
     this.autoplay = true;
     this.title = '';
     this.poster = '';
     this.settings = {
         quality: true,
     };

     this.count = 1;
     this.play = 1;
     this.time_frame = [5, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100];
     this.time_duration = 0;
     this.adCount = 1;
     this.playCount = 1;
     this.video_id = "test-video";
     //this.solarSlug = '{$solarSlug}';
     this.duration = "";
     this.desc_url = 'test-url';
     this.playerSize = '';
     this.encoded_desc_url = encodeURIComponent(this.desc_url);



     this.initVideo = function () {


         var loadFunc = function (obj, events) {
             window.hola_player(obj, events);
         };



         /*sliderInitArray.push(loadFunc({
             player: this.player,
             sources: this.sources,
             controls: this.controls,
             autoplay: this.autoplay,
             title: this.title,
             poster: this.poster,
             settings: this.settings
         }, function (player) {
             player.on('ready', function () {
                 alert("In Load");
             })
         }));*/

         console.log({
             player: this.player,
             sources: this.sources,
             controls: this.controls,
             autoplay: this.autoplay,
             title: this.title,
             poster: this.poster,
             settings: this.settings
         });





         window.hola_player({
             player: this.player,
             sources: this.sources,
             controls: this.controls,
             autoplay: this.autoplay,
             title: this.title,
             poster: this.poster,
             settings: this.settings
         }, function (player) {
             player.on('ready', function () {
                     alert("In Load");
                 }),
                 player.on('readyforpreroll', function () {
                     play = 0;
                     console.log("In Preroll");
                 }),
                 player.on('loadedmetadata', function () {
                     duration = player.duration();
                     console.log(duration);
                 }),
                 player.on('play', function () {
                     if (this.adCount == 1 && this.playCount == 1) {
                         ga('send', 'event', 'VP_load_Hola', this.count, 'adplay', '1');
                         ga('send', 'event', 'ad Block', 'count', this.video_id);
                     }

                     if (this.playCount == 1) {
                         ga('send', 'event', 'Video Play', 'Play', this.video_id);
                         ga('send', 'event', 'BTM Video Player', 'Play', this.video_id);
                         this.playCount++;
                     }
                 }),
                 player.on('pause', function () {
                     console.log("Pause ");
                     ga('send', 'event', 'Video Play', 'Pause', this.video_id);
                     ga('send', 'event', 'Hola Video Player', 'Pause', this.video_id);
                 }),
                 player.on('seek', function () {
                     console.log("Seek ");
                     ga('send', 'event', 'Hola Video Player', 'Seek', this.video_id);
                 }),
                 player.on('complete', function () {
                     console.log("Complete ");
                     ga('send', 'event', 'Hola Player Video', 'Complete', this.video_id);
                 }),

                 player.on('resume', function () {
                     console.log(" Resume ");
                     ga('send', 'event', 'Hola Player Video', 'Resume', this.video_id);
                 }),

                 player.on('adstart', function () {
                     console.log('Ad Play Event');
                     if (this.adCount == 1) {
                         ga('send', 'event', 'Video Advertisement', 'Play', this.video_id);
                         this.adCount++;
                     }
                 }),
                 player.on('adskip', function () {
                     console.log("Ads Skipped");
                     ga('send', 'event', 'Video Advertisement', 'Skip', this.video_id);
                 })
         });




     };

 };

 /*window.onload = function () {
     console.log(sliderInitArray);

     sliderInitArray.forEach(function (func) {
         func();
     });
 };*/

 /*
  $.getScript('https://player2.h-cdn.com/hola_player.js?customer=network18', function () {

      console.log("RECIEVED SCRIPT FROM CDM");

      console.log(finalObj);

      function initFunc(obj) {
          window.hola_player(obj);
      };


      window.hola_player({
              player: '#container',
              sources: [{
                  src: "https://fpvodhls-vh.akamaihd.net/i/fp-audio/2018/04/19-04-2018/SkatingStoryFinal-,256000,512000,712000,.mp4.csmil/master.m3u8?hdnts=exp=1525948552~acl=/*~hmac=8dc21074d9cab3340a67948014f6430a22404ea260efa969ac23f6ba48090258",
                  type: '',
                  label: '1080p',
         }],
              controls: true,
              autoplay: true,
              title: '',
              poster: 'https://images.firstpost.com/wp-content/uploads/2018/04/DhwanitRele1440.jpg',
              settings: {
                  quality: true,
              },
          },
          function (player) {
              var played_ad = {};
              setInterval('counter()', 1000);

              player.on('ready', function () {
                      console.log("In Load");
                  }),
                  player.on('readyforpreroll', function () {
                      play = 0;
                      console.log("In Preroll");
                  }),
                  player.on('loadedmetadata', function () {
                      duration = player.duration();
                      console.log(duration);
                  }),
                  player.on('play', function () {
                      if (adCount == 1 && playCount == 1) {
                          ga('send', 'event', 'VP_load_Hola', count, 'adplay', '1');
                          ga('send', 'event', 'ad Block', 'count', video_id);
                      }

                      if (playCount == 1) {
                          ga('send', 'event', 'Video Play', 'Play', video_id);
                          ga('send', 'event', 'BTM Video Player', 'Play', video_id);
                          playCount++;
                      }
                  }),
                  player.on('pause', function () {
                      console.log("Pause ");
                      ga('send', 'event', 'Video Play', 'Pause', video_id);
                      ga('send', 'event', 'Hola Video Player', 'Pause', video_id);
                  }),
                  player.on('seek', function () {
                      console.log("Seek ");
                      ga('send', 'event', 'Hola Video Player', 'Seek', video_id);
                  }),
                  player.on('complete', function () {
                      console.log("Complete ");
                      ga('send', 'event', 'Hola Player Video', 'Complete', video_id);
                  }),

                  player.on('resume', function () {
                      console.log(" Resume ");
                      ga('send', 'event', 'Hola Player Video', 'Resume', video_id);
                  }),

                  player.on('adstart', function () {
                      console.log('Ad Play Event');
                      if (adCount == 1) {
                          ga('send', 'event', 'Video Advertisement', 'Play', video_id);
                          adCount++;
                      }
                  }),
                  player.on('adskip', function () {
                      console.log("Ads Skipped");
                      ga('send', 'event', 'Video Advertisement', 'Skip', video_id);
                  })
          });

  });*/


 console.log("SCRIPT OMNE COMPLETE");
