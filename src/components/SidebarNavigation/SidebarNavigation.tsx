import NavbarIcon from "./NavbarIcon";
import IconsSVGPaths from "./IconsSVGPaths";
import { useState } from "react";
function SidebarNavigation() {
  const [sidebarNavigationState, setSidebarNavigationState] = useState({
    openTap: 8,
  });

  function isOpenFunc(sectionNum: number) {
    if (sidebarNavigationState.openTap === sectionNum) return true;
    return false;
  }
  function changeIsOpenFunc(sectionNum: number) {
    setSidebarNavigationState((sidebarNavigationState) => {
      return {
        ...sidebarNavigationState,
        openTap: sectionNum,
      };
    });
  }
  return (
    <nav className="bg-[#0d1117] col-start-1 col-end-2 row-start-2 row-end-3 flex flex-col justify-between">
      <div>
        <div onClick={() => changeIsOpenFunc(1)}>
          <NavbarIcon isOpen={isOpenFunc(1)} svg={IconsSVGPaths.filesSVG} />
        </div>
        <div onClick={() => changeIsOpenFunc(2)}>
          <NavbarIcon isOpen={isOpenFunc(2)} svg={IconsSVGPaths.testSVG} />
        </div>
        <div onClick={() => changeIsOpenFunc(3)}>
          <NavbarIcon isOpen={isOpenFunc(3)} svg={IconsSVGPaths.searchSVG} />
        </div>
        <div onClick={() => changeIsOpenFunc(4)}>
          <NavbarIcon isOpen={isOpenFunc(4)} svg={IconsSVGPaths.extensionSVG} />
        </div>
        <div onClick={() => changeIsOpenFunc(5)}>
          <NavbarIcon isOpen={isOpenFunc(5)} svg={IconsSVGPaths.debugSVG} />
        </div>
        <div onClick={() => changeIsOpenFunc(6)}>
          <NavbarIcon isOpen={isOpenFunc(6)} svg={IconsSVGPaths.gitSVG} />
        </div>
      </div>
      <div>
        <div onClick={() => changeIsOpenFunc(7)}>
          <NavbarIcon isOpen={isOpenFunc(7)} svg={IconsSVGPaths.accountSVG} />
        </div>
        <div onClick={() => changeIsOpenFunc(8)}>
          <NavbarIcon isOpen={isOpenFunc(8)} svg={IconsSVGPaths.settingsSVG} />
        </div>
      </div>
    </nav>
  );
}

export default SidebarNavigation;
