<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item v-for="menu in menus" :key="menu.path">
      <template #icon>
        <mail-outlined />
      </template>
      {{ menu.name }}
    </a-menu-item>
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import { MailOutlined } from "@ant-design/icons-vue";
import { genMenuInfo } from "./utils/menu-util";

export default defineComponent({
  components: {
    MailOutlined,
  },
  setup() {
    const store = useStore();
    const current = ref<string[]>(["mail"]);
    const allowRouters = computed(() => store.getters[`user/allowRouters`]);
    const menus = computed(() => genMenuInfo(allowRouters.value).menus);
    console.log(menus);
    return {
      current,
      menus,
    };
  },
});
</script>
