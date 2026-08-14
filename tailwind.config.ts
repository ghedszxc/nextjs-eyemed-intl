import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      "2xs": "11px",
      xs: "12px",
      sm: "13px",
      base: ["14px", "20px"], // .875rem
      md: ["16px", "24px"],
      lg: ["18px", "30px"],
      xl: "22px",
      "2xl": ["24px", "32px"],
      "3xl": ["38px", "52px"],
      "4xl": "40px",
    },
    fontFamily: {
      nexa: ["var(--nexa)"],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        gradient: {
          blue: "#031434",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: () => ({
        DEFAULT: {
          css: {},
        },
        articleTextDesktop: {
          css: {
            p: {
              marginBottom: "20px",
            },
            "p:last-of-type": {
              marginBottom: "0px",
            },
            table: {
              border: "1px solid",
              borderCollapse: "collapse",
              marginBottom: "20px",
            },
            th: {
              border: "1px solid",
              padding: "0.5em",
            },
            td: {
              border: "1px solid",
              padding: "0.5em",
            },
            h3: {
              fontSize: "38px" /* 32px */,
              fontWeight: "normal",
              marginBottom: "35px",
              lineHeight: "57px",
              marginTop: "-16px",
            },
            h2: {
              fontSize: "38px" /* 32px */,
              fontWeight: "normal",
              marginBottom: "35px",
              lineHeight: "57px",
              marginTop: "-16px",
            },
          },
        },
        articleTextMobile: {
          css: {
            p: {
              marginBottom: "20px",
            },
            "p:last-of-type": {
              marginBottom: "0px",
            },
            table: {
              border: "1px solid",
              borderCollapse: "collapse",
              marginBottom: "20px",
            },
            th: {
              border: "1px solid",
              padding: "0.5em",
            },
            td: {
              border: "1px solid",
              padding: "0.5em",
            },
            h3: {
              fontSize: "32px",
              fontWeight: "normal",
              marginBottom: "35px",
              lineHeight: "43px",
              marginTop: "-15px",
            },
            h2: {
              fontSize: "32px",
              fontWeight: "normal",
              marginBottom: "35px",
              lineHeight: "43px",
              marginTop: "-15px",
            },
          },
        },
        list: {
          css: {
            ol: {
              listStyle: "auto",
              paddingLeft: "1em",
            },
            ul: {
              listStyle: "disc",
              paddingLeft: "1em",
            },
            li: {
              padding: "0.5em",
            },
          },
        },
        textColumnDesktop: {
          css: {
            table: {
              tr: {
                display: "flex",
                flexFlow: "row",
                justifyContent: "start",
                td: {
                  padding: "0 50px 0 0",
                  p: {
                    marginBottom: "15px",
                  },
                },
              },
            },
            h2: {
              fontSize: "18px",
            },
          },
        },
        textColumnMobile: {
          css: {
            table: {
              tr: {
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "start",
                td: {
                  padding: "0 0 40px 0",
                  p: {
                    marginBottom: "5px",
                  },
                },
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};

export default config;
