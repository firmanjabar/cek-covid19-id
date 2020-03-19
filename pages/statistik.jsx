import Layout from "../components/Layout";

export default function Statistik() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <Layout>
        <div className="mt-4 container col-12 text-center">
          <h2>Statistik Harian</h2>
          <h6>
            Iframe from:{" "}
            <a href="https://kawalcovid19.blob.core.windows.net/viz/statistik_harian.html">
              Statistik Harian KawalCovid19.id
            </a>
          </h6>
          <iframe
            allow
            allowfullscreen
            frameBorder="0"
            width="100%"
            src="https://kawalcovid19.blob.core.windows.net/viz/statistik_harian.html"
          ></iframe>
        </div>
      </Layout>
      <style jsx>{`
        .container {
          overflow: hidden;
        }
        iframe {
          overflow: hidden;
          min-height: 75vh;
        }
      `}</style>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </>
  );
}
