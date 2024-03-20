import { useState } from "react";
import { ConfigProvider, theme, Button, Card, Radio } from "antd";
import type { ConfigProviderProps, RadioChangeEvent } from "antd";
import enUS from "antd/locale/en_US";
import deDE from "antd/locale/de_DE";

type Locale = ConfigProviderProps["locale"];

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
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
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginRight: 16 }}>Change locale of components:</span>
          <Radio.Group value={locale} onChange={changeLocale}>
            <Radio.Button key="en" value={enUS}>
              English
            </Radio.Button>
            <Radio.Button key="cn" value={deDE}>
              German
            </Radio.Button>
          </Radio.Group>
        </div>
        <Card style={{ width: "max-content" }}>
          <Button onClick={handleClick}>
            Change Theme to {isDarkMode ? "Light" : "Dark"}
          </Button>
        </Card>
      </ConfigProvider>
    </>
  );
}

export default App;
