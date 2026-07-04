import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <h1>CareerPilot AI</h1>

        <p>
          Your AI Career Mentor
        </p>

        <button>Get Started</button>
      </main>

      <Footer />
    </>
  );
}

export default Home;