import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useStoriesStore = defineStore("stories", () => {
  const stories = ref([
    {
      id: 1,
      label: "Papara Sticker Card",
      pinned: true,
      image: "papara_sticker_card",
    },
    {
      id: 2,
      label: "Papara Superman Card",
      pinned: true,
      image: "papara_superman_card",
    },
    {
      id: 3,
      label: "e-Şans 150 TL Hediye",
      pinned: false,
      image: "hediye",
    },
    {
      id: 4,
      label: "Yatırım Hesabı",
      pinned: false,
      image: "hesabi",
    },
    {
      id: 5,
      label: "Altın Hediye",
      pinned: false,
      image: "altin_hediye",
    },
  ]);

  const orderedStories = computed(() => {
    return [...stories.value].sort((a, b) => {
      // pinned first
      if (a.pinned !== b.pinned) {
        return a.pinned ? -1 : 1;
      }

      // then sort by id
      return a.id - b.id;
    });
  });

  return {
    stories,
    orderedStories,
  };
});
