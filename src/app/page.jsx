import Image from "next/image";
import WorkIcon from '@mui/icons-material/Work';

export default function Page() {
  return (
    <>
      <script>

      function getCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length);
    }
  }
  return null;
}
document.addEventListener('DOMContentLoaded', function (event) {
  window.top.postMessage({
    action: 'wfx_iframe_loaded'
  }, '*');
  console.log('Iframe Window : wfx_iframe_loaded');
});
// Listen for messages sent to the window
window.addEventListener('message', function (event) {
  var data = event.data;
  // Function to set a new cookie with a name, value, and expiration period in
  days
  function setCookie(name, value, days) {
    var expiresDate = new Date(Date.now() + (days * 24 * 60 * 60 * 1000));
    var expiresString = expiresDate.toUTCString();
    var cookieString = `${name}=${value}; expires=${expiresString};
SameSite=None; Secure`;
    document.cookie = cookieString;
    console.log(`Iframe Window : Cookie Added -> ${cookieString}`);
  }
  // Function to remove a cookie by setting its expiration date to a date in the
  past
  function removeCookie(name) {
    var expiresString = "Thu, 01 Jan 1970 00:00:00 UTC";
    var cookieString = `${name}=; expires=${expiresString}; SameSite=None;
Secure`;
    document.cookie = cookieString;
    console.log(`Iframe Window : Cookie Removed`);
  }
  // Check the action specified in the received data
  if (data.action === 'setWfxCookie') {
    setCookie(data.name, data.value, 7);
  }
  else if (data.action === 'removeWfxCookie') {
    removeCookie(data.name);
  }
  else if (data.action === 'check_flow_status') {
    // Check the status of a specific cookie ("wfx_playState")
    var myCookieValue = getCookie("wfx_playState");
    if (myCookieValue) {
      // If the cookie exists, post a message with the cookie value to the top
      window
      window.top.postMessage({
        action: 'flow_live',
        meta: myCookieValue
      }, '*');
      console.log(`Iframe Window : Flow Active -> Cookie fetched ->
${myCookieValue}`);
    }
    else {
      console.log(`Iframe Window : Flow Inactive -> Cookie not found ->
${myCookieValue}`);
    }
  }
});

      </script>
      <div className="main-card dark:bg-zinc-900">
        <div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">About</h1>
      <div className="h-1 bg-blue-500 flex-grow w-3/4 mb-5 dark:bg-sky-400 "></div>
          <p className="text-slate-900 mt-2 mb-5 dark:text-white">
            As a graduating student passionate about technology, I am eager to
            leverage my skills and enthusiasm to collaborate with
            forward-thinking teams. I am seeking opportunities to contribute
            value and drive innovation in a dynamic and growth-oriented
            environment. With a deep love for technology and a commitment to
            continuous learning, I am excited to embark on a rewarding career
            journey that aligns with my interests and goals.
          </p>
        </div>

        <div className="experience w-full">
            <div className="flex flex-row">
                <WorkIcon
                  className="text-3xl"
                  style={{ fontSize: "32px"}}
                />
                <h3 className="mx-3 text-2xl font-black text-slate-900 dark:text-white">
                  Experience
                </h3>
              </div>

              <div className="card flex flex-col mt-3 rounded-lg bg-white px-4 py-4"> 
                <span className="mx-5 text-xl font-black text-slate-900">
                Whatfix
                </span>
                <span className="mx-5 text-l font-black text-slate-900">
                [Sep 2024 - present]
                </span>
                <span className="mx-5 text-l text-slate-900">
                During my internship at Whatfix, a leading SaaS company specializing in Digital Adoption Platforms, I delved into understanding how extensions work, explored API structures, learned about script injections, and delved into analytics. This experience provided me with a comprehensive understanding of the inner workings of a SaaS company, including its technology stack and operational processes.
                </span>
              </div>

              <div className="card flex flex-col mt-3 rounded-lg bg-white px-4 py-4"> 
                <span className="mx-5 text-xl font-black text-slate-900">
                Farmicon
                </span>
                <span className="mx-5 text-l font-black text-slate-900">
                [Sep 2022 - Nov 2022]
                </span>
                <span className="mx-5 text-l text-slate-900">
                Developed a dynamic website fetching real-time commodity prices from local mandis
across India, integrating weather forecasts and info about various agricultural schemes
It enhanced my web development skills via collaborating with farmers to create a
user-friendly platform empowering their agricultural endeavors.
                </span>
              </div>
            </div>
      </div>
    </>
  );
}

/*export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-zinc-50 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-zinc-50 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-zinc-50 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-zinc-50 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}*/
