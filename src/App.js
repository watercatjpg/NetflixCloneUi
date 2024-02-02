import React from "react";
import ContinueWatching from "./ContinueWatching";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css"; // Import your CSS file
import "./Header.js"; // Import your CSS file
import Kdrama from "./Kdrama.js";
import WTvShows from "./WTvShows.js";
import Thriller from "./Thriller.js";

const constTvShows = [
  {
    title: "CBML",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABTLxtDyDX49lZD_RXnEpf3nuC7YnGOqD8NQV58e7uEXop55yJSmDjE6iNsNfAWD-LZ3ZyJkBSeEanmmC6dhgrpTIbC61RvuWPBpVnkj_Zo3UOf7dkmGfrBoLp6chAXu6mvRmj6ySs5L0NCM2pDI41Tb9qyUKvEZ_zUq4aqFijGAUeYS64NFZCG8M-OquTdyUKO8NxmG3SyO-b4AgeedA2Y09Lr6EbnRIL18zhiEDFvzQPZaQ1t9BMauymncJHODSfoUyA48qBaWYbj7anefmwYZh7tG7ElzYoy4NgAp6wQ6c9hGno-fHVE-HEHBd_1toQwNuurWaiFldpkr_XqrSck32ym7M5APE1uBkSqy1aN6mS6qzyRDdfZss8N9w1gnwZNHrqBDgc4tpy4JriVYoEUHTwZmvA2pdE1nHuLeUH34DBTJoCBoN6YNaynmUrrbjaEsCvrZDlG8CDSTHldArNFgLZGXksvBYifWtBOk.webp?r=fbc",
  },

  {
    title: "QC",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABeoxhWu7UXKSvcdOb-TEzx2j3dOwRs8IOyJniIGwr7_hmW130CCudtU4atOf6vd8QGjHBCApgb8KbSmNSyQhl6f_LtrCV0gVp1lcDDcvpZKPXc49hC-jHo1-n_xt4eI4ihYY.jpg?r=238",
  },

  {
    title: "YS",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABR9l152ide0Mf6PElkIRyCTOQFHWFfwzuhfUt8_o98jUrK5WionKKC2Qiv4d4XtX1e1UmP5YbqIFUtfLCsjsz3bcE-gbsra16Yo.webp?r=722",
  },

  {
    title: "Badland Hunters",
    imageSrc:
      "https://occ-0-2586-325.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABQtoc3u8TVxBjMyhSlWHh62TplW_ElmkDfAUiXfd_mpEIIvUHKcSzTpUgB_kS9JcdJ3TeDYp4X1MjnnTPF2sOoeLkRr8tk-tQ6TUbKWy7H7WkhYGRd1k5-IX1eEQ_SAv0weAdBTgxZgUDjZh13QPVF_WYS71bT9NtLHOlhbiDMy-fCk0utIqbPdYeqHy6O6Rl02C7q1VS2k7qo10ZYSmat4OikN6dOhMHADQmIq8dgl240218ppIlGoxrkYrHRQ1sfSOqi7sSm8_YQEHa7Vq1hPm0dEBUjSbmhiWvu8oyG_BGOswmdG8__BAYVn0X-JWG5GCOsDzE5DtHLtcKz5R2LupOB4qvE0RIctbgLBAP3vuSq6BJ1M.jpg?r=90a",
  },

  {
    title: "My Demon",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABXWGMkxslrxYHwvmd4xz-mUphKJYL7fiXPWOBGMuyUVJUJKWH7TCnsNQZiw5GLu64spBq_hc974mAfhirVW7RjPwqQEaColaDyU8eyRReBFXfTTYkbU0UBpnZ9x2pOzuZgSW9UdzKkpngeju1WiZXSqRtBRyFqIWVOz1mXJ6gNlmOlos-omK6mke87tSo_5VcZcexferQm795pRjO_qI5uWjYvU-BJImpe3FFCUx21tQA8fmgO3nO5n0-HbinfB-gvNhofvPZtfYFyNNG9yN5z6oE6Dokr7frq2cKSVpAjKfEeub2PDtucujTPPnhSmPEBalVGx6WTfiggdMZo7MlJPMrFkGt0xJDuy05_NdZ03CaqGS9Vr4jm0bJJPq5dXY70j9BHPvXv72pSoG-ulXugr67rkaQn7UiwfAbUcQNt3yNPc1kLPBgC3k_DqSKkajGsCeEmuY9cM9eCISX8p11g7GlsPtG-LuoDxLPTqdJwC5EVLsJtiA2IfwqrX79iivDkk.jpg?r=002",
  },

  {
    title: "Gilmore Girls",
    imageSrc:
      "https://occ-0-1762-64.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABQPnYMdV7wVkiMf0EXLfKYj5_q7YoIqfLBfAtQuYOcS2Uosgsw-IJMm6Cm63H_XLBEAAgh_4vv7OcQOaQwwxkUSAe0nifzGEeDE.webp?r=cf1",
  },
  {
    title: "Gilmore Girls",
    imageSrc:
      "https://occ-0-1762-64.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABYwrnm1pn3nBSRSeW36qYLjtoPuYDaPnCL6ElD_TvREdZc6wavMDx5go3OdOnztxse_RhknQdsq4fxeGsAOpk2Gb6SiXQ4uupqEND6KQwaiAnJQxHCVt2GfDuFbfCW0FWcu4.jpg?r=3ae",
  },
];

const constKdrama = [
  {
    title: "CLOY",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABXaD9BydvhCPlaClXYwDMZom9Jwj-eyvk69TPEw69WskxYFsrNJ6whWsI7UWai6pcpWEuey18EwXjaW8bir_i0RQPbk5JHzSRMBErKGSBDk8tAyuC8EjYe5Ub4pgKQCv9rLX.jpg?r=443",
  },

  {
    title: "BTIMFL",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABRxkNZ_IQKsjvVuwBjPu176vBgLsmXLP8hfQT5pT9HJwE7S8k5uwL-_HO6AdnjIcDkMP75x0_CO6NIpXXf5TSIC54JHg-KaxRDoYdXromE5POfGkz-ka49DDh6EOTC3fDskt.jpg?r=1a1",
  },

  {
    title: "Reply 1988",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABXXjsSkTkeT08BRuqadwHP_fld-lHVUNZEJUMe7fu9c2ozTE3jrptcxCmmHWi77uxRDMeNv64xtYA0HyiaSJCofabqOcxo740UA.webp?r=9be",
  },

  {
    title: "Our Beloved Summer",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABRQvNQuJTPDomqKURl6DKAmT6YwEngqbLsTbk5hr9r-eqlr22a26_RsO8RDQ--JpPBBr9eEj5v7B43FFHFqLs8DCWP7_bykmw0jj2Rd-70iDpuP5VoiVNIeaUgfBftmq5aBk.jpg?r=67b",
  },

  {
    title: "20th Century Girl",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABe96Br2gfeb0LijUyKpRHjSJ3ikycqDSTT2u0CXa6r1U4HM9MCh5-Q-8uk5dlL8Fo8a7FlZWgb9oCndRSSaF9JOAkwcuyNFuldHLR_L5LMN4SG5uYYbk7ZRSpcQCjeY9uNiO.jpg?r=48f",
  },

  {
    title: "Alchemy of Souls",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABQh9_yJGqe_bcWKYPbpYcF2AOo5Qtn2aCbiq7-pzWImlSJkM0c4O2WqnwXiQ0Txnlo7Y79OCmrGes9RoS6y3X8nr7SzbCB56LWc.webp?r=780",
  },
  {
    title: "IONTBO",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABdkKF9k0rC7NgYYy0WKJVF17qb_e1O4Bh07zzI8fsjUP-6QZu8Ejzr9KJ46PWUyDvu8lbqnR_Mb8ohgFGwGn6sLkwdxIdBXGmjtPjDf6RxGgPTepQ7mU7Fo_adfjD53aYigd.jpg?r=5ad",
  },
];

const constWTvShows = [
  {
    title: "TBBT",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABZXkog4KsaYdrBJXwM1lHXnjjl3JDcZkAbKDiuHJRpvphpkoYdylSsVJmlHI7qaDafBaunSV2ZvkWkV6D_2WMwQ_qvSTtopjEqY.webp?r=248",
  },

  {
    title: "Suits",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABT0HQcVj5mEhs_SsjOHExAz-y-Mq5x4ysVWZONNw3IPIzXIIphBR7sBB48EPRzaZRKhS9B1eN4G8tvJCVlb_SjrPeBgtt0Z38pE.webp?r=bd5",
  },

  {
    title: "Shameless",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABUB4-NsJ_uhDZUfS5BuUyMMHAg7x_jnK6wMWcMktzvIxUS8-JAt0-As949eNPNKEI4jqUodmO8F9__IdwZteg4By77TDyGUcuUc.webp?r=925",
  },

  {
    title: "Friends",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABX9u9j2MTtshAq_iNL3EjxXxd8WvI1iJTV4-gfxZ3ynGYG1k7C5ya2PRnxuy_75PF7SbuBWvBOToSN_e_LNqVOiRIu94X8U1T_4.webp?r=75b",
  },

  {
    title: "The Good Place",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABeQ7M-_kGfRpN0POuTHn6szr1BE2ZmprVtrt0LSQYgIF_jp1AbGFDOQZijt_ZyVPCSVaTpvXHmyGndRzbjWpcPopTUy-xa402PE.webp?r=6e3",
  },

  {
    title: "B99",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABcr8oF5sV1Q3HeR43S1D_VJborcMm9b5a1RgzvN92M8AXVqKR31wMWPs5ZRVrKC3Ax-SSZNXYIBuZomS-FY2isybfCwRFwevkE8.webp?r=a8a",
  },
  {
    title: "SC",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABfbji1KRMO2WVJ4xRVss0fGla3Pt0i0Zalxu-1T7vdr1DyDPj-ixVW6prLmrN5_bM2r05lnLipEt_DSatAREUQDH-Q1fcTUbvDU.webp?r=de4",
  },
];

const constThriller = [
  {
    title: "TBBT",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABZQhxdnz0E77VmB_lPIUKjUWpaZ0YBkP2C8UPvQcU-iTUdIYpmNDnElUMmHXVf0C1KdP9Uag02nTVN74ObDs4uqM_2_MR5DkLa5mqHLHSVTYo9HarQX9Uos5EVdNWzokcj9o.jpg?r=f62",
  },

  {
    title: "BB",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABYIWwzftYFhohxbceaZGPYPr8na_RNwTBGu6pH6tCoTVg85wody4V4s1D3iP4UD1SiT7cN6PKrQ_reZ9pRA6YDOrKyIxAFgWR68.webp?r=01d",
  },

  {
    title: "MH",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABeD6yn9qIU7x8DKl54UzMYnbK_f1oaTY4XIH0zYOQK0ZIDnsHGgTkO8BWJQs6CzKhq8GL9-K3NSbbpmNpwkmflSzsqjgY9d7lAWC_xF9Yeou9C4r3Be9N08vZX780I1JhBbF.jpg?r=8a4",
  },

  {
    title: "Friends",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABX9u9j2MTtshAq_iNL3EjxXxd8WvI1iJTV4-gfxZ3ynGYG1k7C5ya2PRnxuy_75PF7SbuBWvBOToSN_e_LNqVOiRIu94X8U1T_4.webp?r=75b",
  },

  {
    title: "Lupin",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABTpNscUEr1mfLyoYnKH-6j1QrApCRJB3G4j9ntHBVv_w3MjGfriGGwtJqmZ-ftDJbLNccbwXSXgXJQJs_jdTutUdYUV07MbfCStlyAtaWAYVxhLncNCBVuu5XJqvtwd1VEbI.jpg?r=725",
  },

  {
    title: "B99",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABQRWWOkyyWI0ZOUiQW5WqDqgqpS-vkUsUinX7rp6cjofIsolMBJy41CzXjcm07ylrAXVPyMhc_kkRCS1jEnrDQZKsuwn-Ep0i2h17o9hXl_Mof6Pbb-Tt56A02xc8k6xLT7X.jpg?r=d72",
  },
  {
    title: "SC",
    imageSrc:
      "https://occ-0-3417-395.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABUpECeunmqvXkOQ7Js4d4DWrQjDOV-wWDFfPdQ6boaVR2wf0hogimQFJm_A2vcUGOrRIDTgBYs6mhJDo70G-UyRhGWB15vTNJfqvqlB9g9y8mAG564YEeEPcjFOW95bYXpJR.jpg?r=f49",
  },
];

function App() {
  return (
    <div className="App">
      <main>
        <div
          className="pinning-header"
          style={{
            position: "sticky",
            top: 0,
            height: "auto", // replace "auto" with the desired height value
            minHeight: 70,
            zIndex: 1,
          }}
        >
          <div
            className="pinning-header-container"
            style={{ background: "transparent" }}
          >
            <div id="clcsBanner" style={{ overflow: "auto" }}></div>
            <div
              className="main-header has-billboard menu-navigation"
              role="navigation"
            >
              <a
                className="logo icon-logoUpdate active"
                aria-label="Netflix"
              ></a>
              <ul className="tabbed-primary-navigation">
                <li className="navigation-menu">
                  <a
                    className="menu-trigger"
                    role="button"
                    aria-haspopup="true"
                    tabIndex={0}
                  >
                    Browse
                  </a>
                </li>
                <li className="navigation-tab">
                  <a className="current active" historystate="[object Object]">
                    Home
                  </a>
                </li>
                <li className="navigation-tab">
                  <a historystate="[object Object]">Tv Shows</a>
                </li>
                <li className="navigation-tab">
                  <a historystate="[object Object]">Movies</a>
                </li>
                <li className="navigation-tab">
                  <a historystate="[object Object]">New & Popular</a>
                </li>
                <li className="navigation-tab">
                  <a historystate="[object Object]">My List</a>
                </li>
                <li className="navigation-tab">
                  <a historystate="[object Object]">Browse by Languages</a>
                </li>
              </ul>
              <div className="secondary-navigation">
                <div className="nav-element">
                  <div className="searchBox">
                    <button
                      className="searchTab"
                      tabIndex={0}
                      aria-label="Search"
                      data-uia="search-box-launcher"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="search-icon ltr-4z3qvp e1svuwfo1"
                        data-name="MagnifyingGlass"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="nav-element show-kids">
                  <a href="https://www.netflix.com/kids">Kids</a>
                </div>
                <div className="nav-element">
                  <span className="notifications">
                    <button
                      className="notifications-menu"
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-label="Notifications"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ltr-4z3qvp e1svuwfo1"
                        data-name="Bell"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span className="notification-pill">4</span>
                    </button>
                  </span>
                </div>
                <div className="nav-element">
                  <div className="account-menu-item">
                    <div className="account-dropdown-button">
                      <a
                        href=""
                        role={"button"}
                        tabIndex={0}
                        aria-popup="true"
                        aria-expanded="false"
                        aria-label="All - Account & Settings"
                      >
                        <span className="profile-link" role={"presentation"}>
                          <img
                            className="profile-icon"
                            src="profile_picture.png"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mainView" role="main">
          <div className="lolomo is-fullbleed">
            <h1 className="visually-hidden">Netflix Home</h1>
            <div className="volatile-billboard-animations-container">
              <div
                className="billboard-row"
                role="region"
                aria-label="Featured Content"
              >
                <div
                  className="billboard-presentation-tracking ptrack-content"
                  data-ui-tracking-context="%7B%22location%22:%22homeScreen%22,%22rank%22:0,%22request_id%22:%22ac237160-2569-44c0-a004-387fc3059336-8618482%22,%22row%22:0,%22track_id%22:254015180,%22video_id%22:81275355,%22image_key%22:%22BILLBOARD%7Cb17ce2b0-5b7f-11ee-aeaa-0abc3fc29dbf%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%22NES_C5AE410E48FC5A0C94753C6D7A4CF2_p_1706838493935%22,%22list_id%22:%22NES_C5AE410E48FC5A0C94753C6D7A4CF2-951BB306AEF2A8-82346EC623_p_1706838493935%22,%22appView%22:%22billboard%22%7D"
                  data-tracking-uuid="95973e7c-c705-4277-84ee-c51d5f2c4159"
                >
                  <div
                    className="billboard-presentation-tracking ptrack-content"
                    data-ui-tracking-context="%7B%22list_id%22:%22NES_C5AE410E48FC5A0C94753C6D7A4CF2-951BB306AEF2A8-82346EC623_p_1706838493935%22,%22location%22:%22homeScreen%22,%22rank%22:0,%22request_id%22:%22ac237160-2569-44c0-a004-387fc3059336-8618482%22,%22row%22:0,%22track_id%22:254015180,%22unifiedEntityId%22:%22Video:81275355%22,%22video_id%22:81275355,%22image_key%22:%22BILLBOARD%7Cb17ce2b0-5b7f-11ee-aeaa-0abc3fc29dbf%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%22NES_C5AE410E48FC5A0C94753C6D7A4CF2_p_1706838493935%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                    data-tracking-uuid="d23e7594-e12f-4c9f-bc9f-e2998db71546"
                  >
                    <div className="billboard billboard-pane billboard-originals trailer-billboard">
                      <div className="hero-image-wrapper">
                        <img
                          className="hero static-image image-layer"
                          src="bg.jpg"
                        />
                        <div className="embedded-components button-layer">
                          <span className="maturity-rating ">
                            <span className="maturity-number">+7</span>
                          </span>
                        </div>
                      </div>
                      <div className="fill-container">
                        <div className="info meta-layer">
                          <div className="logo-and-text meta-layer">
                            <div className="titleWrapper">
                              <div className="billboard-title"></div>
                            </div>
                            <div className="info-wrapper">
                              <div className="info-wrapper-fade">
                                <div className="supplemental-message ltr-1leu95c">
                                  Kimi no Na Wa
                                </div>
                                <div className="episode-title-container"></div>
                                <div className="synopsis-fade-container">
                                  <div className="synopsis">
                                    <div className="ptrack-content">
                                      Two teenagers share a profound, magical
                                      connection upon discovering they are
                                      swapping bodies. Things manage to become
                                      even more complicated when the boy and
                                      girl decide to meet in person.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="billboard-links button-layer forward-leaning">
                              <a
                                href="/watch/81477984?trackId=254015180&tctx=0%2C0%2Cac237160-2569-44c0-a004-387fc3059336-8618482%2CNES_C5AE410E48FC5A0C94753C6D7A4CF2-951BB306AEF2A8-82346EC623_p_1706838493935%2CNES_C5AE410E48FC5A0C94753C6D7A4CF2_p_1706838493935%2C%2C%2C%2C%2CVideo%3A81275355%2C"
                                className="playLink isToolkit"
                                uiplaycontexttag="billboardPlayButton"
                                data-uia="play-button"
                                role="link"
                                aria-label="Play"
                              >
                                <button
                                  className="color-primary hasLabel hasIcon ltr-podnco"
                                  tabindex="-1"
                                  type="button"
                                >
                                  <div className="ltr-1st24vv">
                                    <div
                                      className="medium ltr-iyulz3"
                                      role="presentation"
                                    >
                                      <svg
                                        className="ltr-4z3qvp e1svuwfo1"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-name="Play"
                                        aria-hidden="true"
                                      >
                                        <path
                                          d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 12L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
                                          fill="currentColor"
                                        ></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="ltr-1npqywr"></div>
                                  <div className="ltr-1vh9doa">Play</div>
                                </button>
                              </a>
                              <button className="color-secondary hasLabel hasIcon ltr-18ezbm2">
                                <div className="ltr-1st24vv">
                                  <div
                                    className="medium ltr-iyulz3"
                                    role="presentation"
                                  >
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="ltr-4z3qvp e1svuwfo1"
                                      data-name="CircleI"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                                <div
                                  className="ltr-1npqywr"
                                  style={{ width: "1rem" }}
                                ></div>
                                <span className="ltr-1vh9doa">More Info</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContinueWatching tvShows={constTvShows} />
          <Kdrama tvShows={constKdrama} />
          <WTvShows tvShows={constWTvShows} />
          <Thriller tvShows={constThriller} />
        </div>

        <div></div>
      </main>
    </div>
  );
}

export default App;
