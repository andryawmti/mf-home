<template>
  <AsCard>
    <AsCardSection first class="as-py-32 as-px-24">
      <div class="d-flex justify-content-between">
        <h2 class="as-text-32-bold">Layanan Anda</h2>
        <AsButtonOutline primary withIcon><i class="as-icon-plus as-icon-orange"></i><span>Beli Baru</span></AsButtonOutline>
      </div>
      <p class="as-text-18-semibold as-mt-16">Semua layanan yang telah anda beli akan ditampilkan di sini.</p>
      <div class="d-flex justify-content-between as-mt-32">
        <AsInput placeholder="Cari nama website, domain, dan add-on domain . . ." search />
        <AsButtonGroup>
          <AsButtonOutline :active="gridMode" @click="changeModeHandler(true)" shade><i class="as-icon-grid"></i></AsButtonOutline>
          <AsButtonOutline :active="!gridMode" @click="changeModeHandler(false)" shade><i class="as-icon-list"></i></AsButtonOutline>
        </AsButtonGroup>
      </div>
    </AsCardSection>
    <AsCardSection class="as-py-32 as-px-24">
      <AsCardSubSection first>
        <div v-if="gridMode" class="grid">
          <a class="g-col-12 g-col-md-6 g-col-lg-4 g-col-xl-3" href="#" v-for="n in 10" :key="n">
            <AsCardService 
              expireIn="2 Tahun 5 Bulan"
              label="Paket VPS Professional"
              status="Active"
              title="niagahoster.com"
              thumbnail="https://source.unsplash.com/248x180/?nature,water"
              thumbnailAlt="Service VPS"
            />
          </a>
        </div>
        <AsTable striped v-else>
          <thead>
            <tr>
              <th scope="col" class="as-text-16-bold">Produk & Layanan</th>
              <th scope="col" class="as-text-16-bold">Aktif hingga</th>
              <th scope="col" class="as-text-16-bold">Status</th>
              <th scope="col" ></th>
            </tr>
          </thead>
          <tbody>
            <AsTableRow v-for="service in services" :key="service.id">
              <th scope="row">
                <div class="d-flex gap-3 align-items-center">
                  <img src="https://picsum.photos/50/50?random=1" alt="Service Thumbnail"/>
                  <div>
                    <p class="as-text-20-bold">namadomain.com</p>
                    <p class="as-text-12 as-color-secondary-2">{{ service.title }}</p>
                  </div>
                </div>
              </th>
              <td>
                <p class="as-text-16-semibold">12 Desember 2020</p>
                <p class="as-text-12-semibold as-color-secondary-2">2 tahun 10 bulan</p>
              </td>
              <td>
                <AsLabel v-if="service.status == 'Active'" green>{{ service.status }}</AsLabel>
                <AsLabel v-else-if="service.status == 'Pending'" yellow>{{ service.status }}</AsLabel>
                <AsLabel v-else-if="service.status == 'Maintenance'" blue>{{ service.status }}</AsLabel>
                <AsLabel v-else-if="service.status == 'Suspended'" red>{{ service.status }}</AsLabel>
              </td>
              <td class="as-text-end">
                <AsButton primary sm>Kelola Layanan</AsButton>
              </td>
            </AsTableRow>
          </tbody>
        </AsTable>
      </AsCardSubSection>
      <AsCardSubSection class="as-mt-32 as-pt-32"></AsCardSubSection>
    </AsCardSection>
  </AsCard>
</template>

<script setup>
import {
  AsButton,
  AsButtonGroup,
  AsButtonOutline,
  AsCard,
  AsCardService,
  AsCardSection,
  AsCardSubSection,
  AsInput,
  AsLabel,
  AsTable,
  AsTableRow,
} from "@niagahoster/components"

import { ref } from 'vue'

const services = [
  {
    id: 1,
    title: 'Personal Unlimited Hosting',
    status: 'Active',
  },
  {
    id: 2,
    title: 'Domain',
    status: 'Pending',
  },
  {
    id: 3,
    title: 'Domain',
    status: 'Maintenance',
  },
  {
    id: 4,
    title: 'Domain',
    status: 'Suspended',
  },
];

const gridMode = ref(true)

const changeModeHandler = (isGrid) => {
  gridMode.value = isGrid
}
</script>
