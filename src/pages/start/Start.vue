<script setup lang="ts" name="Home">
import { useMounted } from '@vueuse/core';

import emitter from '@/utils/emitter';

const isMounted = useMounted();

emitter.on('foo', (e) => {
  console.log(e);
});

emitter.emit('foo', 'hello');
</script>

<template>
  <section>
    <h1 class="text-white">{{ isMounted }}</h1>
  </section>
</template>
