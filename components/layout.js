import Footer from "./footer";
import Header from "./header";
import TopBar from "./topBar";

export default function Layout({ children }) {
  return (
    <>
    <TopBar />
    <Header />
      {children}
      <Footer />
    </>
  )
}