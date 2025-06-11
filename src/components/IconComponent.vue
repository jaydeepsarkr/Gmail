<template>
  <div
    v-if="iconString"
    id="IconComponent"
  >
    <div
      class="flex items-center justify-center rounded-full cursor-pointer w-10 h-10"
      :class="[hoverColor]"
      :data-tooltip-target="`tooltip-no-arrow-${iconString}`"
      data-tooltip-placement="bottom"
    >
      <component
        :is="resolvedIcon"
        :size="iconSize"
        :fillColor="iconColor"
      />
    </div>

    <div
      :id="`tooltip-no-arrow-${iconString}`"
      role="tooltip"
      class="inline-block absolute invisible text-xs z-10 py-1 px-2 font-medium text-white rounded-sm shadow-sm opacity-0 tooltip dark:bg-gray-600 delay-150"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
  import MenuIcon from "vue-material-design-icons/Menu.vue";
  import MagnifyIcon from "vue-material-design-icons/Magnify.vue";
  import TuneIcon from "vue-material-design-icons/Tune.vue";
  import HelpIcon from "vue-material-design-icons/Help.vue";
  import CogOutlineIcon from "vue-material-design-icons/CogOutline.vue";
  import AppsIcon from "vue-material-design-icons/Apps.vue";
  import ArrowLeftIcon from "vue-material-design-icons/ArrowLeft.vue";
  import TrashCanOutlineIcon from "vue-material-design-icons/TrashCanOutline.vue";

  export default {
    name: "IconComponent",
    props: {
      iconString: String,
      iconColor: String,
      iconSize: Number,
      text: String,
      hoverColor: String,
    },
    computed: {
      resolvedIcon() {
        switch (this.iconString) {
          case "menu":
            return MenuIcon;
          case "magnify":
            return MagnifyIcon;
          case "tune":
            return TuneIcon;
          case "help":
            return HelpIcon;
          case "cog":
            return CogOutlineIcon;
          case "apps":
            return AppsIcon;
          case "back":
            return ArrowLeftIcon;
          case "trash":
            return TrashCanOutlineIcon;
          default:
            return null;
        }
      },
    },
  };
</script>
