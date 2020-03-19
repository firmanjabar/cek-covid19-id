import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <Layout>
      <div className="col-2"></div>
      <div className="container col-8 text-center">
        <h2 className="mt-4 pb-2">
          Covid19 - Indonesia (Source:{" "}
          <a href="https://kawalcovid19.id" target="_blank">
            KawalCovid19
          </a>
          )
        </h2>
        <h6 className="text-center pb-3">
          Pembaruan Terakhir<br></br>
          {props.date}
        </h6>

        <div className="row">
          <div className="m-1 col-lg card text-white bg-dark mb-3 font-weight-bolder">
            <div className="card-header">
              <strong>Terkonfirmasi</strong>
            </div>
            <div className="card-body">
              <h1 className="text-warning card-title">
                <strong>{props.confirmed}</strong>
              </h1>
            </div>
          </div>

          <div className="m-1 col-lg card text-white bg-dark mb-3 font-weight-bolder">
            <div className="card-header">Dalam Perawatan</div>
            <div className="card-body">
              <h1 className="text-info card-title">
                <strong>{props.activeCare}</strong>
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="m-1 col-lg card text-white bg-dark mb-3 font-weight-bolder">
            <div className="card-header">Sembuh</div>
            <div className="card-body">
              <h1 className="text-success card-title">
                <strong>{props.recovered}</strong>
              </h1>
            </div>
          </div>

          <div className="m-1 col-lg card text-white bg-dark mb-3 font-weight-bolder">
            <div className="card-header">Meninggal</div>
            <div className="card-body">
              <h1 className="text-danger card-title">
                <strong>{props.death}</strong>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2"></div>
    </Layout>
    <style jsx>{`
      h1 {
        font-size: 11vh;
      }
    `}</style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  </>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://kawalcovid19.harippe.id/api/summary");
  const data = await res.json();

  const date = new Date(data.metadata.lastUpdatedAt);
  const hmmm = date.toLocaleString("id-ID");

  return {
    confirmed: data.confirmed.value,
    death: data.deaths.value,
    recovered: data.recovered.value,
    activeCare: data.activeCare.value,
    date: hmmm
  };
};

export default Index;
