import Head from "next/head";
import Script from "next/script";
import styles from "../styles/Home.module.scss";

export default function Home() {
  // Set the date we're counting down to
  var countDownDate = new Date("Jul 8, 2022 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);

  return (
    <div className={styles.container}>
      <Head>
        <title>Superlove</title>
        <meta
          name="description"
          content="01110011 01110101 01110000 01100101 01110010 01101100 01101111 01110110 01100101"
        />
        <meta
          name="keywords"
          content="superlove, super love, grupo, banda, rock, pop, electronico, mexico"
        />
        <meta name="author" content="Vannelo - https://www.vannelo.com" />
        <meta name="copyright" content="Vannelo - https://www.vannelo.com" />
        <meta property="og:title" content="Superlove" />
        <meta
          property="og:description"
          content="01110011 01110101 01110000 01100101 01110010 01101100 01101111 01110110 01100101"
        />
        <meta property="og:url" content="https://superlove.xyz" />
        <meta
          property="og:image"
          content="https://superlove.xyz/img/meta.jpg"
        />
        <meta
          name="image"
          property="og:image"
          content="https://superlove.xyz/img/meta.jpg"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/img/icon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WG0Q718YRG"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-WG0Q718YRG');
        `}
      </Script>

      <main className={styles.main}>
        <div className={styles.space} />
        <div className={styles.timer}>
          <p id="demo" className={styles.timer}></p>
        </div>
        <div className={styles.video}>
          <video muted autoPlay loop style={{ width: "100%" }}>
            <source src="video.mp4" type="video/mp4" />
          </video>
        </div>
        <div
          className={styles.text}
          data-text="01100101 01110011 00100000 01110000 01101111 01110010 00100000 01110100
        01101001"
        >
          01100101 01110011 00100000 01110000 01101111 01110010 00100000
          01110100 01101001
        </div>
        <div className={styles.social}>
          <a href="http://instagram.com/superlove.exe" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </a>
          <a href="http://facebook.com/superlovemx" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714Zm1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z"
              />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UC5wgZOnLAh8EsjBnEb-ZtsA"
            target="blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
          </a>
          <a href="https://tell.ie/superlove/QdpXZhYPd5G3" target="blank">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.30343 0.201802C5.43264 0.0725904 5.60789 0 5.79062 0H25.5081C29.0948 0 32 2.90522 32 6.49187V26.2063V26.2094C32 26.3921 31.9274 26.5674 31.7982 26.6966L26.6966 31.7982C26.5673 31.9274 26.3921 32 26.2094 32H6.49186C2.90498 32 0 29.0946 0 25.5051V5.79368V5.79064C0 5.79063 0 5.79063 0 5.79062C0 5.79008 6.351e-07 5.78954 1.90489e-06 5.789C0.00040345 5.61606 0.0645219 5.45809 0.170124 5.33731C0.180269 5.3257 0.190831 5.3144 0.201802 5.30343L5.30343 0.201802ZM26.6933 5.30625C26.5662 5.17782 26.391 5.10164 26.2032 5.10164H2.35236L6.07601 1.37799H25.5081C28.3337 1.37799 30.622 3.66626 30.622 6.49187V25.5173H7.46083L11.1867 21.7937H21.103L21.1047 21.7937L26.2063 21.7937C26.2301 21.7937 26.2536 21.7925 26.2768 21.7901C26.6242 21.7548 26.8953 21.4614 26.8953 21.1047V5.79368C26.8953 5.7827 26.895 5.77177 26.8945 5.76091C26.8872 5.60511 26.8282 5.46284 26.7342 5.35091C26.7212 5.33543 26.7075 5.32053 26.6933 5.30625ZM1.37799 6.48268H24.5368L20.8132 10.2063H10.8973C10.8967 10.2063 10.896 10.2063 10.8953 10.2063H5.79368C5.41316 10.2063 5.10469 10.5148 5.10469 10.8953V26.2063C5.10469 26.2103 5.10472 26.2142 5.10479 26.2182C5.10748 26.3762 5.1641 26.5248 5.26026 26.6424C5.28852 26.677 5.32021 26.7089 5.35494 26.7376C5.45914 26.8238 5.58911 26.8798 5.73156 26.8926C5.74304 26.8936 5.75452 26.8943 5.76601 26.8948C5.77685 26.8952 5.78769 26.8954 5.79852 26.8953H29.6507L25.924 30.622H6.49186C3.6665 30.622 1.37799 28.334 1.37799 25.5051V6.48268ZM11.5843 11.5843H20.4157V20.4157H11.5843V11.5843ZM6.48268 24.5429L6.48268 11.5843L10.2063 11.5843V20.8193L6.48268 24.5429ZM25.5173 20.4157L21.7937 20.4157V11.1807L25.5173 7.45706L25.5173 20.4157Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
}
