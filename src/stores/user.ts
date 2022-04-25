import { acceptHMRUpdate, defineStore } from 'pinia'

/*
export const useUserStore = defineStore({
  id: 'user', 
  state: ()=>({
    bookName:''
  })
});
*/

export const useUserStore = defineStore('user', () => {
  
  // Current name of the users book.   
  const bookName = ref('');
  
  return {
    bookName,
  }
})

// this allows you to persist data across a hot reload.
// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
