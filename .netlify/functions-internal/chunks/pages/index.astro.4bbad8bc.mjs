import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent } from '../astro.10efa794.mjs';
import 'html-escaper';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro$7 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <meta name="description" content="Idol is an elegant landing page template for micro SaaS products built with AstroJS & Skeleton CSS">
		<title>${title}</title>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
	${renderHead($$result)}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "/Users/patriciobolanos/Astro-idol/src/layouts/Layout.astro");

const Logo = "/_astro/raak.5c0ec536.svg";

const $$Astro$6 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="nav astro-3EF6KSR2">
    <div class="container row astro-3EF6KSR2">
     <div class="nav-logo one-third column astro-3EF6KSR2">
         <a href="#" class="logo-link astro-3EF6KSR2">
             <img${addAttribute(Logo, "src")} alt="Brand logo" class="astro-3EF6KSR2">
         </a>
     </div>
     <nav class="one-third column astro-3EF6KSR2">
         <ul class="center flex astro-3EF6KSR2">
             <li class="astro-3EF6KSR2"><a href="#Características" class="astro-3EF6KSR2">Características</a></li>
             <li class="astro-3EF6KSR2"><a href="#pricing" class="astro-3EF6KSR2">Pricing</a></li>
             <li class="astro-3EF6KSR2"><a href="#customers" class="astro-3EF6KSR2">Customers</a></li>
         </ul>
     </nav>
     <div class="nav-cta one-third column astro-3EF6KSR2">
       
         
     </div>
    </div>
 </header>`;
}, "/Users/patriciobolanos/Astro-idol/src/components/Header.astro");

const Bomb = "/_astro/bomb.d3cf2249.svg";

const Mailbox = "/_astro/mailbox.1bc8786f.svg";

const Folder = "/_astro/folder.15781478.svg";

const $$Astro$5 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead($$result)}<section class="product-hero astro-BBE6DXRZ">
    <div class="container astro-BBE6DXRZ">
        <div class="d-table astro-BBE6DXRZ">
            <div class="d-table-cell center astro-BBE6DXRZ">
                <div class="hero-copy astro-BBE6DXRZ">
                    <h1 class="h1-title astro-BBE6DXRZ">RobbSoils</h1>
                    <p class="astro-BBE6DXRZ"> biocopolímero sellador de grietas internas  protege tus superficies de la humedad, hongo y rayos UV . Impermeabilizante, con 0% de porosidad.  </p>
                    <div class="product-cta astro-BBE6DXRZ">
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-media astro-BBE6DXRZ">
            <img${addAttribute(Bomb, "src")} alt="Dynamite" class="astro-BBE6DXRZ">
            <img${addAttribute(Mailbox, "src")} alt="Mailbox" class="astro-BBE6DXRZ">
            <img${addAttribute(Folder, "src")} alt="Folder" class="astro-BBE6DXRZ">
            
            
        </div>
    </div>
 </section>`;
}, "/Users/patriciobolanos/Astro-idol/src/components/Hero.astro");

const Bolt = "/_astro/bolt.cc124497.svg";

const Money = "/_astro/money.7d7d51c8.svg";

const Wallet = "/_astro/wallet.23a1ba41.svg";

const Secure = "/_astro/lock.eb262dc3.svg";

const $$Astro$4 = createAstro();
const $$Brief = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Brief;
  return renderTemplate`${maybeRenderHead($$result)}<section class="product-brief astro-HRGAL3UM" id="Características">
    <div class="container astro-HRGAL3UM">

        <!-- Feature Two -->
        <div class="row product-brief-items astro-HRGAL3UM">
          <div class="brief-tab column center-full astro-HRGAL3UM">
              <h3 class="h2-title highlighted astro-HRGAL3UM">Características.</h3>
              <p class="m-paragraph m-margin highlighted astro-HRGAL3UM">Los selladores de biopolímeros crean una barrera protectora contra hongos, corrosión por ácidos y daño por salitre, extendiendo la vida útil de las estructuras. Resisten la degradación y protegen contra humedad, radiación UV y cambios de temperatura. Hechos de recursos renovables, son sostenibles, fáciles de aplicar, y reducen tiempo y costos de mano de obra. Además, aportan un acabado limpio y estético, mejorando la apariencia y la protección.</p>

              <div class="brief-items astro-HRGAL3UM">
                  <div class="row m-margin astro-HRGAL3UM">
                      <div class="one-half column feature-grid highlighted astro-HRGAL3UM">
                          <img${addAttribute(Bolt, "src")} alt="Fast connect" class="astro-HRGAL3UM">
                          <p class="s-paragraph  astro-HRGAL3UM">Proteccion contra rayos UV.</p>
                      </div>
                      <div class="one-half column feature-grid highlighted astro-HRGAL3UM">
                          <img${addAttribute(Money, "src")} alt="Money transfer" class="astro-HRGAL3UM">
                          <p class="s-paragraph  astro-HRGAL3UM">Previene la proliferación de hongos</p>
                      </div>
                  </div>
                  <div class="row astro-HRGAL3UM">
                      <div class="one-half column feature-grid highlighted astro-HRGAL3UM">
                          <img${addAttribute(Wallet, "src")} alt="Digital wallet" class="astro-HRGAL3UM">
                          <p class="s-paragraph  astro-HRGAL3UM">Resistente al agua y a la humedad.</p>
                      </div>
                      <div class="one-half column feature-grid highlighted astro-HRGAL3UM">
                          <img${addAttribute(Secure, "src")} alt="Secure connection" class="astro-HRGAL3UM">
                          <p class="s-paragraph  astro-HRGAL3UM">Elaborados con recursos naturales y renovables.</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
</section>`;
}, "/Users/patriciobolanos/Astro-idol/src/components/Brief.astro");

const $$Astro$3 = createAstro();
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Pricing;
  return renderTemplate`${maybeRenderHead($$result)}<section class="pricing-table astro-HKOC4SEA" id="pricing">
    <div class="container astro-HKOC4SEA">
        <div class="center text-container astro-HKOC4SEA">
            <h3 class="h1-title astro-HKOC4SEA">Choose the right plan</h3>
            <p class="astro-HKOC4SEA">We have designed our pricing to help you find the best solutions for you and your incredible business</p>
        </div>

        <div class="row astro-HKOC4SEA">
            <div class="one-third column price-item astro-HKOC4SEA">
                <div class="price-header m-margin astro-HKOC4SEA">
                    <h5 class="l-subtitle astro-HKOC4SEA">Starter</h5>
                    <h3 class="h2-title astro-HKOC4SEA">$9.99<span class="s-paragraph astro-HKOC4SEA"> / month</span></h3>
                    <a href="#" class="button u-full-width astro-HKOC4SEA">start trial</a>
                </div>

                <div class="price-list astro-HKOC4SEA">
                    <p class="astro-HKOC4SEA">Unlimited Feedback boards</p>
                    <p class="astro-HKOC4SEA">Unlimited Prioritization Table</p>
                    <p class="astro-HKOC4SEA">Single Sign-On (SSO)</p>
                    <p class="astro-HKOC4SEA">Brand Customization</p>
                    <p class="astro-HKOC4SEA">Unlimited Tracked Users</p>
                    <p class="astro-HKOC4SEA">Custom Domain</p>
                    <p class="astro-HKOC4SEA">Unlimited Prioritization Table</p>
                </div>
            </div>
            <div class="one-third column price-item astro-HKOC4SEA">
                <div class="price-header m-margin astro-HKOC4SEA">
                    <h5 class="l-subtitle astro-HKOC4SEA">Starter</h5>
                    <h3 class="h2-title astro-HKOC4SEA">$9.99<span class="s-paragraph astro-HKOC4SEA"> / month</span></h3>
                    <a href="#" class="button button-primary u-full-width astro-HKOC4SEA">start trial</a>
                </div>

                <div class="price-list astro-HKOC4SEA">
                    <p class="astro-HKOC4SEA">Unlimited Feedback boards</p>
                    <p class="astro-HKOC4SEA">Unlimited Prioritization Table</p>
                    <p class="astro-HKOC4SEA">Single Sign-On (SSO)</p>
                    <p class="astro-HKOC4SEA">Brand Customization</p>
                    <p class="astro-HKOC4SEA">Unlimited Tracked Users</p>
                    <p class="astro-HKOC4SEA">Custom Domain</p>
                    <p class="astro-HKOC4SEA">Unlimited Prioritization Table</p>
                </div>
            </div>
            <div class="one-third column price-item astro-HKOC4SEA">
                <div class="price-header m-margin astro-HKOC4SEA">
                    <h5 class="l-subtitle astro-HKOC4SEA">Starter</h5>
                    <h3 class="h2-title astro-HKOC4SEA">$9.99<span class="s-paragraph astro-HKOC4SEA"> / month</span></h3>
                    <a href="#" class="button u-full-width astro-HKOC4SEA">start trial</a>
                </div>

                <div class="price-list astro-HKOC4SEA">
                    <p class="astro-HKOC4SEA">Unlimited Feedback boards</p>
                    <p class="astro-HKOC4SEA">Unlimited Prioritization Table</p>
                    <p class="astro-HKOC4SEA">Single Sign-On (SSO)</p>
                    <p class="astro-HKOC4SEA">Brand Customization</p>
                    <p class="astro-HKOC4SEA">Unlimited Tracked Users</p>
                    <p class="astro-HKOC4SEA">Custom Domain</p>
                    <p class="astro-HKOC4SEA">Unlimited Prioritization Table</p>
                </div>
            </div>
        </div>
    </div>
 </section>`;
}, "/Users/patriciobolanos/Astro-idol/src/components/Pricing.astro");

const Stars = "/_astro/stars.64163700.svg";

const $$Astro$2 = createAstro();
const $$Customers = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Customers;
  return renderTemplate`${maybeRenderHead($$result)}<section class="product-reviews astro-KV2UYI5W" id="customers">
    <div class="container astro-KV2UYI5W">
        <div class="center astro-KV2UYI5W">
            <div class="text-container astro-KV2UYI5W">
                <h3 class="h1-title astro-KV2UYI5W">Trusted by the companies you trust</h3>
                <p class="astro-KV2UYI5W">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, possimus deleniti illo corporie.</p>
            </div>

            <div class="customer-reviews m-margin astro-KV2UYI5W">
                <div class="flex center astro-KV2UYI5W">
                    <img${addAttribute(Stars, "src")} class="astro-KV2UYI5W">
                    <span class="s-paragraph astro-KV2UYI5W">Base on 87,00+ reviews</span>
                </div>
                <small class="astro-KV2UYI5W"><strong class="astro-KV2UYI5W">1 millon</strong> customers and counting</small>
            </div>
            <div class="center astro-KV2UYI5W">
                <a href="#" class="button button-primary astro-KV2UYI5W">Start Trial — It's Free</a>
                <small class="block astro-KV2UYI5W">No credit card required.</small>
            </div>
        </div>

        <div class="customer-avatars astro-KV2UYI5W">
           <div class="left-side-avatars astro-KV2UYI5W">
              <div class="circular-image astro-KV2UYI5W">
                <img src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=800" class="astro-KV2UYI5W">
               </div>
               <div class="circular-image astro-KV2UYI5W">
                 <img src="https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=800" class="astro-KV2UYI5W">
               </div>
               <div class="circular-image astro-KV2UYI5W">
                 <img src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=800" class="astro-KV2UYI5W">
               </div>
               <div class="circular-image astro-KV2UYI5W">
                   <img src="https://images.pexels.com/photos/3058391/pexels-photo-3058391.jpeg?auto=compress&cs=tinysrgb&w=800" class="astro-KV2UYI5W">
               </div>
           </div>
           <div class="right-side-avatars astro-KV2UYI5W">
            <div class="circular-image astro-KV2UYI5W">
              <img src="https://images.pexels.com/photos/12599059/pexels-photo-12599059.jpeg?auto=compress&cs=tinysrgb&w=800" class="astro-KV2UYI5W">
             </div>
             <div class="circular-image astro-KV2UYI5W">
               <img src="https://images.pexels.com/photos/3394657/pexels-photo-3394657.jpeg?auto=compress&cs=tinysrgb&w=800" class="astro-KV2UYI5W">
             </div>
             <div class="circular-image astro-KV2UYI5W">
               <img src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=800" class="astro-KV2UYI5W">
             </div>
             <div class="circular-image astro-KV2UYI5W">
                 <img src="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&cs=tinysrgb&w=800" class="astro-KV2UYI5W">
             </div>
          </div>
        </div>
    </div>
 </section>`;
}, "/Users/patriciobolanos/Astro-idol/src/components/Customers.astro");

const LinkedIn = "/_astro/linkedin.852e92ab.svg";

const Twitter = "/_astro/twitter.8f11182a.svg";

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="astro-SZ7XMLTE">
    <div class="container row astro-SZ7XMLTE">
        <div class="footer-link flex js one-half column astro-SZ7XMLTE">
            <a href="#" class="astro-SZ7XMLTE">About</a> <a href="#" class="astro-SZ7XMLTE">Help Center</a>
            <a href="#" class="astro-SZ7XMLTE">Privacy</a>
            <a href="#" class="astro-SZ7XMLTE">Terms</a> 
        </div>
        <div class="footer-note one-half column astro-SZ7XMLTE">
            <div class="u-pull-right astro-SZ7XMLTE">
                <div class="flex astro-SZ7XMLTE">
                    <p class="astro-SZ7XMLTE">© Idol 2023</p>
                    <a href="#" class="astro-SZ7XMLTE"><img${addAttribute(Twitter, "src")} alt="Twitter icon" class="astro-SZ7XMLTE"></a>
                    <a href="#" class="astro-SZ7XMLTE"><img${addAttribute(LinkedIn, "src")} alt="Linkedin icon" class="astro-SZ7XMLTE"></a>
                </div>
            </div>
        </div>
    </div>
</footer>`;
}, "/Users/patriciobolanos/Astro-idol/src/components/Footer.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Idol | Micro SaaS landing page" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Header", $$Header, {})}
	${renderComponent($$result2, "Hero", $$Hero, {})}
	${renderComponent($$result2, "Brief", $$Brief, {})}
	${renderComponent($$result2, "Pricing", $$Pricing, {})}
	${renderComponent($$result2, "Customers", $$Customers, {})}
	${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "/Users/patriciobolanos/Astro-idol/src/pages/index.astro");

const $$file = "/Users/patriciobolanos/Astro-idol/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };