<!--
**  RelivePast Content
**  Dynamically added popular news, movies, music, games & 2 at-a-glance pics news sections
-->

<script>
  import { getContent } from "../../backend/content.js";

  let content = getContent();

  function navigate(link) {
    if (link === "weather") {
      window.open("https://www.accuweather.com/", "_blank");
    } else {
      window.open(link, "_blank");
    }
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<div class="rp-top-content">
  <div class="news-section">
    <h2 class="news-title">POPULAR NEWS</h2>

    <div on:click={() => navigate(content.news["1"][1])} class="news-part">
      <p class="news-count">1</p>
      <p class="news-part-title">
        {content.news["1"][0]}
      </p>
    </div>
    <div on:click={() => navigate(content.news["2"][1])} class="news-part">
      <p class="news-count">2</p>
      <p class="news-part-title">
        {content.news["2"][0]}
      </p>
    </div>
    <div on:click={() => navigate(content.news["3"][1])} class="news-part">
      <p class="news-count">3</p>
      <p class="news-part-title">
        {content.news["3"][0]}
      </p>
    </div>
  </div>
  <div class="news-section">
    <h2 class="news-title">POPULAR MOVIES</h2>
    <div on:click={() => navigate(content.movies["1"][1])} class="news-part">
      <p class="news-count">1</p>
      <p class="news-part-title">
        {content.movies["1"][0]}
      </p>
    </div>
    <div on:click={() => navigate(content.movies["2"][1])} class="news-part">
      <p class="news-count">2</p>
      <p class="news-part-title">
        {content.movies["2"][0]}
      </p>
    </div>
    <div on:click={() => navigate(content.movies["3"][1])} class="news-part">
      <p class="news-count">3</p>
      <p class="news-part-title">
        {content.movies["3"][0]}
      </p>
    </div>
  </div>
  <div on:click={() => navigate(content.pics["1"][2])} class="news-pic-section">
    <img
      draggable="false"
      class="news-pic"
      alt="news-pic"
      src={content.pics["1"][1]}
    />
    <p class="news-pic-info">{content.pics["1"][0]}</p>
  </div>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="rp-bottom-content">
  <div class="news-section">
    <h2 class="news-title">POPULAR MUSIC</h2>
    <div on:click={() => navigate(content.music["1"][1])} class="news-part">
      <p class="news-count">1</p>
      <p class="news-part-title">
        {content.music["1"][0]}
      </p>
    </div>
    <div on:click={() => navigate(content.music["2"][1])} class="news-part">
      <p class="news-count">2</p>
      <p class="news-part-title">
        {content.music["2"][0]}
      </p>
    </div>
    <div on:click={() => navigate(content.music["3"][1])} class="news-part">
      <p class="news-count">3</p>
      <p class="news-part-title">
        {content.music["3"][0]}
      </p>
    </div>
  </div>
  <div class="news-section">
    <h2 class="news-title">POPULAR GAMES</h2>
    <div on:click={() => navigate(content.games["1"][1])} class="news-part">
      <p class="news-count">1</p>
      <p class="news-part-title">
        {content.games["1"][0]}
      </p>
    </div>
    <div on:click={() => navigate(content.games["2"][1])} class="news-part">
      <p class="news-count">2</p>
      <p class="news-part-title">
        {content.games["2"][0]}
      </p>
    </div>
    <div on:click={() => navigate(content.games["3"][1])} class="news-part">
      <p class="news-count">3</p>
      <p class="news-part-title">
        {content.games["3"][0]}
      </p>
    </div>
  </div>

  <div on:click={() => navigate("weather")} class="news-pic-section">
    <img
      draggable="false"
      class="news-pic"
      alt="news-pic"
      src={content.pics["2"][1]}
    />
    <p class="news-pic-info">{content.pics["2"][0]}</p>
  </div>
</div>

<style>
  .rp-bottom-content,
  .rp-top-content {
    display: flex;
    flex-wrap: wrap;
    font-family: var(--rp-font);
    color: var(--accent);
    margin-left: 25px;
    margin-bottom: 20px;
    user-select: none;

    & .news-section {
      flex-grow: 10;

      & h2 {
        font-size: 26px;
        font-weight: 600;
      }

      & .news-part {
        display: flex;
        gap: 15px;
        margin-bottom: -80px;
        width: 700px;
        margin-top: 0;
        transition:
          color 250ms ease,
          transform 250ms ease,
          margin 250ms ease;

        &:hover {
          color: red;
          cursor: pointer;
        }

        &:active {
          transform: scale(0.99);
        }

        & .news-count {
          font-size: 85px;
          margin-top: -5px;
        }

        & .news-part-title {
          font-size: 18px;
          font-weight: 300;
          max-width: 32%;
        }

        &:first-of-type {
          & .news-count {
            font-family: var(--rp-dotted);
            margin-right: 8px;
          }
        }

        &:nth-of-type(2) {
          & .news-count {
            font-weight: 200;
          }
        }

        &:nth-of-type(3) {
          & .news-count {
            font-weight: 100;
          }
        }
      }
    }

    & .news-pic-section {
      margin-top: 25px;
      flex-grow: 1;
      flex-basis: 200;
      margin-right: 25px;
      max-width: 400px;
      transition:
        color 250ms ease,
        transform 250ms ease;

      &:hover {
        color: red;
        cursor: pointer;

        & img {
          border: 1px solid red;
        }
      }

      &:active {
        transform: scale(0.99);
      }

      & img {
        width: 400px;
        height: 300px;
        border: 1px solid var(--accent);
        margin-bottom: 0;
        object-fit: fill;
      }

      & p {
        margin-top: 10px;
        font-size: 15px;
        font-weight: 300;
      }
    }
  }

  .rp-bottom-content {
    padding-bottom: 55px;
  }

  @media screen and (max-width: 510px) {
    .news-part {
      margin-bottom: -50px !important;
    }
  }
</style>
