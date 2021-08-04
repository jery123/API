<template>
  <div>

<!-- <button v-on:click="refresh()" > Actualiser  </button> -->
  <span v-for="user in users"
  v-bind:key="user.id"
  >


  {{ user.nom }}
{{ user.email }}
{{ user.ville }}
{{ user.telephone }}
    <!-- <md-table v-model="users" :table-header-color="tableHeaderColor"  >

 
      <md-table-row slot="md-table-row" slot-scope="{ user }">
        <md-table-cell md-label="Nom">{{ user.nom }}</md-table-cell>
        <md-table-cell md-label="Email">{{ user.email }}</md-table-cell>
        <md-table-cell md-label="Ville">{{ user.ville }}</md-table-cell>
        <md-table-cell md-label="Telephone">{{ user.telephone }}</md-table-cell>

  

      </md-table-row>
        
    </md-table> -->
     </span>
</div>
</template>

<script>


// import UserDataService from "../../services/UserDataService";

// export default {
//   name: "edit-profil-user",
  
//   data() {
//     return {
//       user: {
//         id: null,
//         nom: "",
//         prenom: "",
//         username: "",
//         email: "",
//         mdp:"",
//         experience:"",
//         ville:"",
//         telephone:"",
//         is_delete: false,
//         role: false
//       },
//       users: [],
//       submitted: false
//     };

//   },
//   mounted() {

//           UserDataService.getAll()
//         .then(response => {
//           this.users = response.data;
//           console.log(response.data);
//           this.submitted = true;
//         })
//         .catch(e => {
//           console.log(e);
//         });
        
//     },
    
//     newUser() {
//       this.submitted = false;
//       this.user = {};
//     }
  
// };






















import axios from 'axios';
// import UserDataService from "../../services/UserDataService";
export default {
  name: "simple-table",

 data() {
    return {
      users: [],
      // currentUser: null,
      // currentIndex: -1,
      // nom: "",
      // email: "",
      // ville: "",
      // telephone: ""
    };
  },
   mounted() {


  axios
  .get('http://localhost:8083/api/users')
  .then(response => ( this.users = response.data ))

    // retrieveUsers() {
    //  UserDataService.getAll()
    //     .then(response => {
    //       this.users = response.data;
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },

    // refreshList() {
    //   this.retrieveUsers();
    //   this.currentUser = null;
    //   this.currentIndex = -1;
    // },
    //   setActiveProduct(user, index) {
    //   this.currentUser = user;
    //   this.currentIndex = index;
    // },
     }

//   props: {
//     tableHeaderColor: {
//       type: String,
//       default: ""
//     }
//   },
//   data() {
//     return {
//       selected: [],
//       users: [
//         {
//           name: "Dakota Rice",
//           telephone: "$36,738",
//           email: "Niger",
//           ville: "Oud-Turnhout"
//         },
//         {
//           name: "Minerva Hooper",
//           telephone: "$23,738",
//           email: "Curaçao",
//           ville: "Sinaai-Waas"
//         },
//         {
//           name: "Sage Rodriguez",
//           telephone: "$56,142",
//           email: "Netherlands",
//           ville: "Overland Park"
//         },
//         {
//           name: "Philip Chaney",
//           telephone: "$38,735",
//           email: "Korea, South",
//           ville: "Gloucester"
//         },
//         {
//           name: "Doris Greene",
//           telephone: "$63,542",
//           email: "Malawi",
//           ville: "Feldkirchen in Kārnten"
//         },
//         {
//           name: "Mason Porter",
//           telephone: "$78,615",
//           email: "Chile",
//           ville: "Gloucester"
//         }
//       ]
//     };
//   }
};
</script>
