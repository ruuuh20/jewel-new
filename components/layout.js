import Footer from "./footer";
import Header from "./header";
import { useRouter } from 'next/router';

export default function Layout({ children, isExhibitPage  }) {

  return (
    <>
     <Header isExhibitPage={isExhibitPage} />      {children}
      <Footer />
    </>
  )
}