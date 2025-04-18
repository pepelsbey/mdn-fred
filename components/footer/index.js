import { html } from "lit";

import "./index.css";

/**
 * @param {Fred.Context} context
 */
export function Footer(context) {
  return html`<div class="footer">
    <div class="footer__mdn">
      <div class="footer__intro">
        <a class="footer__logo" href="/">
          <svg width="48" height="17" viewBox="0 0 48 17">
            <title>MDN logo</title>
            <path
              d="M20.04 16.512H15.504V10.416C15.504 9.488 15.344 8.824 15.024 8.424C14.72 8.024 14.264 7.824 13.656 7.824C12.92 7.824 12.384 8.064 12.048 8.544C11.728 9.024 11.568 9.64 11.568 10.392V14.184H13.008V16.512H8.472V10.416C8.472 9.488 8.312 8.824 7.992 8.424C7.688 8.024 7.232 7.824 6.624 7.824C5.872 7.824 5.336 8.064 5.016 8.544C4.696 9.024 4.536 9.64 4.536 10.392V14.184H6.6V16.512H0V14.184H1.44V8.04H0.024V5.688H4.536V7.32C5.224 6.088 6.32 5.472 7.824 5.472C8.608 5.472 9.328 5.664 9.984 6.048C10.64 6.432 11.096 7.016 11.352 7.8C11.992 6.248 13.168 5.472 14.88 5.472C15.856 5.472 16.72 5.776 17.472 6.384C18.224 6.992 18.6 7.936 18.6 9.216V14.184H20.04V16.512Z"
            />
            <path
              d="M33.6714 16.512H29.1354V14.496C28.8314 15.12 28.3834 15.656 27.7914 16.104C27.1994 16.536 26.4154 16.752 25.4394 16.752C24.0154 16.752 22.8954 16.264 22.0794 15.288C21.2634 14.312 20.8554 12.984 20.8554 11.304C20.8554 9.688 21.2554 8.312 22.0554 7.176C22.8554 6.04 24.0634 5.472 25.6794 5.472C26.5594 5.472 27.2794 5.648 27.8394 6C28.3994 6.352 28.8314 6.8 29.1354 7.344V2.352H26.9754V0H32.2314V14.184H33.6714V16.512ZM29.1354 11.04V10.776C29.1354 9.88 28.8954 9.184 28.4154 8.688C27.9514 8.176 27.3674 7.92 26.6634 7.92C25.9754 7.92 25.3674 8.176 24.8394 8.688C24.3274 9.2 24.0714 10.008 24.0714 11.112C24.0714 12.152 24.3114 12.944 24.7914 13.488C25.2714 14.032 25.8394 14.304 26.4954 14.304C27.3114 14.304 27.9514 13.96 28.4154 13.272C28.8954 12.584 29.1354 11.84 29.1354 11.04Z"
            />
            <path
              d="M47.9589 16.512H41.9829V14.184H43.4229V10.416C43.4229 9.488 43.2629 8.824 42.9429 8.424C42.6389 8.024 42.1829 7.824 41.5749 7.824C40.8389 7.824 40.2709 8.056 39.8709 8.52C39.4709 8.968 39.2629 9.56 39.2469 10.296V14.184H40.6869V16.512H34.7109V14.184H36.1509V8.04H34.5909V5.688H39.2469V7.344C39.9669 6.096 41.1269 5.472 42.7269 5.472C43.7509 5.472 44.6389 5.776 45.3909 6.384C46.1429 6.992 46.5189 7.936 46.5189 9.216V14.184H47.9589V16.512Z"
            />
          </svg>
        </a>
        <p>
          ${context.l10n(
            "footer_tagline",
          )`Your blueprint for a better internet.`}
        </p>
      </div>
      <ul class="footer__socials">
        <!-- TODO Add Bluesky. -->
        <li>
          <a
            href="https://mastodon.social/@mdn"
            aria-label=${context.l10n`MDN on Mastodon`}
          >
            <svg class="icon" width="24" height="24" viewBox="-32 0 512 512">
              <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M433 179.1c0-97.2-63.7-125.7-63.7-125.7-62.5-28.7-228.6-28.4-290.5 0 0 0-63.7 28.5-63.7 125.7 0 115.7-6.6 259.4 105.6 289.1 40.5 10.7 75.3 13 103.3 11.4 50.8-2.8 79.3-18.1 79.3-18.1l-1.7-36.9s-36.3 11.4-77.1 10.1c-40.4-1.4-83-4.4-89.6-54a102.5 102.5 0 0 1 -.9-13.9c85.6 20.9 158.7 9.1 178.8 6.7 56.1-6.7 105-41.3 111.2-72.9 9.8-49.8 9-121.5 9-121.5zm-75.1 125.2h-46.6v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.3V197c0-58.5-64-56.6-64-6.9v114.2H90.2c0-122.1-5.2-147.9 18.4-175 25.9-28.9 79.8-30.8 103.8 6.1l11.6 19.5 11.6-19.5c24.1-37.1 78.1-34.8 103.8-6.1 23.7 27.3 18.4 53 18.4 175z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/mozdevnet"
            aria-label=${context.l10n`MDN on X`}
          >
            <svg class="icon" width="24" height="24" viewBox="0 0 512 512">
              <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mdn/"
            aria-label=${context.l10n`MDN on GitHub`}
          >
            <svg class="icon" width="24" height="24" viewBox="-8 0 512 512">
              <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="/en-US/blog/rss.xml"
            aria-label=${context.l10n`MDN blog RSS feed`}
          >
            <svg class="icon" width="24" height="24" viewBox="-32 0 512 512">
              <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
      <dl class="footer__links">
        <dt>${context.l10n`MDN`}</dt>
        <dd>
          <ul>
            <li><a href="/en-US/about">${context.l10n`About`}</a></li>
            <li><a href="/en-US/blog/">${context.l10n`Blog`}</a></li>
            <li>
              <a href="https://www.mozilla.org/en-US/careers/listings/"
                >${context.l10n`Careers`}</a
              >
            </li>
            <li>
              <a href="/en-US/advertising"
                >${context.l10n`Advertise with us`}</a
              >
            </li>
          </ul>
        </dd>
      </dl>
      <dl class="footer__links">
        <dt>${context.l10n`Support`}</dt>
        <dd>
          <ul>
            <li>
              <a href="https://support.mozilla.org/products/mdn-plus"
                >${context.l10n`Product help`}</a
              >
            </li>
            <li>
              <a href="/en-US/docs/MDN/Community/Issues"
                >${context.l10n`Report an issue`}</a
              >
            </li>
          </ul>
        </dd>
      </dl>
      <dl class="footer__links">
        <dt>${context.l10n`Our communities`}</dt>
        <dd>
          <ul>
            <li>
              <a href="/en-US/community">${context.l10n`MDN Community`}</a>
            </li>
            <li>
              <a href="https://discourse.mozilla.org/c/mdn/236"
                >${context.l10n`MDN Forum`}</a
              >
            </li>
            <li><a href="/discord">${context.l10n`MDN Chat`}</a></li>
          </ul>
        </dd>
      </dl>
      <dl class="footer__links">
        <dt>${context.l10n`Developers`}</dt>
        <dd>
          <ul>
            <li>
              <a href="/en-US/docs/Web">${context.l10n`Web Technologies`}</a>
            </li>
            <li>
              <a href="/en-US/docs/Learn"
                >${context.l10n`Learn Web Development`}</a
              >
            </li>
            <li><a href="/en-US/plus">${context.l10n`MDN Plus`}</a></li>
            <li>
              <a href="https://hacks.mozilla.org/"
                >${context.l10n`Hacks Blog`}</a
              >
            </li>
          </ul>
        </dd>
      </dl>
    </div>
    <div class="footer__mozilla">
      <a class="footer__logo" href="https://www.mozilla.org/">
        <svg width="112" height="32" viewBox="0 0 112 32">
          <title>Mozilla logo</title>
          <path
            d="M41.753 14.218c-2.048 0-3.324 1.522-3.324 4.157 0 2.423 1.119 4.286 3.29 4.286 2.082 0 3.447-1.678 3.447-4.347 0-2.826-1.522-4.096-3.413-4.096Zm54.89 7.044c0 .901.437 1.618 1.645 1.618 1.427 0 2.949-1.024 3.044-3.352-.649-.095-1.365-.185-2.02-.185-1.426-.005-2.668.397-2.668 1.92Z"
          />
          <path
            d="M0 0v32h111.908V0H0Zm32.56 25.426h-5.87v-7.884c0-2.423-.806-3.352-2.39-3.352-1.924 0-2.702 1.365-2.702 3.324v4.868h1.864v3.044h-5.864v-7.884c0-2.423-.806-3.352-2.39-3.352-1.924 0-2.702 1.365-2.702 3.324v4.868h2.669v3.044H6.642v-3.044h1.863v-7.918H6.642V11.42h5.864v2.11c.839-1.489 2.3-2.39 4.252-2.39 2.02 0 3.878.963 4.566 3.01.778-1.862 2.361-3.01 4.566-3.01 2.512 0 4.812 1.522 4.812 4.84v6.402h1.863v3.044h-.005Zm9.036.307c-4.314 0-7.296-2.635-7.296-7.106 0-4.096 2.484-7.481 7.514-7.481s7.481 3.38 7.481 7.29c0 4.472-3.228 7.297-7.699 7.297Zm22.578-.307H51.942l-.403-2.11 7.7-8.846h-4.376l-.621 2.17-2.888-.313.498-4.907h12.294l.313 2.11-7.767 8.852h4.533l.654-2.172 3.167.308-.872 4.908Zm7.99 0h-4.191v-5.03h4.19v5.03Zm0-8.976h-4.191v-5.03h4.19v5.03Zm2.618 8.976 6.054-21.358h3.945l-6.054 21.358h-3.945Zm8.136 0 6.048-21.358h3.945l-6.054 21.358h-3.939Zm21.486.307c-1.863 0-2.887-1.085-3.072-2.792-.805 1.427-2.232 2.792-4.498 2.792-2.02 0-4.314-1.085-4.314-4.006 0-3.447 3.323-4.253 6.518-4.253.778 0 1.584.034 2.3.124v-.465c0-1.427-.034-3.133-2.3-3.133-.84 0-1.488.061-2.143.402l-.453 1.578-3.195-.34.549-3.224c2.45-.996 3.692-1.27 5.992-1.27 3.01 0 5.556 1.55 5.556 4.75v6.083c0 .805.314 1.085.963 1.085.184 0 .375-.034.587-.095l.034 2.11a5.432 5.432 0 0 1-2.524.654Z"
          />
        </svg>
      </a>
      <ul>
        <li>
          <a href="https://www.mozilla.org/privacy/websites/"
            >${context.l10n`Website Privacy Notice`}</a
          >
        </li>
        <li>
          <a href="https://www.mozilla.org/privacy/websites/cookie-settings/"
            >${context.l10n`Cookies`}</a
          >
        </li>
        <li>
          <a href="https://www.mozilla.org/about/legal/terms/mozilla"
            >${context.l10n`Legal`}</a
          >
        </li>
        <li>
          <a
            href="https://www.mozilla.org/about/governance/policies/participation/"
            >${context.l10n`Community Participation Guidelines`}</a
          >
        </li>
      </ul>
      <p>
        ${context.l10n.raw({
          id: "footer_mofo",
          elements: {
            moco: { tag: "a", href: "https://www.mozilla.org/" },
            mofo: { tag: "a", href: "https://foundation.mozilla.org/" },
          },
        })}<br />
        ${context.l10n.raw({
          id: "footer_copyright",
          elements: {
            cc: {
              tag: "a",
              href: "/docs/MDN/Writing_guidelines/Attrib_copyright_license",
            },
          },
        })}
      </p>
    </div>
  </div> `;
}
