import Header from "@/app/header";


export default function page() {
  return (
    <span className="bg-white flex flex-col">
      <Header />
      <div className="text-emerald-300 text-3xl font-semibold self-center whitespace-nowrap mt-24 max-md:mt-10">
        Our Services{" "}
      </div>
      <div className="text-neutral-950 text-center text-6xl font-semibold max-w-[695px] self-center mt-6 max-md:max-w-full max-md:text-4xl">
        High-impact services <br />
        for your business
      </div>
      <div className="self-center w-full max-w-[1400px] mt-20 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <span className="bg-neutral-950 flex grow flex-col w-full p-11 rounded-3xl items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cddc7167cba2e2d63b45513944faeddf2c2662a87ed1fb67bc3939b7d00974ff?apiKey=cc92e77fa59648be96795d005307c4b6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cddc7167cba2e2d63b45513944faeddf2c2662a87ed1fb67bc3939b7d00974ff?apiKey=cc92e77fa59648be96795d005307c4b6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cddc7167cba2e2d63b45513944faeddf2c2662a87ed1fb67bc3939b7d00974ff?apiKey=cc92e77fa59648be96795d005307c4b6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cddc7167cba2e2d63b45513944faeddf2c2662a87ed1fb67bc3939b7d00974ff?apiKey=cc92e77fa59648be96795d005307c4b6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cddc7167cba2e2d63b45513944faeddf2c2662a87ed1fb67bc3939b7d00974ff?apiKey=cc92e77fa59648be96795d005307c4b6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cddc7167cba2e2d63b45513944faeddf2c2662a87ed1fb67bc3939b7d00974ff?apiKey=cc92e77fa59648be96795d005307c4b6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cddc7167cba2e2d63b45513944faeddf2c2662a87ed1fb67bc3939b7d00974ff?apiKey=cc92e77fa59648be96795d005307c4b6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cddc7167cba2e2d63b45513944faeddf2c2662a87ed1fb67bc3939b7d00974ff?apiKey=cc92e77fa59648be96795d005307c4b6&"
                className="aspect-square object-contain object-center w-20 fill-zinc-50 overflow-hidden max-w-full"
              />
              <div className="text-zinc-100 text-2xl font-medium self-stretch mt-16 max-md:mt-10">
                Content Marketing{" "}
              </div>
              <div className="text-zinc-100 text-lg tracking-wide self-stretch mt-4">
                Our team creates engaging and shareable content that resonates
                with your audience, drives organic traffic
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="bg-zinc-100 flex grow flex-col w-full px-12 py-11 rounded-3xl items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c71ca88204fb8eaf1a86ca613c15c93ca5232f920c4b45ffb1c8d0d6e748e585?apiKey=cc92e77fa59648be96795d005307c4b6&"
                className="aspect-square object-contain object-center w-20 overflow-hidden max-w-full"
              />
              <div className="text-neutral-950 text-2xl font-medium self-stretch mt-16 max-md:mt-10">
                Graphic Design{" "}
              </div>
              <div className="text-neutral-950 text-opacity-90 text-lg tracking-wide self-stretch mt-4">
                Unlock the power of visual storytelling with our expert graphic
                design services tailored to elevate your brand and captivate.
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="bg-zinc-100 flex grow flex-col w-full p-11 rounded-3xl items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e00be509c37e0a99e125a591861fde51195f12493578fcb08eb62baaf5c9e2b8?apiKey=cc92e77fa59648be96795d005307c4b6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e00be509c37e0a99e125a591861fde51195f12493578fcb08eb62baaf5c9e2b8?apiKey=cc92e77fa59648be96795d005307c4b6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e00be509c37e0a99e125a591861fde51195f12493578fcb08eb62baaf5c9e2b8?apiKey=cc92e77fa59648be96795d005307c4b6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e00be509c37e0a99e125a591861fde51195f12493578fcb08eb62baaf5c9e2b8?apiKey=cc92e77fa59648be96795d005307c4b6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e00be509c37e0a99e125a591861fde51195f12493578fcb08eb62baaf5c9e2b8?apiKey=cc92e77fa59648be96795d005307c4b6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e00be509c37e0a99e125a591861fde51195f12493578fcb08eb62baaf5c9e2b8?apiKey=cc92e77fa59648be96795d005307c4b6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e00be509c37e0a99e125a591861fde51195f12493578fcb08eb62baaf5c9e2b8?apiKey=cc92e77fa59648be96795d005307c4b6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e00be509c37e0a99e125a591861fde51195f12493578fcb08eb62baaf5c9e2b8?apiKey=cc92e77fa59648be96795d005307c4b6&"
                className="aspect-square object-contain object-center w-20 fill-neutral-950 overflow-hidden max-w-full"
              />
              <div className="text-neutral-950 text-2xl font-medium self-stretch mt-16 max-md:mt-10">
                Digital Marketing{" "}
              </div>
              <div className="text-neutral-950 text-opacity-90 text-lg tracking-wide self-stretch mt-4">
                Elevate your brand's online presence with our data-driven
                digital marketing strategies. From SEO and content marketing
              </div>
            </span>
          </div>
        </div>
      </div>{" "}
      <div className="self-center w-full max-w-[1400px] mt-20 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <span className="bg-zinc-100 flex flex-col w-full p-11 rounded-3xl items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2ac4fc9635858610f49a6f6f0d9cc3ae19c5f6c52e8001662778ed92bcff9965?apiKey=cc92e77fa59648be96795d005307c4b6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac4fc9635858610f49a6f6f0d9cc3ae19c5f6c52e8001662778ed92bcff9965?apiKey=cc92e77fa59648be96795d005307c4b6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac4fc9635858610f49a6f6f0d9cc3ae19c5f6c52e8001662778ed92bcff9965?apiKey=cc92e77fa59648be96795d005307c4b6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac4fc9635858610f49a6f6f0d9cc3ae19c5f6c52e8001662778ed92bcff9965?apiKey=cc92e77fa59648be96795d005307c4b6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac4fc9635858610f49a6f6f0d9cc3ae19c5f6c52e8001662778ed92bcff9965?apiKey=cc92e77fa59648be96795d005307c4b6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac4fc9635858610f49a6f6f0d9cc3ae19c5f6c52e8001662778ed92bcff9965?apiKey=cc92e77fa59648be96795d005307c4b6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac4fc9635858610f49a6f6f0d9cc3ae19c5f6c52e8001662778ed92bcff9965?apiKey=cc92e77fa59648be96795d005307c4b6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac4fc9635858610f49a6f6f0d9cc3ae19c5f6c52e8001662778ed92bcff9965?apiKey=cc92e77fa59648be96795d005307c4b6&"
                className="aspect-square object-contain object-center w-20 fill-neutral-950 overflow-hidden max-w-full"
              />{" "}
              <div className="text-neutral-950 text-2xl font-medium self-stretch mt-16 max-md:mt-10">
                Web Design
              </div>{" "}
              <div className="text-neutral-950 text-opacity-90 text-lg tracking-wide self-stretch mt-4">
                We specialize in creating visually stunning, user-friendly
                websites that align with your brand identity and deliver an
                exceptional.
              </div>
            </span>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="bg-zinc-100 flex grow flex-col w-full px-12 py-11 rounded-3xl items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/751e8273d45c1a006bcfbb266b5c84e2a2a9812a9b3e205993774cf8ba6d98ef?apiKey=cc92e77fa59648be96795d005307c4b6&"
                className="aspect-square object-contain object-center w-20 justify-center items-center overflow-hidden max-w-full"
              />{" "}
              <div className="text-neutral-950 text-2xl font-medium self-stretch mt-16 max-md:mt-10">
                IT Consulting
              </div>{" "}
              <div className="text-neutral-950 text-opacity-90 text-lg tracking-wide self-stretch mt-4">
                IT consulting, or information technology consulting, refers to
                the practice of providing advisory and implementation services
              </div>
            </span>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="bg-zinc-100 flex flex-col w-full p-11 rounded-3xl items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/41d01bc43ccc560e5ef54a6e801281141c7b41e0ecfe7e35dab4c0365d28397f?apiKey=cc92e77fa59648be96795d005307c4b6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/41d01bc43ccc560e5ef54a6e801281141c7b41e0ecfe7e35dab4c0365d28397f?apiKey=cc92e77fa59648be96795d005307c4b6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/41d01bc43ccc560e5ef54a6e801281141c7b41e0ecfe7e35dab4c0365d28397f?apiKey=cc92e77fa59648be96795d005307c4b6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/41d01bc43ccc560e5ef54a6e801281141c7b41e0ecfe7e35dab4c0365d28397f?apiKey=cc92e77fa59648be96795d005307c4b6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/41d01bc43ccc560e5ef54a6e801281141c7b41e0ecfe7e35dab4c0365d28397f?apiKey=cc92e77fa59648be96795d005307c4b6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/41d01bc43ccc560e5ef54a6e801281141c7b41e0ecfe7e35dab4c0365d28397f?apiKey=cc92e77fa59648be96795d005307c4b6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/41d01bc43ccc560e5ef54a6e801281141c7b41e0ecfe7e35dab4c0365d28397f?apiKey=cc92e77fa59648be96795d005307c4b6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/41d01bc43ccc560e5ef54a6e801281141c7b41e0ecfe7e35dab4c0365d28397f?apiKey=cc92e77fa59648be96795d005307c4b6&"
                className="aspect-square object-contain object-center w-20 fill-neutral-950 overflow-hidden max-w-full"
              />{" "}
              <div className="text-neutral-950 text-2xl font-medium self-stretch mt-16 max-md:mt-10">
                Brand Identity{" "}
              </div>{" "}
              <div className="text-neutral-950 text-opacity-90 text-lg tracking-wide self-stretch mt-4">
                It involves creating a unique and recognizable identity that
                sets the brand apart from competitors and resonates with the
                target audience.
              </div>
            </span>
          </div>
        </div>
      </div>{" "}
      <div className="bg-neutral-950 self-stretch flex w-full flex-col justify-center items-center mt-28 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="w-full max-w-[1400px] my-12 max-md:max-w-full max-md:my-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d3eec685485889de12b51444c0c9119d7a280a47f890388d5a096843e7bec79e?apiKey=cc92e77fa59648be96795d005307c4b6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3eec685485889de12b51444c0c9119d7a280a47f890388d5a096843e7bec79e?apiKey=cc92e77fa59648be96795d005307c4b6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3eec685485889de12b51444c0c9119d7a280a47f890388d5a096843e7bec79e?apiKey=cc92e77fa59648be96795d005307c4b6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3eec685485889de12b51444c0c9119d7a280a47f890388d5a096843e7bec79e?apiKey=cc92e77fa59648be96795d005307c4b6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3eec685485889de12b51444c0c9119d7a280a47f890388d5a096843e7bec79e?apiKey=cc92e77fa59648be96795d005307c4b6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3eec685485889de12b51444c0c9119d7a280a47f890388d5a096843e7bec79e?apiKey=cc92e77fa59648be96795d005307c4b6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3eec685485889de12b51444c0c9119d7a280a47f890388d5a096843e7bec79e?apiKey=cc92e77fa59648be96795d005307c4b6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3eec685485889de12b51444c0c9119d7a280a47f890388d5a096843e7bec79e?apiKey=cc92e77fa59648be96795d005307c4b6&"
                className="aspect-[1.06] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>{" "}
            <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
              <span className="flex flex-col my-auto items-start max-md:max-w-full max-md:mt-10">
                <div className="text-emerald-300 text-center text-3xl font-semibold self-stretch max-md:max-w-full">
                  About us{" "}
                </div>{" "}
                <div className="text-zinc-50 text-6xl font-semibold self-stretch mt-6 max-md:max-w-full max-md:text-4xl">
                  The core mission <br />
                  behind all our
                  <br />
                  work
                </div>{" "}
                <div className="text-zinc-100 text-lg tracking-wide self-stretch w-full mr-5 mt-6 max-md:max-w-full max-md:mr-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit metus
                  ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt
                  id.
                </div>{" "}
                <div className="items-stretch flex w-[356px] max-w-full justify-between gap-5 mt-6">
                  <span className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-emerald-300 text-5xl font-semibold max-md:text-4xl">
                      330 +
                    </div>{" "}
                    <div className="text-zinc-100 text-base tracking-wide whitespace-nowrap mt-2.5">
                      Companies helped
                    </div>
                  </span>{" "}
                  <span className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-emerald-300 text-5xl font-semibold max-md:text-4xl">
                      230 +
                    </div>{" "}
                    <div className="text-zinc-100 text-base tracking-wide whitespace-nowrap mt-2.5">
                      Revenue generated
                    </div>
                  </span>
                </div>{" "}
                <span className="justify-center items-stretch bg-zinc-50 flex gap-2.5 mt-8 p-2.5 rounded-3xl">
                  <div className="items-center flex aspect-square flex-col justify-center">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9d5615d7c0a8878cdbde0aca5f96c4290db977e8e5ee62ccd5d969e11311599c?apiKey=cc92e77fa59648be96795d005307c4b6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d5615d7c0a8878cdbde0aca5f96c4290db977e8e5ee62ccd5d969e11311599c?apiKey=cc92e77fa59648be96795d005307c4b6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d5615d7c0a8878cdbde0aca5f96c4290db977e8e5ee62ccd5d969e11311599c?apiKey=cc92e77fa59648be96795d005307c4b6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d5615d7c0a8878cdbde0aca5f96c4290db977e8e5ee62ccd5d969e11311599c?apiKey=cc92e77fa59648be96795d005307c4b6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d5615d7c0a8878cdbde0aca5f96c4290db977e8e5ee62ccd5d969e11311599c?apiKey=cc92e77fa59648be96795d005307c4b6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d5615d7c0a8878cdbde0aca5f96c4290db977e8e5ee62ccd5d969e11311599c?apiKey=cc92e77fa59648be96795d005307c4b6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d5615d7c0a8878cdbde0aca5f96c4290db977e8e5ee62ccd5d969e11311599c?apiKey=cc92e77fa59648be96795d005307c4b6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d5615d7c0a8878cdbde0aca5f96c4290db977e8e5ee62ccd5d969e11311599c?apiKey=cc92e77fa59648be96795d005307c4b6&"
                      className="aspect-square object-contain object-center w-7 overflow-hidden rounded-[50%]"
                    />
                  </div>{" "}
                  <div className="text-neutral-950 text-opacity-90 text-xl grow whitespace-nowrap self-start">
                    Start your Free Trial
                  </div>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>{" "}
      <span className="self-center flex w-full max-w-[1660px] flex-col items-center mt-28 px-5 max-md:max-w-full max-md:mt-10">
        <span className="items-center flex w-[676px] max-w-full flex-col pb-2.5 px-6 max-md:px-5">
          <div className="text-emerald-300 text-center text-3xl font-semibold whitespace-nowrap">
            Process
          </div>{" "}
          <div className="text-neutral-950 text-center text-6xl font-semibold self-stretch mt-6 max-md:max-w-full max-md:text-4xl">
            Process that moves <br />
            things forward
          </div>
        </span>{" "}
        <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[68%] max-md:w-full max-md:ml-0">
              <div className="grow px-px max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/421c46a3429fb34db3094a1e827e882dbc7e185415a1256ae7e079d7d617429c?apiKey=cc92e77fa59648be96795d005307c4b6&"
                      className="aspect-[1.33] object-contain object-center w-full overflow-hidden max-md:mt-6"
                    />
                  </div>{" "}
                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex-col text-neutral-950 text-opacity-90 text-base tracking-wide relative overflow-hidden aspect-[1.3650793650793651] mt-1 pl-10 pr-16 pt-28 pb-8 items-start max-md:mt-7 max-md:pt-10 max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e94fcc9a4e4829907b1a7db36488d6bf147934602ff3e12ab466623f832289f?apiKey=cc92e77fa59648be96795d005307c4b6&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />{" "}
                      Research is a critical component of the design process,
                      helping designers understand the problem
                    </div>
                  </div>{" "}
                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc1f663c8dd94d452bab847d1fcd1ec1dcc4f7024c5baacb9723f53e4b5c718e?apiKey=cc92e77fa59648be96795d005307c4b6&"
                      className="aspect-[1.3] object-contain object-center w-full overflow-hidden grow mt-1 max-md:mt-7"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
              <span className="flex flex-col mt-1 items-end max-md:max-w-full max-md:mt-10">
                <div className="flex-col text-neutral-950 text-opacity-90 text-center text-3xl font-semibold relative whitespace-nowrap overflow-hidden min-h-[83px] w-[484px] max-w-full justify-center pl-28 pr-16 py-7 items-start max-md:pl-8 max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5372339dd932de6cc1de11243e8986e8e95097c698e0117bc6cd5cda7b2971e9?apiKey=cc92e77fa59648be96795d005307c4b6&"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />{" "}
                  Testing
                </div>{" "}
                <div className="text-neutral-950 text-opacity-90 text-base tracking-wide self-stretch mt-8 max-md:max-w-full">
                  Testing is a crucial phase in the design process to ensure
                  that the product or system meets the specified requirements
                </div>
              </span>
            </div>
          </div>
        </div>{" "}
        <div className="text-neutral-950 text-6xl font-semibold mt-28 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          Recent Showcase
        </div>{" "}
        <div className="self-stretch mt-24 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <span className="flex flex-col max-md:max-w-full max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9d2912068f57d219acd6a611efe78a29d3d23f3c3bba024a9e4f33489577ee4e?apiKey=cc92e77fa59648be96795d005307c4b6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d2912068f57d219acd6a611efe78a29d3d23f3c3bba024a9e4f33489577ee4e?apiKey=cc92e77fa59648be96795d005307c4b6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d2912068f57d219acd6a611efe78a29d3d23f3c3bba024a9e4f33489577ee4e?apiKey=cc92e77fa59648be96795d005307c4b6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d2912068f57d219acd6a611efe78a29d3d23f3c3bba024a9e4f33489577ee4e?apiKey=cc92e77fa59648be96795d005307c4b6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d2912068f57d219acd6a611efe78a29d3d23f3c3bba024a9e4f33489577ee4e?apiKey=cc92e77fa59648be96795d005307c4b6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d2912068f57d219acd6a611efe78a29d3d23f3c3bba024a9e4f33489577ee4e?apiKey=cc92e77fa59648be96795d005307c4b6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d2912068f57d219acd6a611efe78a29d3d23f3c3bba024a9e4f33489577ee4e?apiKey=cc92e77fa59648be96795d005307c4b6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d2912068f57d219acd6a611efe78a29d3d23f3c3bba024a9e4f33489577ee4e?apiKey=cc92e77fa59648be96795d005307c4b6&"
                  className="aspect-[1.76] object-contain object-center w-full overflow-hidden self-stretch max-md:max-w-full"
                />{" "}
                <div className="text-neutral-950 text-center text-3xl font-semibold mt-4 self-start">
                  Web UI design
                </div>{" "}
                <div className="text-neutral-950 text-opacity-90 text-center text-lg tracking-wide mt-2.5 self-start">
                  Creative UI design
                </div>{" "}
                <div className="flex-col overflow-hidden self-stretch relative flex min-h-[450px] w-full mt-24 pr-20 pb-12 items-start max-md:max-w-full max-md:mt-10 max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ff5b1a9c09ce51b38d7da39ebca9ef1ac7f6298081fccabe5246c7af79fed8e0?apiKey=cc92e77fa59648be96795d005307c4b6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff5b1a9c09ce51b38d7da39ebca9ef1ac7f6298081fccabe5246c7af79fed8e0?apiKey=cc92e77fa59648be96795d005307c4b6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff5b1a9c09ce51b38d7da39ebca9ef1ac7f6298081fccabe5246c7af79fed8e0?apiKey=cc92e77fa59648be96795d005307c4b6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff5b1a9c09ce51b38d7da39ebca9ef1ac7f6298081fccabe5246c7af79fed8e0?apiKey=cc92e77fa59648be96795d005307c4b6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff5b1a9c09ce51b38d7da39ebca9ef1ac7f6298081fccabe5246c7af79fed8e0?apiKey=cc92e77fa59648be96795d005307c4b6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff5b1a9c09ce51b38d7da39ebca9ef1ac7f6298081fccabe5246c7af79fed8e0?apiKey=cc92e77fa59648be96795d005307c4b6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff5b1a9c09ce51b38d7da39ebca9ef1ac7f6298081fccabe5246c7af79fed8e0?apiKey=cc92e77fa59648be96795d005307c4b6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff5b1a9c09ce51b38d7da39ebca9ef1ac7f6298081fccabe5246c7af79fed8e0?apiKey=cc92e77fa59648be96795d005307c4b6&"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />{" "}
                  <div className="relative text-neutral-950 text-center text-3xl font-semibold">
                    Graphic design{" "}
                  </div>{" "}
                  <div className="relative text-neutral-950 text-opacity-90 text-center text-xl mt-4 mb-64 max-md:mb-10">
                    Graphic design{" "}
                  </div>
                </div>{" "}
                <div className="text-neutral-950 text-center text-3xl font-semibold mt-6 self-start">
                  UI Design
                </div>{" "}
                <div className="text-neutral-950 text-opacity-90 text-center text-lg tracking-wide mt-2 self-start">
                  Creative Rebranding for logo
                </div>
              </span>
            </div>{" "}
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <span className="flex grow flex-col mt-20 max-md:max-w-full max-md:mt-10">
                <span className="justify-center items-stretch bg-neutral-950 flex gap-2.5 p-2.5 rounded-3xl self-end">
                  <div className="items-center flex aspect-[1.6428571428571428] flex-col justify-center pr-5">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fbbb23805a4b5f198473c91b9b2d7beb6c7f751ed786b52a2e38e0145e260e69?apiKey=cc92e77fa59648be96795d005307c4b6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbbb23805a4b5f198473c91b9b2d7beb6c7f751ed786b52a2e38e0145e260e69?apiKey=cc92e77fa59648be96795d005307c4b6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbbb23805a4b5f198473c91b9b2d7beb6c7f751ed786b52a2e38e0145e260e69?apiKey=cc92e77fa59648be96795d005307c4b6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbbb23805a4b5f198473c91b9b2d7beb6c7f751ed786b52a2e38e0145e260e69?apiKey=cc92e77fa59648be96795d005307c4b6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbbb23805a4b5f198473c91b9b2d7beb6c7f751ed786b52a2e38e0145e260e69?apiKey=cc92e77fa59648be96795d005307c4b6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbbb23805a4b5f198473c91b9b2d7beb6c7f751ed786b52a2e38e0145e260e69?apiKey=cc92e77fa59648be96795d005307c4b6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbbb23805a4b5f198473c91b9b2d7beb6c7f751ed786b52a2e38e0145e260e69?apiKey=cc92e77fa59648be96795d005307c4b6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbbb23805a4b5f198473c91b9b2d7beb6c7f751ed786b52a2e38e0145e260e69?apiKey=cc92e77fa59648be96795d005307c4b6&"
                      className="aspect-square object-contain object-center w-7 overflow-hidden rounded-[50%]"
                    />
                  </div>{" "}
                  <div className="text-zinc-50 text-xl grow shrink basis-auto self-start">
                    Start your Free Trial
                  </div>
                </span>{" "}
                <div className="flex-col overflow-hidden self-stretch relative flex min-h-[450px] w-full justify-center items-center mt-12 px-16 py-12 max-md:mt-10 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/428776167eb681ef3d546071d8f3d0c2760b54417d5dba29647f051e780c2288?apiKey=cc92e77fa59648be96795d005307c4b6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/428776167eb681ef3d546071d8f3d0c2760b54417d5dba29647f051e780c2288?apiKey=cc92e77fa59648be96795d005307c4b6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/428776167eb681ef3d546071d8f3d0c2760b54417d5dba29647f051e780c2288?apiKey=cc92e77fa59648be96795d005307c4b6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/428776167eb681ef3d546071d8f3d0c2760b54417d5dba29647f051e780c2288?apiKey=cc92e77fa59648be96795d005307c4b6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/428776167eb681ef3d546071d8f3d0c2760b54417d5dba29647f051e780c2288?apiKey=cc92e77fa59648be96795d005307c4b6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/428776167eb681ef3d546071d8f3d0c2760b54417d5dba29647f051e780c2288?apiKey=cc92e77fa59648be96795d005307c4b6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/428776167eb681ef3d546071d8f3d0c2760b54417d5dba29647f051e780c2288?apiKey=cc92e77fa59648be96795d005307c4b6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/428776167eb681ef3d546071d8f3d0c2760b54417d5dba29647f051e780c2288?apiKey=cc92e77fa59648be96795d005307c4b6&"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />{" "}
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cdf31d139053026d9e38dbd1acf4d1dffea655eedd64050bbacca476f69ebcfc?apiKey=cc92e77fa59648be96795d005307c4b6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdf31d139053026d9e38dbd1acf4d1dffea655eedd64050bbacca476f69ebcfc?apiKey=cc92e77fa59648be96795d005307c4b6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdf31d139053026d9e38dbd1acf4d1dffea655eedd64050bbacca476f69ebcfc?apiKey=cc92e77fa59648be96795d005307c4b6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdf31d139053026d9e38dbd1acf4d1dffea655eedd64050bbacca476f69ebcfc?apiKey=cc92e77fa59648be96795d005307c4b6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdf31d139053026d9e38dbd1acf4d1dffea655eedd64050bbacca476f69ebcfc?apiKey=cc92e77fa59648be96795d005307c4b6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdf31d139053026d9e38dbd1acf4d1dffea655eedd64050bbacca476f69ebcfc?apiKey=cc92e77fa59648be96795d005307c4b6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdf31d139053026d9e38dbd1acf4d1dffea655eedd64050bbacca476f69ebcfc?apiKey=cc92e77fa59648be96795d005307c4b6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdf31d139053026d9e38dbd1acf4d1dffea655eedd64050bbacca476f69ebcfc?apiKey=cc92e77fa59648be96795d005307c4b6&"
                    className="aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full mt-36 mb-28 rounded-[50%] max-md:my-10"
                  />
                </div>{" "}
                <div className="text-neutral-950 text-center text-3xl font-semibold mt-4 self-start max-md:max-w-full">
                  To design Digital Strategy
                </div>{" "}
                <div className="text-neutral-950 text-opacity-90 text-center text-lg tracking-wide mt-2 self-start max-md:max-w-full">
                  Social Media Marketing
                </div>{" "}
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1fdb5fbd13c247174ed1fcb0f52c06d6317501249e3354e55e1146f4c9e1aaac?apiKey=cc92e77fa59648be96795d005307c4b6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fdb5fbd13c247174ed1fcb0f52c06d6317501249e3354e55e1146f4c9e1aaac?apiKey=cc92e77fa59648be96795d005307c4b6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fdb5fbd13c247174ed1fcb0f52c06d6317501249e3354e55e1146f4c9e1aaac?apiKey=cc92e77fa59648be96795d005307c4b6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fdb5fbd13c247174ed1fcb0f52c06d6317501249e3354e55e1146f4c9e1aaac?apiKey=cc92e77fa59648be96795d005307c4b6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fdb5fbd13c247174ed1fcb0f52c06d6317501249e3354e55e1146f4c9e1aaac?apiKey=cc92e77fa59648be96795d005307c4b6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fdb5fbd13c247174ed1fcb0f52c06d6317501249e3354e55e1146f4c9e1aaac?apiKey=cc92e77fa59648be96795d005307c4b6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fdb5fbd13c247174ed1fcb0f52c06d6317501249e3354e55e1146f4c9e1aaac?apiKey=cc92e77fa59648be96795d005307c4b6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fdb5fbd13c247174ed1fcb0f52c06d6317501249e3354e55e1146f4c9e1aaac?apiKey=cc92e77fa59648be96795d005307c4b6&"
                  className="aspect-[1.76] object-contain object-center w-full overflow-hidden self-stretch mt-24 max-md:max-w-full max-md:mt-10"
                />{" "}
                <div className="text-neutral-950 text-center text-3xl font-semibold mt-4 self-start">
                  UI Design
                </div>{" "}
                <div className="text-neutral-950 text-opacity-90 text-center text-lg tracking-wide mt-2 self-start">
                  Creative Rebranding for logo
                </div>
              </span>
            </div>
          </div>
        </div>{" "}
        <span className="items-center bg-zinc-100 self-stretch flex flex-col mt-24 p-11 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a1f8bb5f0d977f9a5166ce7f0dd64465d842cf550283166f68fe961df8419a88?apiKey=cc92e77fa59648be96795d005307c4b6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1f8bb5f0d977f9a5166ce7f0dd64465d842cf550283166f68fe961df8419a88?apiKey=cc92e77fa59648be96795d005307c4b6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1f8bb5f0d977f9a5166ce7f0dd64465d842cf550283166f68fe961df8419a88?apiKey=cc92e77fa59648be96795d005307c4b6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1f8bb5f0d977f9a5166ce7f0dd64465d842cf550283166f68fe961df8419a88?apiKey=cc92e77fa59648be96795d005307c4b6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1f8bb5f0d977f9a5166ce7f0dd64465d842cf550283166f68fe961df8419a88?apiKey=cc92e77fa59648be96795d005307c4b6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1f8bb5f0d977f9a5166ce7f0dd64465d842cf550283166f68fe961df8419a88?apiKey=cc92e77fa59648be96795d005307c4b6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1f8bb5f0d977f9a5166ce7f0dd64465d842cf550283166f68fe961df8419a88?apiKey=cc92e77fa59648be96795d005307c4b6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1f8bb5f0d977f9a5166ce7f0dd64465d842cf550283166f68fe961df8419a88?apiKey=cc92e77fa59648be96795d005307c4b6&"
            className="aspect-square object-contain object-center w-[150px] overflow-hidden self-center max-w-full rounded-[50%]"
          />{" "}
          <div className="text-neutral-950 text-center text-2xl font-bold self-stretch mt-9 max-md:max-w-full">
            “Be genuine in your assessment, and provide constructive feedback to
            benefit both potential customers and the company providing the
            product or service.”
          </div>{" "}
          <div className="text-neutral-950 text-center text-xl font-semibold self-center mt-9 max-md:max-w-full">
            Jacqueline Miller
          </div>{" "}
          <div className="text-neutral-950 text-opacity-90 text-center text-base tracking-wide self-center mt-1.5 max-md:max-w-full">
            CEO of an eduport
          </div>{" "}
          <div className="justify-center items-stretch self-center flex w-[242px] max-w-full gap-3 mt-5 pr-20 max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/67af8adb7066040454d54d189f5428da6a7afa2e9a63b39b3d48f33564370f2b?apiKey=cc92e77fa59648be96795d005307c4b6&"
              className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce9bfce06504329c386ec74f9092c783bdbf7617df37f864a7a09a6a517277a8?apiKey=cc92e77fa59648be96795d005307c4b6&"
              className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
            />
          </div>
        </span>
      </span>{" "}
      <div className="bg-neutral-950 self-stretch flex w-full flex-col justify-center items-center mt-28 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-full max-w-[1408px] flex-col items-stretch mt-12 mb-2.5 max-md:max-w-full max-md:mt-10">
          <div className="max-md:max-w-full max-md:pr-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
                <span className="items-stretch flex flex-col max-md:mt-10">
                  <span className="flex items-stretch justify-between gap-3.5">
                    <div className="flex-col overflow-hidden relative flex aspect-square w-[52px] justify-center items-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/de9532b2818ba4720da54aa1169459a56d37fcf29c274a70e85d2a26f9ad4b69?apiKey=cc92e77fa59648be96795d005307c4b6&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/95ed720dbb0f82fa42a75c36a2ac1ff74fe8a516817223e4da0867128a2c2fa9?apiKey=cc92e77fa59648be96795d005307c4b6&"
                        className="aspect-square object-contain object-center w-full overflow-hidden"
                      />
                    </div>{" "}
                    <div className="text-white text-4xl font-semibold self-center grow shrink basis-auto my-auto">
                      Canvix
                    </div>
                  </span>{" "}
                  <div className="text-white text-lg tracking-wide mt-6">
                    We’re a team of strategic creator and digital innovator,
                    united focus in our pursuit of mastery and joyful.
                  </div>
                </span>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow items-stretch justify-between gap-5 max-md:mt-10">
                  <span className="items-stretch flex flex-col">
                    <div className="text-white text-xl font-semibold">
                      Pages{" "}
                    </div>{" "}
                    <div className="text-zinc-100 text-base tracking-wide mt-6">
                      Home
                    </div>{" "}
                    <div className="text-zinc-100 text-base tracking-wide mt-4">
                      Home 2
                    </div>{" "}
                    <div className="text-zinc-100 text-base tracking-wide mt-4">
                      About
                    </div>{" "}
                    <div className="text-zinc-100 text-base tracking-wide whitespace-nowrap mt-4">
                      Conatct Us{" "}
                    </div>{" "}
                    <div className="text-zinc-100 text-base tracking-wide mt-4">
                      Portfolio
                    </div>{" "}
                    <div className="text-zinc-100 text-base tracking-wide whitespace-nowrap mt-4">
                      Portfolio Single
                    </div>
                  </span>{" "}
                  <span className="items-stretch flex flex-col">
                    <div className="text-white text-xl font-semibold">
                      Utility Pages{" "}
                    </div>{" "}
                    <div className="text-zinc-100 text-base tracking-wide mt-6">
                      Style Guide{" "}
                    </div>{" "}
                    <div className="text-zinc-100 text-base tracking-wide mt-4">
                      Instruction
                    </div>{" "}
                    <div className="text-zinc-100 text-base tracking-wide mt-4">
                      License
                    </div>{" "}
                    <div className="text-zinc-100 text-base tracking-wide mt-4">
                      Changelog
                    </div>{" "}
                    <div className="text-zinc-100 text-base tracking-wide mt-4">
                      Error 404{" "}
                    </div>{" "}
                    <div className="text-zinc-100 text-base tracking-wide whitespace-nowrap mt-4">
                      Password Protected{" "}
                    </div>
                  </span>
                </div>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[37%] ml-5 max-md:w-full max-md:ml-0">
                <span className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                  <div className="text-white text-xl font-semibold max-md:max-w-full">
                    Subscribe
                  </div>{" "}
                  <div className="justify-center items-stretch bg-white flex flex-col mt-5 rounded-[40px] max-md:max-w-full">
                    <span className="justify-between items-center bg-white flex gap-5 pl-6 pr-2.5 py-2.5 rounded-[40px] max-md:max-w-full max-md:flex-wrap max-md:pl-5">
                      <div className="text-neutral-950 text-opacity-90 text-lg tracking-wide my-auto">
                        Enter your email here
                      </div>{" "}
                      <div className="justify-center items-stretch bg-neutral-950 bg-opacity-90 self-stretch flex flex-col rounded-3xl">
                        <span className="text-zinc-50 text-lg tracking-wide whitespace-nowrap justify-center items-stretch bg-neutral-950 bg-opacity-90 px-4 py-3 rounded-3xl">
                          Subscribe
                        </span>
                      </div>
                    </span>
                  </div>
                </span>
              </div>
            </div>
          </div>{" "}
          <div className="bg-zinc-100 shrink-0 h-0.5 mt-24 max-md:max-w-full max-md:mt-10" />{" "}
          <div className="bg-zinc-100 z-[1] shrink-0 h-0.5 max-md:max-w-full" />{" "}
          <div className="items-start flex justify-between gap-5 mt-7 pr-2 max-md:max-w-full max-md:flex-wrap">
            <span className="items-stretch self-stretch flex grow basis-[0%] flex-col">
              <div className="text-zinc-100 text-xl font-semibold">
                Copyright by
              </div>{" "}
              <div className="text-zinc-100 text-base tracking-wide whitespace-nowrap mt-4">
                Designed by Iconstica.com
              </div>
            </span>{" "}
            <span className="items-stretch self-stretch flex basis-[0%] flex-col">
              <div className="text-zinc-100 text-xl font-semibold whitespace-nowrap">
                Contact Us
              </div>{" "}
              <div className="text-zinc-100 text-base tracking-wide whitespace-nowrap mt-4">
                +0 12 457 4578
              </div>
            </span>{" "}
            <span className="items-stretch self-stretch flex grow basis-[0%] flex-col">
              <div className="text-zinc-100 text-xl font-semibold">Address</div>{" "}
              <div className="text-zinc-100 text-base tracking-wide whitespace-nowrap mt-4">
                119 Tanglewood Lane Gulfport, MS 39503
              </div>
            </span>{" "}
            <div className="items-stretch self-center flex grow basis-[0%] flex-col justify-center my-auto">
              <div className="items-stretch flex justify-between gap-5">
                <div className="items-center flex aspect-square flex-col justify-center">
                  <div className="flex-col overflow-hidden relative flex aspect-square w-[50px] justify-center items-stretch rounded-[50%]">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7985a931b7ae718abb80c461b080617ac96dd82e79db98d2dc40840b7ac8bf78?apiKey=cc92e77fa59648be96795d005307c4b6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7985a931b7ae718abb80c461b080617ac96dd82e79db98d2dc40840b7ac8bf78?apiKey=cc92e77fa59648be96795d005307c4b6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7985a931b7ae718abb80c461b080617ac96dd82e79db98d2dc40840b7ac8bf78?apiKey=cc92e77fa59648be96795d005307c4b6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7985a931b7ae718abb80c461b080617ac96dd82e79db98d2dc40840b7ac8bf78?apiKey=cc92e77fa59648be96795d005307c4b6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7985a931b7ae718abb80c461b080617ac96dd82e79db98d2dc40840b7ac8bf78?apiKey=cc92e77fa59648be96795d005307c4b6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7985a931b7ae718abb80c461b080617ac96dd82e79db98d2dc40840b7ac8bf78?apiKey=cc92e77fa59648be96795d005307c4b6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7985a931b7ae718abb80c461b080617ac96dd82e79db98d2dc40840b7ac8bf78?apiKey=cc92e77fa59648be96795d005307c4b6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7985a931b7ae718abb80c461b080617ac96dd82e79db98d2dc40840b7ac8bf78?apiKey=cc92e77fa59648be96795d005307c4b6&"
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />{" "}
                    <div className="relative flex shrink-0 h-[50px] flex-col rounded-[50%]" />
                  </div>
                </div>{" "}
                <div className="items-center flex aspect-square flex-col justify-center">
                  <div className="flex-col overflow-hidden relative flex aspect-square w-[50px] justify-center items-stretch rounded-[50%]">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ce5514336ceab1e8b6c858a4b5f2b13e6c74e08d34a44c85b62c4dd14e5a0818?apiKey=cc92e77fa59648be96795d005307c4b6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce5514336ceab1e8b6c858a4b5f2b13e6c74e08d34a44c85b62c4dd14e5a0818?apiKey=cc92e77fa59648be96795d005307c4b6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce5514336ceab1e8b6c858a4b5f2b13e6c74e08d34a44c85b62c4dd14e5a0818?apiKey=cc92e77fa59648be96795d005307c4b6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce5514336ceab1e8b6c858a4b5f2b13e6c74e08d34a44c85b62c4dd14e5a0818?apiKey=cc92e77fa59648be96795d005307c4b6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce5514336ceab1e8b6c858a4b5f2b13e6c74e08d34a44c85b62c4dd14e5a0818?apiKey=cc92e77fa59648be96795d005307c4b6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce5514336ceab1e8b6c858a4b5f2b13e6c74e08d34a44c85b62c4dd14e5a0818?apiKey=cc92e77fa59648be96795d005307c4b6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce5514336ceab1e8b6c858a4b5f2b13e6c74e08d34a44c85b62c4dd14e5a0818?apiKey=cc92e77fa59648be96795d005307c4b6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce5514336ceab1e8b6c858a4b5f2b13e6c74e08d34a44c85b62c4dd14e5a0818?apiKey=cc92e77fa59648be96795d005307c4b6&"
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />{" "}
                    <div className="relative flex shrink-0 h-[50px] flex-col rounded-[50%]" />
                  </div>
                </div>{" "}
                <div className="items-center flex aspect-square flex-col justify-center">
                  <div className="flex-col overflow-hidden relative flex aspect-square w-[50px] justify-center items-stretch rounded-[50%]">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e04ae94765c9a6031359396d1e1f993c46406ee6b0f9b9f807f7bec7f8be9a58?apiKey=cc92e77fa59648be96795d005307c4b6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e04ae94765c9a6031359396d1e1f993c46406ee6b0f9b9f807f7bec7f8be9a58?apiKey=cc92e77fa59648be96795d005307c4b6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e04ae94765c9a6031359396d1e1f993c46406ee6b0f9b9f807f7bec7f8be9a58?apiKey=cc92e77fa59648be96795d005307c4b6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e04ae94765c9a6031359396d1e1f993c46406ee6b0f9b9f807f7bec7f8be9a58?apiKey=cc92e77fa59648be96795d005307c4b6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e04ae94765c9a6031359396d1e1f993c46406ee6b0f9b9f807f7bec7f8be9a58?apiKey=cc92e77fa59648be96795d005307c4b6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e04ae94765c9a6031359396d1e1f993c46406ee6b0f9b9f807f7bec7f8be9a58?apiKey=cc92e77fa59648be96795d005307c4b6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e04ae94765c9a6031359396d1e1f993c46406ee6b0f9b9f807f7bec7f8be9a58?apiKey=cc92e77fa59648be96795d005307c4b6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e04ae94765c9a6031359396d1e1f993c46406ee6b0f9b9f807f7bec7f8be9a58?apiKey=cc92e77fa59648be96795d005307c4b6&"
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />{" "}
                    <div className="relative flex shrink-0 h-[50px] flex-col rounded-[50%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

