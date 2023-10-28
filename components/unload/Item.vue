<template>
  <div class="unload">
    <UnloadInfo v-if="screenWidth<768"/>
    <UnloadChoose  :unload="onlyunload || {}" :screenwidth="screenWidth" :scrolled="scrolled" :getunloadprocess="getunloadprocess" @resetchoose="resetChoose"/>
    <UnloadAll :allunload="allunload.data || []" :screenwidth="screenWidth" :scrolled="scrolled" @chooseunload="getChooseUnload"/>
  </div>
</template>

<script setup>
import {allunload} from '../../vuex/store.ts'

const screenWidth = ref(0)
const scrolled = ref(false); 
const getunloadprocess = ref(false); 
const onlyunload = ref({});

const handleResize = () => {
  if (process.client) {
    screenWidth.value = window.innerWidth;
  }
};

if (process.client) {
  window.addEventListener("resize", handleResize);
  handleResize();
}


const handleScroll = () =>{
  if (process.client) {
    scrolled.value = true;
  }
}

if (process.client) {
  window.addEventListener("scroll", handleScroll);
}

getUnload(allunload);

const resetChoose=(reset)=>{
  onlyunload.value = reset
}

const getChooseUnload = async (chooseunload) => {
  getunloadprocess.value=true
  const reset={}
  onlyunload.value = reset
  const allunloadarray = [...allunload.value.data];
  const onlyunloadid = allunloadarray.filter((el)=>el.id===chooseunload.id)[0]
  await getUnload(onlyunload, onlyunloadid.id);
  getunloadprocess.value=false
}

watch(
  () => onlyunload.value.status,
  (newStatus, _oldStatus) => {
    if (newStatus === 'success') { 
      const data = getDataUnload(onlyunload)
      if(data){
        onlyunload.value.data = data[0]
      }
    }
  }
);
watch(
  () => allunload.value.status,
  (newStatus, _oldStatus) => {
    if (newStatus === 'success') { 
      const data = getDataUnload(allunload)
      if(data){ 
        allunload.value.data = data
      }
    }
  }
);



</script>