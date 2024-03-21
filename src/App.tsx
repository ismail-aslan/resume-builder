import { useState } from "react";
import { ConfigProvider, theme } from "antd";
import type { ConfigProviderProps, RadioChangeEvent } from "antd";
import enUS from "antd/locale/en_US";
import deDE from "antd/locale/de_DE";
import CustomLayout from "./components/Layout/CustomLayout";

type Locale = ConfigProviderProps["locale"];

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "light"
  );

  const changeTheme = () => {
    setIsDarkMode((previousValue) => !previousValue);
    localStorage.setItem("theme", !isDarkMode ? "light" : "dark");
  };
  const [locale, setLocal] = useState<Locale>(enUS);

  const changeLocale = (e: RadioChangeEvent) => {
    const localeValue = e.target.value;
    setLocal(localeValue);
  };
  return (
    <>
      <ConfigProvider
        locale={locale}
        theme={{
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        }}
      >
        <CustomLayout changeTheme={changeTheme}>Content here!</CustomLayout>
      </ConfigProvider>
    </>
  );
}

export default App;
