import { createContext, useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyles";
import GlobalFonts from "../../styles/fonts";
import { useCookies } from "react-cookie";

const themeConf = {
  light: {
    name: "light",
    background: {
      1: "#eef1f7",
      2: "#fdfeff",
      3: "#0a0c18",
    },
    color: {
      1: "#2b3544",
      2: "#434e5f",
      3: "#d34fa2",
      4: "#F3F4F6",
      5: "#ff5757",
      6: "#0da159",
    },
    border: {
      1: "#D1D5DB",
      2: "#acb3be",
      3: "#3f74c0",
    },
    boxShadow: "0 0 2px 1px #1d2e4225",
    borderRadius: "0.2rem",
    popup: "rgba(6, 13, 20, 0.877)",
    transactionStatus: {
      pending: { background: "#c0cfe47f", color: "#424953", border: "#bdc7d6" },
    },
    content: {
      cart: { color: { total: "#e94aaf" } },
      bookCard: {
        cover: { background: "#d2dcf1" },
        background: "#f7f9fc",
        color: {
          title: "#263b55",
          author: "#d34fa2",
          price: "#c6d0e0",
          cart: "#3f75c05b",
        },
        hover: {
          background: { cart: "#10143d" },
          border: "#a5bfe4",
        },
        active: { background: { cart: "#10143d" }, color: { cart: "#3f74c0" } },
      },
    },
    link: {
      color: "#3f74c0",
      hover: { color: "#28528c" },
    },
    input: {
      background: "#edf3fa",
      color: "#314660",
      base: {
        background: "#fdfeff",
        color: "#314660",
        focus: {
          background: "#f4f7fa",
          color: "#314660",
        },
      },
      logo: "#738baa",
      border: "#cedbef",
      label: "#263b55",
      searchIcon: "#88a9d8",
      placeholder: "#718fba",
      borderRadius: "0.2rem",
      dropdown: { icon: "#88a9d8", boxShadow: "0px 0px 20px -10px #263b55" },
      error: {
        background: "#ff5757",
        border: "#ff6c6c",
        color: "#ff6c6c",
        boxShadow: "0 0 0 2px #ff6c6c80",
      },
      focus: {
        background: "#f3f6fa",
        border: "#5f97e5",
        boxShadow: "0 0 0 2px #5c93e060",
        dropdown: { icon: "#5f97e5" },
      },
      disabled: { background: "#ecf1f6", color: "#98a9c0" },
    },
    button: {
      borderRadius: "0.2rem",
      primary: { background: "#3f74c0", color: "#e5eaf1" },
      success: { background: "#109a57", color: "#e5eaf1" },
      danger: { background: "#fa4343", color: "#e5eaf1" },
      warning: { background: "#fad843", color: "#e5eaf1" },
      list: { background: "#d6e1f1", color: "#263b55" },
      base: { background: "#fdfeff", color: "#263b55" },
      section: { background: "#d3e0ee", color: "#2f5994" },
      sidebar: { background: "#c0cfe47f", color: "#263b55" },
      hover: {
        primary: { background: "#2f5994", color: "#e5eaf1" },
        success: { background: "#06733e", color: "#e5eaf1" },
        danger: { background: "#d13232", color: "#e5eaf1" },
        warning: { background: "#d2b533", color: "#e5eaf1" },
        list: { background: "#c0cfe47f", color: "#2f5994" },
        base: { background: "#d2dae976", color: "#2f5994" },
        section: { background: "#b7c9db", color: "#2f5994" },
        sidebar: { background: "#c0cfe47f", color: "#2f5994" },
      },
      focus: {
        primary: { border: "#2762b4", boxShadow: "0 0 0 3px #3f75c085" },
        success: { border: "#109a57", boxShadow: "0 0 0 3px #109a5780" },
        danger: { border: "#fa4343", boxShadow: "0 0 0 3px #fa434385" },
        warning: { border: "#fad843", boxShadow: "0 0 0 3px #fad84385" },
        list: { border: "#acbcd4", boxShadow: "0 0 0 3px #e7f0fc" },
        base: { border: "#8da9c9", boxShadow: "0 0 0 3px #c6d5e5" },
        section: { border: "#a3b5ca", boxShadow: "0 0 0 3px #c6d5e5" },
        sidebar: { background: "#c0cfe47f", color: "#3f74c0" },
      },
      disabled: { background: "#b3c0d2", color: "#e9ecf1" },
    },
    loading: { 1: "#dee7f4", 2: "#bbc9db", img: "#9facbe" },
    navbar: {
      menu: {
        hover: { background: "#3f75c013" },
        active: { color: "#2f5994" },
      },
      dropdown: { border: "#ced6de" },
    },
    scrollbar: {
      v1: {
        track: "#cedbec",
        thumb: "#b3c9e7",
        hover: { thumb: "#8ea2be" },
      },
      v2: {
        track: "#eaeef3",
        thumb: "#b5c6db",
        hover: { thumb: "#a6b4c8" },
      },
    },
    footer: { background: "#f9fafb", color: "#263b55" },

    table: {
      hover: { background: "#e2eaf5", color: "#263b55", border: "#6f9ad1" },
      th: { background: "#fdfeff", color: "#263b55" },
      td: { background: "#fdfeff", color: "#263b55" },
      border: "#c8d0db",
    },
    screen: { sm: "540px", md: "960px", lg: "1025px" },
  },
  dark: {
    name: "dark",
    background: {
      1: "#151d29",
      2: "#1F2937",
      3: "#0a0c18",
    },
    color: {
      1: "#D1D5DB",
      2: "#a7b1c0",
      3: "#f06ec0",
      4: "#F3F4F6",
      5: "#ff5757",
      6: "#0da159",
    },
    border: {
      1: "#161c25",
      2: "#364155",
      3: "#545dba",
    },
    boxShadow: "0 0 2px 1px #0f13188e",
    borderRadius: "0.2rem",
    popup: "rgba(6, 13, 20, 0.877)",
    transactionStatus: {
      pending: { background: "#3b4458", color: "#c6d0e0", border: "#545d6b" },
    },
    content: {
      cart: { color: { total: "#f06ec0" } },
      bookCard: {
        cover: { background: "#465366" },
        background: "#2e3949",
        noImage: { background: "#1c2430", color: "#a8b8d1" },
        color: {
          title: "#f5f8fc",
          author: "#f06ec0",
          price: "#c6d0e0",
          cart: "#949cf657",
        },
        hover: {
          background: { cart: "#10143d" },
          border: "#71849e",
        },
        active: {
          background: { cart: "#10143d" },
          color: { cart: "#949cf6" },
        },
      },
    },
    link: {
      color: "#777fd6",
      hover: { color: "#545dba" },
    },
    input: {
      background: "#1e2330",
      color: "#a7b2c5",
      base: {
        background: "#262f3d",
        color: "#a7b2c5",
        focus: {
          background: "#222b38",
          color: "#a7b2c5",
        },
      },
      logo: "#545dba",
      border: "#151a24",
      label: "#c6d0e0",
      searchIcon: "#434e62",
      placeholder: "#454e62",
      borderRadius: "0.2rem",
      dropdown: { icon: "#455268", boxShadow: "0px 0px 20px -10px #0f1318" },
      error: {
        background: "#ff5757",
        border: "#d15050",
        color: "#e2a6a6",
        boxShadow: "0 0 0 2px #d150506d",
      },
      focus: {
        background: "#202936",
        border: "#545dba",
        boxShadow: "0 0 0 2px #7984f83b",
        dropdown: { icon: "#545dba" },
      },
      disabled: { background: "#222a38", color: "#31394d" },
    },
    button: {
      borderRadius: "0.2rem",
      primary: { background: "#545dba", color: "#c6d0e0" },
      success: { background: "#0da159", color: "#c6d0e0" },
      danger: { background: "#cf4040", color: "#c6d0e0" },
      warning: { background: "#fad843", color: "#e5eaf1" },
      list: { background: "#354058", color: "#c6d0e0" },
      base: { background: "#262f3d", color: "#c6d0e0" },
      section: { background: "#161d27", color: "#c6d0e0" },
      sidebar: { background: "#7b83dd18", color: "#c6d0e0" },
      hover: {
        primary: { background: "#42499d", color: "#c6d0e0" },
        success: { background: "#128a50", color: "#c6d0e0" },
        danger: { background: "#a82f2f", color: "#c6d0e0" },
        warning: { background: "#fad843", color: "#e5eaf1" },
        list: { background: "#7b83dd18", color: "#8992ee" },
        base: { background: "#1d2430", color: "#c6d0e0" },
        section: { background: "#0d121a", color: "#c6d0e0" },
        sidebar: { background: "#7b83dd18", color: "#808afc" },
      },
      focus: {
        primary: { border: "#9fa7fb", boxShadow: "0 0 0 3px #717adb59" },
        success: { border: "#048949", boxShadow: "0 0 0 3px #0da1598c" },
        danger: { border: "#c32121", boxShadow: "0 0 0 3px #cf40407b" },
        warning: { border: "#f5ce21", boxShadow: "0 0 0 3px #fad8437b" },
        list: { border: "#43547d", boxShadow: "0 0 0 3px #57658585" },
        base: { border: "#637ba5", boxShadow: "0 0 0 3px #3f506f" },
        section: { border: "#435472", boxShadow: "0 0 0 3px #3f506f" },
        sidebar: { background: "#7b83dd18", color: "#808afc" },
      },
      disabled: { background: "#1e2531", color: "#404e62" },
    },
    loading: { 1: "#1e2330", 2: "#141a24", img: "#a7b1c0" },
    navbar: {
      menu: {
        hover: { background: "#3b445482" },
        active: { color: "#9198e7" },
      },
      dropdown: { border: "#1c222c" },
    },

    scrollbar: {
      v1: { track: "#1c202e", thumb: "#191e27", hover: { thumb: "#161b24" } },
      v2: { track: "#222733", thumb: "#0f1116", hover: { thumb: "#07090c" } },
    },
    footer: { background: "#222731", color: "#c6d0e0" },
    table: {
      hover: { background: "#232935", color: "#c6d0e0", border: "#8086c8" },
      th: { background: "#1F2937", color: "#c6d0e0" },
      td: { background: "#1F2937", color: "#c6d0e0" },
      border: "#424957",
    },
    screen: { sm: "540px", md: "960px", lg: "1025px" },
  },
};

type ContextType = {
  theme: string;
  changeTheme: () => void;
};

export const ThemeContext = createContext<ContextType>(undefined);
const ThemeContextProvider = ({ children }) => {
  const isMounted = useRef(false);
  const [cookies, setCookie] = useCookies(["Theme"]);
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setCookie("Theme", newTheme, { maxAge: 30 * 24 * 60 * 60, path: "/" });
  };

  const setState = () => {
    const cookieTheme = cookies.Theme;
    if (!cookieTheme) {
      setTheme("light");
      setCookie("Theme", "light", { maxAge: 30 * 24 * 60 * 60, path: "/" });
    } else {
      setTheme(cookieTheme);
    }
  };

  useEffect(() => {
    if (isMounted.current === false) {
      isMounted.current = true;
      setState();
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      <GlobalStyle />
      <GlobalFonts />
      <ThemeProvider theme={themeConf[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
