<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import PeopleCard from '@/components/PeopleCard.vue';
import dataPeople from '@/data/data_people';
import type People from '@/types/People';
import { ROUTES } from '@/constants/routes';

const router = useRouter();
const route = useRoute();

const people = ref<People[]>(dataPeople.getPeople());
const sortOrder = ref<'asc' | 'desc'>(route.query.sort === 'desc' ? 'desc' : 'asc');

const sortedPeople = computed(() =>
    [...people.value].sort((a, b) => {
        const nameA = a.first_name.toLowerCase() + a.last_name.toLowerCase();
        const nameB = b.first_name.toLowerCase() + b.last_name.toLowerCase();
        return sortOrder.value === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    })
);

function toggleSortOrder() {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
    router.push({ name: ROUTES.PEOPLE_LIST, query: { sort: sortOrder.value } }); // query-be rakjuk a rendezést hogy vissza tudjuk állítani
}

onMounted(() => {
    // lásd feljebb
    if (route.query.sort === 'desc') {
        sortOrder.value = 'desc';
    } else {
        sortOrder.value = 'asc';
    }
});
</script>

<template>
    <div>
        <h1 class="display-5">Emberek</h1>
        <button class="btn btn-primary mb-3" @click="toggleSortOrder">
            Rendezés: {{ sortOrder === 'asc' ? 'A-Z' : 'Z-A' }}
        </button>
        <div class="row">
            <div class="col-md-4" v-for="person in sortedPeople" :key="person.id">
                <PeopleCard :person="person" />
            </div>
        </div>
    </div>
</template>

<style scoped>
button {
    display: block;
    margin: 0 auto 1rem;
}
</style>
