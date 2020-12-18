<template>
  
</template>

<script>
import gsap from 'gsap'

export default {
  methods: {
    enter: function(el, done) {

      let tl = gsap.timeline({    //Timelineの生成の書き方変わった！
        onComplete: done
      })
      tl.set(el, {
        y: window.innerWidth * 1.5,
        scale: 0.8,
        transformOrigin: '50% 50%'
      })
      tl.to(el, {
        duration: 0.4,    //durationも中に！
        y: 0,
        ease: 'power4.easeout'    //easingの書き方も変わった！
      })
      tl.to(el, {
        duration: 0.8,
        scale: 1,
        ease: 'power4.easeout'
      })

    },
    leave: function(el, done) {

      gsap.to(el, {    //TweenMax.to() ではない！
        duration: 0.8,
        y: window.innerHeight * 1.5,
        ease: 'power4.easeout',
        onComplete: done
      })

    }
  }

}
</script>

<style>

</style>
