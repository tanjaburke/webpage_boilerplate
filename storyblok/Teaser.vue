<template>
  <div
    v-editable="blok"
    :class="`${blok.class}`"
  >
    <h4 v-for="(item, index) in blok.headline.content" :key="index">{{blok.headline.content[index]}}</h4>
  </div>
</template>
 
<script lang="ts">

export default {
  props: ['blok'],
  data(){
      return {
          myInnerHTML: '',
      }
  },
  mounted(){
      const blokArray = toRaw(this.blok.headline.content);
      const paragraphs = blokArray.filter(item => item.type === 'paragraph');
      
      for (let i = 0; i < blokArray.length; i++) {
          if (blokArray[i].type === 'paragraph' && blokArray[i].content) {
              const paragraphObjects = blokArray[i].content;
              this.buildHTML(paragraphObjects)
              
          }
          
      }
  },
  methods: {
      buildHTML(objectArray){
          for (let i = 0; i < objectArray.length; i++) {
              const testHTML= []
              const myHTML = objectArray[i].marks
              console.log('myHTML', myHTML);
          }
          
      }
  }
}
</script>