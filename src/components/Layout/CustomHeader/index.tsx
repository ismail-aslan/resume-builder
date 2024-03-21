import { Switch } from "antd";
import { Header } from "antd/es/layout/layout";
import Logo from "../Logo";

type Props = {
  changeTheme: () => void;
};

const CustomHeader = ({ changeTheme }: Props) => {
  return (
    <Header className="flex items-center justify-between h-min w-full">
      <Logo />
      <Switch
        className="bg-blue-500"
        onChange={changeTheme}
        checkedChildren={"☀️ "}
        unCheckedChildren={" 🌜"}
        defaultChecked={localStorage.getItem("theme") === "dark"}
        size="default"
      />
    </Header>
  );
};

export default CustomHeader;
