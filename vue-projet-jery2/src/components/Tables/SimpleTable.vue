<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Ville">{{ item.ville }}</md-table-cell>
        <md-table-cell md-label="Telephone">{{ item.telephone }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          name: "Dakota Rice",
          telephone: "$36,738",
          email: "Niger",
          ville: "Oud-Turnhout"
        },
        {
          name: "Minerva Hooper",
          telephone: "$23,738",
          email: "Curaçao",
          ville: "Sinaai-Waas"
        },
        {
          name: "Sage Rodriguez",
          telephone: "$56,142",
          email: "Netherlands",
          ville: "Overland Park"
        },
        {
          name: "Philip Chaney",
          telephone: "$38,735",
          email: "Korea, South",
          ville: "Gloucester"
        },
        {
          name: "Doris Greene",
          telephone: "$63,542",
          email: "Malawi",
          ville: "Feldkirchen in Kārnten"
        },
        {
          name: "Mason Porter",
          telephone: "$78,615",
          email: "Chile",
          ville: "Gloucester"
        }
      ]
    };
  }
};
</script>
