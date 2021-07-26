<template>
  <div>
    <VmHero></VmHero>
    <VmProductsList></VmProductsList>
  </div>
</template>

<script>
import VmProductsList from '@/components/product/products_list/ProductsListContainer';
import VmHero from '@/components/product/hero/Hero';

export default {
  name: 'index',
  components: {
    VmProductsList,
    VmHero
  }
};
</script>
