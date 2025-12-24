<script setup>
import Carousel from '@components/carousel/Carousel.vue'
import CarouselItem from '@components/carousel/CarouselItem.vue';

import { useHomeCarousel } from '@composables/carousels/useHomeCarousel';
const { slides } = useHomeCarousel();

</script>

<template>
    <section class="w-full px-4 mb-6">
        <Carousel :items="slides" :peek="true">
            <CarouselItem v-for="slide in slides" :key="slide.id">
                <div class="h-full w-full
                    rounded-2xl bg-card-surface text-white shadow-sm
    
                    /* padding scales */
                    px-5 py-4
                    sm:px-6 sm:py-5
                    md:px-7 md:py-6

                    /* center on large screens */
                    lg:mx-auto">
                    <component :is="slide.component" v-bind="slide.props" />
                </div>
            </CarouselItem>
        </Carousel>
    </section>
</template>