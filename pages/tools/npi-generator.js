import Head from 'next/head';

export default function Home(props) {

  const calculateCheckDigit = (baseNumber) => {
    let newNPI = '',
      base = baseNumber,
      count = 0,
      newCount = 0;
    for (let i = base.length - 1; i >= 0; i--) {
      if (count % 2 == 0) {
        let tempNum = base.charAt(i) * 2;
        if (tempNum >= 10) {
          let tempRemainder = tempNum % 10;
          newCount = newCount + tempRemainder + 1;
        } else {
          newCount = newCount + tempNum;
        }
      } else {
        newCount = newCount + parseInt(base.charAt(i));
      }
      count++;
    }
    newCount = newCount + 24;
    var newMod = newCount % 10;
    var checkDigit = (10 - newMod) % 10;
    newNPI = base + checkDigit.toString();
    return newNPI;
  }
  const randomNPI = () => {
    const BASE_HEADER = 11;
    const currentTime = Date.now().toString().substr(-9);

    const baseNumber = `${BASE_HEADER}${Math.floor(parseInt(currentTime) / 100)}`;
    return calculateCheckDigit(baseNumber);
  }



  
  return (
    <div className="container">
      <Head>
        <title>NPI Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          NPI Generator
        </h1>
        <p className="description">
          Auto generate NPI based on current time
        </p>
        <div className="card" id="NPIContainer">
          <p>{randomNPI()}</p>
        </div>


      </main>

      <footer>
        Copyright © Phạm Bá Trung Thành 
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        .button {
          display: inline-flex;
          justify-items: center;
          border: 1px solid #0070f3;
          border-radius: 10px;
          padding: 0.5rem 2rem;
          background: #0070f3;
          color: #fafafa;
          cursor: pointer;
          transition: color 0.15s ease, background 0.15s ease;
        }
        .button:hover {
          color: #0070f3;
          background: #fafafa;
        }
        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
