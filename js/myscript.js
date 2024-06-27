const { createApp } = Vue;

createApp({
  data() {
    return {
      inLoading: true,
      email: [],
    };
  },
  methods: {},
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((risposta) => {
          const result = risposta.data.response;
          console.log(result);
          this.email.push(result);
        })
        .catch(function (error) {
          console.log(error.message);
        });
    }
  },
}).mount("#app");
