<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="ville">{{ item.ville }}</md-table-cell>
        <md-table-cell md-label="Telephone">{{ item.Telephone }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
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
          id: 1,
          name: "Dakota Rice",
          email: "Dakota.Rice@gmail.com",
          ville: "Niger",
          Telephone: "Oud-Turnhout"
        },
        {
          id: 2,
          name: "Minerva Hooper",
          email: "$23,738",
          ville: "Curaçao",
          Telephone: "Sinaai-Waas"
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          email: "$56,142",
          ville: "Netherlands",
          Telephone: "Overland Park"
        },
        {
          id: 4,
          name: "Philip Chaney",
          email: "$38,735",
          ville: "Korea, South",
          Telephone: "Gloucester"
        }
      ]
    };
  }
};
</script>
