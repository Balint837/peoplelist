<template>
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container">
			<span class="navbar-brand" >Emberek</span>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				
					<!-- Kiszedtem a linkeket hisz feladat szerint már nem élnénének. -->
					 
					<!-- <li class="nav-item">
						<RouterLink class="nav-link" to="/">Nyitó oldal</RouterLink>
					</li> -->
          <li class="nav-item">
						<RouterLink class="nav-link" to="/emberek">Emberek</RouterLink>
					</li>
          <!-- <li class="nav-item">
						<RouterLink class="nav-link" to="/keszitette">Készítette</RouterLink>
					</li> -->
				
				</ul>
			
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">

</script>

<style scoped></style>