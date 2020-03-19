import Layout from "../components/Layout";
import Markdown from "react-markdown";

export default function About() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <Layout>
        <div className="mt-4 container col-10 text-center">
          <h2>About</h2>
          <div className="markdown text-justify">
            <Markdown
              source={`
---
#### Covid19 - Indonesia
Website ini dibuat hanya untuk mengimplementasikan apa yang sudah saya pelajari dari dokumentasi [NextJs/learn](https://nextjs.org/learn/basics/getting-started).

Adapun website ini dibuat menggunakan:

> ![logo](https://s3-eu-central-1.amazonaws.com/yellow.studio/app/public/ckeditor_assets/pictures/138/content_heart-react.gif) [React](reactjs.org)
>
> ![logo](https://cdn.auth0.com/blog/logos/nextjs-logo.png) [NextJs](nextjs.org)
>
> ![logo](data:image/png;base64,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) [Bootstrap](getbootstrap.com)

Rest Api Covid19:
- [KawalCovid19 Summary](https://kawalcovid19.harippe.id/api/summary)

Referensi:
- [KawalCOVID19](kawalcovid19.id)
- [Discord-KawalCOVID19-Webhook](https://github.com/angeloanan/Discord-KawalCOVID19-Webhook)

Node Package Manager:
- [react-markdown](https://www.npmjs.com/package/react-markdown)
- [isomorphic-unfetch](https://www.npmjs.com/package/isomorphic-unfetch)

----

| Profile       |
| ------------- |
| ![foto](https://pbs.twimg.com/profile_images/1216180788909096960/xgByKsRu_400x400.jpg)  |
| Firman Abdul Jabar |
| Universitas Lambung Mangkura |
| [![drawing](https://pbs.twimg.com/profile_images/1157035760085684224/iuxTnT5g_400x400.jpg)](https://github.com/firmanjabar) [![drawing](https://upload.wikimedia.org/wikipedia/id/thumb/9/9f/Twitter_bird_logo_2012.svg/1259px-Twitter_bird_logo_2012.svg.png)](https://twitter.com/firmanjabar) |
`}
            />
          </div>
        </div>
      </Layout>
      <style jsx global>{`
        .markdown {
          padding: 20px;
          font-family: "Helvetica Neue", Helvetica, "Hiragino Sans GB",
            "Microsoft YaHei", "STHeiti", "SimSun", "Segoe UI",
            AppleSDGothicNeo-Medium, "Malgun Gothic", Arial, freesans,
            sans-serif;
          font-size: 15px;
          background: #ffffff;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }
        .markdown a {
          color: #3269a0;
        }
        .markdown a:hover {
          color: #4183c4;
        }
        .markdown h2 {
          border-bottom: 1px solid #e6e6e6;
          line-height: 1.6;
        }
        .markdown h6 {
          color: #777;
        }
        .markdown hr {
          border: 1px solid #e6e6e6;
        }
        .markdown pre > code {
          font-size: 0.9em;
          font-family: Consolas, Inconsolata, Courier, monospace;
        }
        .markdown p > code,
        .markdown li > code,
        .markdown td > code,
        .markdown h1 > code,
        .markdown h2 > code,
        .markdown h3 > code,
        .markdown h4 > code,
        .markdown h5 > code,
        .markdown h6 > code,
        .markdown blockquote > code {
          background-color: rgba(0, 0, 0, 0.07);
          font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
          font-size: 85%;
          padding: 0.2em 0.5em;
          border: 0;
        }
        .markdown blockquote {
          border-left: 4px solid #e6e6e6;
          padding: 0 15px;
          font-style: italic;
        }
        .markdown table {
          background-color: #fafafa;
          margin: 0 auto;
          text-align: center;
        }
        .markdown table tr th,
        .markdown table tr td {
          border: 1px solid #e6e6e6;
          padding: 5px 15px;
        }
        .markdown table tr:nth-child(2n) {
          background-color: #f2f2f2;
        }
        img[alt="drawing"] {
          height: 30px;
        }
        img[alt="logo"] {
          height: 50px;
        }
        img[alt="foto"] {
          height: 200px;
        }
      `}</style>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </>
  );
}
