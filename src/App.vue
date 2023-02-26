<script setup>
  import {RouterView, RouterLink} from "vue-router"
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" 
      app
      :image="require('@/assets/images/sidebar2.jpg')">
          <v-list-item 
            title= "Nigeria 2023" 
            subtitle="General Elections"
            prepend-icon= "mdi-poll" 
            color="green-darken-5"
            >
          </v-list-item>
      <v-divider></v-divider>
      <v-list>
        
           <v-list-item

          v-for="item in items"
          :title="item.title"
          :prepend-icon="item.icon"
          :to="item.route"
          link
        >
      
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar color="blue-grey-darken-2" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Election Monitoring System</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/' },
          { title: 'States', icon: 'mdi-map-marker', route: '/states' },
          { title: 'Presidential', icon: 'mdi-account-circle-outline', route: '/presidential'  },
          { title: 'Senate', icon: 'mdi-account-circle-outline',route: '/senate'  },
          { title: 'House of Assembly', icon: 'mdi-account-circle-outline',route: '/house'  },
          { title: 'Collation', icon: 'mdi-vote',route: '/collation'  },
          { title: 'About', icon: 'mdi-help-box',route: '/about'  },
        ],
      logos: [
        {id:'1',file_name: "/lp_logo.png"},
        {id:'2', file_name: "/pdp_logo.png"},
        {id:'3', file_name: "/apc_logo.png"}
      ]
     }),
  }
</script>