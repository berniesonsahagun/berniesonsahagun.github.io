import { Link } from "react-router-dom";
import Card from "../components/card";
import Layout from "../components/layout";
import * as ROUTES from "../constants/routes";

export default function Home() {
  return (
    <Layout>
      <>
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Hi!👋🏼 I'm Bernie.
          </h1>
          <h2 className="text-4xl font-bold mb-6">
            I write <span className="bg-green-200"> clean codes</span> for your{" "}
            <span className="bg-red-200">dirty problems</span>.
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
          <span className="text-neutral-500 uppercase">
            Here's some of my works
          </span>
          <Card
            title="Instagram"
            description="Instagram Clone"
            link="/works/instagram"
            img="../public/test.jpg"
          />
          <Card
            title="Gradient Generator"
            description="Instagram Clone"
            link="/works/gradient-generator"
            img="../public/test.jpg"
          />
          <Card
            title="What's Cooking"
            description="Instagram Clone"
            link="/works/whats-cooking"
            img="../public/test.jpg"
          />
        </div>
        <div className="mb-16 text-center">
          <h4 className="text-2xl text-slate-900 mb-2 font-bold">
            Care for a coffee?
          </h4>
          <p className="mb-6 text-neutral-700">Drop me a message.</p>
          <div className="flex align-center justify-center gap-6">
            <a href="mailto:berniesonsahagun@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                width="30px"
                height="30px"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
            <a href="https://github.com/berniesonsahagun">
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px"
              >
                {" "}
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
              </svg>
            </a>
            <a href="https://leetcode.com/berniesonsahagun/">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LeetCode icon</title>
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
              </svg>
            </a>
          </div>
        </div>
      </>
    </Layout>
  );
}
