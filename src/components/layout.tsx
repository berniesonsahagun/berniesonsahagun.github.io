import Footer from "./footer";
import Header from "./header";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <section className="bg-neutral-50 min-h-screen">
      <div className="container px-6 md:mx-auto py-12">
        <Header />
        {children}
        <Footer />
      </div>
    </section>
  );
}
