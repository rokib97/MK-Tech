module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF6F00",

          secondary: "#644F9C",

          accent: "#f4a300",

          neutral: "#404040",

          "base-100": "#F2F2F2",

          info: "#9CACED",

          success: "#137254",

          warning: "#F6BA13",

          error: "#E56179",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
