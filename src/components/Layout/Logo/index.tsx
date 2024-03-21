import { theme as antdTheme } from "antd";

const Logo = () => {
  const { useToken } = antdTheme;
  const { token: theme } = useToken();
  return (
    <div
      style={{ color: theme.colorPrimaryText }}
      className="inline-block font-agustina p-4 md:text-4xl font-bold transform -rotate-6 mt-4"
    >
      Ismail Aslan
    </div>
  );
};

export default Logo;
