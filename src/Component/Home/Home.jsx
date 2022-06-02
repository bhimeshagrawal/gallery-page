import "./Home.css";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import $ from "jquery";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      titleOpacity: 1,
      topButtonDisplay: "none",
    };
  }

  listenScrollEvent = (e) => {
    if (window.scrollY < window.innerHeight) {
      this.setState({
        titleOpacity: 1 - window.scrollY / 375,
      });
    }
    if (window.scrollY < 375) {
      this.setState({
        topButtonDisplay: "none",
      });
    } else {
      this.setState({
        topButtonDisplay: "inline",
      });
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  infoClicked = () => {
    if (document.getElementById("info-title").innerText == "Close") {
      document.getElementById("info-title").innerText = "Info";
      document.getElementById("info-details").style.display = "none";
    } else {
      document.getElementById("info-title").innerText = "Close";
      document.getElementById("info-details").style.display = "block";
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
    document
      .getElementById("return-to-top")
      .addEventListener("click", this.scrollToTop);
    document
      .getElementById("info-title")
      .addEventListener("click", this.infoClicked);
  }

  render() {
    return (
      <div>
        <a
          id="return-to-top"
          style={{ display: this.state.topButtonDisplay, cursor: "pointer" }}
        >
          Top
        </a>
        <div className="home-top">
          <p className="info-title" id="info-title">
            Info
          </p>
          <div className="info-details" id="info-details">
            <p>
              &#x2192;
              <a href="mailto:hello@nicholasceckhardt.com">
                hello@nicholasceckhardt.com
              </a>
              ,
              <a
                href="https://www.are.na/nicholas-eckhardt/studio-thrjcwmtmqo"
                target="_blank"
              >
                Studio
              </a>
            </p>
          </div>
          <div
            className="site-title"
            style={{ opacity: this.state.titleOpacity }}
          >
            <h1>
              Nicholas
              <br />
              C. Eckhardt
            </h1>
          </div>
        </div>
        <div className="container-fluid">
          <div className="work">
            {/* Set 1 - Image 1 and 2 */}
            <div class="row middle-xs mb-m">
              <div class="col-md-offset-1 col-lg-offset-1 col-xs-12 col-sm-7 col-md-5 col-lg-5">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/1_WS_V8h0420ry.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135582847"
                />
              </div>
              <div class="col-md-offset-1 col-lg-offset-1 col-lg-offset-top-8 col-xs-12 col-sm-6 col-md-5 col-lg-4">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/2_WS_xHY8vVBdN.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135581188"
                />
              </div>
            </div>
            {/* Set 2 - Image 3 and 4 */}
            <div className="row mb-m middle-xs">
              <div className="col-xs-12 col-sm-8 col-md-6 col-lg-5">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/3_WS_AGdTktAF3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135583697"
                />
              </div>
              <div className="col-xs-12 col-sm-8 col-md-5 col-lg-4">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/4_WS_YG6C89IPt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135582398"
                />
              </div>
            </div>
            {/* Set 3 - Image 5 */}
            <div className="row center-xs mb-m">
              <div className="col-xs-12 col-sm-8 col-md-6 col-lg-5">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/5_WS_nrlIcGLzX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135613994"
                />
              </div>
            </div>
            {/* Set 4 - Image 6 */}
            <div className="row center-xs mb-m">
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/6_WS_gG5qCKNxg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135615308"
                />
              </div>
            </div>
            {/* Set 5 - Image 7 and 8 */}
            <div class="row center-xs mb-m">
              <div class="col-xs-12 col-sm-7 col-md-4 col-lg-4">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/7_WS_nUcKuqh92h.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135614900"
                />
              </div>
              <div class="col-lg-offset-top-1 col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/8_WS_k_WZUv3rw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135616522"
                />
              </div>
            </div>
            {/* Set 6 - Image 9 */}
            <div className="row mb-m">
              <div className="col-md-offset-3 col-lg-offset-3 col-xs-12 col-sm-7 col-md-4 col-lg-3">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/9_WS_R6idOaEr0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135616959"
                />
              </div>
            </div>
            {/* Set 7 - Image 10 */}
            <div className="row end-xs">
              <div className="col-xs-12 col-sm-7 col-md-6 col-lg-5">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/10_WS_LqKo8oSuf.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135618132"
                />
              </div>
            </div>
            {/* Set 8 - Image 11 */}
            <div className="row mb-m end-xs">
              <div className="col-xs-12 col-sm-7 col-md-6 col-lg-5">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/11_WS_2E6KS3wc1j.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135673863"
                />
              </div>
            </div>
            {/* Set 9 - Image 12 */}
            <div className="row mb-m">
              <div className="col-md-offset-2 col-lg-offset-2 col-xs-12 col-sm-7 col-md-4 col-lg-3">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/12_WS_oMz_N0pG8.jpg?tr=rt-90"
                />
              </div>
            </div>
            {/* Set 10 - Image 13 */}
            <div className="row center-xs mb-m">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/13_WS_xYzNCJhZR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135672615"
                />
              </div>
            </div>
            {/* Set 11 - Image 14 */}
            <div className="row center-xs mb-m">
              <div className="col-lg-offset-3 col-md-offset-3 col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/14_WS_ddvnGTSOd.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135670885"
                />
              </div>
            </div>
            {/* Set 12 - Image 15 */}
            <div className="row center-xs mb-m">
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/15_WS_Z_BmmtjKF.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135672479"
                />
              </div>
            </div>
            {/* Set 13 - Image 16 and 17 */}
            <div class="row mb-m">
              <div class="col-lg-offset-1 col-md-offset-1 col-xs-12 col-sm-7 col-md-3 col-lg-3">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/16_WS_LKPxuQTeC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135703998"
                />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/17_WS_8AN7Hu1Yk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135705909"
                />
              </div>
            </div>
            {/* Set 14 - Image 18 and 19 and 20 */}
            <div class="row mb-m middle-xs center-xs">
              <div class="col-xs-12 col-sm-7 col-md-4 col-lg-4">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/18_WS_R25bJul_8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135707348?tr=w-300"
                />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/19_WS_O-QjeVKnP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135706143"
                />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/20_WS_XCT7Gdasl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135708473"
                />
              </div>
            </div>
            {/* Set 15 - Image 21 */}
            <div className="row mb-m">
              <div className="col-md-offset-2 col-lg-offset-2 col-xs-12 col-sm-12 col-md-11 col-lg-11">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/21_WS_HqKApiQmT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135738221"
                />
              </div>
            </div>
            {/* Set 16 - Image 22 */}
            <div className="overlay row center-xs">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/22_WS_ABpzoCTpp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135737852"
                />
              </div>
            </div>
            {/* Set 17 - Image 23 */}
            <div className="overlay row center-xs">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/23_WS_LoAzcra45.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135740512"
                />
              </div>
            </div>
            {/* Set 18 - Image 24 */}
            <div className="overlay row mb-m center-xs">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/24_WS_Xw0lb_out.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135741338"
                />
              </div>
            </div>
            {/* Set 19 - Image 25 and 26 */}
            <div class="overlay row mb-m">
              <div class="col-xs-12 col-sm-7 col-md-6 col-lg-6">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/25_WS_jabUDzAH_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135742471"
                />
              </div>
              <div class="col-lg-offset-top-half col-xs-12 col-sm-6 col-md-2 col-lg-2">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/26_WS_3RPAlyNVV.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135781701"
                />
              </div>
            </div>
            {/* Set 20 - Image 27 */}
            <div class="overlay row center-xs mb-m">
              <div class="col-xs-12 col-sm-7 col-md-8 col-lg-8">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/27_WS_-jWQxmQWn.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135783540"
                />
              </div>
            </div>
            {/* Set 21 - Image 28 */}
            <div className="overlay-2 row mb-s center-xs">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/28_WS_KALvcdHKF.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135786386"
                />
              </div>
            </div>
            {/* Set 22 - Image 29 */}
            <div className="overlay-2 row center-xs mb-m">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/29_WS_iZ5FSbT0-8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135788739"
                />
              </div>
            </div>
            {/* Set 23 - Image 30 */}
            <div className=" overlay-2 row center-xs mb-m">
              <div className="col-lg-offset-3 col-md-offset-3 col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/30_WS_SiTxdKQ35.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135787106"
                />
              </div>
            </div>
            {/* Set 24 - Image 31 */}
            <div class="overlay-2 row center-xs mb-m">
              <div class="col-xs-12 col-sm-7 col-md-8 col-lg-8">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/31_WS_T9zxMcBrN.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135790003"
                />
              </div>
            </div>
            {/* Set 25 - Image 32 */}
            <div class="overlay-2 row mb-m">
              <div class="col-xs-12 col-sm-7 col-md-10 col-lg-10">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/32_WS_MG0maMksP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135787434"
                />
              </div>
            </div>
            {/* Set 26 - Image 34 */}
            <div class="overlay row center-xs mb-m">
              <div class="col-xs-12 col-sm-7 col-md-6 col-lg-6">
                <LazyLoadImage
                  className="fade"
                  effect="opacity"
                  threshold={50}
                  src="https://ik.imagekit.io/hrgu22madpa/Nicholas-Gallery_Page/34_WS_lnxGuqDeP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654135788850"
                />
              </div>
            </div>

            <div className="copyright">
              <p>All photographs © Nicholas C. Eckhardt 2022</p>
            </div>
            <div className="mob-copyright">
              <p>© 2022</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
