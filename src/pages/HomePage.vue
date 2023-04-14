<template lang="">
    <div class="home_cont">
        
        <div class="description">
            <div class="col-12">
                <div class="word"></div>                    
            </div>
            <p>
                Questo è il mio portfolio e qui potrete vedere alcuni dei miei lavori.
            </p>
            <router-link class="portfolio-link" to="/PortfolioPage">Val al Portfolio</router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
let words = ['<Ciao, mi chiamo Leonardo Di Maggio />'],
    part,
    i = 0,
    offset = 0,
    forwards = true,
    skip_count = 0,
    skip_delay = 10,
    speed = 50;
let wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= words.length) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
       
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});
</script>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.home_cont{
    height: calc(100vh - 72px - 35.2px);
    padding: 0em 2em;
    color: $font_color;
    display: flex;
    justify-content: center;
    align-items: center;
    .description{
        padding: 3em;
        border: 2px solid rgba(0, 0, 0, 0.295);
    }
}
.word {
  font-size: 1.5em;
  margin: auto;
  color:  $font_color;
  text-shadow: 2px 1px #222324, 1px 2px #222324, 1.5px 2.5px #222324;
}
.portfolio-link{
    display: inline-block;
    margin-top: 1em;
    padding: .5em 1em;
    text-decoration: none;
    border: 2px solid black;
    color: $font_color;
    &:hover{
        scale: 1.1;
        box-shadow: black 3px 3px;
        
    }
    
}
    
</style>