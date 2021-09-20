import { useContext, useState } from "react";
import { AdminNavCtx } from "../../../../../../contexts/AdminNavCtx";
import PopUpHeader from "../../../../../otherComps/PopUpHeader";
import FormData from "./FormData";
import SideMenu from "./SideMenu";
import * as El from "./UpdateElement";

const Update = ({ userId }) => {
  const { dispatch } = useContext(AdminNavCtx);
  const [navState, setNavState] = useState(0);
  const [showSideMenu, setShowSideMenu] = useState(true);

  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <El.Section>
        <PopUpHeader
          title="Update"
          close={() => dispatch({ type: "CLOSE_POPUP" })}
          withSideMenu={{ showSideMenu, setShowSideMenu }}
          themeToggle={true}
        />
        <El.Body>
          <SideMenu
            navState={navState}
            setNavState={setNavState}
            showSideMenu={showSideMenu}
          />
          <El.Content showSideMenu={showSideMenu}>
            {navState === 0 && <FormData userId={userId} />}
          </El.Content>
        </El.Body>
      </El.Section>
    </El.Main>
  );
};

export default Update;