<template>
  <div>
    <h2 class="as-text-20-bold">Layanan Anda</h2>
    <div class="grid as-mt-20">
      <AsCardProduct
        v-for="n in 3" :key="n"
        class="g-col-12 g-col-md-6 g-col-lg-4 g-col-xl-3"
        description="Tentukan nama domain baru dan berbagai pilihan ekstensi domain dengan harga terjangkau"
        image="https://source.unsplash.com/46x53/?nature,water"
        imageAlt="Product Domain"
        price="500.000"
        title="Domain"
      />
      <AsCard class="g-col-12 g-col-md-6 g-col-lg-4 g-col-xl-3" soft>
        <AsCardSection first class="as-p-20 d-flex flex-column align-items-center justify-content-center" style="height: 100%;">
          <AsButtonIcon secondary><i class="as-icon-plus"></i></AsButtonIcon>
          <p class="as-text-16-semibold as-mt-16">Order Layanan Lainnya</p>
        </AsCardSection>
      </AsCard>
    </div>
  </div>
</template>

<script setup>
import {
  AsButtonIcon,
  AsCard,
  AsCardProduct,
  AsCardSection,
} from "@niagahoster/components"
</script>
