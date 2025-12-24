<!-- <script setup>
const props = defineProps({
    total: Number,
    current: Number
})

defineEmits(['update:current'])

const isActive = (index) => index === props.current;

const dotClass = (index) => {
    return isActive(index)
        ? 'bg-white w-4'
        : 'bg-white/20 w-1.5'
};
</script>

<template>
    <div class="mt-4 flex justify-center gap-1.5">
        <button v-for="(_, i) in total" :key="i" @click="$emit('update:current', i)"
            class="h-2.5 rounded-full transition-all duration-300" :class="dotClass(i)" />
    </div>
</template>
 -->

<script setup>
defineProps({
    total: { type: Number, required: true },
    current: { type: Number, required: true },
})
defineEmits(['update:current'])
</script>

<template>
    <div class="flex justify-center gap-4">
        <button v-for="(_, i) in total" :key="i" @click="$emit('update:current', i)"
            class="h-2.5 w-2.5 rounded-full transition-all duration-300"
            :class="i === current ? 'bg-white' : 'bg-white/30'" />
    </div>
</template>