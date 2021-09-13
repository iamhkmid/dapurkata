import { AnimatePresence } from "framer-motion";
import AddressList from "./AddressList";
import * as El from "./ContentStateElement";
import MyAccount from "./MyAccount";
import Orders from "./Orders";

const ContentState = ({ menuId }) => {
  return (
    <El.Main>
      <El.Section>
        <AnimatePresence>
          {menuId === "my-account" && <MyAccount />}
          {menuId === "address-list" && <AddressList />}
          {menuId === "orders" && <Orders />}
        </AnimatePresence>
      </El.Section>
    </El.Main>
  );
};
export default ContentState;
