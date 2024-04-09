import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={"flex flex-col"}>
      <div className={"min-h-screen"}>
        <Header />
        <main className="row-auto flex-col items-center justify-between p-24">
          <h1>Homepage</h1>
        </main>
      </div>
      <Footer />
    </div>
  );
}
