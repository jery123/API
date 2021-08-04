import Sidebar from "./SideBar.vue";
import SidebarUser from "./SideBarUser.vue";
import SidebarLink from "./SidebarLink.vue";
import SidebarLinkUser from "./SidebarLinkUser.vue";

const SidebarStore = {
  showSidebar: false,
  displaySidebar(value) {
    this.showSidebar = value;
  }
};

const SidebarPlugin = {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          sidebarStore: SidebarStore
        };
      }
    });

    Object.defineProperty(Vue.prototype, "$sidebar", {
      get() {
        return this.$root.sidebarStore;
      }
    });
    Vue.component("side-bar", Sidebar);
    Vue.component("side-bar-user", SidebarUser);
    Vue.component("sidebar-link", SidebarLink);
    Vue.component("sidebar-link-user", SidebarLinkUser);
  }
};

export default SidebarPlugin;
