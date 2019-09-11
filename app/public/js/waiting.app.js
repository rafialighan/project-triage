var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => {waitingApp.person = json});
    }
  },
  created: function() {
    this.fetchPatients();
  }
})
