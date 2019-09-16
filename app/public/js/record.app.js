var recordApp = new Vue({
  el: '#patientRecordApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => { recordApp.patients = json})
      //.then(function(response){waitingApp.patients = response.json()});

      // Means the same at this
      // fetch('https://randomuser.me/api/')
      // .then(function(response) {return response.json()})
      // .then(function(json) {waitingApp.people = json});

    }
  },
  created() {
    this.fetchPatients();
  }

})
