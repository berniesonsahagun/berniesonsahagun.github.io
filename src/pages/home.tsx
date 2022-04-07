import Card from "../components/card";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <>
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Hi!👋🏼 I'm Bernie.
          </h1>
          <h2 className="text-4xl font-bold mb-6">
            I write <span className="font-mono bg-slate-200"> clean codes</span>{" "}
            for your dirty problems.
          </h2>
          <p className="text-md text-neutral-700 mb-4">
            I’m a software engineer currently focused on front-end web
            development based in the Philippines. I have years of experience in
            shipping robust and responsive front-end websites and this made my
            eye keen for details.
          </p>
          <p className="text-md text-neutral-700">
            I am curious thus always yearning to learn new things and improve on
            what I currently have. I am also passionate about programming and
            making things work. I am also disciplined enough not to rely on just
            my passion and curiosity in getting things done.
          </p>
        </div>
        <div className="mb-16">
          <h2 className="text-slate-900 font-bold text-3xl">
            Here's some of my works
          </h2>
          <Card
            title="Instagram"
            description="Made using React, Tailwind, and Firebase: Here's your budget Instagram."
            link="https://instagram-clone-rouge-ten.vercel.app/"
            img="/img/instagram-clone.png"
          />
          <Card
            title="Gradient Generator"
            description="Vanilla JS for your quick gradient needs!"
            link="https://gradientgenerator.anggam.repl.co/"
            img="/img/gradient-generator.png"
          />
          <Card
            title="What's Cooking"
            description="Basically a randomizer for recipes using vanilla JavaScript."
            link="https://whatscooking.anggam.repl.co/"
            img="/img/recipe-generator.png"
          />
        </div>
        <div className="mb-16">
          <h2 className="text-slate-900 font-bold text-3xl">
            Something about my self
          </h2>
          <div className="mt-8 md:ml-8">
            <div className="flex gap-6 align-center mb-8">
              <div className="w-36">
                <h4 className="text-slate-900 font-bold text-xl">
                  Studies at:
                </h4>
              </div>
              <div>
                <span className="text-xl font-mono bg-slate-200">
                  University of the Philippines Los Baños
                </span>
              </div>
            </div>
            <div className="flex gap-6 align-center mb-8">
              <div className="w-36">
                <h4 className="text-slate-900 font-bold text-xl">
                  Tech Stack:
                </h4>
              </div>
              <div>
                <span className="text-xl font-mono bg-slate-200">React</span>,{" "}
                <span className="text-xl font-mono bg-slate-200">
                  TailwindCSS
                </span>
                ,{" "}
                <span className="text-xl font-mono bg-slate-200">Firebase</span>
                , <span className="text-xl font-mono bg-slate-200">NodeJS</span>
                ,{" "}
                <span className="text-xl font-mono bg-slate-200">GraphQL</span>{" "}
              </div>
            </div>
            <div className="flex gap-6 align-center mb-8">
              <div className="w-36">
                <h4 className="text-slate-900 font-bold text-xl">I am a:</h4>
              </div>
              <div>
                <span className="text-xl font-mono bg-slate-200">
                  Leetcoder
                </span>
                ,{" "}
                <span className="text-xl font-mono bg-slate-200">
                  Book Reader
                </span>
                ,{" "}
                <span className="text-xl font-mono bg-slate-200">
                  Programmer
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
