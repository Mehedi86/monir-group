
import Banner from "@/components/home/Banner";
import ClientsOpinion from "@/components/home/ClientsOpinion";
import Message from "@/components/home/Message";
import Notice from "@/components/home/Notice";
import Services from "@/components/home/Services";


export default function Home() {
  return (
    <>
    <Banner/>
    <Notice/>
    <Message/>
    <Services/>
    <ClientsOpinion/>
    </>
  );
}
