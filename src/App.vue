<template>
  <AsLayout>
    <div class="container">
      <div v-if="hasService">
        <AsBannerSlider>
          <template #item1>
            <AsBannerSliderItem
              imageSrc="https://picsum.photos/400/100?random=1"
              imageAlt="Image One"
            >
              <h2 class="as-text-28-bold as-mb-16">Apa saja asalkan halal</h2>
              <p class="as-text-16 as-mb-24">
                Perkuat bisnis anda dengan memiliki website. Gunakan kesempatan
                promo ini untuk bisa mendapatkan website impian anda!
              </p>
              <AsButton primary class="as-width-245">
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
              <h2 class="as-text-28-bold as-mb-16">Apa saja asalkan halal</h2>
              <p class="as-text-16 as-mb-24">
                Perkuat bisnis anda dengan memiliki website. Gunakan kesempatan
                promo ini untuk bisa mendapatkan website impian anda!
              </p>
              <AsButton primary class="as-width-245">
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
              <h2 class="as-text-28-bold as-mb-16">Apa saja asalkan halal</h2>
              <p class="as-text-16 as-mb-24">
                Perkuat bisnis anda dengan memiliki website. Gunakan kesempatan
                promo ini untuk bisa mendapatkan website impian anda!
              </p>
              <AsButton primary class="as-width-245">
                Link Penawaran
                <i class="fas fa-angle-right"></i>
              </AsButton>
            </AsBannerSliderItem>
          </template>
        </AsBannerSlider>
        <SectionServices class="as-mt-48"/>
        <SectionRecommendedProducts class="as-mt-48"/>
      </div>
      <div v-else>
        <SectionProducts/>
      </div>

      <div class="as-mt-20 grid" v-if="false">
        <AsCard class="g-col-8" landscape v-for="n in 1" :key="n">
          <AsCardSection class="as-pl-24 as-py-28 as-pr-56" first>
            <h2 class="as-text-24-bold">Keamanan Website - <br/>Sertifikat SSL</h2>
            <p class="as-color-secondary-1 as-mt-16 as-text-12">Tingkatkan keamanan data dalam website Anda dengan <br/>enkripsi terbaru dari SSL</p>
            <AsButton class="as-mt-32" primary withIcon>
              <i class="as-icon-plus"></i><span>Beli Sertifikat SSL</span>
            </AsButton>
          </AsCardSection>
          <AsCardSection illustration>
            <AsImage fluid alt="SSL Illustration" src="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/ebooks/images/ssl-illustration-1646399913.svg"/>
          </AsCardSection>
        </AsCard>
        <AsCard blue class="g-col-4">
          <AsCardSection first class="as-p-20">
            <img
              class="d-block"
              src="https://source.unsplash.com/46x53/?nature,water"
              alt=""
            />
            <h3 class="as-text-16-semibold">Hello World</h3>
            <AsButton primary sm>Check Now</AsButton>
          </AsCardSection>
        </AsCard>
      </div>
    </div>

    <div v-if="false" class="container">
      <div class="as-py-20 as-width-248" style="margin: auto">
        <AsCardService
          expireIn="2 Tahun 5 Bulan"
          label="Paket VPS Professional"
          status="Active"
          title="niagahoster.com"
          thumbnail="https://source.unsplash.com/248x180/?nature,water"
          thumbnailAlt="Service VPS"
        ></AsCardService>
      </div>
      <div class="as-py-20 as-width-258" style="margin: auto">
        <AsCardProduct
          description="Tentukan nama domain baru dan berbagai pilihan ekstensi domain dengan harga terjangkau"
          image="https://source.unsplash.com/46x53/?nature,water"
          imageAlt="Product Domain"
          price="500.000"
          title="Domain"
        ></AsCardProduct>
        <AsCardProduct
          bordered
          class="as-mt-20"
          description="Tentukan nama domain baru dan berbagai pilihan ekstensi domain dengan harga terjangkau"
          image="https://source.unsplash.com/46x53/?nature,water"
          imageAlt="Product Domain"
          price="500.000"
          title="Domain"
        ></AsCardProduct>
      </div>
      <div class="as-py-20 as-width-258" style="margin: auto">
        <AsCard dashed>
          <AsCardSection first class="as-p-20">
            <AsCardSubSection first
              ><img src="https://source.unsplash.com/46x53/?nature,water" alt=""
            /></AsCardSubSection>
          </AsCardSection>
        </AsCard>
        <AsCard blue class="as-mt-10">
          <AsCardSection first class="as-p-20">
            <img
              class="d-block"
              src="https://source.unsplash.com/46x53/?nature,water"
              alt=""
            />
            <h3 class="as-text-16-semibold">Hello World</h3>
            <AsButton primary sm>Check Now</AsButton>
          </AsCardSection>
        </AsCard>
      </div>
      <div class="as-py-20 as-width-1110" style="margin: auto">
        <AsBreadcrumb class="d-inline-block">
          <AsBreadcrumbItem path="service">Layanan Anda</AsBreadcrumbItem>
          <AsBreadcrumbItem path="service/hosting"
            >Unlimited Hosting</AsBreadcrumbItem
          >
          <AsBreadcrumbItem active>Domain.com</AsBreadcrumbItem>
        </AsBreadcrumb>
      </div>
      <div class="as-py-20 as-width-1296" style="margin: auto">
        <AsCard bordered>
          <AsCardSection first class="as-p-24">
            <div class="d-flex justify-content-between">
              <AsLabel green>Active</AsLabel>
              <AsLabel blue>Maintenance</AsLabel>
              <AsLabel red>Suspended</AsLabel>
              <AsLabel yellow>Pending</AsLabel>
              <AsLabel black>{{ expireIn }}</AsLabel>
            </div>
            <div class="as-py-20">
              <AsButton primary @click="jumpToCpanelHandler(105552)"
                >cPanel</AsButton
              >
            </div>
          </AsCardSection>
        </AsCard>
      </div>
      <div class="as-py-20 as-width-1296 d-flex gap-3" style="margin: auto">
        <AsButton danger>Danger</AsButton>
        <AsButton dark>Dark</AsButton>
        <AsButton primary>Primary</AsButton>
        <AsButton secondary>Secondary</AsButton>
        <AsButton success>Success</AsButton>
      </div>
      <div class="as-py-20 as-width-1296 d-flex gap-3" style="margin: auto">
        <AsButton primary sm>Button sm</AsButton>
        <AsButton primary md>Button md</AsButton>
        <AsButton primary lg>Button lg</AsButton>
        <AsButton primary disabled>Disabled</AsButton>
      </div>
      <div class="as-py-20 as-width-1296 d-flex gap-3" style="margin: auto">
        <AsButtonText danger sm>Text</AsButtonText>
        <AsButtonText link md>Text</AsButtonText>
        <AsButtonText link md disabled>Text</AsButtonText>
      </div>
      <div class="as-py-20 as-width-1296 d-flex gap-3" style="margin: auto">
        <AsButtonOutline danger>Outline Danger</AsButtonOutline>
        <AsButtonOutline dark>Outline Dark</AsButtonOutline>
        <AsButtonOutline primary>Outline Primary</AsButtonOutline>
        <AsButtonOutline secondary>Outline Secondary</AsButtonOutline>
        <AsButtonOutline success>Outline Success</AsButtonOutline>
      </div>
      <div class="as-py-20 as-width-1296" style="margin: auto">
        <div class="d-flex gap-3">
          <AsButton primary withIcon
            ><i class="as-icon-arrow-left"></i><span>Icon Left</span></AsButton
          >
          <AsButton primary withIcon
            ><span>Icon Right</span><i class="as-icon-arrow-right"></i
          ></AsButton>
        </div>
      </div>
      <div class="as-py-20 as-width-1296" style="margin: auto">
        <div class="d-flex gap-3">
          <AsButtonOutline primary withIcon
            ><i class="as-icon-arrow-left"></i
            ><span>Icon Left</span></AsButtonOutline
          >
          <AsButtonOutline primary withIcon
            ><span>Icon Right</span><i class="as-icon-arrow-right"></i
          ></AsButtonOutline>
        </div>
      </div>
      <div class="as-py-20 as-width-1296" style="margin: auto">
        <div class="d-flex gap-3">
          <AsButtonIcon primary><i class="as-icon-refresh"></i></AsButtonIcon>
          <AsButtonIcon outline secondary
            ><i class="as-icon-upload"></i
          ></AsButtonIcon>
        </div>
      </div>
      <div class="as-py-20 as-width-1296" style="margin: auto">
        <AsButtonGroup>
          <AsButton shade>Button 1</AsButton>
          <AsButton shade>Button 2</AsButton>
          <AsButton shade>Button 3</AsButton>
          <AsButton shade>Button 4</AsButton>
        </AsButtonGroup>
      </div>
      <div class="as-py-20 as-width-1296" style="margin: auto">
        <AsButtonGroup>
          <AsButtonOutline shade>Button 1</AsButtonOutline>
          <AsButtonOutline shade>Button 2</AsButtonOutline>
          <AsButtonOutline shade>Button 3</AsButtonOutline>
          <AsButtonOutline shade>Button 4</AsButtonOutline>
        </AsButtonGroup>
      </div>
      <div class="as-py-20 as-width-1296" style="margin: auto">
        <AsButtonGroup>
          <AsButtonOutline shade><i class="as-icon-grid"></i></AsButtonOutline>
          <AsButtonOutline shade><i class="as-icon-filter"></i></AsButtonOutline>
          <AsButtonOutline shade><i class="as-icon-list"></i></AsButtonOutline>
          <AsButtonOutline shade><i class="as-icon-grid"></i></AsButtonOutline>
        </AsButtonGroup>
      </div>
      <div class="as-py-20 as-width-1296" style="margin: auto">
        <AsButtonGroup>
          <AsButtonOutline primary>Button 1</AsButtonOutline>
          <AsButtonOutline primary>Button 2</AsButtonOutline>
          <AsButtonOutline primary>Button 3</AsButtonOutline>
          <AsButtonOutline primary>Button 4</AsButtonOutline>
        </AsButtonGroup>
      </div>
      <div class="as-py-20 as-width-1296" style="margin: auto">
        <div class="d-flex gap-3">
          <AsButtonOutline secondary disabled>Button 1</AsButtonOutline>
          <AsButton secondary disabled>Button 2</AsButton>
        </div>
      </div>
    </div>
  </AsLayout>
</template>

<script setup>
import { capi, timeLeft } from "@niagahoster/memberarea-mf-shared";
import { computed } from "vue";
import {
  AsBannerSlider,
  AsBannerSliderItem,
  AsBreadcrumb,
  AsBreadcrumbItem,
  AsButton,
  AsButtonGroup,
  AsButtonIcon,
  AsButtonOutline,
  AsButtonText,
  AsCard,
  AsCardSection,
  AsCardSubSection,
  AsImage,
  AsLayout,
} from "@niagahoster/components";

import SectionServices from './components/SectionServices.vue'
import SectionProducts from './components/SectionProducts.vue'
import SectionRecommendedProducts from './components/SectionRecommendedProducts.vue'


// webComponent.registerAll()

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

const hasService = true
</script>

<style>
</style>
