import TopSettingsBar from "./components/TopSettingsBar/TopSettingsBar";
import SidebarNavigation from "./components/SidebarNavigation/SidebarNavigation";
import StatusBar from "./components/StatusBar/StatusBar";
import PrimarySidebar from "./components/PrimarySidebar/PrimarySidebar";
import EditorBody from "./components/EditorBody/EditorBody";

function App() {
  return (
    <>
      <div className="grid grid-cols-mainLayoutCols grid-rows-mainLayoutRows min-h-screen">
        <TopSettingsBar />
        <SidebarNavigation />
        <StatusBar />
        <PrimarySidebar />
        <EditorBody />
      </div>
    </>
  );
}

export default App;
