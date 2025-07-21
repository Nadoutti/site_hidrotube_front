/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // Inclua se estiver usando o Pages Router
  ],
  theme: {
    extend: {
      colors: {
        // Você pode adicionar cores personalizadas aqui, se desejar
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // Outras cores conforme a documentação do shadcn
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Configurações adicionais do shadcn, se necessário

      fontFamily: {
        calibri: ["var(--font-calibri)"],
        venus: ["var(--font-venus)"],
      },
    },
  },
  plugins: [],
};

