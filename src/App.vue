<template>
  <div>
    <h1>Home</h1>
    <div class="as-py--20 as-width--1296" style="margin: auto;">
      <AsCard border>
        <template #body>
          <div class="d-flex justify-content-between">
            <AsLabel green>Active</AsLabel>
            <AsLabel blue>Maintenance</AsLabel>
            <AsLabel red>Suspended</AsLabel>
            <AsLabel yellow>Pending</AsLabel>
            <AsLabel black>{{ expireIn }}</AsLabel>
          </div>
          <div class="as-py--20">
            <AsButton primary @click="jumpToCpanelHandler(105552)">cPanel</AsButton>
          </div>
        </template>
      </AsCard>
    </div>
    <div class="as-py--20 as-width--1296" style="margin: auto;">
      <AsButton link>Link</AsButton>
      <AsButton danger>Danger</AsButton>
      <AsButton dark>Dark</AsButton>
      <AsButton primary>Primary</AsButton>
      <AsButton secondary>Secondary</AsButton>
      <as-button outline danger>Outline Danger</as-button>
      <as-button outline dark>Outline Dark</as-button>
      <as-button outline primary>Outline Primary</as-button>
      <as-button outline secondary>Outline Secondary</as-button>
      <as-button primary sm>Button sm</as-button>
      <as-button primary md>Button md</as-button>
      <as-button primary lg>Button lg</as-button>
      <as-button primary disabled>Disabled</as-button>
    </div>
    <div class="as-width--1296" style="margin: auto;">
      <AsBannerSlider>
        <template #item1>
          <AsBannerSliderItem
            imageSrc="https://picsum.photos/400/100?random=1"
            imageAlt="Image One"
          >
            <h2 class="as-text--28-bold as-mb--16">
              Apa saja asalkan halal
            </h2>
            <p class="as-text--16 as-mb--24">
              Perkuat bisnis anda dengan memiliki website. Gunakan
              kesempatan promo ini untuk bisa mendapatkan website impian
              anda!
            </p>
            <AsButton primary class="as-width--245">
              Link Penawaran
              <i class="fas fa-angle-right"></i>
            </AsButton>
          </AsBannerSliderItem>
        </template>
        <template #item2>
          <AsBannerSliderItem
            imageSrc="https://picsum.photos/400/100?random=2"
            imageAlt="Image Two"
          >
            <h2 class="as-text--28-bold as-mb--16">
              Apa saja asalkan halal
            </h2>
            <p class="as-text--16 as-mb--24">
              Perkuat bisnis anda dengan memiliki website. Gunakan
              kesempatan promo ini untuk bisa mendapatkan website impian
              anda!
            </p>
            <AsButton primary class="as-width--245">
              Link Penawaran
              <i class="fas fa-angle-right"></i>
            </AsButton>
          </AsBannerSliderItem>
        </template>
        <template #item3>
          <AsBannerSliderItem
            imageSrc="https://picsum.photos/400/100?random=3"
            imageAlt="Image Three"
          >
            <h2 class="as-text--28-bold as-mb--16">
              Apa saja asalkan halal
            </h2>
            <p class="as-text--16 as-mb--24">
              Perkuat bisnis anda dengan memiliki website. Gunakan
              kesempatan promo ini untuk bisa mendapatkan website impian
              anda!
            </p>
            <AsButton primary class="as-width--245">
              Link Penawaran
              <i class="fas fa-angle-right"></i>
            </AsButton>
          </AsBannerSliderItem>
        </template>
      </AsBannerSlider>
    </div>
  </div>
</template>

<script setup>
import { capi, timeLeft } from "@niagahoster/memberarea-mf-shared";
import { computed } from "vue";
import { webComponent, AsBannerSlider, AsBannerSliderItem, AsButton, AsCard, AsLabel } from "@niagahoster/components";

webComponent.registerAll()

const expireIn = computed(() => {
  const { year, month, day } = timeLeft("2024-06-25");
  return `${year} Tahun ${month} Bulan ${day} Hari`;
});

const jumpToCpanelHandler = (serviceId) => {
  capi.cpanel.getJumpUrl(serviceId).then((data) => {
    console.log(data);
    window.open(data.url, "_blank");
  });
};
</script>

<style>
</style>
