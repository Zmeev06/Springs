<script setup lang="ts">
import FadeLoader from "vue-spinner/src/FadeLoader.vue";
import { RouteMeta, RouterView, useRouter } from "vue-router";
import { Loader } from "@shared/ui/Loader";
import { ref } from "vue";
import { DesktopLayout, MobileLayout } from '@shared/ui/Layouts'
import { useWindowSize } from '@vueuse/core'

const router = useRouter();
const isShowLoader = ref(false);

const getTransitionName = (transitionMeta: RouteMeta) => {
  if (
    transitionMeta &&
    typeof transitionMeta === "object" &&
    transitionMeta.transition &&
    typeof transitionMeta.transition === "string"
  ) {
    return transitionMeta.transition;
  }
  return "fade";
};

router.beforeEach(() => {
  isShowLoader.value = true;
});
router.afterEach(() => {
  isShowLoader.value = false;
});

const { width } = useWindowSize()
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <DesktopLayout v-if="width >= 700">
      <template #content>
      <template v-if="Component">
        <Transition :name="getTransitionName(route.meta)">
          <Suspense>
            <template #default>
              <component :is="Component" />
            </template>
            <template #fallback>
              <FadeLoader color="#0019fb" />
            </template>
          </Suspense>
        </Transition>
      </template>
      <template v-if="isShowLoader">
        <Loader />
      </template>
    </template>
    </DesktopLayout>
    <MobileLayout v-else-if="width < 700">
      <template #content>
        <template v-if="Component">
          <Transition :name="getTransitionName(route.meta)">
            <Suspense>
              <template #default>
                <component :is="Component" />
              </template>
              <template #fallback>
                <FadeLoader color="#0019fb" />
              </template>
            </Suspense>
          </Transition>
        </template>
        <template v-if="isShowLoader">
          <Loader />
        </template>
      </template>
    </MobileLayout>
  </RouterView>
</template>
<style></style>
