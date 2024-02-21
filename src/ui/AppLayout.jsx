import { Outlet, useNavigation } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
// import Spinner from "./Spinner";

export default function AppLayout() {
  //   const navigation = useNavigation();

  //   const isLoading = navigation.state === "loading";
  return (
    <div className="bg-black w-full grid-rows-[auto_1fr_auto] grid  h-screen grid-cols-1">
      {/* {isLoading && <Spinner />} */}
      <Header />
      <div className="overflow-scroll">
        <main className="w-full h-full mx-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
