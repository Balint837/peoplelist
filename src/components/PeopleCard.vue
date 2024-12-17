<script setup lang="ts">
import { useRouter } from 'vue-router';
import type People from '@/types/People';

const props = defineProps<{ person: People }>();

const router = useRouter();

function goToContactView() {
    router.push(`/emberek/${props.person.id}`);
}
</script>

<template>
    <div class="card mb-3" style="max-width: 540px;" @click="goToContactView">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="person.avatar" class="img-fluid rounded-start" alt="person.first_name" />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ person.first_name }} {{ person.last_name }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    cursor: pointer;
    transition: transform 0.2s;
}
.card:hover {
    transform: scale(1.05);
}
</style>
