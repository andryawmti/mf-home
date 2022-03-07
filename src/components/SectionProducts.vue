<template>
  <AsCard>
    <AsCardSection first class="as-pt-80 as-pb-48 as-px-24 as-text-center">
      <AsImage src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/ebooks/images/noserviceillustration-1646387570.svg" alt="No service illustration"/>
      <h2 class="as-text-40-bold as-mt-40">Belum Ada Layanan</h2>
      <p class="as-text-16-semibold as-color-secondary-2 as-mt-16">Anda belum memiliki satu-pun layanan di Niagahoster.<br/>Pilih layanan yang Anda butuhkan terlebih dahulu</p>
      <div class="grid as-mt-60" style="gap: 30px;">
        <AsCardProduct
          bordered
          class="g-col-12 g-col-md-6 g-col-lg-4 g-col-xl-3"
          description="Tentukan nama domain baru dan berbagai pilihan ekstensi domain dengan harga terjangkau"
          image="https://source.unsplash.com/46x53/?nature,water"
          imageAlt="Product Domain"
          price="500.000"
          title="Domain"
          twoSection
          v-for="n in 8" :key="n"
        />
      </div>
    </AsCardSection>
  </AsCard>
</template>

<script setup>
import {
  AsCard,
  AsCardProduct,
  AsCardSection,
  AsImage,
} from "@niagahoster/components"
</script>
