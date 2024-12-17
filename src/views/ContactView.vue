<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import dataPeople from '@/data/data_people';
import type People from '@/types/People';

const route = useRoute();
const router = useRouter();
const personId = Number(route.params.id);
const person = dataPeople.getPeople().find((p) => p.id === personId);

if (!person) {
    router.replace('/emberek'); // főoldal ha nincs olyan ember
}
</script>

<template>
    <div v-if="person">
        <h1>{{ person.first_name }} {{ person.last_name }}</h1>
        <img :src="person.avatar" alt="person.first_name" class="img-thumbnail mb-3" />
        <p><strong>Email:</strong> {{ person.email }}</p>
        <button class="btn btn-secondary" @click="$router.back()">Back</button>
    </div>
    <div v-else>
        <p>Person not found.</p>
    </div>
</template>

<style scoped>
img {
    max-width: 200px;
    border-radius: 10px;
}
</style>
