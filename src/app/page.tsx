import Header from "@/app/components/Header/Header";
import Main from "@/app/components/Main/Main";

export default function Home() {
  return (
    <main className="xl:container mx-auto flex flex-col items-center justify-between px-5">
      <Header />
      <Main />
    </main>
  );
}
