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
                <component :is="slide.component" v-bind="slide.props" />
            </CarouselItem>
        </Carousel>
    </section>
</template>