import  Impressum from "@/app/_components/imprint";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";

export default async function Imprint() {

    return (
        <main>
          <Container>
            <Header />
            <Impressum
            firma="1. Simmeringer Schachklub"
            adresse="Grillgasse 14A"
            plzOrt="1110 Wien"
            land="Österreich"
            telefon="+43660 3534966"
            email="glattesmail@gmail.com"
            erlaubnisText={true}
            haftungsausschlussLinks={true}
            ihreRechteText={true}/>
          </Container>
        </main>
      );
}