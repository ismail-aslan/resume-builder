import { ReactNode } from "react";
import { Layout } from "antd";
import CustomHeader from "../CustomHeader";

const { Footer, Content } = Layout;

type Props = {
  changeTheme: () => void;
  children: ReactNode;
};
const CustomLayout = ({ changeTheme, children }: Props) => {
  return (
    <Layout className="h-screen">
      <CustomHeader changeTheme={changeTheme} />
      <Content>{children}</Content>
      <Footer style={{ textAlign: "center" }}>
        Created By Ismail ASLAN {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default CustomLayout;
