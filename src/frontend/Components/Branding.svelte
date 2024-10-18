<!--
**  RelivePast Branding
**  Contains logo, copyright and today's date
-->

<script>
  import { rpDate } from "../../backend/date.js";
  let todayItem = rpDate();
</script>

<div class="rp-branding">
  <div class="rp-branding-row-one">
    <p class="rp-text-one">Relive<b>Past</b></p>
    <p class="rp-today-day">{todayItem}</p>
  </div>
  <div class="rp-branding-row-two">
    <p class="rp-text-copyright">© 2024 florin's designs.</p>
  </div>
</div>

<style>
  .rp-branding {
    display: flex;
    user-select: none;
    font-family: var(--rp-font);
    color: var(--accent);
    margin-top: -20px;
    margin-left: 25px;

    & .rp-branding-row-one {
      & .rp-text-one {
        font-size: 45px;
        font-weight: 300;
        margin-bottom: 0;

        & b {
          font-weight: 800;
        }
      }

      & .rp-today-day {
        margin-top: 0;
        font-size: 14px;
        font-weight: 500;
      }
    }

    & .rp-branding-row-two {
      margin-left: auto;
      margin-top: 45px;
      margin-right: 25px;
      font-size: 15px;
    }
  }
</style>
