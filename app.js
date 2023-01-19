var app = new Vue({
  el: "#app",
  data: {
    msg: "Hello World",
    url: "https://in.linkedin.com/",
    name: "",
    surname: "",
    available: false,
    success: false,
    error: false,
    names: ["Hello", "World", "whatever"],
  },
  methods: {
    changemsg: function () {
      this.msg = "Hello Vue";
    },
  },
});
