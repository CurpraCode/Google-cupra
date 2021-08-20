import Avatar from "../components/Avatar";
import Head from "next/head";
import GoSearch from "../components/GoSearch";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google-Curpra</title>
        <meta
          name="description"
          content="A google search clone built with nextjs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Avatar url="https://lh3.googleusercontent.com/ogw/ADea4I4sYM_TfYV7jnfcGwoCizgsrdrIrodg1KPKqm73QA=s32-c-mo" />
      <GoSearch url="https://www.google.com.ng/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
      

      <Footer />
    </div>
  );
}
